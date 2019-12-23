import {DShape} from './shape';
import mx from '../mxgraph';
import {hasWindow} from '../../utils';

const {mxActor, mxUtils, mxCellRenderer, mxConstants, mxPoint, mxRectangleShape, mxPerimeter, mxStyleRegistry} = mx;

export class DParallelogram extends DShape {
    static displayName = 'DParallelogram';

    defaults() {
        return {
            ...super.defaults(),
            width: 120,
            height: 60,
        };
    }

    _getStylesheet() {
        return 'shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;'
    }
}

if (hasWindow) {
    // Parallelogram shape
    function ParallelogramShape() {
        mxActor.call(this);
    };
    mxUtils.extend(ParallelogramShape, mxActor);
    ParallelogramShape.prototype.size = 0.2;
    /* istanbul ignore next */
    ParallelogramShape.prototype.isRoundable = function() {
        return true;
    };
    ParallelogramShape.prototype.redrawPath = function(c, x, y, w, h) {
        var dx = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
        var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
        this.addPoints(c, [new mxPoint(0, h), new mxPoint(dx, 0), new mxPoint(w, 0), new mxPoint(w - dx, h)],
            this.isRounded, arcSize, true);
        c.end();
    };

    mxCellRenderer.registerShape('parallelogram', ParallelogramShape);

    ParallelogramShape.prototype.constraints = mxRectangleShape.prototype.constraints;

    // Parallelogram Perimeter
    mxPerimeter.ParallelogramPerimeter = function(bounds, vertex, next, orthogonal) {
        var size = ParallelogramShape.prototype.size;

        if (vertex != null) {
            size = mxUtils.getValue(vertex.style, 'size', size);
        }

        var x = bounds.x;
        var y = bounds.y;
        var w = bounds.width;
        var h = bounds.height;

        var direction = (vertex != null) ? mxUtils.getValue(
            vertex.style, mxConstants.STYLE_DIRECTION,
            mxConstants.DIRECTION_EAST) : mxConstants.DIRECTION_EAST;
        var vertical = direction == mxConstants.DIRECTION_NORTH ||
            direction == mxConstants.DIRECTION_SOUTH;
        var points;

        if (vertical) {
            var dy = h * Math.max(0, Math.min(1, size));
            points = [new mxPoint(x, y), new mxPoint(x + w, y + dy),
                new mxPoint(x + w, y + h), new mxPoint(x, y + h - dy), new mxPoint(x, y)
            ];
        } else {
            var dx = w * Math.max(0, Math.min(1, size));
            points = [new mxPoint(x + dx, y), new mxPoint(x + w, y),
                new mxPoint(x + w - dx, y + h), new mxPoint(x, y + h), new mxPoint(x + dx, y)
            ];
        }

        var cx = bounds.getCenterX();
        var cy = bounds.getCenterY();

        var p1 = new mxPoint(cx, cy);

        if (orthogonal) {
            if (next.x < x || next.x > x + w) {
                p1.y = next.y;
            } else {
                p1.x = next.x;
            }
        }

        return mxUtils.getPerimeterPoint(points, p1, next);
    };

    mxStyleRegistry.putValue('parallelogramPerimeter', mxPerimeter.ParallelogramPerimeter);
}
