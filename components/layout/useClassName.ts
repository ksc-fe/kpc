import {useInstance, onBeforeUpdate, onMounted} from 'intact';
import type {Layout} from './layout';
import {Aside} from './aside';
import {Header} from './header';
import {useState} from '../../hooks/useState';
import {findChildren, isComponentVNode} from '../utils';

export function useLayoutClassName(this: any) {
    const instance = useInstance() as Layout;
    const className = useState<Record<string, boolean> | null>(null);

    function updateClassName() {
        const {children} = instance.get();
        const hasAside = findChildren(children, vNode => isComponentVNode(vNode, Aside));
        if (hasAside) {
            className.set({'k-has-aside': true});
        }
    }

    onMounted(() => {
        updateClassName();
    });

    return className;
}
export function useHeaderClassName() {
    const instance = useInstance() as Header;
    const className = useState<Record<string, boolean>>({'k-layout-fixed': false});

    function updateClassName() {
        const {fixed} = instance.get();
        className.set({'k-layout-fixed': fixed!})
    }

    onMounted(() => {
        updateClassName();
    });

    instance.on('$receive:fixed', updateClassName);

    return className;
}




