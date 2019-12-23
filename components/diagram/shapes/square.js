import {DRectangle} from './rectangle';
import mx from '../mxgraph';

const {mxGeometry} = mx;

export class DSquare extends DRectangle {
    static displayName = 'DSquare';

    defaults() {
        return {
            ...super.defaults(),
            width: 80,
        };
    }

    _getStylesheet() {
        const stylesheet = super._getStylesheet();

        return `${stylesheet}aspect=fixed;`;
    }

    _getGeometry() {
        const {width, left, top} = this.get();
        return new mxGeometry(+left, +top, +width, +width);
    }
}
