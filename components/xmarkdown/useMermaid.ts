/**
 * Mermaid 图表处理
 *
 * 负责渲染 Mermaid 图表，以及缩放、拖拽、下载等交互功能。
 */

import {useInstance} from 'intact';
import {_$} from '../../i18n';
import {selectValue} from '../utils';
import type {XMarkdown} from './xmarkdown';
import type {XMarkdownRenderedBlock} from './markdown';

/** 拖拽状态 */
interface DragState {
    viewport: HTMLElement
    pointerId: number
    startX: number
    startY: number
    startScrollLeft: number
    startScrollTop: number
}

// 模块级常量
const SCALE_STEP = 0.2;
const WHEEL_STEP = 0.1;
const VIEWPORT_MAX_HEIGHT = 480;

// 模块级状态
let mermaidPromise: Promise<any> | null = null;

/**
 * 管理 Mermaid 图表的渲染与交互
 */
export function useMermaid(
    getRenderedBlockData: (id: string) => XMarkdownRenderedBlock | undefined,
    getPrefixCls: () => string
) {
    const instance = useInstance() as XMarkdown;

    let renderSeed = 0;
    let syncing = false;
    let pendingSync = false;
    let dragState: DragState | null = null;
    const feedbackTimers = new Set<number>();

    /**
     * 同步渲染 Mermaid 图表
     */
    async function syncBlocks(container: HTMLElement) {
        if (!instance.get('enableMermaid')) return;

        if (syncing) {
            pendingSync = true;
            return;
        }
        // 获取所有需要渲染的 Mermaid 块
        const blocks = Array.from(container.querySelectorAll<HTMLElement>('[data-kpc-mermaid="true"]'))
            .filter((block) => block.dataset.kpcRenderState !== 'done');

        if (!blocks.length) return;

        syncing = true;
        try {
            const mermaid = await loadMermaid();
            if (!mermaid) return;

            mermaid.initialize({
                startOnLoad: false,
                securityLevel: 'strict' as const,
                theme: 'default' as const,
                ...instance.get('mermaidConfig'),
            });

            for (const block of blocks) {
                await renderBlock(block, mermaid, container); // 渲染单个 Mermaid 块
            }
        } finally {
            syncing = false;
            if (pendingSync) {
                pendingSync = false;
                void syncBlocks(container);
            }
        }
    }

    /**
     * 渲染单个 Mermaid 块
     */
    async function renderBlock(block: HTMLElement, mermaid: any, container: HTMLElement) {
        const state = block.dataset.kpcRenderState;
        if (state === 'loading' || state === 'done') return;

        const stage = block.querySelector<HTMLElement>('[data-kpc-mermaid-stage="true"]');
        const blockId = block.dataset.kpcBlockId || '';
        const renderedBlock = getRenderedBlockData(blockId);
        const source = renderedBlock?.source || '';

        if (!stage || !source) return;

        block.dataset.kpcRenderState = 'loading';
        stage.textContent = _$('Mermaid 渲染中...');
        updateToolbarState(block);

        try {
            const renderId = createMermaidRenderId(
                container,
                source,
                blockId,
                renderSeed++,
                getPrefixCls()
            );
            const svg = await mermaid.renderAsync(
                renderId,
                source
            );

            if (!container.contains(block)) return;

            stage.innerHTML = svg;
            block.dataset.kpcRenderState = 'done';
            prepareStage(block);
        } catch (e) {
            if (!container.contains(block)) return;

            const error = e instanceof Error ? e : new Error(String(e));
            stage.innerHTML = `<div class="${getPrefixCls()}-xmarkdown-mermaid-error">${escapeHtml(error.message)}</div>`;
            block.dataset.kpcRenderState = 'error';
            updateToolbarState(block, false);
            instance.trigger('mermaidError', error, source);
        }
    }

    /**
     * 初始化图表尺寸和缩放
     */
    function prepareStage(block: HTMLElement) {
        const stage = block.querySelector<HTMLElement>('[data-kpc-mermaid-stage="true"]');
        const svg = stage?.querySelector<SVGSVGElement>('svg');
        const viewport = block.querySelector<HTMLElement>('[data-kpc-mermaid-viewport="true"]');

        if (!stage || !svg) {
            updateToolbarState(block, false);
            return;
        }

        const {width, height} = getBaseSize(svg);
        if (width > 0) block.dataset.kpcMermaidBaseWidth = String(width);
        if (height > 0) block.dataset.kpcMermaidBaseHeight = String(height);

        block.dataset.kpcScale = '1';
        svg.style.maxWidth = '100%';
        svg.style.height = 'auto';
        block.dataset.kpcInitialScale = String(getFittedScale(block, viewport));
        block.dataset.kpcScale = block.dataset.kpcInitialScale;

        applyTransform(block);
    }

    /**
     * 处理缩放
     */
    function stepScale(block: HTMLElement, delta: number) {
        setScale(block, getScale(block) + delta);
    }

    /**
     * 读取当前缩放比例
     */
    function getScale(block: HTMLElement): number {
        const parsed = Number(block.dataset.kpcScale || '1');
        return Number.isFinite(parsed) ? parsed : 1;
    }

    /**
     * 读取初始适配缩放比例
     */
    function getInitialScale(block: HTMLElement): number {
        const parsed = Number(block.dataset.kpcInitialScale || '1');
        return Number.isFinite(parsed) ? parsed : 1;
    }

    /**
     * 计算最小缩放比例
     */
    function getMinScale(block: HTMLElement): number {
        return Math.max(0.25, Math.min(getInitialScale(block), 1) * 0.6);
    }

    /**
     * 计算最大缩放比例
     */
    function getMaxScale(block: HTMLElement): number {
        return Math.max(2, getInitialScale(block) * 3);
    }

    /**
     * 设置指定图表的缩放比例
     */
    function setScale(block: HTMLElement, nextScale: number) {
        const initialScale = getInitialScale(block);
        block.dataset.kpcScale = String(clamp(nextScale, getMinScale(block), getMaxScale(block)));
        applyTransform(block);

        if (getScale(block) <= initialScale) {
            const viewport = block.querySelector<HTMLElement>('[data-kpc-mermaid-viewport="true"]');
            if (viewport) {
                viewport.scrollLeft = 0;
                viewport.scrollTop = 0;
            }
        }
    }

    /**
     * 重置为初始缩放比例
     */
    function resetScale(block: HTMLElement) {
        block.dataset.kpcScale = String(getInitialScale(block));
        applyTransform(block);
    }

    /**
     * 应用缩放变换
     */
    function applyTransform(block: HTMLElement) {
        const stage = block.querySelector<HTMLElement>('[data-kpc-mermaid-stage="true"]');
        const svg = stage?.querySelector<SVGSVGElement>('svg');
        const viewport = block.querySelector<HTMLElement>('[data-kpc-mermaid-viewport="true"]');

        if (!stage || !svg || !viewport) {
            updateToolbarState(block, false);
            return;
        }

        const scale = getScale(block);
        const baseWidth = Number(block.dataset.kpcMermaidBaseWidth || '0');
        const baseHeight = Number(block.dataset.kpcMermaidBaseHeight || '0');
        const viewportWidth = Math.max(viewport.clientWidth, 1);
        const viewportHeight = Math.max(viewport.clientHeight, 1);
        const scaledWidth = Math.max(baseWidth * scale, 1);
        const scaledHeight = Math.max(baseHeight * scale, 1);
        const needsHorizontalScroll = scaledWidth + 16 > viewportWidth;
        const needsVerticalScroll = scaledHeight + 16 > viewportHeight;
        const stageWidth = needsHorizontalScroll ? scaledWidth + 16 : viewportWidth;
        const stageHeight = needsVerticalScroll ? scaledHeight + 16 : viewportHeight;

        block.dataset.kpcScale = String(scale);

        stage.style.width = `${stageWidth}px`;
        stage.style.height = `${stageHeight}px`;
        stage.style.justifyContent = needsHorizontalScroll ? 'flex-start' : 'center';
        stage.style.alignItems = needsVerticalScroll ? 'flex-start' : 'center';

        svg.style.transformOrigin = 'center center';
        svg.style.transform = 'none';
        svg.style.width = `${scaledWidth}px`;
        svg.style.height = `${scaledHeight}px`;
        svg.style.maxWidth = 'none';
        svg.style.cursor = 'default';

        viewport.dataset.kpcCanDrag = needsHorizontalScroll || needsVerticalScroll ? 'true' : 'false';
        updateToolbarState(block);
    }

    /**
     * 计算 fitted 缩放比例
     */
    function getFittedScale(block: HTMLElement, viewport?: HTMLElement | null): number {
        const targetViewport = viewport || block.querySelector<HTMLElement>('[data-kpc-mermaid-viewport="true"]');
        const baseWidth = Number(block.dataset.kpcMermaidBaseWidth || '0');
        const baseHeight = Number(block.dataset.kpcMermaidBaseHeight || '0');

        if (!targetViewport || baseWidth <= 0 || baseHeight <= 0) return 1;

        const rect = targetViewport.getBoundingClientRect();
        const availableWidth = Math.max(rect.width - 16, 1);
        const viewportMaxHeight = Number.parseFloat(window.getComputedStyle(targetViewport).maxHeight || '') || VIEWPORT_MAX_HEIGHT;
        const availableHeight = Math.max(viewportMaxHeight - 16, 1);
        const fittedScale = Math.min(1, availableWidth / baseWidth, availableHeight / baseHeight);

        return clamp(fittedScale, 0.25, 1);
    }

    /**
     * 更新工具栏状态
     */
    function updateToolbarState(block: HTMLElement, enabled = true) {
        const scale = getScale(block);
        const initialScale = getInitialScale(block);
        const isSourceView = block.dataset.kpcView === 'source';
        const disableZoom = !enabled || isSourceView;

        const zoomOutButton = block.querySelector<HTMLButtonElement>('[data-kpc-action="zoom-mermaid-out"]');
        const zoomInButton = block.querySelector<HTMLButtonElement>('[data-kpc-action="zoom-mermaid-in"]');
        const resetButton = block.querySelector<HTMLButtonElement>('[data-kpc-action="reset-mermaid-zoom"]');
        const downloadButton = block.querySelector<HTMLButtonElement>('[data-kpc-action="download-mermaid"]');

        if (zoomOutButton) zoomOutButton.disabled = disableZoom || scale <= getMinScale(block);
        if (zoomInButton) zoomInButton.disabled = disableZoom || scale >= getMaxScale(block);
        if (resetButton) resetButton.disabled = disableZoom || scale === initialScale;
        if (downloadButton) downloadButton.disabled = !enabled || isSourceView;
    }

    /**
     * 切换视图（图表/源码）
     */
    function setView(actionElement: HTMLElement, view: 'diagram' | 'source') {
        const block = actionElement.closest<HTMLElement>('[data-kpc-mermaid="true"]');
        if (!block) return;

        block.dataset.kpcView = view;
        applyTransform(block);

        block.querySelectorAll<HTMLElement>('[data-kpc-action="set-mermaid-view-diagram"], [data-kpc-action="set-mermaid-view-source"]')
            .forEach((button) => {
                button.dataset.kpcSelected = button.dataset.kpcAction === `set-mermaid-view-${view}` ? 'true' : 'false';
                button.setAttribute('aria-pressed', button.dataset.kpcSelected);
            });

        updateToolbarState(block);
    }

    /**
     * 下载图表
     */
    async function download(actionElement: HTMLElement): Promise<boolean> {
        const block = actionElement.closest<HTMLElement>('[data-kpc-mermaid="true"]');
        const svg = block?.querySelector<SVGSVGElement>('[data-kpc-mermaid-stage="true"] svg');
        if (!block || !svg) return false;

        const filename = `mermaid-${Date.now()}`;
        try {
            const dataUrl = await svgToPngDataUrl(svg);
            triggerDownload(dataUrl, `${filename}.png`);
            return true;
        } catch (e) {
            try {
                triggerDownload(serializeSvgAsDataUrl(svg), `${filename}.svg`);
                return true;
            } catch (error) {
                return false;
            }
        }
    }

    /**
     * 处理指针按下（开始拖拽）
     */
    function handlePointerDown(e: PointerEvent, container: HTMLElement) {
        if (e.button !== 0) return;

        const target = e.target as HTMLElement | null;
        const viewport = target?.closest<HTMLElement>('[data-kpc-mermaid-viewport="true"]');
        if (!viewport || !container.contains(viewport)) return;
        if (viewport.dataset.kpcCanDrag !== 'true') return;

        dragState = {
            viewport,
            pointerId: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            startScrollLeft: viewport.scrollLeft,
            startScrollTop: viewport.scrollTop,
        };

        viewport.dataset.kpcDragging = 'true';
        viewport.setPointerCapture?.(e.pointerId);
        e.preventDefault();
    }

    /**
     * 处理指针移动
     */
    function handlePointerMove(e: PointerEvent) {
        if (!dragState || dragState.pointerId !== e.pointerId) return;

        dragState.viewport.scrollLeft = dragState.startScrollLeft - (e.clientX - dragState.startX);
        dragState.viewport.scrollTop = dragState.startScrollTop - (e.clientY - dragState.startY);
        e.preventDefault();
    }

    /**
     * 处理指针抬起（结束拖拽）
     */
    function handlePointerUp(e: PointerEvent) {
        if (!dragState || dragState.pointerId !== e.pointerId) return;
        finishDrag();
    }

    /**
     * 结束拖拽
     */
    function finishDrag() {
        if (!dragState) return;

        dragState.viewport.dataset.kpcDragging = 'false';
        dragState.viewport.releasePointerCapture?.(dragState.pointerId);
        dragState = null;
    }

    /**
     * 处理滚轮缩放
     */
    function handleWheel(e: WheelEvent, container: HTMLElement) {
        const target = e.target as HTMLElement | null;
        const viewport = target?.closest<HTMLElement>('[data-kpc-mermaid-viewport="true"]');
        if (!viewport || !container.contains(viewport) || !(e.ctrlKey || e.metaKey)) return;

        const block = viewport.closest<HTMLElement>('[data-kpc-mermaid="true"]');
        if (!block || block.dataset.kpcView === 'source') return;

        e.preventDefault();
        const delta = e.deltaY < 0 ? WHEEL_STEP : -WHEEL_STEP;
        setScale(block, getScale(block) + delta);
    }

    /**
     * 显示按钮反馈
     */
    function showFeedback(button: HTMLElement, text: string) {
        const previousTitle = button.getAttribute('title') || '';
        const iconElement = button.querySelector<HTMLElement>('[data-kpc-icon="true"]');
        const defaultIconClass = button.dataset.kpcDefaultIcon || '';
        const feedbackIconClass = button.dataset.kpcFeedbackIcon || defaultIconClass;

        if (button.dataset.kpcFeedbackMode === 'icon' && iconElement) {
            iconElement.className = `${getPrefixCls()}-xmarkdown-toolbar-icon ${getPrefixCls()}-icon ${feedbackIconClass}`;
            button.setAttribute('title', text);
            button.setAttribute('aria-label', text);
        } else {
            button.textContent = text;
        }

        const timer = window.setTimeout(() => {
            feedbackTimers.delete(timer);
            if (!document.body.contains(button)) return;

            if (button.dataset.kpcFeedbackMode === 'icon' && iconElement) {
                iconElement.className = `${getPrefixCls()}-xmarkdown-toolbar-icon ${getPrefixCls()}-icon ${defaultIconClass}`;
                button.setAttribute('title', button.dataset.kpcDefaultTitle || previousTitle);
                button.setAttribute('aria-label', button.dataset.kpcDefaultTitle || previousTitle);
            }
        }, 1200);

        feedbackTimers.add(timer);
    }

    /**
     * 清理反馈定时器
     */
    function clearFeedbackTimers() {
        feedbackTimers.forEach((timer) => clearTimeout(timer));
        feedbackTimers.clear();
    }

    return {
        syncBlocks,
        setView,
        stepScale,
        resetScale,
        download,
        handlePointerDown,
        handlePointerMove,
        handlePointerUp,
        handleWheel,
        showFeedback,
        finishDrag,
        clearFeedbackTimers,
    };
}

