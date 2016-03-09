#!/usr/bin/env python

# @author XU Yinfei(devinxutal@gmail.com)
# @date 2016/03/02 10:29:21
# @version $Revision$ 

import os
import sys
import getopt
from ks3.connection import Connection

ak = None
sk = None
bucket = None
force_sync = False
host = 'ks3-cn-beijing.ksyun.com'

def print_usage_and_exit():
    print  """
%s [-hfHasb] src dst_dir
   put src dir or src file to ks3 dst_dir
   Options:
     -h        print help info
     -f        force sync files without prompt
     -H        specify ks3 service host, default is 'ks3-cn-beijing.ksyun.com'
     -a ak     specify ks3 user access key
     -s sk     specify ks3 user secret access key
     -b bucket specify ks3 bucket name
""" % sys.argv[0]
    sys.exit(1)

def get_bucket():
    c = Connection(ak, sk, host=host)
    return c.get_bucket(bucket)

def collect_local_files(src):
    src_abs = os.path.abspath(src)
    base_dir = os.path.dirname(src_abs)
    filename = os.path.basename(src_abs)
    if (os.path.isfile(src_abs)):
        return (base_dir, [filename])
    files = []
    cwd = os.getcwd()
    os.chdir(base_dir)
    for entry in os.walk(filename):
        d = entry[0]
        for f in entry[2]:
            if not f.startswith('.'):
                files.append('/'.join([d, f]))
    return base_dir, files

def dest_filename(dst_dir, src_file):
    while dst_dir.startswith('/'):
        dst_dir = dst_dir[1:]
    while dst_dir.endswith('/'):
        dst_dir = dst_dir[:-1]
    return os.path.join(dst_dir, src_file)

def ks3put(bucket, src, dst):
    for retry in range(3):
        try:
            k = bucket.new_key(dst)
            res = k.set_contents_from_filename(src, policy='public-read')
            if res.status == 200:
                return bucket
        except Exception as e:
            print "error occured while pushing %s: %s" % (src, e)
            bucket = get_bucket()
    print "put %s failed" % src
    sys.exit(1)

def sync(bucket, src, dst, force_sync=False):
    # get conflict stats and print warnings
    base_dir, files = collect_local_files(src)
    if not force_sync:
        conflicts = []
        for f in files:
            dst_file = dest_filename(dst, f)
            k = bucket.get_key(dst_file)
            if k: 
                conflicts.append(dst_file)
        print "%d files will be pushed to buckets, in which %d files already exist and will be overwitten." % (len(files), len(conflicts))
        while True:
            key = raw_input("Sure to continue? (Y/n):")
            if key in ["n", "N"]:
                print "Aborted"
                sys.exit(0)
            elif key in ["y", "Y", ""]:
                break
    for f in files:
        file_path = os.path.join(base_dir, f)
        dst_file = dest_filename(dst, f)
        print "push file %s to %s" % (file_path, dst_file)
        bucket = ks3put(bucket, file_path, dst_file)
            
    print "synced finished. %d files pushed" % len(files)

if __name__ == "__main__":
    try: 
        options, args = getopt.getopt(sys.argv[1:], 'hfH:a:s:b:')
        for k, v in options:
            if k == '-h':
                print_usage_and_exit()
            if k == '-f':
                force_sync = True
            elif k == '-a':
                ak = v
            elif k == '-s':
                sk = v
            elif k == '-b':
                bucket = v
    except getopt.GetoptError:
        print_usage_and_exit()
    if not ak or not sk or not bucket or len(args) != 2:    
        print_usage_and_exit()
    print ak, sk, bucket, args    
    b = get_bucket()
    sync(b, args[0], args[1], force_sync)
        

#vim: set ts=4 sw=4 sts=4 tw=100 et:
