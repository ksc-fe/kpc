import { Component, createVNode as h, TypeDefs } from 'intact';

export interface ViewProps {
    tag?: string,
} 

const typeDefs: Required<TypeDefs<ViewProps>> = {
    tag: String,
};

/**
 * A component only used in React or Vue to bind event, so that
 * it can use Intact Event system to stop propagation (stopPropagation).
 */
export class View extends Component<ViewProps> {
    static template(this: View) {
        const { tag, ...rest } = this.get();
        return h(tag!, rest as any);
    }
    static typeDefs = typeDefs;
    static defaults() {
        return { tag: 'div' };
    }
}
