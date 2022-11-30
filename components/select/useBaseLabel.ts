import {Children, useInstance, Component} from 'intact';
import {isNullOrUndefined, isStringOrNumber} from 'intact-shared';
import {isEmptyString, getTextByChildren} from '../utils';

type BaseLabelProps = {
    value: any,
    multiple: boolean,
    filterable: boolean,
}

export function useBaseLabel<T, C extends Component<P>, P extends BaseLabelProps>(
    getChildren: () => T,
    findLabelFromChildren: (children: T, value: any) => Children,
) {
    const instance = useInstance() as C;
    const labelMap: Map<any, Children> = new Map();

    function getLabel() {
        const {value, multiple} = instance.get();
        const children = getChildren();

        if (isNullOrUndefined(value)) return;

        if (!multiple) {
            return findLabel(children, value);
        } else {
            const labels: Children[] = [];
            value.forEach((value: any) => {
                const label = findLabel(children, value);
                if (!isNullOrUndefined(label)) {
                    labels.push(label);
                }
            });

            return labels;
        }
    }

    function findLabel(children: T, value: any): Children | null {
        let label = findLabelFromChildren(children, value);

        if (isNullOrUndefined(label)) {
            label = labelMap.get(value);
        } else {
            if (instance.get('filterable')) {
                label = getTextByChildren(label);
            }

            labelMap.set(value, label);
        }

        label = isEmptyString(label) ? (isStringOrNumber(value) ? value : null) : label;

        return label;
    }

    function cleanMap() {
        const {value, multiple} = instance.get();

        if (isNullOrUndefined(value)) {
            labelMap.clear();
            return;
        }

        if (multiple) {
            labelMap.forEach((item, key) => {
                if (!value.includes(key)) {
                    labelMap.delete(key);
                }
            });
            return;
        }
        labelMap.forEach((item, key) => {
            if (key !== value) {
                labelMap.delete(key);
            }
        });
    }
 
    instance.watch('value', cleanMap, {inited: true});

    return {getLabel};
}
