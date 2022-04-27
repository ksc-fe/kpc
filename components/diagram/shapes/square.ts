import {DRectangle} from './rectangle';
import mx from '../mxgraph';

const {mxGeometry} = mx;

export class DSquare extends DRectangle {
    static displayName = 'DSquare';

    static defaults() {
        return {
            ...DRectangle.defaults(),
            width: 80,
        };
    }

    getStylesheet() {
        const stylesheet = super.getStylesheet();

        return `${stylesheet}aspect=fixed;`;
    }

    getGeometry() {
        const {width, left, top} = this.get();
        return new mxGeometry(+left!, +top!, +width!, +width!);
    }
}
