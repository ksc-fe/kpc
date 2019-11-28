import {DShape} from './shape';
import mx from '../mxgraph';

const {mxCell, mxGeometry} = mx;

export class DCircle extends DShape {
    defaults() {
        return {
            ...super.defaults(),
            width: 80,
        };
    }

    _cell() {
        const {html, width, left, top} = this.get();
        const geo = new mxGeometry(+left, +top, +width, +width);
        const stylesheet = 'ellipse;whiteSpace=wrap;html=1;aspect=fixed;';

        return new mxCell(html, geo, stylesheet);
    }
}
