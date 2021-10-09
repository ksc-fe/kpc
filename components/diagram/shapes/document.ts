import {DShape} from './shape';
import mx from '../mxgraph';
import {hasDocumentAvailable} from 'intact-shared';

const {mxActor, mxUtils, mxRectangle, mxCellRenderer, mxConnectionConstraint, mxPoint} = mx;

export class DDocument extends DShape {
    static displayName = 'DDocument';

    static defaults() {
        return {
            ...DShape.defaults(),
            width: 120,
            height: 80,
        };
    }

    public getStylesheet() {
        return 'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;'
    }
}

if (hasDocumentAvailable) {
    // Document shape
    const DocumentShape = function(this: any) {
        mxActor.call(this);
    };
    mxUtils.extend(DocumentShape, mxActor);
    DocumentShape.prototype.size = 0.3;
    /* istanbul ignore next */
    DocumentShape.prototype.getLabelMargins = function(rect: any) {
        if (mxUtils.getValue(this.style, 'boundedLbl', false)) {
            return new mxRectangle(0, 0, 0, parseFloat(mxUtils.getValue(
                this.style, 'size', this.size)) * rect.height);
        }

        return null;
    };
    DocumentShape.prototype.redrawPath = function(c: any, x: any, y: any, w: any, h: any) {
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
