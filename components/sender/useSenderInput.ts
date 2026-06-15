import {useInstance, RefObject} from 'intact';
import {useState} from '../../hooks/useState';
import type {Sender, SenderAttachment} from './sender';

// 输入框相关的交互：focus 状态、键盘事件、发送/停止按钮的状态机。
// 内部不维护 value，完全依赖 props 受控流。
export function useSenderInput(textareaRef: RefObject<HTMLTextAreaElement>) {
    const instance = useInstance() as Sender;
    const isFocus = useState(false);

    function getCurrentAttachments(): SenderAttachment[] {
        return instance.get('attachments') || [];
    }

    function getValueText() {
        return instance.get('value') || '';
    }

    /** 是否因为「内容为空且没有附件」而需要禁用发送按钮 */
    function isSendButtonAutoDisabled() {
        return !getValueText().trim() && getCurrentAttachments().length === 0;
    }

    function isDisabled() {
        return !!instance.get('disabled');
    }

    function isInputDisabled() {
        return isDisabled() || !!instance.get('inputDisabled');
    }

    function isGenerating() {
        return !!instance.get('generating');
    }

    function isLoading() {
        return !!instance.get('loading');
    }

    /** 发送按钮的最终禁用态：业务强制 disabled 优先，其余按内容自动判定 */
    function isSendButtonDisabled() {
        if (isDisabled() || isLoading() || instance.get('sendDisabled') || instance.get('inputDisabled')) return true;
        if (isGenerating()) return false;
        return isSendButtonAutoDisabled();
    }

    /** 生成中的停止按钮禁用态，独立于发送禁用态。 */
    function isStopButtonDisabled() {
        return isDisabled() || !!instance.get('stopDisabled');
    }

    function isSendDisabled() {
        if (isDisabled() || isLoading() || instance.get('sendDisabled') || instance.get('inputDisabled')) return true;
        if (isGenerating()) return false;
        return isSendButtonAutoDisabled();
    }

    // 发送消息
    function send() {
        if (isGenerating() || isSendDisabled()) return;

        const value = getValueText();
        const attachments = getCurrentAttachments();
        instance.trigger('messageSend', {value, attachments});
        // 发送后清空输入框和附件
        if (instance.get('clearOnSend')) {
            instance.set('value', '');
            if (attachments.length > 0) {
                instance.set('attachments', []);
            }
        }
    }

    function stopGenerate() {
        if (!isGenerating() || isStopButtonDisabled()) return;

        instance.trigger('stopGenerate');
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key !== 'Enter' || !instance.get('submitOnEnter') || isInputDisabled() || instance.get('readonly')) return;
        // Shift / 中文 IME 期间不触发提交
        if (e.shiftKey || (e as any).isComposing || e.keyCode === 229) return;

        e.preventDefault();
        instance.trigger('pressEnter', e);
        if (isGenerating()) return;
        send();
    }

    function handleInput(e: Event) {
        if (isInputDisabled() || instance.get('readonly')) return;

        const next = (e.target as HTMLTextAreaElement).value;
        instance.set('value', next);
    }

    function handleFocus(e: FocusEvent) {
        isFocus.set(true);
        instance.trigger('focus', e);
    }

    function handleBlur(e: FocusEvent) {
        isFocus.set(false);
        instance.trigger('blur', e);
    }

    function handleSendClick() {
        if (isGenerating()) {
            stopGenerate();
            return;
        }
        send();
    }

    return {
        isFocus,
        isDisabled,
        isInputDisabled,
        isGenerating,
        isLoading,
        isSendButtonDisabled,
        isStopButtonDisabled,
        isSendDisabled,
        send,
        stopGenerate,
        handleKeydown,
        handleInput,
        handleFocus,
        handleBlur,
        handleSendClick,
        focusTextarea: () => textareaRef.value?.focus(),
    };
}
