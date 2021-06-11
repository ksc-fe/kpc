import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {Container} from '../portal';
import {_$} from '../../i18n';
import {useShowHideEvents} from '../../hooks/useShowHideEvents';
import {position, scrollbarWidth} from '../position';
import {bind} from '../utils';
import {isFunction} from 'intact-shared';

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

    _dragging: boolean
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

    _dragging: null,
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
    mode: 'destroy',

    _dragging: false,
});

export class Dialog<T extends DialogProps = DialogProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private dialogRef = createRef<HTMLDivElement>();
    private entityRef = createRef<HTMLDivElement>();

    init() {
        useShowHideEvents();
    }

    close() {
        this.set('value', false);
    }

    @bind
    private onEnter() {
        if (this.get('overlay')) {
            this.entityRef.value!.style.display = 'block';
        }
        this.center();
    }

    @bind
    private onAfterLeave() {
        if (this.get('overlay')) {
            this.entityRef.value!.style.display = 'none';
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

    @bind
    private ok() {
        this.btnCallback('ok');
    }

    @bind
    private cancel() {
        this.btnCallback('cancel');
    }

    private btnCallback(type: 'ok' | 'cancel') {
        const callback = this.get(type);
        if (isFunction(callback)) {
            callback();
        } else {
            this.trigger(type);
            this.close();
        }
    }
}

function shouldFixBody() {
    if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
        return scrollbarWidth();
    }
}
