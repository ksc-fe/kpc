import mx from '../mx';

const {mxRhombus, mxConstants, mxRectangle, mxEllipse} = mx;

// Overrides painting of rhombus shape to allow for double style
var mxRhombusPaintVertexShape = mxRhombus.prototype.paintVertexShape;
mxRhombus.prototype.getLabelBounds = function(rect) {
    if (this.style['double'] == 1) {
        var margin = (Math.max(2, this.strokewidth + 1) * 2 + parseFloat(
            this.style[mxConstants.STYLE_MARGIN] || 0)) * this.scale;

        return new mxRectangle(rect.x + margin, rect.y + margin,
            rect.width - 2 * margin, rect.height - 2 * margin);
    }

    return rect;
};
mxRhombus.prototype.paintVertexShape = function(c, x, y, w, h) {
    mxRhombusPaintVertexShape.apply(this, arguments);

    if (!this.outline && this.style['double'] == 1) {
        var margin = Math.max(2, this.strokewidth + 1) * 2 +
            parseFloat(this.style[mxConstants.STYLE_MARGIN] || 0);
        x += margin;
        y += margin;
        w -= 2 * margin;
        h -= 2 * margin;

        if (w > 0 && h > 0) {
            c.setShadow(false);

            // Workaround for closure compiler bug where the lines with x and y above
            // are removed if arguments is used as second argument in call below.
            mxRhombusPaintVertexShape.apply(this, [c, x, y, w, h]);
        }
    }
};

mxRhombus.prototype.constraints = mxEllipse.prototype.constraints;