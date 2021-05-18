import mx, {createSvgImage} from '../mx';
import '../util/mxConstants';
import {mainHandle} from './mxVertexHandler';

export default function() {
    const {mxEdgeHandler, mxConstants, mxElbowEdgeHandler, mxImageShape, mxRectangleShape, mxRectangle} = mx;

    const terminalHandle = createSvgImage(18, 18, '<circle cx="9" cy="9" r="5" stroke="#fff" fill="' + mxConstants.HANDLE_FILLCOLOR + '" stroke-width="1"/><circle cx="9" cy="9" r="2" stroke="#fff" fill="transparent"/>');
    const fixedHandle = createSvgImage(18, 18, '<circle cx="9" cy="9" r="5" stroke="#fff" fill="' + mxConstants.HANDLE_FILLCOLOR + '" stroke-width="1"/><path d="m 7 7 L 11 11 M 7 11 L 11 7" stroke="#fff"/>')

    mxEdgeHandler.prototype.handleImage = mainHandle;
    // mxEdgeHandler.prototype.terminalHandleImage = terminalHandle;
    // mxEdgeHandler.prototype.fixedHandleImage = fixedHandle;
    // mxEdgeHandler.prototype.labelHandleImage = secondaryHandle;

    // Shows secondary handle for fixed connection points
    mxEdgeHandler.prototype.createHandleShape = function(index, virtual) {
        var source = index != null && index == 0;
        var terminalState = this.state.getVisibleTerminalState(source);
        var c = (index != null && (index == 0 || index >= this.state.absolutePoints.length - 1 ||
            (this.constructor == mxElbowEdgeHandler && index == 2))) ?
            this.graph.getConnectionConstraint(this.state, terminalState, source) : null;
        var pt = (c != null) ? this.graph.getConnectionPoint(this.state.getVisibleTerminalState(source), c) : null;
        var img = (pt != null) ? fixedHandle : ((c != null && terminalState != null) ?
            terminalHandle : this.handleImage);

        if (img != null) {
            var shape = new mxImageShape(new mxRectangle(0, 0, img.width, img.height), img.src);

            // Allows HTML rendering of the images
            shape.preserveImageAspect = false;

            return shape;
        } else {
            var s = mxConstants.HANDLE_SIZE;

            if (this.preferHtml) {
                s -= 1;
            }

            return new mxRectangleShape(new mxRectangle(0, 0, s, s), mxConstants.HANDLE_FILLCOLOR, mxConstants.HANDLE_STROKECOLOR);
        }
    };

    // Enables snapping waypoints to terminals
    mxEdgeHandler.prototype.snapToTerminals = true;
}
