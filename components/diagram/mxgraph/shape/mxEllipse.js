import mx from '../mx';

export default function() {
    const {mxEllipse, mxConnectionConstraint, mxPoint} = mx;

    mxEllipse.prototype.constraints = [
        new mxConnectionConstraint(new mxPoint(0, 0), true),
        new mxConnectionConstraint(new mxPoint(1, 0), true),
        new mxConnectionConstraint(new mxPoint(0, 1), true), 
        new mxConnectionConstraint(new mxPoint(1, 1), true),
        new mxConnectionConstraint(new mxPoint(0.5, 0), true),
        new mxConnectionConstraint(new mxPoint(0.5, 1), true),
        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
        new mxConnectionConstraint(new mxPoint(1, 0.5))
    ];
}
