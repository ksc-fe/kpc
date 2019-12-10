import mx from '../mx';

const {mxCylinder, mxUtils, mxRectangle, mxConnectionConstraint, mxPoint} = mx;

var cylinderGetCylinderSize = mxCylinder.prototype.getCylinderSize;

mxCylinder.prototype.getCylinderSize = function(x, y, w, h) {
    var size = mxUtils.getValue(this.style, 'size');

    if (size != null) {
        return h * Math.max(0, Math.min(1, size));
    } else {
        return cylinderGetCylinderSize.apply(this, arguments);
    }
};

mxCylinder.prototype.getLabelMargins = function(rect) {
    if (mxUtils.getValue(this.style, 'boundedLbl', false)) {
        var size = mxUtils.getValue(this.style, 'size', 0.15) * 2;

        return new mxRectangle(0, Math.min(this.maxHeight * this.scale, rect.height * size), 0, 0);
    }

    return null;
};

mxCylinder.prototype.constraints = [
    new mxConnectionConstraint(new mxPoint(0.15, 0.05), false),
    new mxConnectionConstraint(new mxPoint(0.5, 0), true),
    new mxConnectionConstraint(new mxPoint(0.85, 0.05), false),
    new mxConnectionConstraint(new mxPoint(0, 0.3), true),
    new mxConnectionConstraint(new mxPoint(0, 0.5), true),
    new mxConnectionConstraint(new mxPoint(0, 0.7), true),
    new mxConnectionConstraint(new mxPoint(1, 0.3), true),
    new mxConnectionConstraint(new mxPoint(1, 0.5), true),
    new mxConnectionConstraint(new mxPoint(1, 0.7), true),
    new mxConnectionConstraint(new mxPoint(0.15, 0.95), false),
    new mxConnectionConstraint(new mxPoint(0.5, 1), true),
    new mxConnectionConstraint(new mxPoint(0.85, 0.95), false)
];