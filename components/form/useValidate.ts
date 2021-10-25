import {useInstance, nextTick, createRef} from 'intact';
import type {FormItem} from './item';
import {useState, watchState, State} from '../../hooks/useState';
import {
    methods as globalMethods,
    messages as globalMessages,
    classNames as globalClassNames,
    Method
} from './methods';
import {isFunction, isString} from 'intact-shared';
import {useReceive} from '../../hooks/useReceive';

type PromiseWithCancelled = Promise<boolean> & {cancelled: boolean};

export function useValidate(
    getErrorMessage: (ruleName: string) => string,
    getErrorClassName: (ruleName: string) => string,
    message: State<string | undefined>,
    isDirty: State<boolean>
) {
    const instance = useInstance() as FormItem;
    const isValid = useState<boolean>(true);
    const errorClassName = useState<string | undefined>(undefined);
    let promise: PromiseWithCancelled | null = null;

    useReceive<FormItem>(['value', 'rules'], validateIfDirty); 

    function validateIfDirty() {
        if (isDirty.value) {
            validate();
        }
    }

    function validate(): PromiseWithCancelled | boolean {
        const {rules, value} = instance.get(); 

        if (!rules) return true;

        cancel();

        const promises: (boolean | string | Promise<boolean | string>)[] = [];
        const ruleNames: string[] = [];

        // check required rule firstly, detect whether it is empty or not
        const required = globalMethods.required(value, true);
        if (rules.required) {
            promises.push(required);
            ruleNames.push('required');
        }

        // if required rule passed, then check other rules
        if (required) {
            for (let key in rules) {
                const rule = rules[key];
                if (key === 'required' || rule === false) continue;

                let fn: Method;
                if (isFunction(rule)) {
                    fn = rule;
                } else {
                    fn = globalMethods[key];
                    /* istanbul ignore if */
                    if (!fn) {
                        console.warn(`Can not find validate method: ${key}`);
                        continue;
                    }
                }
                promises.push(fn(value, rules[key]));
                ruleNames.push(key);
            }
        }

        return promise = Promise.all(promises)
            .then<
                [boolean, string?, string?],
                [boolean, string?, string?]
            >(results => {
                for (let index = 0; index < results.length; index++) {
                    const result = results[index];
                    if (result !== true) {
                        const ruleName = ruleNames[index];
                        return [
                            false,
                            result || getErrorMessage(ruleName),
                            getErrorMessage(ruleName),
                        ];
                    }
                }
                return [true, message.value, undefined];
            }, err => {
                let message: string;
                let className: string;
                if (isString(err)) {
                    message = err;
                } else if (err) {
                    message = err.message || getErrorMessage(err.name);
                    className = err.className || getErrorMessage(err.name);
                }

                return [false, message!, className!];
            })
            .then<boolean>(([_isValid, _message, _className]) => {
                // if cancelled, should return the last result
                if (promise!.cancelled) return isValid.value;

                isDirty.set(true);
                errorClassName.set(_className);
                message.set(_message);
                isValid.set(_isValid);

                return _isValid;
            }) as PromiseWithCancelled;
    }

    function cancel() {
        if (promise) {
            promise.cancelled = true;
        }
    }

    function reset() {
        isValid.set(true);
        errorClassName.set(undefined);
        cancel();
    }

    return {isValid, errorClassName, validate, reset};
}