/**
 * 加载 Mermaid 库
 */
function loadMermaid(): Promise<any> {
    if (!mermaidPromise) {
        mermaidPromise = import('mermaid/dist/mermaid.min.js')
            .then((module) => module.default || module)
            .catch(() => {
                mermaidPromise = null;
                return null;
            });
    }
    return mermaidPromise;
}

/**
 * 生成 Mermaid 渲染 id
 */
function createMermaidRenderId(
    container: HTMLElement,
    source: string,
    blockId: string,
    renderSeed: number,
    prefixCls: string
) {
    const suffix = blockId || `tail-${renderSeed}`;
    const scope = hashText(`${suffix}\n${source || ''}`);
    const instanceScope = getMermaidInstanceScope(container, prefixCls);

    return `kpc-xmarkdown-mermaid-${scope}${instanceScope ? `-${instanceScope}` : ''}-${suffix}`;
}

/**
 * 获取当前 XMarkdown 在局部多实例场景下的序号
 */
function getMermaidInstanceScope(container: HTMLElement, prefixCls: string) {
    const rootSelector = `.${prefixCls}-xmarkdown`;
    const root = container.closest<HTMLElement>(rootSelector) || container;
    let current: HTMLElement | null = root.parentElement;

    while (current) {
        const roots = Array.from(current.querySelectorAll<HTMLElement>(rootSelector));
        const index = roots.indexOf(root);

        if (index > -1 && roots.length > 1) {
            return index > 0 ? String(index) : '';
        }
        current = current.parentElement;
    }

    return '';
}

