import mx from '../mx';
export default function () {
  var mxCellRenderer = mx.mxCellRenderer;
  /**
   * support render DOM as label
   */

  var getLabelValue = mxCellRenderer.prototype.getLabelValue;

  mxCellRenderer.prototype.getLabelValue = function (state) {
    return state.cell.value;
  };
}