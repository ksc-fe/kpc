import {DShape} from './shape';
import mx from '../mxgraph';

const {mxGeometry} = mx;

export class DEllipse extends DShape {
    static displayName = 'DEllipse';

    static defaults() {
        return {
            ...DShape.defaults(),
            width: 120,
            height: 80,
        };
    }

    public getStylesheet() {
        return 'ellipse;whiteSpace=wrap;html=1;';
    }
}
