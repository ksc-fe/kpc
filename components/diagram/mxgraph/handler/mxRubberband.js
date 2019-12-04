import mx from '../mx';

const {mxRubberband} = mx;

// Enables fading of rubberband
mxRubberband.prototype.fadeOut = true;

// Increases default rubberband opacity (default is 20)
mxRubberband.prototype.defaultOpacity = 30;
