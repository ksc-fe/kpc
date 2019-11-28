import mx from '../mx';

const {mxGuide, mxPolyline, mxConstants, mxEvent} = mx;

/**
 * No dashed shapes.
 */
mxGuide.prototype.createGuideShape = function(horizontal){
    var guide = new mxPolyline([], mxConstants.GUIDE_COLOR, mxConstants.GUIDE_STROKEWIDTH);
    
    return guide;
};

// Alt disables guides
mxGuide.prototype.isEnabledForEvent = function(evt) {
	return !mxEvent.isAltDown(evt);
};
