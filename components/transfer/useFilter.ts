import {useInstance, Key} from 'intact';
import {State} from '../../hooks/useState';
import {Transfer} from './index';

export type Model = 'left' | 'right';

export function useFilter(rightData: State<any[]>) {
    const instance = useInstance() as Transfer;

    instance.on('$receive:value', v => {
        if (!Array.isArray(v)) {
            instance.set('value', [], {silent: true});
        } else {
            const {keyName, data} = instance.get();
            const _data = data!.filter(item => {
                return ~v.indexOf(item[keyName!]);
            });
            rightData.set(_data);
        }
    });

    // only change the left status, reserve the right status
    instance.on('$receive:data', v => {
        if (!v || !v.length) {
            instance.set('leftCheckedKeys', []);
        } else {
            const {leftCheckedKeys, keyName} = instance.get();
            const allKeys = v.reduce((memo, item) => {
                memo[item[keyName!]] = true;
                return memo;
            }, {});
            const fix = (keys: Key[]) => {
                const ret: Key[] = [];
                if (keys) {
                    keys.forEach(key => {
                        if (allKeys[key]) {
                            ret.push(key);
                        }
                    });
                }
                return ret;
            };
            instance.set('leftCheckedKeys', fix(leftCheckedKeys!));
        }
    });

    function getFilterData(model: Model){
        let data;
        if (model === 'left') {
            const {value, keyName} = instance.get();
            data = instance.get('data')!.filter(item => {
                return !~value!.indexOf(item[keyName!]);
            });
        } else {
            data = rightData.value;
        }
        return data;
    }

    function getShowedData(model: Model) {
        let data = getFilterData(model);
        const keywords = instance.get(`${model}Keywords` as `leftKeywords` | `rightKeywords`);
        if (instance.get('filterable') && keywords) {
            const filter = instance.get('filter') || defaultFilter;
            data = data!.filter(item => filter(item, keywords));
        }
        return data;
    }

    function getEnabledData(model: Model) {
        return getShowedData(model)!.filter(item => {
            return !item.disabled;
        });
    }


    function defaultFilter(data: any, keywords: string) {
        const {labelName} = instance.get();
        return data[labelName!].includes(keywords);
    }

    return {
        getFilterData,
        getShowedData,
        getEnabledData
    };
}

