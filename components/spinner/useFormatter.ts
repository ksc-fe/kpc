import {useInstance} from 'intact';
import type {Spinner} from './';

export function useFormatter() {
    const instance = useInstance() as Spinner;

    function format(value: number): string {
        const {formatter, prefix, suffix} = instance.get();

        if (!formatter) {
            return `${prefix || ''}${value}${suffix || ''}`;
        }

        return formatter(value);
    } 

    function parse(value: string): number | typeof NaN {
        const {parser, prefix, suffix} = instance.get();

        if (value === '') {
            return NaN;
        }

        if (!parser) {
            if (prefix) {
                value = value.replace(new RegExp(`^${prefix}`), '');
            }
            if (suffix) {
                value = value.replace(new RegExp(`${suffix}$`), '');
            }
            return +value;
        }

        return parser(value);
    }

    return {format, parse};
}