/**
 * 生成稳定短 hash
 */
function hashText(text: string) {
    let hash = 2166136261;

    for (let i = 0; i < text.length; i++) {
        hash ^= text.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }

    return (hash >>> 0).toString(36);
}

/**
 * 获取 SVG 基础尺寸
 */
function getBaseSize(svg: SVGSVGElement): {width: number; height: number} {
    const viewBox = svg.getAttribute('viewBox');
    if (viewBox) {
        const [, , width, height] = viewBox.trim().split(/\s+/).map(Number);
        if (width > 0 && height > 0) return {width, height};
    }

    const width = parseSvgSize(svg.getAttribute('width'));
    const height = parseSvgSize(svg.getAttribute('height'));
    if (width > 0 && height > 0) return {width, height};

    const rect = svg.getBoundingClientRect();
    return {width: rect.width, height: rect.height};
}

/**
 * 解析 SVG 尺寸属性
 */
function parseSvgSize(value: string | null): number {
    if (!value || value.includes('%')) return 0;
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
}

/**
 * 序列化 SVG 为 Data URL
 */
function serializeSvgAsDataUrl(svg: SVGSVGElement): string {
    const clonedSvg = svg.cloneNode(true) as SVGSVGElement;
    clonedSvg.removeAttribute('style');
    clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clonedSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(clonedSvg))}`;
}

/**
 * SVG 转 PNG Data URL
 */
async function svgToPngDataUrl(svg: SVGSVGElement): Promise<string> {
    const width = Math.max(Math.round(svg.getBoundingClientRect().width || parseSvgSize(svg.getAttribute('width')) || 1), 1);
    const height = Math.max(Math.round(svg.getBoundingClientRect().height || parseSvgSize(svg.getAttribute('height')) || 1), 1);
    const image = new Image();
    image.decoding = 'async';

    await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();
        image.onerror = () => reject(new Error('Failed to load mermaid svg'));
        image.src = serializeSvgAsDataUrl(svg);
    });

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    if (!context) throw new Error('Failed to create canvas context');

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);

    return canvas.toDataURL('image/png');
}

/**
 * 触发下载
 */
function triggerDownload(url: string, filename: string) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.rel = 'noopener';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

/**
 * 复制文本到剪贴板
 */
export async function copyText(text: string): Promise<boolean> {
    try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch (e) {}

    const fakeElement = createFakeElement(text);
    document.body.appendChild(fakeElement);
    selectValue(fakeElement);

    let result: boolean;
    try {
        document.execCommand('copy');
        result = true;
    } catch (e) {
        result = false;
    }

    document.body.removeChild(fakeElement);
    return result;
}

/**
 * 创建隐藏的复制元素
 */
function createFakeElement(value: string): HTMLTextAreaElement {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    const fakeElement = document.createElement('textarea');

    fakeElement.style.fontSize = '12pt';
    fakeElement.style.border = '0';
    fakeElement.style.padding = '0';
    fakeElement.style.margin = '0';
    fakeElement.style.position = 'absolute';
    fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px';
    fakeElement.style.top = `${window.pageYOffset || document.documentElement.scrollTop}px`;
    fakeElement.setAttribute('readonly', '');
    fakeElement.value = value;

    return fakeElement;
}

/**
 * 数值约束
 */
function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, Math.round(value * 100) / 100));
}

/**
 * 转义 HTML
 */
function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
