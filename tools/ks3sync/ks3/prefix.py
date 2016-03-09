

class Prefix(object):
    def __init__(self, bucket=None, name=None):
        self.bucket = bucket
        self.name = name

    def startElement(self, name, attrs, connection):
        return None

    def endElement(self, name, value, connection):
        if name == 'Prefix':
            self.name = value
        else:
            setattr(self, name, value)

    @property
    def provider(self):
        provider = None
        if self.bucket and self.bucket.connection:
            provider = self.bucket.connection.provider
        return provider
