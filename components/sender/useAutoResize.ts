import {useInstance, onMounted, onUpdated, RefObject, nextTick} from 'intact';
import {useConfigContext} from '../config';
import type {Sender} from './sender';
// textarea 高度自适应：默认保留 64 的输入区高度；当上传入口放进附件列表时压缩为单行输入。
// maxHeight 约束整个输入外框而非 textarea 本身。

const SHELL_MAX_FALLBACK = 300;
const TEXTAREA_MIN_DEFAULT = 64;
const TEXTAREA_MIN_LIST_UPLOAD = 20;

export function useAutoResize(textareaRef: RefObject<HTMLTextAreaElement>) {
    const instance = useInstance() as Sender;
    const {k} = useConfigContext();
    let shell: HTMLElement | null = null;
    let scheduled = false;

    function getShell(el: HTMLTextAreaElement) {
        if (shell && shell.contains(el)) return shell;

        shell = el.closest(`.${k}-sender-shell`) as HTMLElement | null;
        return shell;
    }

    function getShellMaxHeight(shell: HTMLElement): number {
        const parsed = parseFloat(getComputedStyle(shell).maxHeight);
        return Number.isFinite(parsed) ? parsed : SHELL_MAX_FALLBACK;
    }

    /**
     * textarea 高暂置 0 时，外框中除可拉伸输入行以外的纵向占位（px）。
     * maxHeight 是整框高度，需要减去这部分，才能得到 textarea 的可滚动上限。
     */
    function measureNonInputBlockHeight(
        el: HTMLTextAreaElement,
        shell: HTMLElement,
    ): number {
        const h0 = el.style.height;
        const min0 = el.style.minHeight;
        const max0 = el.style.maxHeight;
        const ov0 = el.style.overflow;
        el.style.height = '0px';
        el.style.minHeight = '0px';
        el.style.maxHeight = 'none';
        el.style.overflow = 'hidden';
        const h = shell.offsetHeight;
        el.style.height = h0;
        el.style.minHeight = min0;
        el.style.maxHeight = max0;
        el.style.overflow = ov0;
        return h;
    }

    function adjust() {
        const el = textareaRef.value;
        if (!el) return;

        const shell = getShell(el);
        if (!shell) return;

        const isListUpload = instance.get('uploadButton') === 'list';
        const min = isListUpload ? TEXTAREA_MIN_LIST_UPLOAD : TEXTAREA_MIN_DEFAULT;
        /** 整框最大高度（props 或默认 300），从实际 CSS 读取，支持 50vh 等合法 CSS 值 */
        const shellMax = getShellMaxHeight(shell);

        const nonInputH = measureNonInputBlockHeight(el, shell);
        const max = Math.max(8, shellMax - nonInputH);

        el.style.height = 'auto';
        const scroll = el.scrollHeight;
        const next = Math.min(Math.max(min, scroll), max);
        const nextHeight = `${next}px`;
        const nextOverflowY = scroll > max ? 'auto' : 'hidden';

        if (el.style.height !== nextHeight) {
            el.style.height = nextHeight;
        }
        if (el.style.overflowY !== nextOverflowY) {
            el.style.overflowY = nextOverflowY;
        }
    }

    function scheduleAdjust() {
        if (scheduled) return;

        scheduled = true;
        nextTick(() => {
            scheduled = false;
            adjust();
        });
    }

    onMounted(() => {
        scheduleAdjust();
    });
    onUpdated(() => {
        scheduleAdjust();
    });

    instance.watch('value', scheduleAdjust, {inited: true, presented: true});
    instance.watch('maxHeight', scheduleAdjust, {inited: true, presented: true});
    instance.watch('uploadButton', scheduleAdjust, {inited: true, presented: true});
    instance.watch('attachments', scheduleAdjust, {inited: true, presented: true});

    return {adjust};
}
