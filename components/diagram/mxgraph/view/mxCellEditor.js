import mx from '../mx';

const {mxCellEditor, mxUtils, mxClient} = mx;

mxCellEditor.prototype.blurEnabled = true;

/**
 * HTML in-place editor
 */
// mxCellEditor.prototype.isContentEditing = function() {
	// var state = this.graph.view.getState(this.editingCell);

	// return state != null && state.style['html'] == 1;
// };

const mxCellEditorGetInitialValue = mxCellEditor.prototype.getInitialValue;
mxCellEditor.prototype.getInitialValue = function(state, trigger) {
    if (mxUtils.getValue(state.style, 'html', '0') == '0') {
        return mxCellEditorGetInitialValue.apply(this, arguments);
    } else {
        var result = this.graph.getEditingValue(state.cell, trigger)

        if (mxUtils.getValue(state.style, 'nl2Br', '1') == '1') {
            result = result.replace(/\n/g, '<br/>');
        }

        // result = this.graph.sanitizeHtml(result, true);

        return result;
    }
};

/**
 * HTML in-place editor
 */
mxCellEditor.prototype.escapeCancelsEditing = false;

var mxCellEditorStartEditing = mxCellEditor.prototype.startEditing;
mxCellEditor.prototype.startEditing = function(cell, trigger) {
    mxCellEditorStartEditing.apply(this, arguments);

    // Overrides class in case of HTML content to add
    // dashed borders for divs and table cells
    var state = this.graph.view.getState(cell);

    if (state != null && state.style['html'] == 1) {
        this.textarea.className = 'mxCellEditor';
    } else {
        this.textarea.className = 'mxCellEditor mxPlainTextEditor';
    }

    // Toggles markup vs wysiwyg mode
    this.codeViewMode = false;

    // Stores current selection range when switching between markup and code
    this.switchSelectionState = null;

    // Selects editing cell
    this.graph.setSelectionCell(cell);

    // Enables focus outline for edges and edge labels
    var parent = this.graph.getModel().getParent(cell);
    var geo = this.graph.getCellGeometry(cell);

    if ((this.graph.getModel().isEdge(parent) && geo != null && geo.relative) ||
        this.graph.getModel().isEdge(cell)) {
        // Quirks does not support outline at all so use border instead
        if (mxClient.IS_QUIRKS) {
            this.textarea.style.border = 'gray dotted 1px';
        }
        // IE>8 and FF on Windows uses outline default of none
        else if (mxClient.IS_IE || mxClient.IS_IE11 || (mxClient.IS_FF && mxClient.IS_WIN)) {
            this.textarea.style.outline = 'gray dotted 1px';
        } else {
            this.textarea.style.outline = '';
        }
    } else if (mxClient.IS_QUIRKS) {
        this.textarea.style.outline = 'none';
        this.textarea.style.border = '';
    }
}

const mxCellEditorGetCurrentValue = mxCellEditor.prototype.getCurrentValue;
mxCellEditor.prototype.getCurrentValue = function(state) {
	if (mxUtils.getValue(state.style, 'html', '0') == '0') {
		return mxCellEditorGetCurrentValue.apply(this, arguments);
	} else {
		var result = this.textarea.innerHTML;

		if (mxUtils.getValue(state.style, 'nl2Br', '1') == '1') {
			result = result.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>');
		} else {
			result = result.replace(/\r\n/g, '').replace(/\n/g, '');
		}

		return result;
	}
};
