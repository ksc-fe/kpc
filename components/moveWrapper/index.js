import Intact from 'intact';

export default class MoveWrapper extends Intact {
    template(self, Vdt) {
        const children = self.get('children');
        return children || Vdt.miss.hc('MoveWrapper');
    }

    defaults() {
        return {
            autoDestroy: true, 
            container: undefined,
        }
    }

    init(...args) {
        super.init(...args);
        return this.placeholder = document.createComment("placeholder");
    }

    hydrate(...args) {
        super.hydrate(...args);
        return this.placeholder = document.createComment('placeholder');
    }

    update(lastVNode, nextVNode) {
        super.update(lastVNode, nextVNode);
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
