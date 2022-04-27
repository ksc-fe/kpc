import mx from '../mx';

export default function() {
    const {mxTriangle, mxConnectionConstraint, mxPoint} = mx;

    mxTriangle.prototype.constraints = [
        new mxConnectionConstraint(new mxPoint(0, 0.25), true),
        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
        new mxConnectionConstraint(new mxPoint(0, 0.75), true),
        new mxConnectionConstraint(new mxPoint(0.5, 0), true),
        new mxConnectionConstraint(new mxPoint(0.5, 1), true),
        new mxConnectionConstraint(new mxPoint(1, 0.5), true)
    ];
}

