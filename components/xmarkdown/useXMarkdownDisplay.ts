/**
 * 内容显示逻辑
 *
 * 负责：
 * - 打字动画效果
 * - 流式渲染处理
 * - Markdown 渲染和缓存
 * - 数学公式运行时加载
 */

import {useInstance} from 'intact';
import type {XMarkdown} from './xmarkdown';
import {
    containsFormulaSyntax,
    createStreamingTailCache,
    createMarkdownRenderer,
    renderMarkdownTail,
    splitMarkdownForStreaming,
    type XMarkdownFormulaRuntime,
    type XMarkdownRenderedBlock,
    type XMarkdownRenderedStableBlock,
    type XMarkdownRenderResult,
    type XMarkdownRenderOptions,
    type XMarkdownRenderedBlockType,
    type XMarkdownSourceBlock,
} from './markdown';

export function useXMarkdownDisplay(getPrefixCls: () => string) {
    const instance = useInstance() as XMarkdown;
    let mounted = false;

    // 打字动画状态
    let typingTimer: number | null = null;
    let lastCompletedContent: string | null = null;
    let hasPendingCompletion = !!instance.get('loading') || !!instance.get('streaming');
    let previousContent = instance.get('content');
    let previousLoading = !!instance.get('loading');
    let previousStreaming = !!instance.get('streaming');

    // Markdown 渲染缓存
    let lastStableMarkdownSource = '';
    let lastStableMarkdownBlocks: XMarkdownRenderedStableBlock[] = [];
    let lastStableMarkdownResult: XMarkdownRenderResult = {
        nodes: [],
        blocks: {},
    };
    let streamingTailCache = createStreamingTailCache();
    let renderedBlockId = 0;

    // 数学公式运行时
    let formulaRuntime: XMarkdownFormulaRuntime | null = null;
    let formulaRuntimePromise: Promise<void> | null = null;

    // 渲染器实例
    let renderer = createMarkdownRenderer(getRenderOptions());

    /**
     * 获取渲染配置
     */
    function getRenderOptions(): XMarkdownRenderOptions {
        return {
            prefixCls: getPrefixCls(),
            allowHtml: !!instance.get('allowHtml'),
            showCodeHeader: instance.get('showCodeHeader') !== false,
            enableMermaid: instance.get('enableMermaid') !== false,
            enableFormula: instance.get('enableFormula') !== false,
            formulaDelimiters: instance.get('formulaDelimiters'),
            formulaMacros: instance.get('formulaMacros'),
            sanitizeOptions: instance.get('sanitizeOptions'),
            plugins: instance.get('plugins'),
            tagAttrs: instance.get('tagAttrs'),
            tagRenderers: instance.get('tagRenderers'),
            codeBlockRenderers: instance.get('codeBlockRenderers'),
            streaming: !!instance.get('streaming'),
            typing: !!instance.get('typing'),
            formulaRuntime,
            normalizeRendererOutput(value: any) {
                const normalize = ((instance.constructor as typeof XMarkdown) as any).normalize;
                return normalize ? normalize(value) : value;
            },
        };
    }

    /**
     * 刷新渲染器
     */
    function refreshRenderer() {
        renderer = createMarkdownRenderer(getRenderOptions());
        resetMarkdownCache();
    }

    /**
     * 设置显示内容
     */
    function setDisplayContent(value: string) {
        if ((instance as any).get('$displayContent') === value) return false;
        (instance as any).set('$displayContent', value);
        syncRenderedMarkdown();
        return true;
    }

    /**
     * 设置打字动画状态
     */
    function setTypingActive(value: boolean) {
        if ((instance as any).get('$typingActive') === value) return;
        (instance as any).set('$typingActive', value);
    }

    /**
     * 设置渲染结果
     */
    function setRenderedResult(stable: XMarkdownRenderResult, tailNodes: any[], source: string) {
        (instance as any).set({
            $renderedStableNodes: stable.nodes,
            $renderedTailNodes: tailNodes,
            $renderedMarkdownSource: source,
            $renderedBlocks: stable.blocks,
            $renderedNodes: [...stable.nodes, ...tailNodes],
        });
    }

    /**
     * 确保数学公式运行时已加载
     */
    function ensureFormulaRuntime(source: string) {
        if (
            instance.get('enableFormula') === false ||
            formulaRuntime ||
            formulaRuntimePromise ||
            !containsFormulaSyntax(source, instance.get('formulaDelimiters'))
        ) {
            return;
        }

        formulaRuntimePromise = Promise.all([
            import('katex'),
            import('markdown-it-texmath'),
            import('katex/dist/katex.min.css'),
        ]).then(([katexModule, texmathModule]) => {
            if ((instance as any).$unmounted) return;
            formulaRuntime = {
                katex: katexModule.default || katexModule,
                texmath: texmathModule.default || texmathModule,
            };
            formulaRuntimePromise = null;
            refreshRenderer();
            syncRenderedMarkdown(true);
        }).catch(() => {
            formulaRuntimePromise = null;
        });
    }

    /**
     * 获取打字动画配置
     */
    function getTypingOptions() {
        const typing = instance.get('typing');
        if (typing && typeof typing === 'object') {
            return {
                interval: Math.max(typing.interval || 24, 16),
                step: Math.max(typing.step || 2, 1),
            };
        }
        return {interval: 24, step: 2};
    }

    /**
     * 停止打字动画
     */
    function stopTyping() {
        if (typingTimer) {
            clearTimeout(typingTimer);
            typingTimer = null;
        }
        setTypingActive(false);
    }

    /**
     * 重置 Markdown 缓存
     */
    function resetMarkdownCache() {
        lastStableMarkdownSource = '';
        lastStableMarkdownBlocks = [];
        lastStableMarkdownResult = {nodes: [], blocks: {}};
        streamingTailCache = createStreamingTailCache();
    }

    /**
     * 重置完成状态
     */
    function resetTypingComplete() {
        lastCompletedContent = null;
    }

    /**
     * 触发打字完成事件
     */
    function triggerTypingComplete(content: string) {
        if (lastCompletedContent === content) return;
        lastCompletedContent = content;
        hasPendingCompletion = false;
        instance.trigger('typingComplete', content);
    }

    /**
     * 完成打字动画
     */
    function finishTyping(content: string) {
        stopTyping();
        syncRenderedMarkdown(true);
        triggerTypingComplete(content);
    }

    /**
     * 同步完成状态
     */
    function syncCompletionState() {
        const content = instance.get('content');
        const loading = !!instance.get('loading');
        const streaming = !!instance.get('streaming');

        if (content !== previousContent || (loading && !previousLoading) || (streaming && !previousStreaming)) {
            hasPendingCompletion = true;
        }

        previousContent = content;
        previousLoading = loading;
        previousStreaming = streaming;
    }

    /**
     * 判断是否应该触发 typingComplete 事件
     */
    function shouldEmitTypingComplete(content: string) {
        return content.length > 0 || hasPendingCompletion;
    }

    /**
     * 获取当前显示内容
     */
    function getDisplayedContent() {
        return instance.get<string>('$displayContent') || '';
    }

    /**
     * 获取共享前缀
     */
    function getSharedPrefix(content: string) {
        const displayedContent = getDisplayedContent();
        if (!displayedContent || content.startsWith(displayedContent)) {
            return displayedContent;
        }

        let i = 0;
        while (i < displayedContent.length && i < content.length && displayedContent[i] === content[i]) {
            i++;
        }
        return displayedContent.slice(0, i);
    }

    /**
     * 立即渲染 Markdown
     */
    function renderMarkdownImmediately(source: string) {
        lastStableMarkdownResult = renderStableMarkdown(source);
        setRenderedResult(lastStableMarkdownResult, [], source);
    }

    /**
     * 渲染 stable 区 Markdown
     */
    function renderStableMarkdown(source: string) {
        if (source === lastStableMarkdownSource) {
            return lastStableMarkdownResult;
        }

        const sourceBlocks = renderer.parseBlocks(source);
        const renderedBlocks = reuseStableMarkdownBlocks(sourceBlocks);

        lastStableMarkdownBlocks = renderedBlocks;
        lastStableMarkdownSource = source;
        lastStableMarkdownResult = mergeRenderedBlocks(renderedBlocks);

        return lastStableMarkdownResult;
    }

    /**
     * 复用 stable 区未变化的 block
     */
    function reuseStableMarkdownBlocks(sourceBlocks: XMarkdownSourceBlock[]) {
        const renderedBlocks: XMarkdownRenderedStableBlock[] = [];

        let index = 0;
        // 匹配复用的 block
        while (index < sourceBlocks.length && index < lastStableMarkdownBlocks.length) {
            const sourceBlock = sourceBlocks[index];
            const renderedBlock = lastStableMarkdownBlocks[index];

            if (!canReuseStableBlock(sourceBlock, renderedBlock)) break; // 如果不能复用，则跳出循环

            renderedBlocks.push(renderedBlock);
            index++;
        }
        // 渲染新增的 block
        for (; index < sourceBlocks.length; index++) {
            renderedBlocks.push(renderer.renderBlock(sourceBlocks[index], registerRenderedBlock));
        }

        return renderedBlocks;
    }

    /**
     * 判断 block 是否可以直接复用
     */
    function canReuseStableBlock(
        sourceBlock: XMarkdownSourceBlock,
        renderedBlock?: XMarkdownRenderedStableBlock
    ) {
        return !!renderedBlock
            && sourceBlock.key === renderedBlock.key
            && sourceBlock.source === renderedBlock.source;
    }

    /**
     * 注册代码块和 Mermaid 块元信息
     */
    function registerRenderedBlock(
        type: XMarkdownRenderedBlockType,
        source: string,
        language: string
    ) {
        return `xmarkdown-block-${renderedBlockId++}`;
    }

    /**
     * 合并 stable block 的渲染结果
     */
    function mergeRenderedBlocks(renderedBlocks: XMarkdownRenderedStableBlock[]) {
        const nodes: any[] = [];
        const blocks: Record<string, XMarkdownRenderedBlock> = {};

        renderedBlocks.forEach((block) => {
            nodes.push(...block.nodes);
            Object.assign(blocks, block.blocks);
        });

        return {nodes, blocks};
    }

    /**
     * 判断是否需要渐进式渲染
     */
    function shouldRenderMarkdownProgressively() {
        return !!instance.get('streaming') || isTypingActive();
    }

    /**
     * 渐进式渲染 Markdown
     */
    function renderMarkdownProgressively(source: string) {
        const {stableSource, tailText, openFence} = splitMarkdownForStreaming(source, streamingTailCache);
        let renderedStableResult: XMarkdownRenderResult = {nodes: [], blocks: {}};

        if (stableSource) {
            renderedStableResult = renderStableMarkdown(stableSource);
        } else if (lastStableMarkdownSource || lastStableMarkdownResult.nodes.length) {
            resetMarkdownCache();
        }

        setRenderedResult(renderedStableResult, renderMarkdownTail(tailText, openFence, getRenderOptions()), source);
    }

    /**
     * 同步 Markdown 渲染
     */
    function syncRenderedMarkdown(immediate = false) {
        const source = getDisplayedContent();
        ensureFormulaRuntime(source);

        if (!source) {
            resetMarkdownCache();
            setRenderedResult({nodes: [], blocks: {}}, [], '');
            return;
        }

        if (immediate || !shouldRenderMarkdownProgressively()) {
            renderMarkdownImmediately(source);
            return;
        }

        renderMarkdownProgressively(source);
    }

    /**
     * 开始打字动画
     */
    function startTyping(immediate = false) {
        if (typingTimer) return;

        if (immediate) {
            setTypingActive(true);
            runTyping();
            return;
        }

        const {interval} = getTypingOptions();
        setTypingActive(true);
        typingTimer = window.setTimeout(() => {
            typingTimer = null;
            runTyping();
        }, interval);
    }

    /**
     * 运行打字动画
     */
    function runTyping() {
        syncCompletionState();

        const content = instance.get('content');
        const nextValue = content === undefined || content === null ? '' : String(content);

        // 加载状态处理
        if (instance.get('loading')) {
            stopTyping();
            resetTypingComplete();
            if (!setDisplayContent('')) {
                syncRenderedMarkdown();
            }
            return;
        }

        // 无内容或禁用打字
        if (!instance.get('typing') || !nextValue) {
            stopTyping();
            if (!setDisplayContent(nextValue)) {
                syncRenderedMarkdown();
            }
            if (!instance.get('streaming') && shouldEmitTypingComplete(nextValue)) {
                triggerTypingComplete(nextValue);
            }
            return;
        }

        // 内容变化检测
        const sharedPrefix = getSharedPrefix(nextValue);
        if (sharedPrefix !== getDisplayedContent()) {
            resetTypingComplete();
            setDisplayContent(sharedPrefix);
        }

        const currentValue = getDisplayedContent();
        const {interval, step} = getTypingOptions();

        // 逐步显示内容
        if (currentValue !== nextValue) {
            const nextLength = Math.min(currentValue.length + step, nextValue.length);
            const renderedContent = nextValue.slice(0, nextLength);
            setDisplayContent(renderedContent);
            instance.trigger('typing', renderedContent, nextValue);
        }

        // 完成检测
        if (getDisplayedContent() === nextValue) {
            if (instance.get('streaming')) {
                stopTyping();
                syncRenderedMarkdown();
                return;
            }
            finishTyping(nextValue);
            return;
        }

        // 继续动画
        setTypingActive(true);
        typingTimer = window.setTimeout(() => {
            typingTimer = null;
            runTyping();
        }, interval);
    }

    /**
     * 同步显示内容（入口函数）
     */
    function syncDisplayContent() {
        syncCompletionState();

        // 加载状态
        if (instance.get('loading')) {
            stopTyping();
            resetTypingComplete();
            if (!setDisplayContent('')) {
                syncRenderedMarkdown();
            }
            return;
        }

        const content = instance.get('content');
        const nextValue = content === undefined || content === null ? '' : String(content);
        const typing = instance.get('typing');
        const streaming = instance.get('streaming');

        // 空内容或禁用打字效果，直接显示
        if (!nextValue || !typing) {
            stopTyping();
            if (!setDisplayContent(nextValue)) {
                syncRenderedMarkdown();
            }
            if (!streaming && shouldEmitTypingComplete(nextValue)) {
                triggerTypingComplete(nextValue);
            }
            return;
        }

        // 内容变化检测
        const sharedPrefix = getSharedPrefix(nextValue);
        // 内容发生"非追加"变化时
        if (sharedPrefix !== getDisplayedContent()) {
            stopTyping();
            resetTypingComplete();
            setDisplayContent(sharedPrefix);
        }

        // 已完成
        if (getDisplayedContent() === nextValue) {
            if (!streaming) {
                finishTyping(nextValue);
            } else {
                stopTyping();
                syncRenderedMarkdown();
            }
            return;
        }

        startTyping(!getDisplayedContent());
    }

    /**
     * 初始化
     */
    function bootstrap() {
        const content = instance.get('content');
        setTypingActive(false);
        setDisplayContent(
            !instance.get('loading') && !instance.get('typing') && content !== undefined && content !== null
                ? String(content)
                : ''
        );

        // 监听核心属性变化
        ['content', 'loading', 'streaming', 'typing'].forEach((key) => {
            instance.watch(key as any, () => {
                if (!mounted) return;
                syncDisplayContent();
            });
        });

        // 监听渲染配置变化
        [
            'allowHtml',
            'showCodeHeader',
            'enableMermaid',
            'mermaidConfig',
            'enableFormula',
            'formulaDelimiters',
            'formulaMacros',
            'sanitizeOptions',
            'plugins',
            'tagAttrs',
            'tagRenderers',
            'codeBlockRenderers',
        ].forEach((key) => {
            instance.watch(key as any, () => {
                if (!mounted) return;
                refreshRenderer();
                syncRenderedMarkdown(true);
            });
        });
    }

    bootstrap();

    // 公共方法
    function hasContentProp() {
        const content = instance.get('content');
        return content !== undefined && content !== null;
    }

    function hasNonEmptyContentProp() {
        const content = instance.get('content');
        if (content === undefined || content === null) return false;
        return String(content).length > 0;
    }

    function hasVisibleContent() {
        return !!getDisplayedContent();
    }

    function shouldShowLoadingShell() {
        const loading = instance.get('loading');
        if (loading) return true;

        const visible = hasVisibleContent();
        if (visible) return false;

        if (instance.get('streaming')) return true;

        return !!instance.get('typing') && hasNonEmptyContentProp();
    }

    function shouldShowEmpty() {
        return !shouldShowLoadingShell() && !hasNonEmptyContentProp() && !hasVisibleContent();
    }

    function getRenderedNodes() {
        return (instance as any).get('$renderedNodes') || [];
    }

    function getRenderedStableNodes() {
        return (instance as any).get('$renderedStableNodes') || [];
    }

    function getRenderedTailNodes() {
        return (instance as any).get('$renderedTailNodes') || [];
    }

    function getRenderedContent() {
        return [...getRenderedStableNodes(), ...getRenderedTailNodes()];
    }

    function getRenderedBlockData(id: string) {
        const blocks = (instance as any).get('$renderedBlocks') as Record<string, XMarkdownRenderedBlock> | undefined;
        return blocks ? blocks[id] : undefined;
    }

    function isTypingActive() {
        return !!instance.get<boolean>('$typingActive');
    }

    function shouldShowTypingSuffix() {
        const typing = instance.get('typing');
        if (!typing) return false;
        if (typeof typing === 'boolean') return false;
        if (typing.suffix !== true) return false;
        return !instance.get('loading') && (isTypingActive() || !!instance.get('streaming'));
    }

    return {
        onMounted: () => {
            mounted = true;
            if (!hasVisibleContent() && (hasContentProp() || !!instance.get('loading'))) {
                syncDisplayContent();
            }
        },
        onBeforeUnmount: () => {
            mounted = false;
            stopTyping();
            resetMarkdownCache();
        },

        // 状态判断
        hasContentProp,
        hasNonEmptyContentProp,
        hasVisibleContent,
        shouldShowLoadingShell,
        shouldShowEmpty,

        // 内容获取
        getDisplayedContent,
        getRenderedContent,
        getRenderedStableNodes,
        getRenderedTailNodes,
        getRenderedBlockData,
        getRenderedNodes,

        // 状态查询
        isTypingActive,
        shouldShowTypingSuffix,
    };
}
