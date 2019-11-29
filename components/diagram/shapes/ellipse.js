import {DShape} from './shape';
import mx from '../mxgraph';

const {mxGeometry} = mx;

export class DEllipse extends DShape {
    defaults() {
        return {
            ...super.defaults(),
            width: 120,
            height: 80,
        };
    }

    _getStylesheet() {
        return 'ellipse;whiteSpace=wrap;html=1;';
    }
}
