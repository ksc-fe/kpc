import mx from '../mx';

export default function() {
    const {mxCloud, mxConnectionConstraint, mxPoint} = mx;

    mxCloud.prototype.constraints = [
        new mxConnectionConstraint(new mxPoint(0.25, 0.25), false),
        new mxConnectionConstraint(new mxPoint(0.4, 0.1), false),
        new mxConnectionConstraint(new mxPoint(0.16, 0.55), false),
        new mxConnectionConstraint(new mxPoint(0.07, 0.4), false),
        new mxConnectionConstraint(new mxPoint(0.31, 0.8), false),
        new mxConnectionConstraint(new mxPoint(0.13, 0.77), false),
        new mxConnectionConstraint(new mxPoint(0.8, 0.8), false),
        new mxConnectionConstraint(new mxPoint(0.55, 0.95), false),
        new mxConnectionConstraint(new mxPoint(0.875, 0.5), false),
        new mxConnectionConstraint(new mxPoint(0.96, 0.7), false),
        new mxConnectionConstraint(new mxPoint(0.625, 0.2), false),
        new mxConnectionConstraint(new mxPoint(0.88, 0.25), false)
    ];
}
