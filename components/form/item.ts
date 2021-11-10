import {Component, TypeDefs, inject, createRef} from 'intact';
import template from './item.vdt';
import {FORM, RECORD_KEY, Form} from './form';
import {useRecordItem} from '../../hooks/useRecordComponent';
import {bind} from '../utils';
import {methods, Method, messages, Message, classNames, ClassName} from './methods';
import {isFunction, isString, EMPTY_OBJ} from 'intact-shared';
import {useError} from './useError';
import {useValidate} from './useValidate';
import {useDirty} from './useDirty';

export interface FormItemProps {
    value?: any
    rules?: Rules
    messages?: typeof messages
    classNames?: typeof classNames
    errorClassName?: string
    label?: string
    htmlFor?: string
    hideLabel?: boolean
    fluid?: boolean
}

export interface FormItemEvents {
    change: [Event]
    focusout: [FocusEvent]
}

export interface FormItemBlocks {
    label: null
    content: null
    append: null
}

export type Rules = Record<string, any>

enum MessageOrClassname {
    Message,
    ClassName,
}

type PromiseWithCancelled = Promise<boolean> & {cancelled: boolean};

const typeDefs: Required<TypeDefs<FormItemProps>> = {
    value: null,
    rules: Object,
    messages: Object,
    classNames: Object,
    errorClassName: String,
    label: String,
    htmlFor: String,
    hideLabel: Boolean,
    fluid: Boolean,
};

export class FormItem extends Component<FormItemProps, FormItemEvents, FormItemBlocks> {
    static template = template;
    static typeDefs = typeDefs;

    private form: Form | null = inject(FORM, null);
    private errorRef = createRef<HTMLDivElement>();
    private error = useError();
    private dirty = useDirty(() => this.validateHook.validate);
    private validateHook = useValidate(
        this.error.getErrorMessage,
        this.error.getErrorClassName,
        this.error.message,
        this.dirty.isDirty,
    );

    init() {
        useRecordItem(RECORD_KEY);
    }

    public validate() {
        if (!this.form) return true;

        return this.validateHook.validate();
    }

    public isValid() {
        return this.validateHook.isValid.value;
    }

    public reset() {
        this.error.reset();
        this.validateHook.reset();
        this.dirty.reset();
    }
}
