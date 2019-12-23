import {DShape} from './shape';
import mx from '../mxgraph';
import {hasWindow} from '../../utils';

const {mxActor, mxUtils, mxRectangle, mxCellRenderer, mxConnectionConstraint, mxPoint} = mx;

export class DDocument extends DShape {
    static displayName = 'DDocument';

    defaults() {
        return {
            ...super.defaults(),
            width: 120,
            height: 80,
        };
    }

    _getStylesheet() {
        return 'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;'
    }
}

if (hasWindow) {
    // Document shape
    function DocumentShape() {
        mxActor.call(this);
    };
    mxUtils.extend(DocumentShape, mxActor);
    DocumentShape.prototype.size = 0.3;
    /* istanbul ignore next */
    DocumentShape.prototype.getLabelMargins = function(rect) {
        if (mxUtils.getValue(this.style, 'boundedLbl', false)) {
            return new mxRectangle(0, 0, 0, parseFloat(mxUtils.getValue(
                this.style, 'size', this.size)) * rect.height);
        }

        return null;
    };
    DocumentShape.prototype.redrawPath = function(c, x, y, w, h) {
        var dy = h * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
        var fy = 1.4;

        c.moveTo(0, 0);
        c.lineTo(w, 0);
        c.lineTo(w, h - dy / 2);
        c.quadTo(w * 3 / 4, h - dy * fy, w / 2, h - dy / 2);
        c.quadTo(w / 4, h - dy * (1 - fy), 0, h - dy / 2);
        c.lineTo(0, dy / 2);
        c.close();
        c.end();
    };

    mxCellRenderer.registerShape('document', DocumentShape);

    DocumentShape.prototype.constraints = [
        new mxConnectionConstraint(new mxPoint(0.25, 0), true),
        new mxConnectionConstraint(new mxPoint(0.5, 0), true),
        new mxConnectionConstraint(new mxPoint(0.75, 0), true),
        new mxConnectionConstraint(new mxPoint(0, 0.25), true),
        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
        new mxConnectionConstraint(new mxPoint(0, 0.75), true),
        new mxConnectionConstraint(new mxPoint(1, 0.25), true),
        new mxConnectionConstraint(new mxPoint(1, 0.5), true),
        new mxConnectionConstraint(new mxPoint(1, 0.75), true)
    ];
}
