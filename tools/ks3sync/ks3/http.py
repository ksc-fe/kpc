
import httplib
import time
import urllib

from ks3.auth import canonical_string, add_auth_header

class CallingFormat:
    PATH = 1
    SUBDOMAIN = 2
    VANITY = 3

def merge_meta(headers, metadata):
    final_headers = headers.copy()
    for k in metadata.keys():
        final_headers["x-kss-" + "meta-" + k] = metadata[k]

    return final_headers


def query_args_hash_to_string(query_args):    
    pairs = []
    for k, v in query_args.items():
        piece = k
        if v != None:
            piece += "=%s" % urllib.quote_plus(str(v).encode('utf-8'))
        pairs.append(piece)

    return '&'.join(pairs)


def get_object_url(age, bucket="", key="", secret_access_key="", access_key_id="", query_args={}):
    expire = str(int(time.time()) + age)
    headers = {"Date": expire}
    c_string = canonical_string("GET", bucket, key, query_args, headers)    
    path = c_string.split("\n")[-1]
    
    signature = urllib.quote_plus(encode(secret_access_key, c_string))
    if "?" in path:
        url = "http://kss.ksyun.com%s&Expires=%s&AccessKeyId=%s&Signature=%s" % \
            (path, expire, access_key_id, signature)
    else:
        url = "http://kss.ksyun.com%s?Expires=%s&AccessKeyId=%s&Signature=%s" % \
            (path, expire, access_key_id, signature)        
    return url


def make_request(server, port, access_key_id, access_key_secret, method, 
                 bucket="", key="", query_args=None, headers=None, data="", 
                 metadata=None, call_fmt=CallingFormat.PATH, is_secure=False):
    if not headers:
        headers = {}
    #if not query_args:
    #    query_args = {}
    if not metadata:
        metadata = {}

    path = ""
    if bucket:
        if call_fmt == CallingFormat.SUBDOMAIN:
            server = "%s.%s" % (bucket, server)
        elif call_fmt == CallingFormat.VANITY:
            server = bucket
        elif call_fmt == CallingFormat.PATH:
            path += "/%s" % bucket

    #TODO
    encode_key = urllib.quote_plus(key.encode('utf-8'))
    if '%20' in encode_key:
       encode_key = encode_key.replace('%20','+')

    if '%2A' in encode_key:
       encode_key = encode_key.replace('%2A','*')

    if '%7E' in encode_key:
       encode_key = encode_key.replace('%7E','~')

    if '%2F' in encode_key:
       encode_key = encode_key.replace('%2F','/')
    path += "/%s" % encode_key

    if query_args:
        #path += "?" + query_args_hash_to_string(query_args)
        path += "?" + query_args

    host = "%s:%d" % (server, port)
    
    if (is_secure):
        connection = httplib.HTTPSConnection(host)
    else:
        connection = httplib.HTTPConnection(host)

    final_headers = merge_meta(headers, metadata)
    if method == "PUT" and "Content-Length" not in final_headers and not data:
        final_headers["Content-Length"] = "0"
    if method.upper() == "POST" and "Content-Length" not in final_headers and not data:
        final_headers["Content-Length"] = str(len(data))

    add_auth_header(access_key_id, access_key_secret, final_headers, method,
                    bucket, key, query_args)

    connection.request(method, path, data, final_headers)
    resp = connection.getresponse()
    return resp
