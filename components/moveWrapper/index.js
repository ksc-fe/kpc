import Intact from 'intact';

export default class MoveWrapper extends Intact {
    template() {
        return this.data.get('children');
    }

    defaults() {
        return {
            autoDestroy: true, 
            container: undefined,
        }
    }

    init(lastVNode, vNode) {
        this.placeholder = document.createComment("placeholder");
        super.init(lastVNode, vNode);
        return this.placeholder;
    }

    hydrate(lastVNode, vNode) {
        this.placeholder = document.createComment('placeholder');
        super.hydrate(lastVNode, vNode);
        return this.placeholder;
    }

    update(...args) {
        super.update(...args);
        return this.placeholder;
    }

    destroy(...args) {
        if (this.get('autoDestroy')) {
            this.$destroy(...args);
        }
    }

    $destroy(...args) {
        this.container.removeChild(this.element);
        super.destroy(...args);
    }

    _mount(lastVNode, nextVNode) {
        const container = this.get('container');
        if (container) {
            this.container = document.querySelector(container);
        }
        if (!this.container) {
            this.container = document.body;
        }
        this.container.appendChild(this.element);
    }
}
