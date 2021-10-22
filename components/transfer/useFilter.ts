import {useInstance, Key} from 'intact';
import {Transfer} from './index';

export type Model = 'left' | 'right';

export function useFilter() {
    const instance = useInstance() as Transfer;

    instance.on('$receive:value', v => {
        if (!Array.isArray(v)) {
            instance.set('value', [], {silent: true});
        } else {
            const {rightCheckedKeys} = instance.get();
            instance.set('rightCheckedKeys', fixData(filterData('right'), rightCheckedKeys));
        }
    });

    // only change the left status, reserve the right status
    instance.on('$receive:data', v => {
        if (!v || !v.length) {
            instance.set('leftCheckedKeys', []);
        } else {
            const {leftCheckedKeys} = instance.get();
            instance.set('leftCheckedKeys', fixData(filterData('left'), leftCheckedKeys));
        }
    });

    function fixData(data: any[], keys: Key[]){
        const {keyName} = instance.get();
        const allKeys = data!.reduce((memo, item) => {
            memo[item[keyName!]] = true;
            return memo;
        }, {})
        const ret: Key[] = [];
        if (keys) {
            keys.forEach(key => {
                if (allKeys[key]) {
                    ret.push(key);
                }
            });
        }
        return ret;
    }

    function filterData(model: Model) {
        const {data, keyName, value} = instance.get();
        return data!.filter(item => {
            const rightFilter = ~value!.indexOf(item[keyName!]);
            return model === 'left' ? !rightFilter : rightFilter;
        })
    }

    function getShowedData(model: Model) {
        let data = filterData(model);
        const keywords = instance.get(`${model}Keywords`);
        if (instance.get('filterable') && keywords) {
            const filter = instance.get('filter')!;
            data = data!.filter(item => filter(item, keywords));
        }

        return data;
    }

    function getEnabledData(model: Model) {
        return getShowedData(model)!.filter(item => {
            return !item.disabled;
        });
    }

    return {
        filterData,
        getShowedData,
        getEnabledData
    };
}
