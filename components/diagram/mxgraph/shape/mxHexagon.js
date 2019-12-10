import mx from '../mx';

const {mxHexagon, mxConnectionConstraint, mxPoint} = mx;

mxHexagon.prototype.constraints = [
    new mxConnectionConstraint(new mxPoint(0.375, 0), true),
    new mxConnectionConstraint(new mxPoint(0.5, 0), true),
    new mxConnectionConstraint(new mxPoint(0.625, 0), true),
    new mxConnectionConstraint(new mxPoint(0, 0.25), true),
    new mxConnectionConstraint(new mxPoint(0, 0.5), true),
    new mxConnectionConstraint(new mxPoint(0, 0.75), true),
    new mxConnectionConstraint(new mxPoint(1, 0.25), true),
    new mxConnectionConstraint(new mxPoint(1, 0.5), true),
    new mxConnectionConstraint(new mxPoint(1, 0.75), true),
    new mxConnectionConstraint(new mxPoint(0.375, 1), true),
    new mxConnectionConstraint(new mxPoint(0.5, 1), true),
    new mxConnectionConstraint(new mxPoint(0.625, 1), true)
];