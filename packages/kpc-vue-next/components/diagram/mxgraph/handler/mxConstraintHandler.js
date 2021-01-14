import mx, { createSvgImage } from '../mx';
import '../util/mxConstants';
export default function () {
  var mxConstraintHandler = mx.mxConstraintHandler,
      mxConstants = mx.mxConstants,
      mxEllipse = mx.mxEllipse;
  mxConstraintHandler.prototype.pointImage = createSvgImage(5, 5, '<path d="m 0 0 L 5 5 M 0 5 L 5 0" stroke="' + mxConstants.HANDLE_FILLCOLOR + '"/>'); // Overrides highlight shape for connection points

  mxConstraintHandler.prototype.createHighlightShape = function () {
    var hl = new mxEllipse(null, this.highlightColor, this.highlightColor, 0);
    hl.opacity = mxConstants.HIGHLIGHT_OPACITY;
    return hl;
  };
}