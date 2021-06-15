import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {Sizes, sizes} from '../../styles/utils';
import {Container} from '../portal';
import {_$} from '../../i18n';
import {useShowHideEvents} from '../../hooks/useShowHideEvents';
import {position, scrollbarWidth} from '../position';
import {bind} from '../utils';
import {isFunction} from 'intact-shared';
import {useMouseOutsidable} from '../../hooks/useMouseOutsidable';
import {useDraggable} from './useDraggable';

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

    private outsidable: ReturnType<typeof useMouseOutsidable> | null = null;
    private drag: ReturnType<typeof useDraggable> | null = null;

    init() {
        useShowHideEvents();
        this.outsidable = useMouseOutsidable(); 
        this.drag = useDraggable();
    }

    close() {
        this.set('value', false);
    }

    @bind
    private onEnter() {
        if (this.get('overlay')) {
            this.wrapperRef.value!.style.display = 'block';
        }
        this.center();
    }

    @bind
    private onAfterLeave() {
        if (this.get('overlay')) {
            this.wrapperRef.value!.style.display = 'none';
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

    /**
     * @brief
     * only be called by self when user clicks close button,
     * presses ESC or clicks overlay
     */
    @bind
    private terminate() {
        this.btnCallback('terminate');
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
        if (e.target === this.wrapperRef.value && !this.outsidable![1].value) {
            if (this.get('closable')) {
                this.terminate();
            }
        }
    }
}

function shouldFixBody() {
    if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
        return scrollbarWidth();
    }
}
