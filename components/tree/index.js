import Intact from 'intact'; 
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Node from './node';
import {debounce} from '../utils';
import {BEFORE, AFTER, INNER, RANGE} from './constants';

export default class Tree extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        data: Array,
        expandedKeys: Array,
        checkedKeys: Array,
        checkbox: Boolean,
        load: Function,
        filter: Function,
        selectedKeys: Array,
        multiple: Boolean,
        draggable: Boolean,
        allowDrag: Function,
        allowDrop: Function,
    };

    defaults() {
        return {
            data: undefined,
            expandedKeys: undefined,
            checkbox: false,
            checkedKeys: undefined,
            load: undefined,
            filter: undefined,
            selectedKeys: undefined,
            multiple: false,
            draggable: false,
            allowDrag: undefined,
            allowDrop: undefined,
        }
    }

    _init() {
        this.checkedKeys = new Set();
        this.expandedKeys = new Set();
        this.selectedKeys = new Set();
        this.root = Node.createNode({}, null, this);

        this.on('$receive:checkedKeys', () => {
            this.checkedKeys = new Set(this.get('checkedKeys'));
            this._mappingKeys();
        });
        this.on('$receive:data', this._mappingKeys);
        this.on('$receive:expandedKeys', () => {
            this.expandedKeys = new Set(this.get('expandedKeys'));
        });
        this.on('$receive:filter', this._mappingKeys);
        this.on('$receive:selectedKeys', () => {
            this.selectedKeys = new Set(this.get('selectedKeys'));
        });

        this._onDragOver = debounce(this._onDragOver, 100);
    }

    _mappingKeys() {
        const needRecheckNodes = [];
        this.root.children = Node.createNodes(
            this.get('data'), 
            this.root,
            this,
            needRecheckNodes
        );
        needRecheckNodes.forEach(node => node.updateUpward());
    }

    async _toggleExpand(node, expanded, e) {
        if (node.data.disabled) return;
        
        const {load} = this.get();
        if (load && !expanded && !node.loaded) {
            node.loaded = false;
            this.update();
            const children = await load(node);
            node.loaded = true;
            node.append(children);
        }

        if (expanded) {
            this.shrink(node.key);
        } else {
            this.expand(node.key);
        }
    }

    _toggleCheck(node, e) {
        e.preventDefault();
        e.stopPropagation();

        node.updateDownward(!node.checked);
        node.updateUpward();

        this.set('checkedKeys', Array.from(this.checkedKeys));
    }

    toggleSelect(key) {
        const selectedKeys = this.selectedKeys;
        const multiple = this.get('multiple');
        if (selectedKeys.has(key)) {
            selectedKeys.delete(key);
        } else {
            if (!multiple) {
                selectedKeys.clear();
            }
            selectedKeys.add(key);
        }
        this.set('selectedKeys', Array.from(selectedKeys));
    }

    _updateCheckedKeys(node) {
        let checkedKeys = this.checkedKeys;
        if (node.checked) {
            checkedKeys.add(node.key); 
        } else {
            checkedKeys.delete(node.key);
        }
    }

    expand(key, update = true) {
        if (key === this.root.key) return;

        let expandedKeys = this.expandedKeys;
        expandedKeys.add(key);
        // babel can not spread Set by `...` syntax in loose mode
        // use Array.from instead of
        this.set('expandedKeys', Array.from(expandedKeys), {update});
    }

    shrink(key, update = true) {
        if (key === this.root.key) return;

        let expandedKeys = this.expandedKeys;
        expandedKeys.delete(key);
        this.set('expandedKeys', Array.from(expandedKeys), {update});
    }

    getCheckedData(leafOnly) {
        const data = [];
        const loop = (children) => {
            for (let i = 0; i < children.length; i++) {
                const node = children[i];
                if (node.checked && (!leafOnly || !node.children)) {
                    data.push(node.data);
                }
                if (node.children) {
                    loop(node.children);
                }
            }
        }
        loop(this.root.children);
        return data;
    }

    getSelectedData() {
        const data = [];
        const selectedKeys = this.selectedKeys;
        const size = selectedKeys.size;
        if (!size) return data;

        let count = 0;
        const loop = (children) => {
             for (let i = 0; i < children.length; i++) {
                const node = children[i];
                if (selectedKeys.has(node.key)) {
                    data.push(node.data);
                    count++;
                }
                if (count === size) return;
                if (node.children) {
                    loop(node.children);
                }
            }
        }
        loop(this.root.children);
        return data;
    }

    _onClick(node, e) {
        this.toggleSelect(node.key);
        this.trigger('click:node', node, e);
    }

    _onRightClick(node, e) {
        this.trigger('rightclick:node', node, e);
    }

    _beforeUpdate(lastVNode, nextVNode) {
        // if there is filter method, we should re-mapping the data
        // to check the filter status
        if (!this.get('filter')) return;
        if (!lastVNode || !nextVNode) return;
        const lastProps = lastVNode.props;
        const nextProps = nextVNode.props;
        // these props will re-mapping in $receive callback
        if (
            // lastProps.data !== nextProps.data ||
            // lastProps.checkedKeys !== nextProps.checkedKeys ||
            lastProps.filter !== nextProps.filter ||
            lastProps.expandedKeys !== nextProps.expandedKeys
        ) return;

        this._mappingKeys();
    }

    _onDragStart(event) {
        event.stopPropagation();

        const node = this._draggingNode;
        const {allowDrag} = this.get();
        if (node.data.disabled || allowDrag && !allowDrag(node)) {
            this.trigger('denydrag', node);
            return event.preventDefault();
        }

        // this.shrink(node.key, false);
        this.set({'_draggingNode': node});

        try {
            // ie throw error
            // firefox-need-it
            event.dataTransfer.setData('text/plain', '');
        } catch (error) {
          // empty
        }

        event.dataTransfer.setDragImage(this._draggingDOM, 0, 0);
    }

    _onMouseDown(node, event) {
        // dragend is not dispatched if the source node was moved or remove
        // during the drag session
        // https://bugzilla.mozilla.org/show_bug.cgi?id=460801
        // we can not use mouseup instead, because the event does not trigger
        this._draggingNode = node;
        this._draggingDOM = event.currentTarget;
    }

    _onDragOver(node, event) {
        event.preventDefault();

        const draggingNode = this.get('_draggingNode');
        // maybe it is end
        if (!draggingNode) return;

        // if the mouse does not move, do nothing
        const {clientX, clientY} = event;
        const {_clientX, _clientY} = this;
        if (clientX === _clientX && clientY === _clientY) return;
        this._clientX = clientX;
        this._clientY = clientY;

        let parentNode = node;
        do {
            if (parentNode.key === draggingNode.key) {
                return;
            }
        } while (parentNode = parentNode.parent)

        const {_node, _mode} = this;
        const mode = this._calcInsertMode(event);

        // if this node does not allow drop, prevent to insert the dragging node inner it
        if (mode === INNER) {
            const {allowDrop} = this.get();
            if (node.data.disabled || allowDrop && !allowDrop(node)) {
                return this.trigger('denydrop', node);
            }
        }

        if (_mode !== mode || _node !== node) {
            draggingNode.remove(true);
            this._mode = mode;
            this._node = node;
            this._insertNode(node, draggingNode, mode);
        }
    }

    _calcInsertMode(event) {
        const {clientY, currentTarget} = event; 
        const {top, bottom, height} = currentTarget.getBoundingClientRect();
        const des = height * RANGE;

        if (clientY <= top + des) return BEFORE;
        else if (clientY >= bottom - des) return AFTER;
        return INNER;
    }

    _insertNode(node, draggingNode, mode) {
        switch (mode) {
            case BEFORE:
                draggingNode.insertBefore(node);
                break;
            case AFTER:
                draggingNode.insertAfter(node);
                break;
            default:
                draggingNode.appendTo(node);
                break;
        }
    }

    _onDragEnd() {
        const {_draggingNode} = this.get();

        if (this._node) {
            this.trigger('dragend', {
                tree: this.root,
                srcNode: _draggingNode,
                toNode: this._node,
                mode: this._mode,
            });
        }

        this._draggingDOM = null;
        this._draggingNode = null;
        this._node = null;
        this._mode = null;

        this.set('_draggingNode', undefined);
    }
}

export {Tree};
