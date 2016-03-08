import urllib

def fun(bucketname, url="http://10.4.22.2:9911/console"):
    para = urllib.urlencode({"bucketname": bucketname})
    path = url + "?%s" % para
    resp = urllib.urlopen(path)
    return resp.read()

if __name__ == '__main__':
    fun("sdktest123")
