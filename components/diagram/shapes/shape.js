import Intact from 'intact';
import {noop} from '../../utils';

export default class Shape extends Intact {
    static template = noop;

    static propTypes = {
        key: {
            required: true,
        },
        borderStyle: ['solid', 'dashed', 'dotted'],
    }; 

    defaults() {
        return {
            html: undefined,
            left: 0,
            top: 0,
            border: 'solid',
        };
    }

    render(graph, diagram, parent) {
        const cell = this.cell = this._cell();

        cell.vertex = true;

        this._setStyle(graph, cell);

        graph.addCell(cell, parent);
    }

    /**
     * @abstract
     * generate the cell
     */
    _cell() {
        
    }

    _setStyle(graph, cell) {
        const cells = [cell];
        const styles = this._genStyles();

        for (let key in styles) {
            graph.setCellStyles(key, styles[key], cells);
        }
    }

    _genStyles() {
        return this._genStylesForPattern(this.get('borderStyle'));
    }

    _genStylesForPattern(pattern) {
        const styles = {};

        switch (pattern) {
            case 'dashed':
                styles.dashed = 1;
                styles.dashPattern = null;
                break;
            case 'dotted':
                styles.dashed = 1;
                styles.dashPattern = '1 2';
                break;
            case 'solid':
                styles.dashed = null;
                styles.dashPattern = null;
                break;
        }

        return styles;
    }
}
