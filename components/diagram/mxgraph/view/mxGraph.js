import mx from '../mx';
import expandedImage from 'mxgraph/javascript/src/images/expanded.gif';
import collapsedImage from 'mxgraph/javascript/src/images/collapsed.gif';

const {mxGraph, mxConstants, mxUtils, mxConnectionConstraint, mxPoint, mxRectangle, mxImage} = mx;

// Adds support for HTML labels via style. Note: Currently, only the Java
// backend supports HTML labels but CSS support is limited to the following:
// http://docs.oracle.com/javase/6/docs/api/index.html?javax/swing/text/html/CSS.html
// TODO: Wrap should not affect isHtmlLabel output (should be handled later)
// const isHtmlLabel = mxGraph.prototype.isHtmlLabel;
mxGraph.prototype.isHtmlLabel = function(cell) {
    const state = this.view.getState(cell);
    const style = (state != null) ? state.style : this.getCellStyle(cell);
    
    return (style != null) ? (style['html'] == '1' || style[mxConstants.STYLE_WHITE_SPACE] == 'wrap') : false;
};

/**
 * Overrides method to provide connection constraints for shapes.
 */
mxGraph.prototype.getAllConnectionConstraints = function(terminal, source) {
    if (terminal != null) {
        var constraints = mxUtils.getValue(terminal.style, 'points', null);

        if (constraints != null) {
            // Requires an array of arrays with x, y (0..1), an optional
            // [perimeter (0 or 1), dx, and dy] eg. points=[[0,0,1,-10,10],[0,1,0],[1,1]]
            var result = [];

            try {
                var c = JSON.parse(constraints);

                for (var i = 0; i < c.length; i++) {
                    var tmp = c[i];
                    result.push(new mxConnectionConstraint(new mxPoint(tmp[0], tmp[1]), (tmp.length > 2) ? tmp[2] != '0' : true,
                        null, (tmp.length > 3) ? tmp[3] : 0, (tmp.length > 4) ? tmp[4] : 0));
                }
            }
            catch (e) {
                // ignore
            }

            return result;
        }
        else if (terminal.shape != null && terminal.shape.bounds != null) {
            var dir = terminal.shape.direction;
            var bounds = terminal.shape.bounds;
            var scale = terminal.shape.scale;
            var w = bounds.width / scale;
            var h = bounds.height / scale;

            if (dir == mxConstants.DIRECTION_NORTH || dir == mxConstants.DIRECTION_SOUTH) {
                var tmp = w;
                w = h;
                h = tmp;
            }

            constraints = terminal.shape.getConstraints(terminal.style, w, h);

            if (constraints != null) {
                return constraints;
            }
            else if (terminal.shape.stencil != null && terminal.shape.stencil.constraints != null) {
                return terminal.shape.stencil.constraints;
            }
            else if (terminal.shape.constraints != null) {
                return terminal.shape.constraints;
            }
        }
    }

    return null;
};

/**
 * Returns a point that specifies the location for inserting cells.
 */
mxGraph.prototype.getInsertPoint = function() {
    var gs = this.getGridSize();
    var dx = this.container.scrollLeft / this.view.scale - this.view.translate.x;
    var dy = this.container.scrollTop / this.view.scale - this.view.translate.y;
    
    var layout = this.getPageLayout();
    var page = this.getPageSize();
    dx = Math.max(dx, layout.x * page.width);
    dy = Math.max(dy, layout.y * page.height);
    
    return new mxPoint(this.snap(dx + gs), this.snap(dy + gs));
};

mxGraph.prototype.getFreeInsertPoint = function() {
    var view = this.view;
    var bds = this.getGraphBounds();
    var pt = this.getInsertPoint();
    
    // Places at same x-coord and 2 grid sizes below existing graph
    var x = this.snap(Math.round(Math.max(pt.x, bds.x / view.scale - view.translate.x +
        ((bds.width == 0) ? 2 * this.gridSize : 0))));
    var y = this.snap(Math.round(
        Math.max(pt.y, (bds.y + bds.height) / view.scale - view.translate.y + 2 * this.gridSize)
    ));
    
    return new mxPoint(x, y);
};

/**
 * Returns a rectangle describing the position and count of the
 * background pages, where x and y are the position of the top,
 * left page and width and height are the vertical and horizontal
 * page count.
 */
mxGraph.prototype.getPageLayout = function() {
	var size = this.getPageSize();
	var bounds = this.getGraphBounds();

	if (bounds.width == 0 || bounds.height == 0) {
		return new mxRectangle(0, 0, 1, 1);
	} else {
		// Computes untransformed graph bounds
		var x = Math.ceil(bounds.x / this.view.scale - this.view.translate.x);
		var y = Math.ceil(bounds.y / this.view.scale - this.view.translate.y);
		var w = Math.floor(bounds.width / this.view.scale);
		var h = Math.floor(bounds.height / this.view.scale);
		
		var x0 = Math.floor(x / size.width);
		var y0 = Math.floor(y / size.height);
		var w0 = Math.ceil((x + w) / size.width) - x0;
		var h0 = Math.ceil((y + h) / size.height) - y0;
		
		return new mxRectangle(x0, y0, w0, h0);
	}
};

/**
 * Returns the size of the page format scaled with the page size.
 */
mxGraph.prototype.getPageSize = function() {
	return new mxRectangle(0, 0, this.pageFormat.width * this.pageScale, this.pageFormat.height * this.pageScale);
};

mxGraph.prototype.expandedImage = new mxImage(expandedImage, 9, 9);
mxGraph.prototype.collapsedImage = new mxImage(collapsedImage, 9, 9);
