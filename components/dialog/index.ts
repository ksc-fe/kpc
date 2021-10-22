import {
    Component,
    TypeDefs,
    createRef,
    createVNode,
    VNodeComponentClass,
    callAll,
    provide,
    Props,
    ComponentClass,
} from 'intact';
import template from './index.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {Container} from '../portal';
import {_$} from '../../i18n';
import {useShowHideEvents} from '../../hooks/useShowHideEvents';
import {bind} from '../utils';
import {isFunction} from 'intact-shared';
import {useMouseOutsidable} from '../../hooks/useMouseOutsidable';
import {useDraggable} from './useDraggable';
import {useEscClosable} from './useEscClosable';
import {addStaticMethods} from './staticMethods';
import {SHOW, HIDE, DIALOG} from './constants';
import {usePosition} from './usePosition';

export interface DialogProps {
    title?: string
    value?: boolean
    size?: Sizes
    loading?: boolean
    disabledOk?: boolean
    okText?: string
    cancelText?: string
    ok?: () => void 
    cancel?: () => void 
    container?: Container
    hideClose?: boolean
    overlay?: boolean
    closable?: boolean
    terminate?: () => void 
    escClosable?: boolean
    width?: string | number
    mode?: 'destroy' | 'hide'
}

const typeDefs: Required<TypeDefs<DialogProps>> = {
    title: String,
    value: Boolean,
    size: sizes,
    loading: Boolean,
    disabledOk: Boolean,
    okText: String,
    cancelText: String,
    ok: Function,
    cancel: Function,
    container: [String, Function],
    hideClose: Boolean,
    overlay: Boolean,
    closable: Boolean,
    terminate: Function,
    escClosable: Boolean,
    width: [String, Number],
    mode: ['destroy', 'hide'],
};

const defaults = (): Partial<DialogProps> => ({
    title: _$('提示'),
    value: false,
    size: 'default',
    okText: _$('确定'),
    cancelText: _$('取消'),
    overlay: true,
    closable: true,
    escClosable: true,
    mode: 'hide',
});

export class Dialog<T extends DialogProps = DialogProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public dialogRef = createRef<HTMLDivElement>();
    public useAsComponent = false;

    private overlayRef = createRef<HTMLDivElement>();
    private drag = useDraggable(
        this.dialogRef,
        this.overlayRef,
    );
    private position = usePosition(this.dialogRef);

    constructor(
        props: Props<T, Component<T>> | null | undefined,
        $vNode: VNodeComponentClass = null as unknown as VNodeComponentClass,
        $SVG: boolean = false,
        $mountedQueue: Function[] = [],
        $parent: ComponentClass | null = null
    ) {
        super(props, $vNode, $SVG, $mountedQueue, $parent);
    }

    init() {
        useShowHideEvents('value', SHOW, HIDE);
        useEscClosable();
        useMouseOutsidable(this.dialogRef); 
        provide(DIALOG, this);

        if (this.$vNode) {
            this.useAsComponent = true;
        }
    }

    public show(props: T | null) {
        return new Promise(resolve => {
            if (this.get('value')) return;

            const show = () => this.set('value', true);

            if (this.useAsComponent) {
                return show();
            }

            // use as intance
            const mountedQueue = this.$mountedQueue;
            this.$init(props); 
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

    public close() {
        this.set('value', false);
    }

    public showLoading() {
        this.set('loading', true);
    }

    public hideLoading() {
        this.set('loading', false);
    }

    public disableOk() {
        this.set('disabledOk', true);
    }

    public enableOk() {
        this.set('disabledOk', false);
    }

    /**
     * @brief
     * only be called by self when user clicks close button,
     * presses ESC or clicks overlay
     */
    @bind
    public terminate() {
        this.btnCallback('terminate');
    }

    @bind
    public ok() {
        this.btnCallback('ok');
    }

    @bind
    public cancel() {
        this.btnCallback('cancel');
    }

    private btnCallback(type: 'ok' | 'cancel' | 'terminate') {
        const callback = this.get(type);
        if (isFunction(callback)) {
            callback();
        } else {
            this.trigger(type);
            this.close();
        }
    }

    @bind
    private onClickWrapper(e: MouseEvent) {
        if (this.get('closable')) {
            this.terminate();
        }
    }
}

addStaticMethods(Dialog);
