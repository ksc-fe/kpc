import mx from '../mx';
export default function () {
  var mxTriangle = mx.mxTriangle,
      mxConnectionConstraint = mx.mxConnectionConstraint,
      mxPoint = mx.mxPoint;
  mxTriangle.prototype.constraints = [new mxConnectionConstraint(new mxPoint(0, 0.25), true), new mxConnectionConstraint(new mxPoint(0, 0.5), true), new mxConnectionConstraint(new mxPoint(0, 0.75), true), new mxConnectionConstraint(new mxPoint(0.5, 0), true), new mxConnectionConstraint(new mxPoint(0.5, 1), true), new mxConnectionConstraint(new mxPoint(1, 0.5), true)];
}