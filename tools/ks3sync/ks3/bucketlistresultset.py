
import six
import urllib

def bucket_lister(bucket, prefix='', delimiter='', marker=''):
    """
    A generator function for listing keys in a bucket.
    """
    more_results = True
    k = None
    while more_results:
        rs = bucket.get_all_keys(prefix=prefix, marker=marker,
                                 delimiter=delimiter)
        for k in rs:
            yield k
        if k:
            marker = rs.next_marker or k.name
        if marker:
            if isinstance(marker, six.text_type):
                marker = marker.encode('utf-8')
            marker = urllib.unquote(marker)
        more_results= rs.is_truncated

class BucketListResultSet(object):
    """
    A resultset for listing keys within a bucket.  Uses the bucket_lister
    generator function and implements the iterator interface.  This
    transparently handles the results paging from S3 so even if you have
    many thousands of keys within the bucket you can iterate over all
    keys in a reasonably efficient manner.
    """

    def __init__(self, bucket=None, prefix='', delimiter='', marker=''):
        self.bucket = bucket
        self.prefix = prefix
        self.delimiter = delimiter
        self.marker = marker

    def __iter__(self):
        return bucket_lister(self.bucket, prefix=self.prefix,
                             delimiter=self.delimiter, marker=self.marker)

def multipart_upload_lister(bucket, key_marker='',
                            upload_id_marker='',
                            headers=None, encoding_type=None):
    """
    A generator function for listing multipart uploads in a bucket.
    """
    more_results = True
    k = None
    while more_results:
        rs = bucket.get_all_multipart_uploads(key_marker=key_marker,
                                              upload_id_marker=upload_id_marker,
                                              headers=headers,
                                              encoding_type=encoding_type)
        for k in rs:
            yield k
        key_marker = rs.next_key_marker
        upload_id_marker = rs.next_upload_id_marker
        more_results= rs.is_truncated

class MultiPartUploadListResultSet(object):
    """
    A resultset for listing multipart uploads within a bucket.
    Uses the multipart_upload_lister generator function and
    implements the iterator interface.  This
    transparently handles the results paging from S3 so even if you have
    many thousands of uploads within the bucket you can iterate over all
    keys in a reasonably efficient manner.
    """
    def __init__(self, bucket=None, key_marker='',
                 upload_id_marker='', headers=None, encoding_type=None):
        self.bucket = bucket
        self.key_marker = key_marker
        self.upload_id_marker = upload_id_marker
        self.headers = headers
        self.encoding_type = encoding_type

    def __iter__(self):
        return multipart_upload_lister(self.bucket,
                                       key_marker=self.key_marker,
                                       upload_id_marker=self.upload_id_marker,
                                       headers=self.headers,
                                       encoding_type=self.encoding_type)
