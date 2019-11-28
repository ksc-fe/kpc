import Shape from './shape';
import mx from '../mxgraph';

const {mxCell, mxGeometry} = mx;

export default class Rectangle extends Shape {
    defaults() {
        return {
            ...super.defaults(),
            width: 120,
            height: 60,
            rounded: false,
        };
    }

    _cell() {
        const {html, width, height, rounded, top, left} = this.get();
        const geo = new mxGeometry(+left, +top, +width, +height);
        const stylesheet = `rounded=${rounded ? 1 : 0};whiteSpace=wrap;html=1;`;
        const cell = new mxCell(html, geo, stylesheet);

        return cell;
    }
}
