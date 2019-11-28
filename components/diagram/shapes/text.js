import {DShape} from './shape';
import mx from '../mxgraph';

const {mxCell, mxGeometry} = mx;

export class DText extends DShape {
    defaults() {
        return {
            ...super.defaults(),
            width: 40,
            height: 20,
        };
    }

    _cell() {
        const {html, width, height, left, top} = this.get();
        const geo = new mxGeometry(+left, +top, +width, +height);
        const stylesheet = `text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;`;

        return new mxCell(html, geo, stylesheet);
    }
}
