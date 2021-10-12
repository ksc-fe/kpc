import {useInstance, onBeforeUpdate, onMounted} from 'intact';
import type {Layout} from './layout';
import {Aside} from './aside';
import {Header} from './header';
import {useState} from '../../hooks/useState';
import {mapChildren, isComponentVNode} from '../utils';

export function useIndexClassName(this: any) {
    const instance = useInstance() as Layout;
    const className = useState<Record<string, boolean>>(instance.defaultClassName);

    function updateClassName() {
        const {children} = instance.get();
        let hasAside = false;
        mapChildren(children, vNode => {
            if (isComponentVNode(vNode, Aside)) {
                hasAside = true;
            }
        });
        if (hasAside) {
            className.set({'k-layout k-has-aside': true});
        }
    }

    onMounted(() => {
        updateClassName();
    });

    return className;
}
export function useHeaderClassName() {
    const instance = useInstance() as Header;
    const className = useState<Record<string, boolean>>(instance.defaultClassName);

    function updateClassName() {
        const {fixed} = instance.get();
        className.set({'k-layout-header': true, 'k-layout-fixed': fixed!})
    }

    onMounted(() => {
        updateClassName();
    });

    return className;
}




