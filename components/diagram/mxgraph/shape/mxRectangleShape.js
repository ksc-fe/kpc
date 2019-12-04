import mx from '../mx';

const {mxRectangleShape, mxConnectionConstraint, mxPoint} = mx;

mxRectangleShape.prototype.constraints = [
    new mxConnectionConstraint(new mxPoint(0.25, 0), true),
	new mxConnectionConstraint(new mxPoint(0.5, 0), true),
	new mxConnectionConstraint(new mxPoint(0.75, 0), true),
	new mxConnectionConstraint(new mxPoint(0, 0.25), true),
	new mxConnectionConstraint(new mxPoint(0, 0.5), true),
	new mxConnectionConstraint(new mxPoint(0, 0.75), true),
	new mxConnectionConstraint(new mxPoint(1, 0.25), true),
	new mxConnectionConstraint(new mxPoint(1, 0.5), true),
	new mxConnectionConstraint(new mxPoint(1, 0.75), true),
	new mxConnectionConstraint(new mxPoint(0.25, 1), true),
	new mxConnectionConstraint(new mxPoint(0.5, 1), true),
    new mxConnectionConstraint(new mxPoint(0.75, 1), true)
];
