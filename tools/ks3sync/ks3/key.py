
import hashlib
import math
import mimetypes
import os
import urllib
from hashlib import md5

from ks3.exception import KS3ClientError
from ks3.exception import StorageDataError, PleaseRetryException
from ks3.keyfile import KeyFile
from ks3.user import User
from ks3.compat import BytesIO
from ks3.utils import compute_md5, compute_hash
from ks3.utils import find_matching_headers, merge_meta, merge_headers_by_name


class Key(object):

    DefaultContentType = 'application/octet-stream'

    RestoreBody = """<?xml version="1.0" encoding="UTF-8"?>
      <RestoreRequest xmlns="http://s3.ksyun.com">
        <Days>%s</Days>
      </RestoreRequest>"""


    #BufferSize = ks3.config.getint('Boto', 'key_buffer_size', 8192)
    BufferSize = 8192

    # The object metadata fields a user can set, other than custom metadata
    # fields (i.e., those beginning with a provider-specific prefix like
    # x-amz-meta).
    base_user_settable_fields = set(["cache-control", "content-disposition",
                                    "content-encoding", "content-language",
                                    "content-md5", "content-type",
                                     "x-robots-tag", "expires"])
    _underscore_base_user_settable_fields = set()
    for f in base_user_settable_fields:
      _underscore_base_user_settable_fields.add(f.replace('-', '_'))
    # Metadata fields, whether user-settable or not, other than custom
    # metadata fields (i.e., those beginning with a provider specific prefix
    # like x-amz-meta).
    base_fields = (base_user_settable_fields |
                   set(["last-modified", "content-length", "date", "etag"]))

    def __init__(self, bucket=None, name=None):
        self.bucket = bucket
        self.name = name
        self.metadata = {}
        self.cache_control = None
        self.content_type = self.DefaultContentType
        self.content_encoding = None
        self.content_disposition = None
        self.content_language = None
        self.filename = None
        self.etag = None
        self.is_latest = False
        self.last_modified = None
        self.owner = None
        self._storage_class = None
        self.path = None
        self.resp = None
        self.mode = None
        self.size = None
        self.version_id = None
        self.source_version_id = None
        self.delete_marker = False
        self.encrypted = None
        #
        self.local_hashes = {}

    def __repr__(self):
        if self.bucket:
            name = u'<Key: %s,%s>' % (self.bucket.name, self.name)
        else:
            name = u'<Key: None,%s>' % self.name

        # Encode to bytes for Python 2 to prevent display decoding issues
        if not isinstance(name, str):
            name = name.encode('utf-8')

        return name

    def __iter__(self):
        return self

    @property
    def provider(self):
        provider = None
        if self.bucket and self.bucket.connection:
            provider = self.bucket.connection.provider
        return provider

    def _get_key(self):
        return self.name

    def _set_key(self, value):
        self.name = value


    def next(self):
        """
        By providing a next method, the key object supports use as an iterator.
        For example, you can now say:

        for bytes in key:
            write bytes to a file or whatever

        All of the HTTP connection stuff is handled for you.
        """
        self.open_read()
        data = self.resp.read(self.BufferSize)
        if not data:
            self.close()
            raise StopIteration
        return data

    # Python 3 iterator support
    __next__ = next

    def read(self, size=0):
        self.open_read()
        if size == 0:
            data = self.resp.read()
        else:
            data = self.resp.read(size)
        if not data:
            self.close()
        return data

    def startElement(self, name, attrs, connection):
        if name == 'Owner':
            self.owner = User(self)
            return self.owner
        else:
            return None

    def endElement(self, name, value, connection):
        if name == 'Key':
            self.name = value
        elif name == 'ETag':
            self.etag = value
        elif name == 'IsLatest':
            if value == 'true':
                self.is_latest = True
            else:
                self.is_latest = False
        elif name == 'LastModified':
            self.last_modified = value
        elif name == 'Size':
            self.size = int(value)
        elif name == 'StorageClass':
            self.storage_class = value
        elif name == 'Owner':
            pass
        elif name == 'VersionId':
            self.version_id = value
        else:
            setattr(self, name, value)

    def delete(self, headers=None):
        """
        Delete this key from S3
        """
        return self.bucket.delete_key(self.name, version_id=self.version_id,
                                      headers=headers)

    def generate_url(self, expires_in, method='GET', headers=None,
                     query_auth=True, force_http=False, response_headers=None,
                     expires_in_absolute=False, version_id=None,
                     policy=None, reduced_redundancy=False, encrypt_key=False,domain=False):
        """
        Generate a URL to access this key.
        """
        provider = self.bucket.connection.provider
        version_id = version_id or self.version_id
        if headers is None:
            headers = {}
        else:
            headers = headers.copy()

        # add headers accordingly (usually PUT case)
        #if policy:
        #    headers[provider.acl_header] = policy
        #if reduced_redundancy:
        #    self.storage_class = 'REDUCED_REDUNDANCY'
        #    if provider.storage_class_header:
        #        headers[provider.storage_class_header] = self.storage_class
        #if encrypt_key:
        #    headers[provider.server_side_encryption_header] = 'AES256'
        #headers = merge_meta(headers, self.metadata, provider)

        url = self.bucket.connection.generate_url(expires_in, method,
                                                   self.bucket.name, self.name,
                                                   headers, query_auth,
                                                   force_http,
                                                   response_headers,
                                                   expires_in_absolute,
                                                   version_id)
        if domain is True :
           url = url.replace('http://'+self.bucket.name+'.','http://')
           url = url.replace('https://'+self.bucket.name+'.','https://')
        
        return url

    def should_retry(self, response, chunked_transfer=False):
        provider = self.bucket.connection.provider

        if not chunked_transfer:
            if response.status in [500, 503]:
                # 500 & 503 can be plain retries.
                return True

            if response.getheader('location'):
                # If there's a redirect, plain retry.
                return True

        if 200 <= response.status <= 299:
            self.etag = response.getheader('etag')
            md5 = self.md5
            if isinstance(md5, bytes):
                md5 = md5.decode('utf-8')

            # If you use customer-provided encryption keys, the ETag value that
            # Amazon S3 returns in the response will not be the MD5 of the
            # object.
            server_side_encryption_customer_algorithm = response.getheader(
                'x-amz-server-side-encryption-customer-algorithm', None)
            if server_side_encryption_customer_algorithm is None:
                if self.etag != '"%s"' % md5:
                    raise provider.storage_data_error(
                        'ETag from S3 did not match computed MD5. '
                        '%s vs. %s' % (self.etag, self.md5))

            return True

        if response.status == 400:
            # The 400 must be trapped so the retry handler can check to
            # see if it was a timeout.
            # If ``RequestTimeout`` is present, we'll retry. Otherwise, bomb
            # out.
            body = response.read()
            err = provider.storage_response_error(
                response.status,
                response.reason,
                body
            )

            if err.error_code in ['RequestTimeout']:
                raise PleaseRetryException(
                    "Saw %s, retrying" % err.error_code,
                    response=response
                )

        return False

    def send_file(self, fp, headers=None, cb=None, num_cb=10,
                  query_args=None, chunked_transfer=False, size=None):
        """
        Upload a file to a key into a bucket on S3.
        """
        return self._send_file_internal(fp, headers=headers, cb=cb, num_cb=num_cb,
                                 query_args=query_args,
                                 chunked_transfer=chunked_transfer, size=size)
    def _send_file_internal(self, fp, headers=None, cb=None, num_cb=10,
                            query_args=None, chunked_transfer=False, size=None,
                            hash_algs=None):
        provider = self.bucket.connection.provider
        try:
            spos = fp.tell()
        except IOError:
            spos = None
            self.read_from_stream = False

        # If hash_algs is unset and the MD5 hasn't already been computed,
        # default to an MD5 hash_alg to hash the data on-the-fly.
        if hash_algs is None and not self.md5:
            hash_algs = {'md5': md5}
        digesters = dict((alg, hash_algs[alg]()) for alg in hash_algs or {})

        if not headers:
            headers = {}
        else:
            headers = headers.copy()
        # Overwrite user-supplied user-agent.
        for header in find_matching_headers('User-Agent', headers):
            del headers[header]
        #headers['User-Agent'] = UserAgent
        # If storage_class is None, then a user has not explicitly requested
        # a storage class, so we can assume STANDARD here
        if self._storage_class not in [None, 'STANDARD']:
            headers[provider.storage_class_header] = self.storage_class
        if find_matching_headers('Content-Encoding', headers):
            self.content_language = merge_headers_by_name(
                'Content-Language', headers)
        content_type_headers = find_matching_headers('Content-Type', headers)
        if content_type_headers:
            # Some use cases need to suppress sending of the Content-Type
            # header and depend on the receiving server to set the content
            # type. This can be achieved by setting headers['Content-Type']
            # to None when calling this method.
            if (len(content_type_headers) == 1 and
                headers[content_type_headers[0]] is None):
                # Delete null Content-Type value to skip sending that header.
                del headers[content_type_headers[0]]
            else:
                self.content_type = merge_headers_by_name(
                    'Content-Type', headers)
        elif self.path:
            self.content_type = mimetypes.guess_type(self.path)[0]
            if self.content_type is None:
                self.content_type = self.DefaultContentType
            headers['Content-Type'] = self.content_type
        else:
            headers['Content-Type'] = self.content_type
        if self.base64md5:
            headers['Content-MD5'] = self.base64md5
        if chunked_transfer:
            headers['Transfer-Encoding'] = 'chunked'
            #if not self.base64md5:
            #    headers['Trailer'] = "Content-MD5"
        else:
            headers['Content-Length'] = str(self.size)
        # This is terrible. We need a SHA256 of the body for SigV4, but to do
        # the chunked ``sender`` behavior above, the ``fp`` isn't available to
        # the auth mechanism (because closures). Detect if it's SigV4 & embelish
        # while we can before the auth calculations occur.
        #if 'hmac-v4-s3' in self.bucket.connection._required_auth_capability():
        #    kwargs = {'fp': fp, 'hash_algorithm': hashlib.sha256}
        #    if size is not None:
        #        kwargs['size'] = size
        #    headers['_sha256'] = compute_hash(**kwargs)[0]
        headers['Expect'] = '100-Continue'
        headers = merge_meta(headers, self.metadata, provider)
        resp = self.bucket.connection.make_request(
            'PUT',
            self.bucket.name,
            self.name,
            data=fp,
            headers=headers,
            query_args=query_args
        )
        self.handle_version_headers(resp, force=True)
        self.handle_addl_headers(resp.getheaders())
        return resp

    def set_contents_from_file(self, fp, headers=None, replace=True,
                               cb=None, num_cb=10, policy=None, md5=None,
                               reduced_redundancy=False, query_args=None,
                               encrypt_key=False, size=None, rewind=False):
        """
        Store an object in S3 using the name of the Key object as the
        key in S3 and the contents of the file pointed to by 'fp' as the
        contents. The data is read from 'fp' from its current position until
        'size' bytes have been read or EOF.
        :type fp: file
        :param fp: the file whose contents to upload

        :type headers: dict
        :param headers: Additional HTTP headers that will be sent with
            the PUT request.

        :type replace: bool
        :param replace: If this parameter is False, the method will
            first check to see if an object exists in the bucket with
            the same key.  If it does, it won't overwrite it.  The
            default value is True which will overwrite the object.

        :type cb: function
        :param cb: a callback function that will be called to report
            progress on the upload.  The callback should accept two
            integer parameters, the first representing the number of
            bytes that have been successfully transmitted to S3 and
            the second representing the size of the to be transmitted
            object.

        :type num_cb: int
        :param num_cb: (optional) If a callback is specified with the
            cb parameter this parameter determines the granularity of
            the callback by defining the maximum number of times the
            callback will be called during the file transfer.

        :type policy: :class:`boto.s3.acl.CannedACLStrings`
        :param policy: A canned ACL policy that will be applied to the
            new key in S3.

        :type md5: A tuple containing the hexdigest version of the MD5
            checksum of the file as the first element and the
            Base64-encoded version of the plain checksum as the second
            element.  This is the same format returned by the
            compute_md5 method.
        :type reduced_redundancy: bool
        :param reduced_redundancy: If True, this will set the storage
            class of the new Key to be REDUCED_REDUNDANCY. The Reduced
            Redundancy Storage (RRS) feature of S3, provides lower
            redundancy at lower storage cost.

        :type encrypt_key: bool
        :param encrypt_key: If True, the new copy of the object will
            be encrypted on the server-side by S3 and will be stored
            in an encrypted form while at rest in S3.

        :type size: int
        :param size: (optional) The Maximum number of bytes to read
            from the file pointer (fp). This is useful when uploading
            a file in multiple parts where you are splitting the file
            up into different ranges to be uploaded. If not specified,
            the default behaviour is to read all bytes from the file
            pointer. Less bytes may be available.

        :type rewind: bool
        :param rewind: (optional) If True, the file pointer (fp) will
            be rewound to the start before any bytes are read from
            it. The default behaviour is False which reads from the
            current position of the file pointer (fp).

        :rtype: int
        :return: The number of bytes written to the key.
        """
        provider = self.bucket.connection.provider
        headers = headers or {}
        if policy:
            headers[provider.acl_header] = policy
        if encrypt_key:
            headers[provider.server_side_encryption_header] = 'AES256'

        if rewind:
            # caller requests reading from beginning of fp.
            fp.seek(0, os.SEEK_SET)
        else:
            # The following seek/tell/seek logic is intended
            # to detect applications using the older interface to
            # set_contents_from_file(), which automatically rewound the
            # file each time the Key was reused. This changed with commit
            # 14ee2d03f4665fe20d19a85286f78d39d924237e, to support uploads
            # split into multiple parts and uploaded in parallel, and at
            # the time of that commit this check was added because otherwise
            # older programs would get a success status and upload an empty
            # object. Unfortuantely, it's very inefficient for fp's implemented
            # by KeyFile (used, for example, by gsutil when copying between
            # providers). So, we skip the check for the KeyFile case.
            # TODO: At some point consider removing this seek/tell/seek
            # logic, after enough time has passed that it's unlikely any
            # programs remain that assume the older auto-rewind interface.
            if not isinstance(fp, KeyFile):
                spos = fp.tell()
                fp.seek(0, os.SEEK_END)
                if fp.tell() == spos:
                    fp.seek(0, os.SEEK_SET)
                    if fp.tell() != spos:
                        # Raise an exception as this is likely a programming
                        # error whereby there is data before the fp but nothing
                        # after it.
                        fp.seek(spos)
                        raise AttributeError('fp is at EOF. Use rewind option '
                                             'or seek() to data start.')
                # seek back to the correct position.
                fp.seek(spos)
        if reduced_redundancy:
            self.storage_class = 'REDUCED_REDUNDANCY'
            if provider.storage_class_header:
                headers[provider.storage_class_header] = self.storage_class
                # TODO - What if provider doesn't support reduced reduncancy?
                # What if different providers provide different classes?
        if hasattr(fp, 'name'):
            self.path = fp.name
        if self.bucket is not None:
            if not md5 and provider.supports_chunked_transfer():
                # defer md5 calculation to on the fly and
                # we don't know anything about size yet.
                chunked_transfer = True
                self.size = None
            else:
                chunked_transfer = False
                if isinstance(fp, KeyFile):
                    # Avoid EOF seek for KeyFile case as it's very inefficient.
                    key = fp.getkey()
                    size = key.size - fp.tell()
                    self.size = size
                    # At present both GCS and S3 use MD5 for the etag for
                    # non-multipart-uploaded objects. If the etag is 32 hex
                    # chars use it as an MD5, to avoid having to read the file
                    # twice while transferring.
                    if (re.match('^"[a-fA-F0-9]{32}"$', key.etag)):
                        etag = key.etag.strip('"')
                        md5 = (etag, base64.b64encode(binascii.unhexlify(etag)))
                if not md5:
                    # compute_md5() and also set self.size to actual
                    # size of the bytes read computing the md5.
                    md5 = self.compute_md5(fp, size)
                    # adjust size if required
                    size = self.size
                elif size:
                    self.size = size
                else:
                    # If md5 is provided, still need to size so
                    # calculate based on bytes to end of content
                    spos = fp.tell()
                    fp.seek(0, os.SEEK_END)
                    self.size = fp.tell() - spos
                    fp.seek(spos)
                    size = self.size
                self.md5 = md5[0]
                self.base64md5 = md5[1]

            if self.name is None:
                self.name = self.md5
            if not replace:
                if self.bucket.lookup(self.name):
                    return

            return self.send_file(fp, headers=headers, cb=cb, num_cb=num_cb,
                           query_args=query_args,
                           chunked_transfer=chunked_transfer, size=size)
            # return number of bytes written.
            #return self.size

    def set_contents_from_filename(self, filename, headers=None, replace=True,
                                   cb=None, num_cb=10, policy=None, md5=None,
                                   reduced_redundancy=False,
                                   encrypt_key=False):
        """
        Store an object in S3 using the name of the Key object as the
        key in S3 and the contents of the file named by 'filename'.
        See set_contents_from_file method for details about the
        parameters.
        """
        with open(filename, 'rb') as fp:
            return self.set_contents_from_file(fp, headers, replace, cb,
                                               num_cb, policy, md5,
                                               reduced_redundancy,
                                               encrypt_key=encrypt_key)

    def set_contents_from_string(self, string_data, headers=None, replace=True,
                                 cb=None, num_cb=10, policy=None, md5=None,
                                 reduced_redundancy=False,
                                 encrypt_key=False):
        """
        Store an object in S3 using the name of the Key object as the
        key in S3 and the string 's' as the contents.
        See set_contents_from_file method for details about the
        parameters.
        """
        if not isinstance(string_data, bytes):
            string_data = string_data.encode("utf-8")
        fp = BytesIO(string_data)
        r = self.set_contents_from_file(fp, headers, replace, cb, num_cb,
                                        policy, md5, reduced_redundancy,
                                        encrypt_key=encrypt_key)
        fp.close()
        return r

    def get_file(self, fp, headers=None, cb=None, num_cb=10,
                 torrent=False, version_id=None, override_num_retries=None,
                 response_headers=None):
        """
        Retrieves a file from an S3 Key
        """
        self._get_file_internal(fp, headers=headers, cb=cb, num_cb=num_cb,
                                torrent=torrent, version_id=version_id,
                                override_num_retries=override_num_retries,
                                response_headers=response_headers,
                                hash_algs=None,
                                query_args=None)

    def _get_file_internal(self, fp, headers=None, cb=None, num_cb=10,
                 torrent=False, version_id=None, override_num_retries=None,
                 response_headers=None, hash_algs=None, query_args=None):
        if headers is None:
            headers = {}
        save_debug = self.bucket.connection.debug
        if self.bucket.connection.debug == 1:
            self.bucket.connection.debug = 0

        query_args = query_args or []
        if torrent:
            query_args.append('torrent')

        if hash_algs is None and not torrent:
            hash_algs = {'md5': md5}
        digesters = dict((alg, hash_algs[alg]()) for alg in hash_algs or {})

        # If a version_id is passed in, use that.  If not, check to see
        # if the Key object has an explicit version_id and, if so, use that.
        # Otherwise, don't pass a version_id query param.
        if version_id is None:
            version_id = self.version_id
        if version_id:
            query_args.append('versionId=%s' % version_id)
        if response_headers:
            for key in response_headers:
                query_args.append('%s=%s' % (
                    key, urllib.quote(response_headers[key])))
        query_args = '&'.join(query_args)
        self.open('r', headers, query_args=query_args,
                  override_num_retries=override_num_retries)

        data_len = 0
        if cb:
            if self.size is None:
                cb_size = 0
            else:
                cb_size = self.size
            if self.size is None and num_cb != -1:
                # If size is not available due to chunked transfer for example,
                # we'll call the cb for every 1MB of data transferred.
                cb_count = (1024 * 1024) / self.BufferSize
            elif num_cb > 1:
                cb_count = int(math.ceil(cb_size/self.BufferSize/(num_cb-1.0)))
            elif num_cb < 0:
                cb_count = -1
            else:
                cb_count = 0
            i = 0
            cb(data_len, cb_size)
        try:
            for bytes in self:
                fp.write(bytes)
                data_len += len(bytes)
                for alg in digesters:
                    digesters[alg].update(bytes)
                if cb:
                    if cb_size > 0 and data_len >= cb_size:
                        break
                    i += 1
                    if i == cb_count or cb_count == -1:
                        cb(data_len, cb_size)
                        i = 0
        except IOError as e:
            if e.errno == errno.ENOSPC:
                raise StorageDataError('Out of space for destination file '
                                       '%s' % fp.name)
            raise
        if cb and (cb_count <= 1 or i > 0) and data_len > 0:
            cb(data_len, cb_size)
        for alg in digesters:
          self.local_hashes[alg] = digesters[alg].digest()
        if self.size is None and not torrent and "Range" not in headers:
            self.size = data_len
        self.close()
        self.bucket.connection.debug = save_debug

    def open_read(self, headers=None, query_args='',
                  override_num_retries=None, response_headers=None):
        """
        Open this key for reading
        """
        if self.resp is None:
            self.mode = 'r'

            provider = self.bucket.connection.provider
            self.resp = self.bucket.connection.make_request(
                'GET', self.bucket.name, self.name, headers=headers,
                query_args=query_args)
                #override_num_retries=override_num_retries)
            if self.resp.status < 199 or self.resp.status > 299:
                body = self.resp.read()
                raise provider.storage_response_error(self.resp.status,
                                                      self.resp.reason, body)
            response_headers = self.resp.msg
            #self.metadata = boto.utils.get_aws_metadata(response_headers,
            #                                            provider)
            for name, value in response_headers.items():
                # To get correct size for Range GETs, use Content-Range
                # header if one was returned. If not, use Content-Length
                # header.
                if (name.lower() == 'content-length' and
                    'Content-Range' not in response_headers):
                    self.size = int(value)
                elif name.lower() == 'content-range':
                    end_range = re.sub('.*/(.*)', '\\1', value)
                    self.size = int(end_range)
                elif name.lower() in Key.base_fields:
                    self.__dict__[name.lower().replace('-', '_')] = value
            self.handle_version_headers(self.resp)
            self.handle_encryption_headers(self.resp)
            self.handle_restore_headers(self.resp)
            self.handle_addl_headers(self.resp.getheaders())


    def open_write(self, headers=None, override_num_retries=None):
        """
        Open this key for writing.
        Not yet implemented

        :type headers: dict
        :param headers: Headers to pass in the write request

        :type override_num_retries: int
        :param override_num_retries: If not None will override configured
            num_retries parameter for underlying PUT.
        """
        raise KS3ClientError('Not Implemented')

    def open(self, mode='r', headers=None, query_args=None,
             override_num_retries=None):
        if mode == 'r':
            self.mode = 'r'
            self.open_read(headers=headers, query_args=query_args,
                           override_num_retries=override_num_retries)
        elif mode == 'w':
            self.mode = 'w'
            self.open_write(headers=headers,
                            override_num_retries=override_num_retries)
        else:
            raise KS3ClientError('Invalid mode: %s' % mode)

    closed = False

    def close(self, fast=False):
        """
        Close this key.

        :type fast: bool
        :param fast: True if you want the connection to be closed without first
        reading the content. This should only be used in cases where subsequent
        calls don't need to return the content from the open HTTP connection.
        Note: As explained at
        http://docs.python.org/2/library/httplib.html#httplib.HTTPConnection.getresponse,
        callers must read the whole response before sending a new request to the
        server. Calling Key.close(fast=True) and making a subsequent request to
        the server will work because boto will get an httplib exception and
        close/reopen the connection.

        """
        if self.resp and not fast:
            self.resp.read()
        self.resp = None
        self.mode = None
        self.closed = True

    def get_contents_to_file(self, fp, headers=None,
                             cb=None, num_cb=10,
                             torrent=False,
                             version_id=None,
                             res_download_handler=None,
                             response_headers=None):
        """
        Retrieve an object from S3 using the name of the Key object as the
        key in S3.  Write the contents of the object to the file pointed
        to by 'fp'.
        """
        if self.bucket is not None:
            if res_download_handler:
                res_download_handler.get_file(self, fp, headers, cb, num_cb,
                                              torrent=torrent,
                                              version_id=version_id)
            else:
                self.get_file(fp, headers, cb, num_cb, torrent=torrent,
                              version_id=version_id,
                              response_headers=response_headers)

    def get_contents_to_filename(self, filename, headers=None,
                                 cb=None, num_cb=10,
                                 torrent=False,
                                 version_id=None,
                                 res_download_handler=None,
                                 response_headers=None):
        """
        Retrieve an object from S3 using the name of the Key object as the
        key in S3.  Store contents of the object to a file named by 'filename'.
        See get_contents_to_file method for details about the
        parameters.
        """
        try:
            with open(filename, 'wb') as fp:
                self.get_contents_to_file(fp, headers, cb, num_cb,
                                          torrent=torrent,
                                          version_id=version_id,
                                          res_download_handler=res_download_handler,
                                          response_headers=response_headers)
        except Exception:
            os.remove(filename)
            raise
        # if last_modified date was sent from s3, try to set file's timestamp
        if self.last_modified is not None:
            try:
                modified_tuple = email.utils.parsedate_tz(self.last_modified)
                modified_stamp = int(email.utils.mktime_tz(modified_tuple))
                os.utime(fp.name, (modified_stamp, modified_stamp))
            except Exception:
                pass

    def get_contents_as_string(self, headers=None,
                               cb=None, num_cb=10,
                               torrent=False,
                               version_id=None,
                               response_headers=None, encoding=None):
        """
        Retrieve an object from S3 using the name of the Key object as the
        key in S3.  Return the contents of the object as a string.
        See get_contents_to_file method for details about the
        parameters.
        """
        fp = BytesIO()
        self.get_contents_to_file(fp, headers, cb, num_cb, torrent=torrent,
                                  version_id=version_id,
                                  response_headers=response_headers)
        value = fp.getvalue()

        if encoding is not None:
            value = value.decode(encoding)

        return value

    def handle_version_headers(self, resp, force=False):
        provider = self.bucket.connection.provider
        # If the Key object already has a version_id attribute value, it
        # means that it represents an explicit version and the user is
        # doing a get_contents_*(version_id=<foo>) to retrieve another
        # version of the Key.  In that case, we don't really want to
        # overwrite the version_id in this Key object.  Comprende?
        if self.version_id is None or force:
            self.version_id = resp.getheader(provider.version_id, None)
        self.source_version_id = resp.getheader(provider.copy_source_version_id,
                                                None)
        if resp.getheader(provider.delete_marker, 'false') == 'true':
            self.delete_marker = True
        else:
            self.delete_marker = False


    def handle_encryption_headers(self, resp):
        provider = self.bucket.connection.provider
        if provider.server_side_encryption_header:
            self.encrypted = resp.getheader(
                provider.server_side_encryption_header, None)
        else:
            self.encrypted = None

    def handle_restore_headers(self, response):
        provider = self.bucket.connection.provider
        header = response.getheader(provider.restore_header)
        if header is None:
            return
        parts = header.split(',', 1)
        for part in parts:
            key, val = [i.strip() for i in part.split('=')]
            val = val.replace('"', '')
            if key == 'ongoing-request':
                self.ongoing_restore = True if val.lower() == 'true' else False
            elif key == 'expiry-date':
                self.expiry_date = val

    def handle_addl_headers(self, headers):
        """
        Used by Key subclasses to do additional, provider-specific
        processing of response headers. No-op for this base class.
        """
        pass

    def compute_md5(self, fp, size=None):
        hex_digest, b64_digest, data_size = compute_md5(fp, size=size)
        self.size = data_size
        return (hex_digest, b64_digest)
