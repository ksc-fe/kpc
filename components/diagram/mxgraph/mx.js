import mx from 'mxgraph';
import {hasWindow} from '../../utils';

if (hasWindow) {
    window.mxLoadResources = false;
    window.mxLoadStylesheets = false;
}

const doll = mx();
const {mxImage} = doll;

export default doll;

export function createSvgImage(w, h, data) {
    const tmp = unescape(encodeURIComponent(
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + w + 'px" height="' + h + 'px" ' +
        'version="1.1">' + data + '</svg>'));

    return new mxImage('data:image/svg+xml;base64,' + btoa(tmp), w, h);
}
