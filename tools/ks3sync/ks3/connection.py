# coding:utf-8

#  This software code is made available without warranties of any
#  kind.  You may copy, display, modify and redistribute the software
#  code either by itself or as incorporated into your code; provided that
#  you do not remove any proprietary notices. Your use of this software
#  code is at your own risk.

import time
import urllib, urlparse
import xml.sax

from ks3 import auth
from ks3 import handler
from ks3 import utils
from ks3.bucket import Bucket
from ks3.bucketlogging import BucketLogging
from ks3.exception import S3ResponseError, S3CreateError
from ks3.http import make_request, CallingFormat
from ks3.provider import Provider
from ks3.resultset import ResultSet

def check_lowercase_bucketname(n):
    """
    Bucket names must not contain uppercase characters. We check for
    this by appending a lowercase character and testing with islower().
    Note this also covers cases like numeric bucket names with dashes.

    >>> check_lowercase_bucketname("Aaaa")
    Traceback (most recent call last):
    ...
    BotoClientError: S3Error: Bucket names cannot contain upper-case
    characters when using either the sub-domain or virtual hosting calling
    format.

    >>> check_lowercase_bucketname("1234-5678-9123")
    True
    >>> check_lowercase_bucketname("abcdefg1234")
    True
    """
    if not (n + 'a').islower():
        raise BotoClientError("Bucket names cannot contain upper-case " \
            "characters when using either the sub-domain or virtual " \
            "hosting calling format.")
    return True


class _CallingFormat(object):

    def get_bucket_server(self, server, bucket):
        return ''

    def build_url_base(self, connection, protocol, server, bucket, key=''):
        url_base = '%s://' % protocol
        url_base += self.build_host(server, bucket)
        url_base += connection.get_path(self.build_path_base(bucket, key))
        return url_base

    def build_host(self, server, bucket):
        if bucket == '':
            return server
        else:
            return self.get_bucket_server(server, bucket)

    def build_auth_path(self, bucket, key=''):
        key = utils.get_utf8_value(key)
        path = ''
        if bucket != '':
            path = '/' + bucket
        return path + '/%s' % urllib.quote(key)

    def build_path_base(self, bucket, key=''):
        key = utils.get_utf8_value(key)
        return '/%s' % urllib.quote(key)


class OrdinaryCallingFormat(_CallingFormat):

    def get_bucket_server(self, server, bucket):
        return server

    def build_path_base(self, bucket, key=''):
        key = boto.utils.get_utf8_value(key)
        path_base = '/'
        if bucket:
            path_base += "%s/" % bucket
        return path_base + urllib.quote(key)


class SubdomainCallingFormat(_CallingFormat):

    def get_bucket_server(self, server, bucket):
        return '%s.%s' % (bucket, server)


