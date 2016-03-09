
class User(object):
    def __init__(self, parent=None, id='', display_name=''):
        if parent:
            parent.owner = self
        self.type = None
        self.id = id
        self.display_name = display_name

    def startElement(self, name, attrs, connection):
        return None

    def endElement(self, name, value, connection):
        if name == 'DisplayName':
            self.display_name = value
        elif name == 'ID':
            self.id = value
        else:
            setattr(self, name, value)

    def to_xml(self, element_name='Owner'):
        if self.type:
            s = '<%s xsi:type="%s">' % (element_name, self.type)
        else:
            s = '<%s>' % element_name
        s += '<ID>%s</ID>' % self.id
        s += '<DisplayName>%s</DisplayName>' % self.display_name
        s += '</%s>' % element_name
        return s
