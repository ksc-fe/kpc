import {DShape} from './shape';
import mx from '../mxgraph';
import {hasDocumentAvailable} from 'intact-shared';

const {mxActor, mxUtils, mxRectangle, mxCellRenderer, mxHexagon, mxConstants, mxPoint, mxPerimeter, mxStyleRegistry} = mx;

export class DCallout extends DShape {
    static displayName = 'DCallout';

    static defaults() {
        return {
            ...DShape.defaults(),
            width: 120,
            height: 80,
        };
    }

    public getStylesheet() {
        return 'shape=callout;whiteSpace=wrap;html=1;perimeter=calloutPerimeter;'
    }
}

if (hasDocumentAvailable) {
    // Callout shape
    const CalloutShape = function(this: any) {
        mxActor.call(this);
    };
    mxUtils.extend(CalloutShape, mxHexagon);
    CalloutShape.prototype.size = 30;
    CalloutShape.prototype.position = 0.5;
    CalloutShape.prototype.position2 = 0.5;
    CalloutShape.prototype.base = 20;
    /* istanbul ignore next */
    CalloutShape.prototype.getLabelMargins = function() {
        return new mxRectangle(0, 0, 0, parseFloat(mxUtils.getValue(
            this.style, 'size', this.size)) * this.scale);
    };
    /* istanbul ignore next */
    CalloutShape.prototype.isRoundable = function() {
        return true;
    };
    CalloutShape.prototype.redrawPath = function(c: any, x: number, y: number, w: number, h: number) {
        var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
        var s = Math.max(0, Math.min(h, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
        var dx = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'position', this.position))));
        var dx2 = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'position2', this.position2))));
        var base = Math.max(0, Math.min(w, parseFloat(mxUtils.getValue(this.style, 'base', this.base))));

        this.addPoints(c, [new mxPoint(0, 0), new mxPoint(w, 0), new mxPoint(w, h - s),
                new mxPoint(Math.min(w, dx + base), h - s), new mxPoint(dx2, h),
                new mxPoint(Math.max(0, dx), h - s), new mxPoint(0, h - s)
            ],
            this.isRounded, arcSize, true, [4]);
    };

    mxCellRenderer.registerShape('callout', CalloutShape);

    // Callout Perimeter
    mxPerimeter.CalloutPerimeter = function(bounds: any, vertex: any, next: any, orthogonal: any) {
        return mxPerimeter.RectanglePerimeter(mxUtils.getDirectedBounds(bounds, new mxRectangle(0, 0, 0,
                Math.max(0, Math.min(bounds.height, parseFloat(mxUtils.getValue(vertex.style, 'size',
                    CalloutShape.prototype.size)) * vertex.view.scale))),
            vertex.style), vertex, next, orthogonal);
    };

    mxStyleRegistry.putValue('calloutPerimeter', mxPerimeter.CalloutPerimeter);
}
