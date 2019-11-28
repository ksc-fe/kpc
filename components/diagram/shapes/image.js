import Shape from './shape';
import mx from '../mxgraph';

const {mxCell, mxGeometry} = mx;

export default class Image extends Shape {
    defaults() {
        return {
            ...super.defaults(),
            width: 80,
            height: 80,
            src: '',
        };
    }

    _cell() {
        const {html, width, height, left, top, src} = this.get();
        const geo = new mxGeometry(+left, +top, +width, +height);
        const stylesheet = `image;html=1;labelBackgroundColor=#ffffff;image=${src};`;

        return new mxCell(html, geo, stylesheet);
    }
}
