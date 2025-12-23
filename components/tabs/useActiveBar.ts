import {useInstance, onMounted, onUpdated, findDomFromVNode, nextTick} from 'intact';
import type {Tabs} from './';
import {useState} from '../../hooks/useState';

export function useActiveBar() {
    const instance = useInstance() as Tabs;
    const styles = useState<Record<string, string> | null>(null, (lastValue, nextValue) => {
        if (lastValue === null || nextValue === null) return lastValue === nextValue;
        for (let key in lastValue) {
            if (lastValue[key] !== nextValue[key]) return false;
        }
        return true;
    });

    function generateStyle() {
        const element = findDomFromVNode(instance.$lastInput!, true) as HTMLElement;
        const { k } = instance.config;
        const activeTab = element.querySelector(`.${k}-tab.${k}-active`) as HTMLElement | null;
        const vertical = instance.get('vertical');

        if (!activeTab) {
            const oldStyles = styles.value;
            if (oldStyles) {
                styles.set(oldStyles.left ?
                    {left: oldStyles.left, width: '0'} :
                    {top: oldStyles.top, height: '0'}
                );
            } else {
                styles.set(vertical ? {height: '0'} : {width: '0'});
            }
            return;
        }
        
        if (!vertical) {
            const width = activeTab.offsetWidth;
            const left = activeTab.offsetLeft;
            styles.set({left: left + 'px', width: width + 'px'});
        } else {
            const height = activeTab.offsetHeight;
            const top = activeTab.offsetTop;
            styles.set({top: top + 'px', height: height + 'px'});
        }
    } 

    onMounted(generateStyle);
    // Tabs maybe embed into Transition, therefore handle style nextTick
    onUpdated(() => nextTick(generateStyle));

    return styles;
}
