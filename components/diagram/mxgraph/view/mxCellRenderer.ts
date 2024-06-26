import mx from '../mx';

export default function() {
    const {mxCellRenderer} = mx;

    /**
     * support render DOM as label
     */
    const getLabelValue = mxCellRenderer.prototype.getLabelValue;
    mxCellRenderer.prototype.getLabelValue = function(state: any) {
        return state.cell.value;
    };
}
