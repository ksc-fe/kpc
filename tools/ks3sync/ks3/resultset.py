
from ks3.user import User


class ResultSet(list):
    """
    The ResultSet is used to pass results back from the services
    to the client. It is light wrapper around Python's :py:class:`list` class,
    with some additional methods for parsing XML results from AWS.
    """
    def __init__(self, marker_elem=None):
        list.__init__(self)
        if isinstance(marker_elem, list):
            self.markers = marker_elem
        else:
            self.markers = []
        self.marker = None
        self.key_marker = None
        self.next_marker = None  # avail when delimiter used
        self.next_key_marker = None
        self.next_upload_id_marker = None
        self.next_version_id_marker = None
        self.next_generation_marker = None
        self.version_id_marker = None
        self.is_truncated = False
        self.next_token = None
        self.status = True

    def startElement(self, name, attrs, connection):
        for t in self.markers:
            if name == t[0]:
                obj = t[1](connection)
                self.append(obj)
                return obj
        if name == 'Owner':
            # Makes owner available for get_service and
            # perhaps other lists where not handled by
            # another element.
            self.owner = User()
            return self.owner
        return None

    def to_boolean(self, value, true_value='true'):
        if value == true_value:
            return True
        else:
            return False

    def endElement(self, name, value, connection):
        if name == 'IsTruncated':
            self.is_truncated = self.to_boolean(value)
        elif name == 'Marker':
            self.marker = value
        elif name == 'KeyMarker':
            self.key_marker = value
        elif name == 'NextMarker':
            self.next_marker = value
        elif name == 'NextKeyMarker':
            self.next_key_marker = value
        elif name == 'VersionIdMarker':
            self.version_id_marker = value
        elif name == 'NextVersionIdMarker':
            self.next_version_id_marker = value
        elif name == 'NextGenerationMarker':
            self.next_generation_marker = value
        elif name == 'UploadIdMarker':
            self.upload_id_marker = value
        elif name == 'NextUploadIdMarker':
            self.next_upload_id_marker = value
        elif name == 'Bucket':
            self.bucket = value
        elif name == 'MaxUploads':
            self.max_uploads = int(value)
        elif name == 'MaxItems':
            self.max_items = int(value)
        elif name == 'Prefix':
            self.prefix = value
        elif name == 'return':
            self.status = self.to_boolean(value)
        elif name == 'StatusCode':
            self.status = self.to_boolean(value, 'Success')
        elif name == 'ItemName':
            self.append(value)
        elif name == 'NextToken':
            self.next_token = value
        elif name == 'nextToken':
            self.next_token = value
            # Code exists which expects nextToken to be available, so we
            # set it here to remain backwards-compatibile.
            self.nextToken = value
        elif name == 'BoxUsage':
            try:
                connection.box_usage += float(value)
            except:
                pass
        elif name == 'IsValid':
            self.status = self.to_boolean(value, 'True')
        else:
            setattr(self, name, value)


class BooleanResult(object):

    def __init__(self, marker_elem=None):
        self.status = True
        self.request_id = None
        self.box_usage = None

    def __repr__(self):
        if self.status:
            return 'True'
        else:
            return 'False'

    def __nonzero__(self):
        return self.status

    def startElement(self, name, attrs, connection):
        return None

    def to_boolean(self, value, true_value='true'):
        if value == true_value:
            return True
        else:
            return False

    def endElement(self, name, value, connection):
        if name == 'return':
            self.status = self.to_boolean(value)
        elif name == 'StatusCode':
            self.status = self.to_boolean(value, 'Success')
        elif name == 'IsValid':
            self.status = self.to_boolean(value, 'True')
        elif name == 'RequestId':
            self.request_id = value
        elif name == 'requestId':
            self.request_id = value
        elif name == 'BoxUsage':
            self.request_id = value
        else:
            setattr(self, name, value)