class Connection(object):

    QueryString = 'Signature=%s&Expires=%d&KSSAccessKeyId=%s'

    def __init__(self, access_key_id, access_key_secret, host="kss.ksyun.com",
            port=80, provider='kss', security_token=None, profile_name=None, path='/',
            is_secure=False, debug=0, calling_format=SubdomainCallingFormat):
        self.access_key_id = access_key_id
        self.access_key_secret = access_key_secret
        self.is_secure = is_secure
        self.host = host
        self.port = port
        self.debug = debug
        self.path = path
        self.calling_format = calling_format()
        if (is_secure):
            self.protocol = 'https'
        else:   
            self.protocol = 'http'

        if isinstance(provider, Provider):
            # Allow overriding Provider
            self.provider = provider
        else:
            self._provider_type = provider
            self.provider = Provider(self._provider_type,
                                     access_key_id,
                                     access_key_secret,
                                     security_token,
                                     profile_name)

        # Allow config file to override default host, port, and host header.
        if self.provider.host:
            self.host = self.provider.host
        if self.provider.port:
            self.port = self.provider.port
        if self.provider.host_header:
            self.host_header = self.provider.host_header

    def make_request(self, method, bucket="", key="", data="",
            headers=None, query_args=None, metadata=None):
        if not headers:
            headers = {}
        if not query_args:
            query_args = {}
        if not metadata:
            metadata = {}

        resp = make_request(self.host, self.port, self.access_key_id,
                            self.access_key_secret, method, bucket, key,
                            query_args, headers, data, metadata)
        
        return resp

    def get_all_buckets(self, headers=None):
        response = self.make_request('GET', headers=headers)
        body = response.read()
        if response.status > 300:
            raise S3ResponseError(response.status, response.reason, body)
        rs = ResultSet([('Bucket', Bucket)])
        h = handler.XmlHandler(rs, self)
        if not isinstance(body, bytes):
            body = body.encode('utf-8')
        xml.sax.parseString(body, h)
        return rs

    def get_bucket(self, bucket_name, headers=None):
        return Bucket(self, bucket_name)

    def create_bucket(self, bucket_name, headers=None,
                      location=None, policy=None):
        check_lowercase_bucketname(bucket_name)

        if policy:
            if headers:
                headers[self.provider.acl_header] = policy
            else:
                headers = {self.provider.acl_header: policy}
        if location == None:
            data = ''
        else:
            data = '<CreateBucketConfiguration><LocationConstraint>' + \
                    location + '</LocationConstraint></CreateBucketConfiguration>'
        response = self.make_request('PUT', bucket_name, headers=headers,
                data=data)
        body = response.read()
        if response.status == 409:
            raise S3CreateError(response.status, response.reason, body)
        if response.status == 200:
            return Bucket(self, bucket_name)
        else:
            raise S3ResponseError(response.status, response.reason, body)

    def delete_bucket(self, bucket_name, headers=None):
        """
        Removes an S3 bucket.

        In order to remove the bucket, it must first be empty. If the bucket is
        not empty, an ``S3ResponseError`` will be raised.
        """
        response = self.make_request('DELETE', bucket_name, headers=headers)
        body = response.read()
        if response.status != 204:
            raise S3ResponseError(response.status, response.reason, body)

    def set_xml_logging(self, logging_str, headers=None):
        """
        Set logging on a bucket directly to the given xml string.

        :type logging_str: unicode string
        :param logging_str: The XML for the bucketloggingstatus which
            will be set.  The string will be converted to utf-8 before
            it is sent.  Usually, you will obtain this XML from the
            BucketLogging object.

        :rtype: bool
        :return: True if ok or raises an exception.
        """
        body = logging_str
        if not isinstance(body, bytes):
            body = body.encode('utf-8')
        response = self.connection.make_request('PUT', self.name, data=body,
                query_args={'logging':''}, headers=headers)
        body = response.read()
        if response.status == 200:
            return True
        else:
            raise S3ResponseError(response.status, response.reason, body)

    def enable_logging(self, target_bucket, target_prefix='',
                       grants=None, headers=None):
        """
        Enable logging on a bucket.

        :type target_bucket: bucket or string
        :param target_bucket: The bucket to log to.

        :type target_prefix: string
        :param target_prefix: The prefix which should be prepended to the
            generated log files written to the target_bucket.

        :type grants: list of Grant objects
        :param grants: A list of extra permissions which will be granted on
            the log files which are created.

        :rtype: bool
        :return: True if ok or raises an exception.
        """
        if isinstance(target_bucket, Bucket):
            target_bucket = target_bucket.name
        blogging = BucketLogging(target=target_bucket, prefix=target_prefix,
                                 grants=grants)
        return self.set_xml_logging(blogging.to_xml(), headers=headers)

    def disable_logging(self, headers=None):
        """
        Disable logging on a bucket.

        :rtype: bool
        :return: True if ok or raises an exception.
        """
        blogging = BucketLogging()
        return self.set_xml_logging(blogging.to_xml(), headers=headers)

    def get_logging_status(self, headers=None):
        """
        Get the logging status for this bucket.

        :rtype: :class:`boto.s3.bucketlogging.BucketLogging`
        :return: A BucketLogging object for this bucket.
        """
        response = self.connection.make_request('GET', self.name,
                query_args={'logging':''}, headers=headers)
        body = response.read()
        if response.status == 200:
            blogging = BucketLogging()
            h = handler.XmlHandler(blogging, self)
            if not isinstance(body, bytes):
                body = body.encode('utf-8')
            xml.sax.parseString(body, h)
            return blogging
        else:
            raise S3ResponseError(response.status, response.reason, body)

    def generate_url(self, expires_in, method, bucket='', key='', headers=None,
                     query_auth=True, force_http=False, response_headers=None,
                     expires_in_absolute=False, version_id=None):

        headers = headers or {}
        if expires_in_absolute:
            expires = int(expires_in)
        else:
            expires = int(time.time() + expires_in)
        auth_path = self.calling_format.build_auth_path(bucket, key)
        auth_path = self.get_path(auth_path)
        # optional version_id and response_headers need to be added to
        # the query param list.
        extra_qp = []
        if version_id is not None:
            extra_qp.append("versionId=%s" % version_id)
        if response_headers:
            for k, v in response_headers.items():
                extra_qp.append("%s=%s" % (k, urllib.quote(v)))
        if extra_qp:
            delimiter = '?' if '?' not in auth_path else '&'
            auth_path += delimiter + '&'.join(extra_qp)

        #if not headers.has_key('Date'):
        #    headers['Date'] = time.strftime("%a, %d %b %Y %H:%M:%S GMT", time.gmtime())

        c_string = auth.canonical_string(method, bucket, key, headers=headers, expires=expires)
        b64_hmac = auth.encode(self.access_key_secret, c_string)
        encoded_canonical = urllib.quote(b64_hmac, safe='')
        self.calling_format.build_path_base(bucket, key)
        if query_auth:
            encode_ak = self.access_key_id
            #encode_ak = urllib.quote(self.access_key_id)
            #print 'encode_ak:%s'%encode_ak
            query_part = '?' + self.QueryString % (encoded_canonical, expires,encode_ak)
        else:
            query_part = ''
        if headers:
            hdr_prefix = self.provider.header_prefix
            for k, v in headers.items():
                if k.startswith(hdr_prefix):
                    # headers used for sig generation must be
                    # included in the url also.
                    extra_qp.append("%s=%s" % (k, urllib.quote(v)))
        if extra_qp:
            delimiter = '?' if not query_part else '&'
            query_part += delimiter + '&'.join(extra_qp)
        if force_http:
            protocol = 'http'
            port = 80
        else:
            protocol = self.protocol
            port = self.port
        return self.calling_format.build_url_base(self, protocol,
                                                  self.server_name(port),
                                                  bucket, key) + query_part

    def server_name(self, port=None):
        if not port:
            port = self.port
        if port == 80:
            signature_host = self.host
        else:
            signature_host = "%s:%s" % (self.host, port)
        return signature_host

    def get_path(self, path='/'):
        # The default behavior is to suppress consecutive slashes for reasons
        # discussed at
        # https://groups.google.com/forum/#!topic/boto-dev/-ft0XPUy0y8
        # You can override that behavior with the suppress_consec_slashes param.
        pos = path.find('?')
        if pos >= 0:
            params = path[pos:]
            path = path[:pos]
        else:
            params = None
        if path[-1] == '/':
            need_trailing = True
        else:
            need_trailing = False
        path_elements = self.path.split('/')
        path_elements.extend(path.split('/'))
        path_elements = [p for p in path_elements if p]
        path = '/' + '/'.join(path_elements)
        if path[-1] != '/' and need_trailing:
            path += '/'
        if params:
            path = path + params
        return path

