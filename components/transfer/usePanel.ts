import {useInstance, Key} from 'intact';
import {Transfer} from './index';
import {useState, watchState} from '../../hooks/useState';
import {isEqualArray} from '../utils';

type Model = 'left' | 'right';

export function usePanel() {
    const instance = useInstance() as Transfer;
    const allLeafKeys = useState<Key[]>([], isEqualArray);
    const selectedKeys = useState<Key[]>([], isEqualArray);

    let startIndex: number | undefined = undefined;
    let endIndex: number | undefined = undefined;
    let checked: boolean = false;

    watchState(selectedKeys, v => {
        const {data} = instance.get();
        instance.set('value', filterData(data!, v));
    })

    instance.on('$receive:value', v => {
        if (!Array.isArray(v)) {
            instance.set('value', [], {silent: true});
            return;
        }
        selectedKeys.set(getLeafKeys(v));
    });

    // only change the left status, reserve the right status
    instance.on('$receive:data', v => {
        if (!v || !v.length) {
            instance.set('_leftCheckedKeys', []);
        } else {
            const {_leftCheckedKeys} = instance.get();
            const allKeys = getLeafKeys(v);
            const fix = (keys: Key[]) => {
                const ret: Key[] = [];
                if (keys) {
                    keys.forEach(key => {
                        if (allKeys.includes(key)) {
                            ret.push(key);
                        }
                    });
                }
                return ret;
            };
            allLeafKeys.set(allKeys);
            instance.set('_leftCheckedKeys', fix(_leftCheckedKeys));
        }
    });

    function deepClone(data: any): any{
        if (data == null) return data;

        if (Array.isArray(data)) {
            return data.map(item => {
                return deepClone(item);
            });
        } 

        if (typeof data === 'object') {
            const ret = {};
            for (let key in data) {
                ret[key] = deepClone(data[key]);
            }           
            return ret;
        }

        return data;
    }
    function filterData(data: any[], keys: Key[], isInter: boolean = true) {
        const {keyName, tree} = instance.get();
        data = tree ? deepClone(data) : data;
        const loop = (children: any[]) => {
            return children.filter(item => {
                if (item.children && item.children.length > 0) {
                    item.children = loop(item.children);
                }
                const leftFilter = (!keys.includes(item[keyName!]) && !item.children) || 
                    (!keys.includes(item[keyName!]) && item.children && item.children.length);
                const rightFilter = keys.includes(item[keyName!]) || (item.children && item.children.length);
                return !isInter ? leftFilter : rightFilter;
            })
        }
        return loop(data)
    }

    function getLeafKeys(data: any[]) {
        const keyName = instance.get('keyName')!;
        const leafKeys: any[] = [];
        const loop = (children: any[]) => {
            if (children) {
                children.forEach(item => {
                    if(!item.children) {
                        leafKeys.push(item[keyName]);
                    }
                    loop(item.children);
                });
            }
        };
        loop(data);
        return leafKeys;
    }

    function getShowedData(model: Model) {
        let data;
        if (model === 'left') {
            const {keyName} = instance.get();
            data = instance.get('data')!.filter(item => {
                return !~selectedKeys.value.indexOf(item[keyName!]);
            });
        } else {
            data = instance.get('value');
        }

        const keywords = instance.get(`_${model}Keywords`);
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

    function selectAll(model: Model) {
        const keyName = instance.get('keyName')!;
        instance.set(`_${model}CheckedKeys`, getEnabledData(model).map(item => item[keyName]));
    }

    function isCheckAll(model: Model) {
        const checked = instance.get(`${model}Checked`);
        const data = getEnabledData(model);

        return data.length && checked!.length >= data.length;
    }

    function toggleCheckAll(model: Model, e: MouseEvent) {
        if ((e.target as any).checked) {
            selectAll(model);
        }  else {
            instance.set(`_${model}CheckedKeys`, []);
        }
    }

    function onCheckboxChange(model: Model, index: number, e: MouseEvent) {
        if (startIndex === undefined || !e.shiftKey) {
            startIndex = index;
            endIndex = undefined;
            checked = (e.target as any).checked;
        } else if (e.shiftKey) {
            e.preventDefault();

            const values = getShowedData(model)!;
            const checkedKeys = instance.get(`_${model}CheckedKeys`).slice(0);
            const lastEndIndex = endIndex;
            const keyName = instance.get('keyName')!;
            endIndex = index;
            const update = (data: any[], isCheck: boolean) => {
                data.forEach(item => {
                    if (!item.disabled) {
                        const key = item[keyName];
                        const index = checkedKeys.indexOf(key);
                        if (isCheck) {
                            if (!~index) {
                                checkedKeys.push(key);
                            }
                        } else {
                            if (~index) {
                                checkedKeys.splice(index, 1);
                            }
                        }
                    }
                });
            };

            if (lastEndIndex !== undefined) {
                // if exists lastEndIndex, we reset the last result
                // and set it again
                update(
                    values.slice(
                        Math.min(index, lastEndIndex),
                        Math.max(index, lastEndIndex) + 1
                    ),
                    !checked
                ); 
            }
            update(
                values.slice(
                    Math.min(index, startIndex),
                    Math.max(index, startIndex) + 1
                ), 
                checked
            );

            instance.set(`_${model}CheckedKeys`, checkedKeys);
        }
    }

    return {
        allLeafKeys,
        selectedKeys,
        filterData,
        getLeafKeys,
        isCheckAll,
        toggleCheckAll,
        onCheckboxChange
    };
}
