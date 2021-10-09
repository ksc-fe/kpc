import mx from '../mx';

export default function() {
    const {mxLine, mxConnectionConstraint, mxPoint} = mx;

    mxLine.prototype.constraints = [
        new mxConnectionConstraint(new mxPoint(0, 0.5), false),
        new mxConnectionConstraint(new mxPoint(0.25, 0.5), false),
        new mxConnectionConstraint(new mxPoint(0.75, 0.5), false),
        new mxConnectionConstraint(new mxPoint(1, 0.5), false)
    ];
}
