import {useInstance} from 'intact';
import type {Bubble} from './bubble';

// 维护 Bubble 的可见内容：loading 清空、typing 推进、streaming 完成事件都在这里收口。
export function useBubbleDisplay() {
    const instance = useInstance() as Bubble;
    let typingTimer: number | null = null;
    let lastCompletedContent: string | null = null;
    let previousContent = instance.get('content');
    let previousLoading = !!instance.get('loading');
    let previousStreaming = !!instance.get('streaming');
    let hasPendingCompletion = previousLoading || previousStreaming;
    let typingTargetKey = '';

    function setDisplayContent(value: string) {
        if ((instance as any).get('$displayContent') === value) return false;

        (instance as any).set('$displayContent', value);
        return true;
    }

    function setTypingActive(value: boolean) {
        if ((instance as any).get('$typingActive') === value) return;

        (instance as any).set('$typingActive', value);
    }

    function getTypingOptions() {
        const typing = instance.get('typing');
        if (typing && typeof typing === 'object') {
            return {
                interval: Math.max(typing.interval || 24, 16),
                step: Math.max(typing.step || 2, 1),
                keepPrefix: typing.keepPrefix !== false,
                resumeFrom: typing.resumeFrom,
            };
        }

        return {
            interval: 24,
            step: 2,
            keepPrefix: true,
            resumeFrom: undefined,
        };
    }

    function stopTyping() {
        if (typingTimer) {
            clearTimeout(typingTimer);
            typingTimer = null;
        }
        setTypingActive(false);
    }

    function resetTypingComplete() {
        lastCompletedContent = null;
    }

    // 同一轮内容只触发一次完成事件，避免 streaming 结束和 typing 追平重复通知。
    function triggerTypingComplete(content: string) {
        if (lastCompletedContent === content) return;

        lastCompletedContent = content;
        hasPendingCompletion = false;
        instance.trigger('typingComplete', content);
    }

    function finishTyping(content: string) {
        stopTyping();
        triggerTypingComplete(content);
    }

    // 同步完成状态，检测状态变化以判断是否需要触发typingComplete事件
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

    function shouldEmitTypingComplete(content: string) {
        return content.length > 0 || hasPendingCompletion;
    }

    function getDisplayedContent() {
        return instance.get<string>('$displayContent') || '';
    }

    function getSafeContentPrefix(content: string, prefix: string) {
        if (!prefix) return '';
        if (content.slice(0, prefix.length) === prefix) return prefix;

        let i = 0;
        while (i < prefix.length && i < content.length && prefix[i] === content[i]) {
            i++;
        }

        return prefix.slice(0, i);
    }

    function getResumePrefix(content: string) {
        const {resumeFrom} = getTypingOptions();
        if (resumeFrom === undefined || resumeFrom === null) return '';

        if (resumeFrom === 'content') return content;
        if (typeof resumeFrom === 'number') return content.slice(0, Math.max(0, resumeFrom));

        return getSafeContentPrefix(content, String(resumeFrom));
    }

    function getTypingTargetKey(content: string) {
        const {keepPrefix, resumeFrom} = getTypingOptions();
        return `${keepPrefix ? '1' : '0'}\0${String(resumeFrom)}\0${content}`;
    }

    function syncTypingStart(content: string) {
        const targetKey = getTypingTargetKey(content);
        if (targetKey === typingTargetKey) return;

        typingTargetKey = targetKey;
        const sharedPrefix = getSharedPrefix(content);
        if (sharedPrefix !== getDisplayedContent()) {
            resetTypingComplete();
            setDisplayContent(sharedPrefix);
        }
    }

    // 获取共享前缀
    function getSharedPrefix(content: string) {
        const displayedContent = getDisplayedContent();

        if (!displayedContent) return getResumePrefix(content);
        if (!getTypingOptions().keepPrefix) return '';

        // 避免 startsWith 依赖，兼容旧运行环境。
        if (!displayedContent || content.slice(0, displayedContent.length) === displayedContent) {
            return displayedContent;
        }

        return getSafeContentPrefix(content, displayedContent);
    }

    // 开始打字动画
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

    // 运行打字动画
    function runTyping() {
        syncCompletionState();

        const content = instance.get('content');
        const nextValue = content === undefined || content === null ? '' : String(content);

        if (instance.get('loading')) {
            stopTyping();
            resetTypingComplete();
            typingTargetKey = '';
            setDisplayContent('');
            return;
        }

        if (!instance.get('typing') || !nextValue) {
            stopTyping();
            typingTargetKey = '';
            setDisplayContent(nextValue);
            if (!instance.get('streaming') && shouldEmitTypingComplete(nextValue)) {
                triggerTypingComplete(nextValue);
            }
            return;
        }

        syncTypingStart(nextValue);

        const currentValue = getDisplayedContent();
        const {interval, step} = getTypingOptions();

        if (currentValue !== nextValue) {
            const nextLength = Math.min(currentValue.length + step, nextValue.length);
            const renderedContent = nextValue.slice(0, nextLength);
            setDisplayContent(renderedContent);
            instance.trigger('typing', renderedContent, nextValue);
        }

        if (getDisplayedContent() === nextValue) {
            if (instance.get('streaming')) {
                stopTyping();
                return;
            }

            finishTyping(nextValue);
            return;
        }

        setTypingActive(true);
        typingTimer = window.setTimeout(() => {
            typingTimer = null;
            runTyping();
        }, interval);
    }

    // 同步显示内容，处理打字动画、流式输出、加载状态等
    function syncDisplayContent() {
        syncCompletionState();
        if (instance.get('loading')) {
            stopTyping();
            resetTypingComplete();
            typingTargetKey = '';
            setDisplayContent('');
            return;
        }

        const content = instance.get('content');
        const nextValue = content === undefined || content === null ? '' : String(content);
        const typing = instance.get('typing');
        const streaming = instance.get('streaming');

        if (!nextValue) {
            stopTyping();
            typingTargetKey = '';
            setDisplayContent(nextValue);
            if (!streaming && shouldEmitTypingComplete(nextValue)) {
                triggerTypingComplete(nextValue);
            }
            return;
        }

        if (!typing) {
            stopTyping();
            typingTargetKey = '';
            setDisplayContent(nextValue);
            if (!streaming && shouldEmitTypingComplete(nextValue)) {
                triggerTypingComplete(nextValue);
            }
            return;
        }

        const previousDisplayContent = getDisplayedContent();
        syncTypingStart(nextValue);
        if (getDisplayedContent() !== previousDisplayContent) {
            // 内容被修订时保留共享前缀，避免流式修正时整段闪烁。
            stopTyping();
        }

        if (getDisplayedContent() === nextValue) {
            if (!streaming) {
                finishTyping(nextValue);
            } else {
                stopTyping();
            }
            return;
        }

        startTyping(!getDisplayedContent());
    }

    // 初始化状态和绑定监听器
    function bootstrap() {
        const content = instance.get('content');
        const nextValue = content === undefined || content === null ? '' : String(content);
        setTypingActive(false);
        const initialDisplayContent = !instance.get('loading') && nextValue
            ? instance.get('typing') ? getResumePrefix(nextValue) : nextValue
            : '';
        setDisplayContent(initialDisplayContent);
        instance.watch('content', () => syncDisplayContent(), {inited: true});
        instance.watch('loading', () => syncDisplayContent(), {inited: true});
        instance.watch('streaming', () => syncDisplayContent(), {inited: true});
        instance.watch('typing', () => syncDisplayContent(), {inited: true});
    }

    bootstrap();

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

    function shouldShowContentBlock() {
        return (
            instance.get('loading') ||
            instance.get('streaming') ||
            hasVisibleContent() ||
            hasNonEmptyContentProp()
        );
    }

    function shouldShowLoadingShell() {
        const loading = instance.get('loading');
        if (loading) return true;

        const visible = hasVisibleContent();
        if (visible) return false;

        if (instance.get('streaming')) {
            return true;
        }

        return !!instance.get('typing') && hasNonEmptyContentProp();
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

    function getBubbleStyle() {
        const maxWidthString = instance.get('maxWidthString');
        if (!maxWidthString) return;

        return {maxWidth: maxWidthString};
    }

    function getRoleNameText() {
        return instance.get('roleName') || '';
    }

    function hasRoleName() {
        return !!getRoleNameText();
    }

    function shouldShowAvatar() {
        const avatar = instance.get('avatar');
        return avatar !== false;
    }

    function getAvatarText() {
        const roleName = getRoleNameText().trim();
        if (roleName) {
            return roleName.charAt(0).toUpperCase();
        }

        return '';
    }

    return {
        onMounted: () => syncDisplayContent(),
        onBeforeUnmount: () => {
            stopTyping();
        },
        hasContentProp,
        hasNonEmptyContentProp,
        hasVisibleContent,
        shouldShowContentBlock,
        shouldShowLoadingShell,
        getDisplayedContent,
        shouldShowTypingSuffix,
        isTypingActive,
        getBubbleStyle,
        getRoleNameText,
        hasRoleName,
        shouldShowAvatar,
        getAvatarText,
    };
}
