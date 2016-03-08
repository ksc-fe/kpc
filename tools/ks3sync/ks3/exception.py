
import json
import xml.sax


from ks3 import handler

class KS3ClientError(Exception):
    """
    General KS3 Client error
    """
    def __init__(self, reason, *args):
        super(KS3ClientError, self).__init__(reason, *args)
        self.reason = reason

    def __repr__(self):
        return 'KS3ClientError: %s' % self.reason

    def __str__(self):
        return 'KS3ClientError: %s' % self.reason

class KS3ServerError(Exception):
    def __init__(self, status, reason, body=None, *args):
        super(KS3ServerError, self).__init__(status, reason, body, *args)
        self.status = status
        self.reason = reason
        self.body = body or ''
        self.request_id = None
        self.error_code = None
        self._error_message = None
        self.message = ''
        self.box_usage = None

        if isinstance(self.body, bytes):
            try:
                self.body = self.body.decode('utf-8')
            except UnicodeDecodeError:
                print 'Unable to decode body from bytes!'

        # Attempt to parse the error response. If body isn't present,
        # then just ignore the error response.
        if self.body:
            # Check if it looks like a ``dict``.
            if hasattr(self.body, 'items'):
                # It's not a string, so trying to parse it will fail.
                # But since it's data, we can work with that.
                self.request_id = self.body.get('RequestId', None)

                if 'Error' in self.body:
                    # XML-style
                    error = self.body.get('Error', {})
                    self.error_code = error.get('Code', None)
                    self.message = error.get('Message', None)
                else:
                    # JSON-style.
                    self.message = self.body.get('message', None)
            else:
                try:
                    h = handler.XmlHandlerWrapper(self, self)
                    h.parseString(self.body)
                except (TypeError, xml.sax.SAXParseException):
                    # What if it's JSON? Let's try that.
                    try:
                        parsed = json.loads(self.body)

                        if 'RequestId' in parsed:
                            self.request_id = parsed['RequestId']
                        if 'Error' in parsed:
                            if 'Code' in parsed['Error']:
                                self.error_code = parsed['Error']['Code']
                            if 'Message' in parsed['Error']:
                                self.message = parsed['Error']['Message']

                    except (TypeError, ValueError):
                        # Remove unparsable message body so we don't include garbage
                        # in exception. But first, save self.body in self.error_message
                        # because occasionally we get error messages from Eucalyptus
                        # that are just text strings that we want to preserve.
                        self.message = self.body
                        self.body = None

    def __getattr__(self, name):
        if name == 'error_message':
            return self.message
        if name == 'code':
            return self.error_code
        raise AttributeError

    def __setattr__(self, name, value):
        if name == 'error_message':
            self.message = value
        else:
            super(KS3ServerError, self).__setattr__(name, value)

    def __repr__(self):
        return '%s: %s %s\n%s' % (self.__class__.__name__,
                                  self.status, self.reason, self.body)

    def __str__(self):
        return '%s: %s %s\n%s' % (self.__class__.__name__,
                                  self.status, self.reason, self.body)

    def startElement(self, name, attrs, connection):
        pass

    def endElement(self, name, value, connection):
        if name in ('RequestId', 'RequestID'):
            self.request_id = value
        elif name == 'Code':
            self.error_code = value
        elif name == 'Message':
            self.message = value
        elif name == 'BoxUsage':
            self.box_usage = value
        return None

    def _cleanupParsedProperties(self):
        self.request_id = None
        self.error_code = None
        self.message = None
        self.box_usage = None

class StorageResponseError(KS3ServerError):
    """
    Error in response from a storage service.
    """
    def __init__(self, status, reason, body=None):
        self.resource = None
        super(StorageResponseError, self).__init__(status, reason, body)

    def startElement(self, name, attrs, connection):
        return super(StorageResponseError, self).startElement(
            name, attrs, connection)

    def endElement(self, name, value, connection):
        if name == 'Resource':
            self.resource = value
        else:
            return super(StorageResponseError, self).endElement(
                name, value, connection)

    def _cleanupParsedProperties(self):
        super(StorageResponseError, self)._cleanupParsedProperties()
        for p in ('resource'):
            setattr(self, p, None)

class S3ResponseError(StorageResponseError):
    """
    Error in response from S3.
    """
    def __init__(self, status, reason, body=None):
        super(StorageResponseError, self).__init__(status, reason, body)


class StorageCreateError(KS3ServerError):
    """
    Error creating a bucket or key on a storage service.
    """
    def __init__(self, status, reason, body=None):
        self.bucket = None
        super(StorageCreateError, self).__init__(status, reason, body)

    def endElement(self, name, value, connection):
        if name == 'BucketName':
            self.bucket = value
        else:
            return super(StorageCreateError, self).endElement(name, value, connection)

class StoragePermissionsError(KS3ClientError):
    """
    Permissions error when accessing a bucket or key on a storage service.
    """
    pass

class S3CreateError(StorageCreateError):
    """
    Error creating a bucket or key on S3.
    """
    pass

class S3PermissionsError(StoragePermissionsError):
    """
    Permissions error when accessing a bucket or key on S3.
    """
    pass

class StorageDataError(KS3ClientError):
    """
    Error receiving data from a storage service.
    """
    pass

class S3DataError(StorageDataError):
    """
    Error receiving data from S3.
    """
    pass

class StorageCopyError(KS3ClientError):
    """
    Error copying a key on a storage service.
    """
    pass

class S3CopyError(StorageCopyError):
    """
    Error copying a key on S3.
    """
    pass


class PleaseRetryException(Exception):
    """
    Indicates a request should be retried.
    """
    def __init__(self, message, response=None):
        self.message = message
        self.response = response

    def __repr__(self):
        return 'PleaseRetryException("%s", %s)' % (
            self.message,
            self.response
        )
