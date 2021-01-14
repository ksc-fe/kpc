import mx from '../mx';
export default function () {
  var mxShape = mx.mxShape;

  mxShape.prototype.getConstraints = function () {
    return null;
  };
}