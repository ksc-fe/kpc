import Intact from 'intact';
import {mapChildren} from '../../utils';
import mx from '../mxgraph';
import {DLayout} from '../layouts/layout';

const {mxCell, mxGeometry} = mx;

export class DShape extends Intact {
    static template = function(data, Vdt) {
        const h = Vdt.miss.h;
        let children = data.children;
        if (children && children.length) {
            children = h('div', {ref: i => data.wrapper = i}, children);
        }
        return h(data._getName(), null, children);
    };

    static propTypes = {
        strokeStyle: ['solid', 'dashed', 'dotted'],
        label: [String, Number],
        left: [String, Number],
        top: [String, Number],
        width: [String, Number],
        height: [String, Number],
        style: Object,

        movable: Boolean,
        selectable: Boolean,
        resizable: Boolean,
        rotatable: Boolean,
        editable: Boolean,
        connectable: Boolean,
    }; 

    defaults() {
        return {
            label: undefined,
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            strokeStyle: 'solid',
            data: undefined,
            style: undefined,

            movable: false,
            selectable: false,
            resizable: false,
            rotatable: false,
            editable: false,
            connectable: false,

            _diagram: undefined,
            _parent: undefined,
            _layout: undefined,
        };
    }

    _getName() {
        const Ctor = this.constructor;
        return Ctor.displayName || Ctor.name;
    }

    _init() {
        this._isRendered = false;

        this.on('$receive:children', (c, children) => {
            let hasElement = false;
            this.children = mapChildren(children, vNode => {
                if (vNode.tag) {
                    const proto = vNode.tag.prototype;
                    if (proto instanceof DShape || proto instanceof DLayout) {
                        vNode.props = {
                            ...vNode.props,
                            _diagram: this.get('_diagram'),
                            _parent: this,
                        };
                    } else {
                        hasElement = true;
                    }
                }
                return vNode;
            });
            this.hasElement = hasElement;
        });
    }

    _mount() {
        const {_layout, data} = this.get();

        this.cell = this._cell();
        // add data to the cell, so that we can get it when select the cell
        this.cell.data = data; 
        this.cell.instance = this;

        this._addToDigram();

        if (_layout) {
            _layout.addShape(this);
        }

        this.on('$receive', this._onChangeProps);
    }

    _addToDigram() {
        this.get('_diagram').addShape(this);
    }

    _onChangeProps(c, keys) {
        const graph = this.get('_diagram').graph;
        const model = graph.getModel();

        model.beginUpdate();
        this._updateProps(model, keys);
        model.endUpdate();
    }

    _updateProps(model, keys) {
        // if (keys.find(key => ['left', 'top', 'width', 'height'].indexOf(key) > -1))  {
            // // update geometry 
            // this.updateGeometry();
        // }
        if (keys.find(key => key === 'label')) {
            // update value
            const value = this._getValue();
            model.setValue(this.cell, value);
        }
        // update style
        const stylesheet = this._getStylesheet();
        model.setStyle(this.cell, stylesheet);
        this._setStyle();

        // add data to the cell, so that we can get it when select the cell
        this.cell.data = this.get('data'); 
    }

    /**
     * because Layout may resize parent, we reset the geometry after update
     */
    _update() {
        const model = this.get('_diagram').graph.model;
        const geo = this._getGeometry();
        model.setGeometry(this.cell, geo);
    }

    // updateGeomery(options) {
        // const geo = this.cell.getGeometry().clone();
        // for (let key in options) {
            // const value = options[key];
            // if (value != null) {
                // geo[key] = +value;
            // }
        // }
        // this.get('_diagram').graph.model.setGeometry(this.cell, geo);
    // }

    draw() {
        if (this._isRendered) return;

        const diagram = this.get('_diagram');
        const parent = this.get('_parent');
        const graph = diagram.graph;
        const cell = this.cell;

        cell.vertex = true;

        this._setStyle();

        graph.addCell(cell, parent.cell);

        this._isRendered = true;
    }

    /**
     * generate the cell
     */
    _cell() {
        return new mxCell(this._getValue(), this._getGeometry(), this._getStylesheet());        
    }

    _getValue() {
        const {label} = this.get();
        return label == null ? this.hasElement && this.wrapper || null : String(label);
    }

    _getStylesheet() {  }

    _getGeometry() {
        const {width, height, top, left} = this.get();
        return new mxGeometry(+left, +top, +width, +height);
    }

    _setStyle() {
        const diagram = this.get('_diagram');
        const parent = this.get('_parent');
        const graph = diagram.graph;
        const cell = this.cell;
        const cells = [cell];
        const styles = {...this.get('style'), ...this._genStyles()};

        // if hasElement, disable edit
        graph.setCellStyles('editable', this.hasElement ? 0 : 1, [cell]);

        for (let key in styles) {
            graph.setCellStyles(key, styles[key], cells);
        }
    }

    _genStyles() {
        return this._genStylesForStrokeStyle();
    }

    _genStylesForStrokeStyle() {
        const styles = {};

        switch (this.get('strokeStyle')) {
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

    _destroy() {
        const {_diagram, _layout} = this.get();
        const graph = _diagram.graph;

        this._deleteFromDiagram();
        graph.removeCells([this.cell], false);

        if (_layout) {
            _layout.deleteShape(this);
        }
    }

    _deleteFromDiagram() {
        this.get('_diagram').deleteShape(this);
    }
}
