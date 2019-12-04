import {DShape} from './shape';
import mx from '../mxgraph';

const {mxGeometry} = mx;

export class DCircle extends DShape {
    defaults() {
        return {
            ...super.defaults(),
            width: 80,
        };
    }

    _getGeometry() {
        const {width, left, top} = this.get();
        return new mxGeometry(+left, +top, +width, +width);
    }

    _getStylesheet() {
        return 'ellipse;whiteSpace=wrap;html=1;aspect=fixed;';
    }
}
