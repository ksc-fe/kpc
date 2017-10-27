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
            this.container.removeChild(this.element);
            return super.destroy(...args);
        }
        this.destroyed = true;
        this.trigger('$destroyed', this);
        this.off();
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
