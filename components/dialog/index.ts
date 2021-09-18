import {Component, TypeDefs, createRef, createVNode, VNodeComponentClass, callAll, remove, provide} from 'intact';
import template from './index.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {Container} from '../portal';
import {_$} from '../../i18n';
import {useShowHideEvents} from '../../hooks/useShowHideEvents';
import {position} from '../position';
import {bind} from '../utils';
import {isFunction} from 'intact-shared';
import {useMouseOutsidable} from '../../hooks/useMouseOutsidable';
import {useDraggable} from './useDraggable';
import {useEscClosable} from './useEscClosable';
import {onOpen, onClosed} from './fixBody';
import {addStaticMethods} from './staticMethods';
import {SHOW, HIDE, DIALOG} from './constants';

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
    loading: false,
    disabledOk: false,
    okText: _$('确定'),
    cancelText: _$('取消'),
    hideClose: false,
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
    public wrapperRef = createRef<HTMLDivElement>();

    private drag = useDraggable();
    private useAsComponent = false;

    init() {
        useShowHideEvents('value', SHOW, HIDE);
        useEscClosable();
        useMouseOutsidable(this.dialogRef); 
        provide(DIALOG, this);

        if (this.$vNode) {
            // TODO
            this.useAsComponent = true;
        }
    }

    show(props: T | null) {
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

    close() {
        this.set('value', false);
    }

    showLoading() {
        this.set('loading', true);
    }

    hideLoading() {
        this.set('loading', false);
    }

    disableOk() {
        this.set('disabledOk', true);
    }

    enableOk() {
        this.set('disabledOk', false);
    }

    /**
     * @brief
     * only be called by self when user clicks close button,
     * presses ESC or clicks overlay
     */
    @bind
    terminate() {
        this.btnCallback('terminate');
    }

    @bind
    ok() {
        this.btnCallback('ok');
    }

    @bind
    cancel() {
        this.btnCallback('cancel');
    }

    @bind
    private onEnter() {
        if (this.get('overlay')) {
            this.wrapperRef.value!.style.display = 'block';
            onOpen();

        }
        this.center();
    }

    @bind
    private onAfterLeave() {
        if (this.get('overlay')) {
            this.wrapperRef.value!.style.display = 'none';
            onClosed();
        }
        if (!this.useAsComponent) {
            remove(this.$vNode!, document.body, false);
        }
    }

    beforeUnmount() {
        if (this.get('value')) {
            onClosed();
        }
    }

    private center() {
        position(this.dialogRef.value!, {
            // ensure title visible always
            using: (feedback, position) => {
                const height = feedback.element.height;
                const scrollTop = window.pageYOffset;
                const outerHeight = window.document.documentElement.clientHeight;
                if (height > outerHeight) {
                    position.top = scrollTop;
                }
            },
            // let dialog padding top half of padding bottom
            my: 'center center+16%',
            at: 'center center-16%'
        });
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
        if (e.target === this.wrapperRef.value) {
            if (this.get('closable')) {
                this.terminate();
            }
        }
    }
}

addStaticMethods(Dialog);
