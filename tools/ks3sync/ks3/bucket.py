
import six
import urllib
import xml

import ks3.utils
from ks3 import handler
from ks3.acl import Policy, CannedACLStrings
from ks3.bucketlistresultset import BucketListResultSet
from ks3.bucketlistresultset import MultiPartUploadListResultSet
from ks3.bucketlogging import BucketLogging
from ks3.exception import S3ResponseError, S3CreateError
from ks3.key import Key
from ks3.multipart import MultiPartUpload, CompleteMultiPartUpload
from ks3.prefix import Prefix
from ks3.resultset import ResultSet

class Bucket(object):

    def __init__(self, connection=None, name=None):
        self.connection = connection
        self.name = name

    def __repr__(self):
        return '<Bucket: %s>' % self.name

    def __iter__(self):
        return iter(BucketListResultSet(self))

    def __contains__(self, key_name):
        return not (self.get_key(key_name) is None)

    def startElement(self, name, attrs, connection):
        return None

    def endElement(self, name, value, connection):
        if name == 'Name':
            self.name = value
        elif name == 'CreationDate':
            self.creation_date = value
        else:
            setattr(self, name, value)

    def new_key(self, key_name=None):       
        """
        Creates a new key 
        
        :type key_name: string
        :param key_name: The name of the key to create

        :rtype: :class:`boto.s3.key.Key` or subclass
        :returns: An instance of the newly created key object
        """
        if not key_name:
            raise ValueError('Empty key names are not allowed')                                                  
        return Key(self, key_name)

    def generate_url(self, expires_in, method='GET', headers=None,
                     force_http=False, response_headers=None,
                     expires_in_absolute=False):
        return self.connection.generate_url(expires_in, method, self.name,
                                            headers=headers,
                                            force_http=force_http,
                                            response_headers=response_headers,                                   
                                            expires_in_absolute=expires_in_absolute)

    def delete_keys(self, keys, quiet=False, mfa_token=None, headers=None):
        """
        Deletes a set of keys using S3's Multi-object delete API. If a
        VersionID is specified for that key then that version is removed.
        Returns a MultiDeleteResult Object, which contains Deleted
        and Error elements for each key you ask to delete.
        """
        ikeys = iter(keys)
        result = MultiDeleteResult(self)
        provider = self.connection.provider
        query_args = 'delete'

        def delete_keys2(hdrs):
            hdrs = hdrs or {}
            data = u"""<?xml version="1.0" encoding="UTF-8"?>"""
            data += u"<Delete>"
            if quiet:
                data += u"<Quiet>true</Quiet>"
            count = 0
            while count < 1000:
                try:
                    key = next(ikeys)
                except StopIteration:
                    break
                if isinstance(key, six.string_types):
                    key_name = key
                    version_id = None
                elif isinstance(key, tuple) and len(key) == 2:
                    key_name, version_id = key
                elif (isinstance(key, Key) or isinstance(key, DeleteMarker)) and key.name:
                    key_name = key.name
                    version_id = key.version_id
                else:
                    if isinstance(key, Prefix):
                        key_name = key.name
                        code = 'PrefixSkipped'   # Don't delete Prefix
                    else:
                        key_name = repr(key)   # try get a string
                        code = 'InvalidArgument'  # other unknown type
                    message = 'Invalid. No delete action taken for this object.'
                    error = Error(key_name, code=code, message=message)
                    result.errors.append(error)
                    continue
                count += 1
                data += u"<Object><Key>%s</Key>" % xml.sax.saxutils.escape(key_name)
                if version_id:
                    data += u"<VersionId>%s</VersionId>" % version_id
                data += u"</Object>"
            data += u"</Delete>"
            if count <= 0:
                return False  # no more
            data = data.encode('utf-8')
            fp = BytesIO(data)
            md5 = boto.utils.compute_md5(fp)
            hdrs['Content-MD5'] = md5[1]
            hdrs['Content-Type'] = 'text/xml'
            if mfa_token:
                hdrs[provider.mfa_header] = ' '.join(mfa_token)
            response = self.connection.make_request('POST', self.name,
                                                    headers=hdrs,
                                                    query_args=query_args,
                                                    data=data)
            body = response.read()
            if response.status == 200:
                h = handler.XmlHandler(result, self)
                if not isinstance(body, bytes):
                    body = body.encode('utf-8')
                xml.sax.parseString(body, h)
                return count >= 1000  # more?
            else:
                raise provider.storage_response_error(response.status,
                                                      response.reason,
                                                      body)
        while delete_keys2(headers):
            pass
        return result

    def get_key(self, key_name, headers=None, version_id=None,
                response_headers=None, validate=True):
        """
        Check to see if a particular key exists within the bucket.
        """
        #if validate is False:
        #    if headers or version_id or response_headers:
        #        raise BotoClientError(
        #            "When providing 'validate=False', no other params " + \
        #            "are allowed."
        #        )

        #    # This leans on the default behavior of ``new_key`` (not hitting
        #    # the service). If that changes, that behavior should migrate here.
        #    return self.new_key(key_name)

        query_args_l = {}
        if version_id:
            query_args_l['versionId'] = version_id
        if response_headers:
            for rk, rv in six.iteritems(response_headers):
                query_args_l[rk] = urllib.parse.quote(rv)

        key, resp = self._get_key_internal(key_name, headers, query_args_l)
        return key

    def _get_key_internal(self, key_name, headers, query_args_l):
        query_args = query_args_l or None
        response = self.connection.make_request('HEAD', self.name, key_name,
                                                headers=headers,
                                                query_args=query_args)
        response.read()
        # Allow any success status (2xx) - for example this lets us
        # support Range gets, which return status 206:
        if response.status / 100 == 2:
            k = Key(self)
            #provider = self.connection.provider
            #k.metadata = boto.utils.get_aws_metadata(response.msg, provider)
            for field in Key.base_fields:
                k.__dict__[field.lower().replace('-', '_')] = \
                    response.getheader(field)
            # the following machinations are a workaround to the fact that
            # apache/fastcgi omits the content-length header on HEAD
            # requests when the content-length is zero.
            # See http://goo.gl/0Tdax for more details.
            clen = response.getheader('content-length')
            if clen:
                k.size = int(response.getheader('content-length'))
            else:
                k.size = 0
            k.name = key_name
            k.handle_version_headers(response)
            k.handle_encryption_headers(response)
            k.handle_restore_headers(response)
            k.handle_addl_headers(response.getheaders())
            return k, response
        else:
            if response.status == 404:
                return None, response
            else:
                raise S3ResponseError(response.status, response.reason, None)

    def list(self, prefix=None, delimiter=None, marker=None):
        """
        List object keys within specified bucket.
        """
        return BucketListResultSet(self, prefix, delimiter, marker)

    def get_all_keys(self, **params):
        """
        A lower-level method for listing contents of a bucket.
        """
        return self._get_all([('Contents', Key)],
                             '', **params)

    def _get_all(self, element_map, initial_query_string='',
                 headers=None, **params):
        query_args = self._get_all_query_args(
            params,
            initial_query_string=initial_query_string
        )
        response = self.connection.make_request('GET', self.name,
                                                headers=headers,
                                                query_args=query_args)
        body = response.read()
        if response.status == 200:
            rs = ResultSet(element_map)
            h = handler.XmlHandler(rs, self)
            if not isinstance(body, bytes):
                body = body.encode('utf-8')
            xml.sax.parseString(body, h)
            return rs
        else:
            raise S3ResponseError(response.status, response.reason, body)

    def _get_all_query_args(self, params, initial_query_string=''):
        pairs = []

        if initial_query_string:
            pairs.append(initial_query_string)

        for key, value in sorted(params.items(), key=lambda x: x[0]):
            if value is None:
                continue
            key = key.replace('_', '-') 
            if key == 'maxkeys':
                key = 'max-keys'
            if not isinstance(value, six.string_types + (six.binary_type,)):
                value = six.text_type(value)
            if not isinstance(value, six.binary_type):
                value = value.encode('utf-8')
            if value:
                pairs.append(u'%s=%s' % (
                    urllib.quote(key),
                    urllib.quote(value)
                ))

        return '&'.join(pairs)

    def set_xml_acl(self, acl_str, key_name='', headers=None, version_id=None,
                    query_args='acl'):
        if version_id:
            query_arg['versionId'] = version_id
        if not isinstance(acl_str, bytes):
            acl_str = acl_str.encode('utf-8')
        response = self.connection.make_request('PUT', self.name, key_name,
                                                data=acl_str,
                                                query_args=query_args,
                                                headers=headers)
        body = response.read()
        if response.status != 200:
            raise S3ResponseError(response.status, response.reason, body)

    def set_acl(self, acl_or_str, key_name='', headers=None, version_id=None):
        if isinstance(acl_or_str, Policy):
            self.set_xml_acl(acl_or_str.to_xml(), key_name,
                             headers, version_id)
        else:
            self.set_canned_acl(acl_or_str, key_name,
                                headers, version_id)


    def set_canned_acl(self, acl_str, key_name='', headers=None,
                       version_id=None):
        assert acl_str in CannedACLStrings

        if headers:
            headers[self.connection.provider.acl_header] = acl_str
        else:
            headers = {self.connection.provider.acl_header: acl_str}

        query_args = 'acl'
        if version_id:
            query_args += '&versionId=%s' % version_id
        response = self.connection.make_request('PUT', self.name, key_name,
                headers=headers, query_args=query_args)
        body = response.read()
        if response.status != 200:
            raise S3ResponseError(response.status, response.reason, body)

    def get_acl(self, key_name='', headers=None, version_id=None):
        query_args = 'acl'
        if version_id:
            query_args += '&versionId=%s' % version_id
        response = self.connection.make_request('GET', self.name, key_name,
                                                query_args=query_args,
                                                headers=headers)
        body = response.read()
        if response.status == 200:
            policy = Policy(self)
            h = handler.XmlHandler(policy, self)
            if not isinstance(body, bytes):
                body = body.encode('utf-8')
            xml.sax.parseString(body, h)
            return policy
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
                query_args='logging', headers=headers)
        body = response.read()
        if response.status == 200:
            return True
        else:
            raise S3ResponseError(response.status, response.reason, body)

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
                query_args='logging', headers=headers)
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

    def delete_key(self, key_name, headers=None, version_id=None,
                   mfa_token=None):
        """
        Deletes a key from the bucket.
        """
        if not key_name:
            raise ValueError('Empty key names are not allowed')
        return self._delete_key_internal(key_name, headers=headers,
                                         version_id=version_id,
                                         mfa_token=mfa_token)

    def _delete_key_internal(self, key_name, headers=None, version_id=None,
                             mfa_token=None, query_args_l=None):
        query_args_l = query_args_l or ""
        provider = self.connection.provider
        if version_id:
            query_args_l.append('versionId=%s' % version_id)
        query_args = '&'.join(query_args_l) or None
        if mfa_token:
            if not headers:
                headers = {}
            headers[provider.mfa_header] = ' '.join(mfa_token)
        response = self.connection.make_request('DELETE', self.name, key_name,
                                                headers=headers,
                                                query_args=query_args)
        body = response.read()
        if response.status != 204:
            raise provider.storage_response_error(response.status,
                                                  response.reason, body)
        else:
            # return a key object with information on what was deleted.
            k = Key(self)
            k.name = key_name
            k.handle_version_headers(response)
            k.handle_addl_headers(response.getheaders())
            return k

    def list_multipart_uploads(self, key_marker='',
                               upload_id_marker='',
                               headers=None, encoding_type=None):
        """
        List multipart upload objects within a bucket.  This returns an
        instance of an MultiPartUploadListResultSet that automatically
        handles all of the result paging, etc. from S3.  You just need
        to keep iterating until there are no more results.

        :type key_marker: string
        :param key_marker: The "marker" of where you are in the result set

        :type upload_id_marker: string
        :param upload_id_marker: The upload identifier

        :param encoding_type: Requests Amazon S3 to encode the response and
            specifies the encoding method to use.

            An object key can contain any Unicode character; however, XML 1.0
            parser cannot parse some characters, such as characters with an
            ASCII value from 0 to 10. For characters that are not supported in
            XML 1.0, you can add this parameter to request that Amazon S3
            encode the keys in the response.

            Valid options: ``url``
        :type encoding_type: string

        :rtype: :class:`boto.s3.bucketlistresultset.BucketListResultSet`
        :return: an instance of a BucketListResultSet that handles paging, etc
        """
        return MultiPartUploadListResultSet(self, key_marker,
                                            upload_id_marker,
                                            headers,
                                            encoding_type=encoding_type)

    def get_all_multipart_uploads(self, headers=None, **params):
        """
        A lower-level, version-aware method for listing active
        MultiPart uploads for a bucket.
        """
        #self.validate_kwarg_names(params, ['max_uploads', 'key_marker',
        #                                   'upload_id_marker', 'encoding_type',
        #                                   'delimiter', 'prefix'])
        return self._get_all([('Upload', MultiPartUpload),
                              ('CommonPrefixes', Prefix)],
                             'uploads', headers, **params)

    def initiate_multipart_upload(self, key_name, headers=None,
                                  reduced_redundancy=False,
                                  metadata=None, encrypt_key=False,
                                  policy=None):
        """
        Start a multipart upload operation.
            Note: After you initiate multipart upload and upload one or more
            parts, you must either complete or abort multipart upload in order
            to stop getting charged for storage of the uploaded parts. Only
            after you either complete or abort multipart upload, Amazon S3
            frees up the parts storage and stops charging you for the parts
            storage.
        """
        query_args = 'uploads'
        provider = self.connection.provider
        headers = headers or {}
        if policy:
            headers[provider.acl_header] = policy
        if reduced_redundancy:
            storage_class_header = provider.storage_class_header
            if storage_class_header:
                headers[storage_class_header] = 'REDUCED_REDUNDANCY'
            # TODO: what if the provider doesn't support reduced redundancy?
        if encrypt_key:
            headers[provider.server_side_encryption_header] = 'AES256'
        if metadata is None:
            metadata = {}

        headers = ks3.utils.merge_meta(headers, metadata,
                self.connection.provider)
        response = self.connection.make_request('POST', self.name, key_name,
                                                query_args=query_args,
                                                headers=headers)
        body = response.read()
        if response.status == 200:
            resp = MultiPartUpload(self)
            h = handler.XmlHandler(resp, self)
            if not isinstance(body, bytes):
                body = body.encode('utf-8')
            xml.sax.parseString(body, h)
            return resp
        else:
            raise self.connection.provider.storage_response_error(
                response.status, response.reason, body)

    def complete_multipart_upload(self, key_name, upload_id,
                                  xml_body, headers=None):
        """
        Complete a multipart upload operation.
        """
        query_args = 'uploadId=%s' % upload_id
        if headers is None:
            headers = {}
        headers['Content-Type'] = 'text/xml'
        response = self.connection.make_request('POST', self.name, key_name,
                                                query_args=query_args,
                                                headers=headers, data=xml_body)
        contains_error = False
        body = response.read().decode('utf-8')
        # Some errors will be reported in the body of the response
        # even though the HTTP response code is 200.  This check
        # does a quick and dirty peek in the body for an error element.
        if body.find('<Error>') > 0:
            contains_error = True
        if response.status == 200 and not contains_error:
            resp = CompleteMultiPartUpload(self)
            h = handler.XmlHandler(resp, self)
            if not isinstance(body, bytes):
                body = body.encode('utf-8')
            xml.sax.parseString(body, h)
            # Use a dummy key to parse various response headers
            # for versioning, encryption info and then explicitly
            # set the completed MPU object values from key.
            k = Key(self)
            k.handle_version_headers(response)
            k.handle_encryption_headers(response)
            resp.version_id = k.version_id
            resp.encrypted = k.encrypted
            return resp
        else:
            raise self.connection.provider.storage_response_error(
                response.status, response.reason, body)

    def cancel_multipart_upload(self, key_name, upload_id, headers=None):
        """
        To verify that all parts have been removed, so you don't get charged
        for the part storage, you should call the List Parts operation and
        ensure the parts list is empty.
        """
        query_args = 'uploadId=%s' % upload_id
        response = self.connection.make_request('DELETE', self.name, key_name,
                                                query_args=query_args,
                                                headers=headers)
        body = response.read()
        if response.status != 204:
            raise self.connection.provider.storage_response_error(
                response.status, response.reason, body)
