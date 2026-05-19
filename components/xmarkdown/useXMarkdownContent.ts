/**
 * 内容渲染和交互处理
 */

import {createRef, useInstance} from 'intact';
import {_$} from '../../i18n';
import type {XMarkdown} from './xmarkdown';
import {useMermaid, copyText} from './useMermaid';
import type {XMarkdownRenderedBlock} from './markdown';

/**
 * 管理内容区渲染后的交互能力
 */
export function useXMarkdownContent(
    getRenderedBlockData: (id: string) => XMarkdownRenderedBlock | undefined,
    getPrefixCls: () => string
) {
    const instance = useInstance() as XMarkdown;
    const mermaid = useMermaid(getRenderedBlockData, getPrefixCls);

    const rootRef = createRef<HTMLDivElement>();
    const contentRef = createRef<HTMLDivElement>();
    let activeContentElement: HTMLDivElement | null = null;

    /**
     * 同步当前内容区的交互绑定和 Mermaid 渲染
     */
    function syncInteractiveContent() {
        bindContentElement();
        const contentElement = contentRef.value;
        if (contentElement) {
            void mermaid.syncBlocks(contentElement);
        }
    }

    /**
     * 绑定内容区事件
     */
    function bindContentElement() {
        const contentElement = contentRef.value;
        if (!contentElement) {
            unbindContentElement();
            return;
        }
        if (activeContentElement === contentElement) return;

        unbindContentElement();
        activeContentElement = contentElement;

        contentElement.addEventListener('click', handleClick);
        contentElement.addEventListener('wheel', handleWheel, {passive: false});
        contentElement.addEventListener('pointerdown', handlePointerDown);

        window.addEventListener('pointermove', handleWindowPointerMove);
        window.addEventListener('pointerup', handleWindowPointerUp);
        window.addEventListener('pointercancel', handleWindowPointerUp);
    }

    /**
     * 解绑内容区事件
     */
    function unbindContentElement() {
        activeContentElement?.removeEventListener('click', handleClick);
        activeContentElement?.removeEventListener('wheel', handleWheel);
        activeContentElement?.removeEventListener('pointerdown', handlePointerDown);

        window.removeEventListener('pointermove', handleWindowPointerMove);
        window.removeEventListener('pointerup', handleWindowPointerUp);
        window.removeEventListener('pointercancel', handleWindowPointerUp);

        mermaid.finishDrag();
        activeContentElement = null;
    }

    /**
     * 处理内容区点击动作
     */
    const handleClick = async (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        const actionElement = target?.closest<HTMLElement>('[data-kpc-action]');
        if (!actionElement || !contentRef.value?.contains(actionElement)) return;

        const action = actionElement.dataset.kpcAction;
        if (!action) return;

        if (action === 'set-mermaid-view-diagram') {
            mermaid.setView(actionElement, 'diagram');
            return;
        }
        if (action === 'set-mermaid-view-source') {
            mermaid.setView(actionElement, 'source');
            return;
        }
        if (action === 'zoom-mermaid-in') {
            const block = actionElement.closest<HTMLElement>('[data-kpc-mermaid="true"]');
            if (block) mermaid.stepScale(block, 0.2);
            return;
        }
        if (action === 'zoom-mermaid-out') {
            const block = actionElement.closest<HTMLElement>('[data-kpc-mermaid="true"]');
            if (block) mermaid.stepScale(block, -0.2);
            return;
        }
        if (action === 'reset-mermaid-zoom') {
            const block = actionElement.closest<HTMLElement>('[data-kpc-mermaid="true"]');
            if (block) mermaid.resetScale(block);
            return;
        }
        if (action === 'download-mermaid') {
            const success = await mermaid.download(actionElement);
            mermaid.showFeedback(actionElement, success ? _$('已下载') : _$('下载失败'));
            return;
        }

        if (action === 'copy-code' || action === 'copy-mermaid') {
            const block = actionElement.closest<HTMLElement>('[data-kpc-code-block="true"], [data-kpc-mermaid="true"]');
            if (!block) return;

            const blockId = block.dataset.kpcBlockId || '';
            const renderedBlock = getRenderedBlockData(blockId);
            const source = renderedBlock?.source || '';
            const language = renderedBlock?.language || block.dataset.kpcLanguage || '';
            if (!source) return;

            const success = await copyText(source);
            mermaid.showFeedback(actionElement, success ? _$('已复制') : _$('复制失败'));

            if (success) {
                instance.trigger('codeCopy', source, language);
            }
        }
    };

    /**
     * 处理 Mermaid 滚轮缩放
     */
    const handleWheel = (e: WheelEvent) => {
        const contentElement = contentRef.value;
        if (!contentElement) return;
        mermaid.handleWheel(e, contentElement);
    };

    /**
     * 处理 Mermaid 拖拽开始
     */
    const handlePointerDown = (e: PointerEvent) => {
        const contentElement = contentRef.value;
        if (!contentElement) return;
        mermaid.handlePointerDown(e, contentElement);
    };

    /**
     * 处理全局拖拽移动
     */
    const handleWindowPointerMove = (e: PointerEvent) => {
        mermaid.handlePointerMove(e);
    };

    /**
     * 处理全局拖拽结束
     */
    const handleWindowPointerUp = (e: PointerEvent) => {
        mermaid.handlePointerUp(e);
    };

    return {
        rootRef,
        contentRef,

        onMounted: () => {
            syncInteractiveContent();
        },

        onUpdated: () => {
            syncInteractiveContent();
        },

        onBeforeUnmount: () => {
            unbindContentElement();
            mermaid.clearFeedbackTimers();
        },
    };
}
