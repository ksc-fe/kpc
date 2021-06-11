import {Component, TypeDefs, inject, createRef} from 'intact';
import template from './item.vdt';
import {FORM, RECORD_KEY, Form} from './form';
import {useRecordItem} from '../../hooks/useRecordComponent';
import {bind} from '../utils';
import {methods, Method, messages, Message, classNames, ClassName} from './methods';
import {isFunction, isString} from 'intact-shared';

export interface FormItemProps {
    rules?: Rules,
    isDirty?: boolean,
    messages?: typeof messages,
    classNames?: typeof classNames,
    errorClassName?: string,
    label?: string
    htmlFor?: string
    hideLabel?: boolean
    fluid?: boolean

    _ellipsis?: boolean
    _isValid?: boolean
    _message?: string
}

export type Rules = Record<string, any>

enum MessageOrClassname {
    Message,
    ClassName,
}

type PromiseWithCancelled = Promise<boolean> & {cancelled: boolean};

const typeDefs: Required<TypeDefs<FormItemProps>> = {
    rules: Object,
    isDirty: Boolean,
    messages: Object,
    classNames: Object,
    errorClassName: String,
    label: String,
    htmlFor: String,
    hideLabel: Boolean,
    fluid: Boolean,

    _ellipsis: null,
    _isValid: null,
    _message: null,
};

const defaults = (): Partial<FormItemProps> => ({
    isDirty: false,
    messages: {},
    classNames: {},
    errorClassName: '',
    hideLabel: false,
    fluid: false,

    _ellipsis: false,
});

export class FormItem<T extends FormItemProps = FormItemProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private form: Form | null = null;
    private promise: PromiseWithCancelled | null = null;
    private errorRef = createRef<HTMLDivElement>();

    init() {
        this.form = inject(FORM, null);
        useRecordItem(RECORD_KEY);

        this.on('$receive:value', this.validateIfDirty);
        this.on('$receive:rules', this.validateIfDirty);
        this.on('$changed:_message', this.checkEllipsis);
    }

    validate() {
        if (!this.form) return true;

        const rules = this.get('rules');
        if (!rules) return true;

        this.cancel();

        const promises: (boolean | string | Promise<boolean | string>)[] = [];
        const keys: string[] = [];

        // check required firstly, detect it is empty or not
        let required = methods.required(this.get('value'), true);
        if (rules.required) {
            promises.push(required);
            keys.push('required');
        }

        // if the field is not empty, then check other rules
        if (required) {
            for (let key in rules) {
                const rule = rules[key];
                if (key === 'required' || rule === false) continue;

                let fn: Method;
                if (isFunction(rule)) {
                    fn = rule;
                } else {
                    fn = methods[key];
                    /* istanbul ignore if */
                    if (!fn) {
                        console.warn(`Can not find validate method: ${key}`);
                        continue;
                    }
                }
                promises.push(fn(this.get('value'), rules[key]));
                keys.push(key);
            }
        }
        
        const p = this.promise = Promise.all(promises)
            .then<
                [boolean, string | undefined, string | undefined], 
                [boolean, string | undefined, string | undefined]
            >(values => {
                for (let index = 0; index < values.length; index++) {
                    const value = values[index];
                    if (value !== true) {
                        const key = keys[index];
                        return [false, value || this.getMessage(key), this.getClassName(key)];
                    }
                }
                return [true, this.get('_message'), undefined];
            }, err => {
                let message: string;
                let className: string;
                if (isString(err)) {
                    message = err;
                } else if (err) {
                    message = err.message || this.getMessage(err.name);
                    className = err.className || this.getClassName(err.name);
                }
                return [false, message!, className!];
            })
            .then<boolean>(([isValid, message, className]) => {
                // if cancelled, should return the last result
                if (p.cancelled) return this.get('isValid');
                this.set({
                    isDirty: true,
                    errorClassName: className,

                    _message: message,
                    _isValid: isValid,
                });
                return isValid;
            }) as PromiseWithCancelled;

        return p;
    }

    private getMessage(key: string) {
        return this.getMessageOrClassname(MessageOrClassname.Message, key);
    }

    private getClassName(key: string) {
        return this.getMessageOrClassname(MessageOrClassname.ClassName, key);
    }

    private getMessageOrClassname(type: MessageOrClassname, key: string) {
        const custom = this.get(type === MessageOrClassname.Message ? 'messages' : 'classNames')!;
        const value = custom[key] || (type === MessageOrClassname.Message ? messages[key] : classNames[key]);

        if (isFunction(value)) {
            const rules = this.get('rules')!;
            return value(this.get('value'), rules[key]);
        }
        return value;
    }

    private cancel() {
        if (this.promise) {
            this.promise.cancelled = true;
        }
    }

    @bind
    private onChange(e: Event) {
        this.dirty();
        this.trigger('change', e);
    }

    @bind
    private onFocusout(e: FocusEvent) {
        this.dirty();
        this.trigger('focusout', e);
    }

    private dirty() {
        if (this.get('isDirty')) return;

        this.set('isDirty', true);

        // for select, the focusout event triggers before select
        // so we put off validating it
        setTimeout(() => {
            // maybe it has been unmounted or reset
            if (this.$unmounted || !this.get('isDirty')) return;
            this.validate()
        }, 100);
    }

    @bind
    private validateIfDirty() {
        if (this.get('isDirty')) {
            this.validate();
        }
    }

    @bind
    private checkEllipsis() {
        const error = this.errorRef.value;
        if (!error) return;
        this.set('_ellipsis', error.offsetWidth < error.scrollWidth);
    }
}
