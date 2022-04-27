import mx from '../mx';

export default function() {
    const {mxGuide, mxPolyline, mxConstants, mxEvent} = mx;

    /**
     * No dashed shapes.
     */
    mxGuide.prototype.createGuideShape = function(){
        var guide = new mxPolyline([], mxConstants.GUIDE_COLOR, mxConstants.GUIDE_STROKEWIDTH);
        
        return guide;
    };

    // Alt disables guides
    mxGuide.prototype.isEnabledForEvent = function(evt: Event) {
        return !mxEvent.isAltDown(evt);
    };
}

