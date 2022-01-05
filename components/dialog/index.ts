import {BaseDialog as _BaseDialog, BaseDialogProps, BaseDialogEvents, BaseDialogBlocks} from './base';
import {createVNode, VNodeComponentClass, callAll, Props, ComponentClass} from 'intact';
import {addStaticMethods, StaticMethod} from './staticMethods';
import {usePosition} from './usePosition';

export interface DialogProps extends BaseDialogProps { }
export interface DialogEvents extends BaseDialogEvents { }
export interface DialogBlocks extends BaseDialogBlocks { }

export class BaseDialog<
    P extends DialogProps = DialogProps,
    E extends DialogEvents = DialogEvents,
    B extends DialogBlocks = DialogBlocks,
> extends _BaseDialog<P, E> {
    public useAsComponent = false;

    constructor(
        props: Props<P, BaseDialog> | null | undefined = null as unknown as P,
        $vNode: VNodeComponentClass = null as unknown as VNodeComponentClass,
        $SVG: boolean = false,
        $mountedQueue: Function[] = [],
        $senior: ComponentClass | null = null
    ) {
        super(props, $vNode, $SVG, $mountedQueue, $senior);
    }

    init() {
        super.init();

        usePosition(this.dialogRef);

        if (this.$vNode) {
            this.useAsComponent = true;
        }
    }

    public show() {
        return new Promise<void>(resolve => {
            if (this.get('value')) return resolve();

            const show = () => {
                this.set('value', true);
                resolve();
            }

            if (this.useAsComponent) {
                return show();
            }

            // use as intance
            const mountedQueue = this.$mountedQueue;
            this.$init(null); 
            const vNode = this.$vNode = createVNode(BaseDialog) as VNodeComponentClass<any>;
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

// for React/Vue type inference
export class Dialog extends BaseDialog<DialogProps, DialogEvents, DialogBlocks> {
    static success: StaticMethod;
    static warning: StaticMethod;
    static error: StaticMethod;
    static confirm: StaticMethod;
}

addStaticMethods(Dialog);
