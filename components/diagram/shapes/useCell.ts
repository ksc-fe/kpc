import {
    Component,
    TypeDefs,
    createVNode as h,
    createRef,
    ComponentConstructor,
    Children,
    useInstance,
    isComponentClass,
    inject,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    VNodeComponentClass,
} from 'intact';
import {mapChildren, ValidVNode} from '../../utils';
import mx from '../mxgraph';
import {isStringOrNumber, EMPTY_OBJ} from 'intact-shared';
import {DIAGRAM, SHAPE} from '../constants';
import type {Diagram} from '../diagram';
import type {DShape, DShapeProps} from './shape';

type Cell = {
    data?: any
    instance?: DShape
    vertex?: boolean
}

const {mxCell, mxGeometry} = mx;

export function useCell() {
    const instance = useInstance() as DShape;
    const diagram = inject<Diagram>(DIAGRAM)!;

    let cell: Cell;

    function createCell() {
        return new mxCell(getValue(), instance.getGeometry(), instance.getStylesheet());        
    }

    function getValue() {
        const {label} = instance.get();
        return label == null ? instance.hasElement && instance.wrapperRef.value || null : String(label);
    }

    function addToDigram() {
        diagram.addShape(instance);
    }

    function deleteFromDiagram() {
        diagram.deleteShape(instance);
    }

    function getCell() {
        return cell;
    }

    function setStyle() {
        const graph = diagram.graph;
        const cells = [cell];
        const styles = {...instance.get('style'), ...genStyles()};

        // if hasElement, disable edit
        graph.setCellStyles('editable', instance.hasElement ? 0 : 1, [cell]);

        for (let key in styles) {
            graph.setCellStyles(key, styles[key as keyof typeof styles], cells);
        }
    }

    function genStyles() {
        const styles: {dashed?: number | null, dashPattern?: string | null} = {};

        switch (instance.get('strokeStyle')) {
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

    function onChangeProps(lastProps: DShapeProps, nextProps: DShapeProps) {
        const graph = diagram.graph;
        const model = graph.getModel();

        model.beginUpdate();
        if (lastProps.label !== nextProps.label) {
            // update value
            model.setValue(cell, getValue());
        }
        // update style
        model.setStyle(cell, instance.getStylesheet());
        setStyle();

        // update data
        cell.data = nextProps.data;
    }

    onMounted(() => {
        const {data} = instance.get();

        cell = createCell();
        // add data to the cell, so that we can get it when select the cell
        cell.data = data; 
        cell.instance = instance;

        addToDigram();
    });

    onBeforeUpdate((lastVNode: VNodeComponentClass<DShape>, nextVNode: VNodeComponentClass<DShape>) => {
        const lastProps = lastVNode.props || EMPTY_OBJ;
        const nextProps = nextVNode.props || EMPTY_OBJ;
        if (lastProps !== nextProps) {
            onChangeProps(lastProps, nextProps);
        }
    });

    /**
     * because Layout may resize parent, we reset the geometry after update
     */
    onUpdated(() => {
        const model = diagram.graph.model;
        const geo = instance.getGeometry();
        model.setGeometry(cell, geo);
    });

    onBeforeUnmount(() => {
        const graph = diagram.graph;
        deleteFromDiagram();
        graph.removeCells([cell], false);

        // if (_layout) {
            // _layout.deleteShape(this);
        // }
    });

    return {getCell, setStyle, diagram};
}
