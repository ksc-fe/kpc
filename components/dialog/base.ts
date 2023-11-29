import {Component, TypeDefs, createRef, provide} from 'intact';
import template from './base.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {Container} from '../portal';
import {_$} from '../../i18n';
import {useShowHideEvents} from '../../hooks/useShowHideEvents';
import {bind} from '../utils';
import {isFunction} from 'intact-shared';
import {useMouseOutsidable} from '../../hooks/useMouseOutsidable';
import {useDraggable} from './useDraggable';
import {useEscClosable} from './useEscClosable';
import {SHOW, HIDE, DIALOG} from './constants';
import {useFixBody, setHooks} from './useFixBody';
import type {Events} from '../types';
import { useConfigContext } from '../config';

export interface BaseDialogProps {
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
    draggable?: boolean
}

export interface BaseDialogEvents {
    [SHOW]: []
    [HIDE]: []
    ok: []
    cancel: []
    terminate: []
    afterClose: []
}

export interface BaseDialogBlocks {
    content: null
    header: null
    body: null
    footerWrapper: null
    footer: null
}

const typeDefs: Required<TypeDefs<BaseDialogProps>> = {
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
    draggable: Boolean,
};

const defaults = (): Partial<BaseDialogProps> => ({
    title: _$('提示'),
    value: false,
    size: 'default',
    okText: _$('确定'),
    cancelText: _$('取消'),
    overlay: true,
    closable: true,
    escClosable: true,
    mode: 'hide',
    draggable: true,
});

const events: Events<BaseDialogEvents> = {
    open: true,
    close: true,
    ok: true,
    cancel: true,
    terminate: true,
    afterClose: true,
};

export class BaseDialog<
    T extends BaseDialogProps = BaseDialogProps,
    E extends BaseDialogEvents = BaseDialogEvents,
    B extends BaseDialogBlocks = BaseDialogBlocks,
> extends Component<T, E, B> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;
    static setHooks = setHooks;

    public dialogRef = createRef<HTMLDivElement>();

    private overlayRef = createRef<HTMLDivElement>();
    private drag = useDraggable(
        this.dialogRef,
        this.overlayRef,
    );
    private mouseOutsidable = useMouseOutsidable(this.dialogRef, false);
    protected config = useConfigContext();

    init() {
        useShowHideEvents('value', SHOW, HIDE);
        useFixBody(this.dialogRef);
        useEscClosable();
        provide(DIALOG, this);
    }

    public show(props?: T) {
        this.set('value', true);
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
        if (this.get('closable') && e.target === this.overlayRef.value) {
            this.terminate();
        }
    }

    @bind
    private onAfterLeave() {
        this.trigger('afterClose');
    }
}
