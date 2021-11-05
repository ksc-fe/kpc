import {BaseDialog, BaseDialogProps} from './base';
import {createVNode, VNodeComponentClass, callAll, Props, ComponentClass} from 'intact';
import {_$} from '../../i18n';
import {addStaticMethods} from './staticMethods';

export interface DialogProps extends BaseDialogProps { }

export class Dialog extends BaseDialog<DialogProps> {
    public useAsComponent = false;

    constructor(
        props: Props<DialogProps, Dialog> | null | undefined,
        $vNode: VNodeComponentClass = null as unknown as VNodeComponentClass,
        $SVG: boolean = false,
        $mountedQueue: Function[] = [],
        $parent: ComponentClass | null = null
    ) {
        super(props, $vNode, $SVG, $mountedQueue, $parent);
    }

    init() {
        super.init();

        if (this.$vNode) {
            this.useAsComponent = true;
        }
    }

    public show(props?: DialogProps) {
        return new Promise(resolve => {
            if (this.get('value')) return;

            const show = () => this.set('value', true);

            if (this.useAsComponent) {
                return show();
            }

            // use as intance
            const mountedQueue = this.$mountedQueue;
            this.$init(props || null); 
            const vNode = this.$vNode = createVNode(Dialog) as VNodeComponentClass<any>;
            vNode.children = this;
            this.$render(null, vNode, document.body, null, mountedQueue);
            callAll(mountedQueue);

            if (this.$inited) {
                show();
            } else {
                this.on('$inited', show);
            }
        });
    }
}

addStaticMethods(Dialog);
