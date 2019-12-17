import {DShape} from './shape';
import mx from '../mxgraph';

const {mxActor, mxUtils, mxCellRenderer, mxHexagon, mxConstants, mxPoint, mxPerimeter, mxStyleRegistry} = mx;

export class DHexagon extends DShape {
    defaults() {
        return {
            ...super.defaults(),
            width: 120,
            height: 80,
        };
    }

    _getStylesheet() {
        return 'shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;';
    }
}

// Hexagon shape
function HexagonShape() {
    mxActor.call(this);
};
mxUtils.extend(HexagonShape, mxHexagon);
HexagonShape.prototype.size = 0.25;
/* istanbul ignore next */
HexagonShape.prototype.isRoundable = function() {
    return true;
};
HexagonShape.prototype.redrawPath = function(c, x, y, w, h) {
    var s = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(s, 0), new mxPoint(w - s, 0), new mxPoint(w, 0.5 * h), new mxPoint(w - s, h),
        new mxPoint(s, h), new mxPoint(0, 0.5 * h)
    ], this.isRounded, arcSize, true);
};

mxCellRenderer.registerShape('hexagon', HexagonShape);

// Hexagon Perimeter 2 (keep existing one)
mxPerimeter.HexagonPerimeter2 = function(bounds, vertex, next, orthogonal) {
    var size = HexagonShape.prototype.size;

    if (vertex != null) {
        size = mxUtils.getValue(vertex.style, 'size', size);
    }

    var x = bounds.x;
    var y = bounds.y;
    var w = bounds.width;
    var h = bounds.height;

    var cx = bounds.getCenterX();
    var cy = bounds.getCenterY();

    var direction = (vertex != null) ? mxUtils.getValue(
        vertex.style, mxConstants.STYLE_DIRECTION,
        mxConstants.DIRECTION_EAST) : mxConstants.DIRECTION_EAST;
    var vertical = direction == mxConstants.DIRECTION_NORTH ||
        direction == mxConstants.DIRECTION_SOUTH;
    var points;

    if (vertical) {
        var dy = h * Math.max(0, Math.min(1, size));
        points = [new mxPoint(cx, y), new mxPoint(x + w, y + dy), new mxPoint(x + w, y + h - dy),
            new mxPoint(cx, y + h), new mxPoint(x, y + h - dy),
            new mxPoint(x, y + dy), new mxPoint(cx, y)
        ];
    } else {
        var dx = w * Math.max(0, Math.min(1, size));
        points = [new mxPoint(x + dx, y), new mxPoint(x + w - dx, y), new mxPoint(x + w, cy),
            new mxPoint(x + w - dx, y + h), new mxPoint(x + dx, y + h),
            new mxPoint(x, cy), new mxPoint(x + dx, y)
        ];
    }

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

mxStyleRegistry.putValue('hexagonPerimeter2', mxPerimeter.HexagonPerimeter2);
