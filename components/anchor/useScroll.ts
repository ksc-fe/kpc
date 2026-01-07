import {useInstance, nextTick} from 'intact';
import {useState} from '../../hooks/useState';
import type {Anchor} from './';

export function useScroll() {
    const instance = useInstance() as Anchor;
    const isScrolling = useState(false);

    let scrollTimer: number | null = null;
    let rafId: number | null = null;
    let scrollContainer: HTMLElement | Window = window;
    // 回调函数，用于通知外部这是滚动触发的 value 变化
    let setIsSettingFromScroll: ((value: boolean) => void) | null = null;

    function getScrollContainer() {
        const {container} = instance.get();
        if (!container) {
            return window;
        }
        if (typeof container === 'string') {
            const el = document.querySelector(container) as HTMLElement;
            return el || window;
        }
        return container;
    }

    // 获取当前滚动距离
    function getScrollTop(): number {
        if (scrollContainer === window) {
            return window.scrollY || document.documentElement.scrollTop;
        }
        return (scrollContainer as HTMLElement).scrollTop;
    }

    // 获取滚动容器的高度
    function getScrollHeight(): number {
        if (scrollContainer === window) {
            return document.documentElement.scrollHeight;
        }
        return (scrollContainer as HTMLElement).scrollHeight;
    }

    // 获取视口高度
    function getViewportHeight(): number {
        if (scrollContainer === window) {
            return window.innerHeight;
        }
        return (scrollContainer as HTMLElement).clientHeight;
    }

    function getElementTop(element: HTMLElement, container: HTMLElement | Window): number {
        if (container === window) {
            // window: 累加 offsetTop
            let offsetTop = 0;
            let currentElement: HTMLElement | null = element;
            while (currentElement && currentElement !== document.body) {
                offsetTop += currentElement.offsetTop;
                currentElement = currentElement.offsetParent as HTMLElement | null;
            }
            return offsetTop;
        }
        
        // 自定义容器: 使用 getBoundingClientRect
        const containerEl = container as HTMLElement;
        const elementRect = element.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();
        
        // 元素相对于容器内容区的位置 = 
        // (元素到视口顶部的距离 - 容器到视口顶部的距离) + 容器已滚动的距离
        return elementRect.top - containerRect.top + containerEl.scrollTop;
    }

    function scrollTo(target: HTMLElement) {
        const {offset = 0, duration = 700} = instance.get();
        
        // 目标位置
        const targetTop = getElementTop(target, scrollContainer) - offset;
        // 当前位置
        const currentTop = getScrollTop();
        if (Math.abs(currentTop - targetTop) < 1) return;

        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        isScrolling.set(true);

        if (scrollContainer === window) {
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        } else {
            (scrollContainer as HTMLElement).scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }

        scrollTimer = window.setTimeout(() => {
            isScrolling.set(false);
        }, duration);
    }

    // 滚动触发的 value 更新
    function setValueFromScroll(href: string) {
        if (setIsSettingFromScroll) {
            setIsSettingFromScroll(true);
        }
        try {
            instance.set('value', href);
        } finally {
            if (setIsSettingFromScroll) {
                setIsSettingFromScroll(false);
            }
        }
    }

    // 更新当前激活的锚点
    function updateActive() {
        if (isScrolling.value) return;
        
        const {offset = 0, threshold = 50} = instance.get();
        const links = instance.getLinks();
        
        // 只处理当前存在且可见的锚点
        const candidates = [];
        for (const href of links) {
            const element = instance.getTargetElement(href);
            if (element && element.getClientRects().length > 0) {
                candidates.push({ href, element });
            }
        }

        if (candidates.length === 0) return;

        const scrollTop = getScrollTop();
        const viewportHeight = getViewportHeight();
        const totalHeight = getScrollHeight();
        
        let activeHref: string = candidates[0].href;

        if (scrollTop + viewportHeight >= totalHeight - 10) {
            // 接近底部，激活最后一个可见锚点
            activeHref = candidates[candidates.length - 1].href;
        } else if (scrollTop <= threshold) {
            // 接近顶部，激活第一个可见锚点
            activeHref = candidates[0].href;
        } else {
            // 正常滚动，寻找最后一个被“滚到”的锚点
            for (const { href, element } of candidates) {
                const sectionTop = getElementTop(element, scrollContainer) - offset - threshold;
                if (scrollTop >= sectionTop) {
                    activeHref = href;
                } else {
                    break;
                }
            }
        }

        if (activeHref !== instance.get('value')) {
            setValueFromScroll(activeHref);
        }
    }

    // 滚动事件处理
    function onScroll() {
        if (isScrolling.value) return;

        if (rafId) {
            cancelAnimationFrame(rafId);
        }
        // 使用 requestAnimationFrame 优化滚动性能
        rafId = requestAnimationFrame(updateActive);
    }

    // 挂载后的初始化
    function init() {
        setTimeout(() => {
            scrollContainer = getScrollContainer();
            
            if (scrollContainer === window) {
                window.addEventListener('scroll', onScroll, {passive: true});
            } else {
                (scrollContainer as HTMLElement).addEventListener('scroll', onScroll, {passive: true});
            }
            const initialValue = instance.get('value');
            if (initialValue) {
                const element = instance.getTargetElement(initialValue);
                if (element) {
                    scrollTo(element);
                    return;
                }
            }
        }, 100);

        return () => {
            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            const currentContainer = scrollContainer;
            if (currentContainer === window) {
                window.removeEventListener('scroll', onScroll);
            } else {
                (currentContainer as HTMLElement).removeEventListener('scroll', onScroll);
            }
        };
    }

    return {
        scrollTo,
        updateActive,
        init,
        isScrolling,
        set setIsSettingFromScroll(fn: (value: boolean) => void) {
            setIsSettingFromScroll = fn;
        },
    };
}
