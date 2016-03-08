"""
Some handy utility functions used by several classes.
"""

import six

from hashlib import md5, sha512

from ks3 import provider
from ks3.compat import encodebytes

def get_utf8_value(value):
    if not six.PY2 and isinstance(value, bytes):
        return value

    if not isinstance(value, six.string_types):
        value = six.text_type(value)

    if isinstance(value, six.text_type):
        value = value.encode('utf-8')

    return value

def merge_headers_by_name(name, headers):
    """
    Takes a specific header name and a dict of headers {"name": "value"}.
    Returns a string of all header values, comma-separated, that match the
    input header name, case-insensitive.

    """
    matching_headers = find_matching_headers(name, headers)
    return ','.join(str(headers[h]) for h in matching_headers
                    if headers[h] is not None)

def find_matching_headers(name, headers):
    """
    Takes a specific header name and a dict of headers {"name": "value"}.
    Returns a list of matching header names, case-insensitive.

    """
    return [h for h in headers if h.lower() == name.lower()]


def merge_meta(headers, metadata, provider=None):
    if not provider:
        provider = ks3.provider.get_default()
    metadata_prefix = provider.metadata_prefix
    final_headers = headers.copy()
    for k in metadata.keys():
        if k.lower() in ks3.key.Key.base_user_settable_fields:
            final_headers[k] = metadata[k]
        else:
            final_headers[metadata_prefix + k] = metadata[k]

    return final_headers


def compute_md5(fp, buf_size=8192, size=None):
    """
    Compute MD5 hash on passed file and return results in a tuple of values.
    """
    return compute_hash(fp, buf_size, size, hash_algorithm=md5)


def compute_hash(fp, buf_size=8192, size=None, hash_algorithm=md5):
    hash_obj = hash_algorithm()
    spos = fp.tell()
    if size and size < buf_size:
        s = fp.read(size)
    else:
        s = fp.read(buf_size)
    while s:
        if not isinstance(s, bytes):
            s = s.encode('utf-8')
        hash_obj.update(s)
        if size:
            size -= len(s)
            if size <= 0:
                break
        if size and size < buf_size:

            s = fp.read(size)
        else:
            s = fp.read(buf_size)
    hex_digest = hash_obj.hexdigest()
    base64_digest = encodebytes(hash_obj.digest()).decode('utf-8')
    if base64_digest[-1] == '\n':
        base64_digest = base64_digest[0:-1]
    # data_size based on bytes read.
    data_size = fp.tell() - spos
    fp.seek(spos)
    return (hex_digest, base64_digest, data_size)
