import mx from '../mx';
export default function () {
  var mxGuide = mx.mxGuide,
      mxPolyline = mx.mxPolyline,
      mxConstants = mx.mxConstants,
      mxEvent = mx.mxEvent;
  /**
   * No dashed shapes.
   */

  mxGuide.prototype.createGuideShape = function (horizontal) {
    var guide = new mxPolyline([], mxConstants.GUIDE_COLOR, mxConstants.GUIDE_STROKEWIDTH);
    return guide;
  }; // Alt disables guides


  mxGuide.prototype.isEnabledForEvent = function (evt) {
    return !mxEvent.isAltDown(evt);
  };
}