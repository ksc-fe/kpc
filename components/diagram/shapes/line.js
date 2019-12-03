import {DShape} from './shape';
import mx from '../mxgraph';

const {mxCell, mxGeometry, mxPoint} = mx;

export class DLine extends DShape {
    static propTypes = {
        type: ['rounded', 'sharp', 'curved', 'straight'],
        pattern: ['solid', 'dashed', 'dotted'],
        startPoint: Array,
        endPoint: Array,
    };

    defaults() {
        return {
            ...super.defaults(),
            startPoint: [0, 0],
            endPoint: [50, 0],
            exit: undefined,
            entry: undefined,
            type: 'straight',
            pattern: 'solid',
        };
    }

    _addToDigram() {
        this.get('_diagram').addLine(this);
    }

    _updateProps(model, keys) {
        super._updateProps(model, keys);
        if (keys.find(key => ['from', 'to', 'startPoint', 'endPoint'].indexOf(key) > -1)) {
            // update from and to
            this._setTerminal(); 
        }
    }

    render() {
        if (this._isRendered) return;

        const {_diagram: diagram} = this.get();
        const graph = diagram.graph;
        const cell = this.cell;
        cell.edge = true;

        this._setStyle();
        this._setTerminal();

        graph.addCell(cell); 

        this._isRendered = true;
    }

    _setTerminal() {
        const {from, to, startPoint, endPoint, _diagram: diagram} = this.get();
        const graph = diagram.graph;
        const shapes = diagram.shapes;
        const cell = this.cell;
        const geo = cell.getGeometry();

        if (!from) {
            geo.setTerminalPoint(new mxPoint(...startPoint), true);
        } else {
            cell.setTerminal(shapes.get(from).cell, true);
        }
        if (!to) {
            geo.setTerminalPoint(new mxPoint(...endPoint), false);
        } else {
            cell.setTerminal(shapes.get(to).cell, false);
        }
    }

    _getStylesheet() {
        return 'endArrow=classic;html=1;fontSize=12;';
    }

    _getGeometry() {
        const geo = new mxGeometry(0, 0, 0, 0);
        geo.relative = true;

        return geo;
    }

    _genStyles() {
        return {
            ...this._genStylesForExitAndEntry(),
            ...this._genStylesForType(),
            ...this._genStylesForPattern(this.get('pattern')),
        };
    }

    _genStylesForExitAndEntry() {
        const styles = {};
        const {from, exit, to, entry} = this.get();

        if (from && exit) {
            styles.exitX = exit[0];
            styles.exitY = exit[1];
            styles.perimeter = 0;
        }
        if (to && entry) {
            styles.entryX = entry[0];
            styles.entryY = entry[1];
            styles.perimeter = 0;
        }

        return styles;
    }

    _genStylesForType() {
        const styles = {};
        const {type} = this.get();

        if (type !== 'straight') {
            styles.edgeStyle = 'orthogonalEdgeStyle';
        }
        switch (type) {
            case 'rounded':
                styles.rounded = 1;
                styles.curved = null;
                break;
            case 'curved':
                styles.rounded = 0;
                styles.curved = 1;
                break;
            case 'sharp':
                styles.rounded = 0;
                styles.curved = null;
                break;
            default:
                styles.edgeStyle = 'straight';
                styles.curved = null;
                styles.noEdgeStyle = null;
                break;
        }

        return styles;
    }

    _deleteFromDiagram() {
        this.get('_diagram').deleteLine(this);
    }
}
