import {DShape} from './shape';
import mx from '../mxgraph';

const {mxGeometry} = mx;

export class DCircle extends DShape {
    static displayName = 'DCircle';

    static defaults() {
        return {
            ...DShape.defaults(),
            width: 80,
        };
    }

    public getGeometry() {
        const {width, left, top} = this.get();
        return new mxGeometry(+left!, +top!, +width!, +width!);
    }

    public getStylesheet() {
        return 'ellipse;whiteSpace=wrap;html=1;aspect=fixed;';
    }
}
