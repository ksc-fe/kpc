import mx from '../mx';
export default function () {
  var mxRubberband = mx.mxRubberband; // Enables fading of rubberband

  mxRubberband.prototype.fadeOut = true; // Increases default rubberband opacity (default is 20)

  mxRubberband.prototype.defaultOpacity = 30;
}