import {useInstance, RefObject} from 'intact';
import {request} from '../upload/ajaxUploader';
import type {RequestError} from '../upload/ajaxUploader';
import {_$} from '../../i18n';
import {isFunction} from 'intact-shared';
import type {Sender, SenderAttachment, SenderUploadProps} from './sender';

// 用一个递增 id 给本地附件分配 key，与 Upload 组件保持一致策略。
let uid = 0;

// 内置的「文件选择 + XHR 上传」逻辑。
// 不直接复用 Upload 内部 hook，因为它强依赖 useInstance() as Upload 的状态形状；
// 这里直接复用更底层的 request() 和上传约束规则，避免在 Sender 里渲染额外的 Upload 节点。
export function useSenderUpload(fileInputRef: RefObject<HTMLInputElement>) {
    const instance = useInstance() as Sender;

    function getUploadProps(): SenderUploadProps {
        return instance.get('uploadProps') || {};
    }

    function getAcceptAttr() {
        const {accept} = getUploadProps();
        if (accept) return accept;
        return undefined;
    }

    function isMultiple() {
        const {multiple} = getUploadProps();
        if (multiple !== undefined) return multiple;
        // 默认允许多选，符合常见 AI 对话场景
        return true;
    }

    function getAttachments(): SenderAttachment[] {
        return instance.get('attachments') || [];
    }

    function isInputDisabled() {
        return !!instance.get('disabled') || !!instance.get('inputDisabled');
    }

    function setAttachments(next: SenderAttachment[]) {
        // 触发 change:attachments，配合 Vue v-model:attachments / React onChangeAttachments
        instance.set('attachments', next);
    }

    function isAcceptValid(file: File, accept: string | undefined) {
        if (!accept) return true;
        const tokens = accept.split(',').map(s => s.trim()).filter(Boolean);
        if (!tokens.length) return true;
        const name = file.name || '';
        const ext = name.includes('.') ? '.' + name.split('.').pop()!.toLowerCase() : '';
        const mime = (file.type || '').toLowerCase();

        return tokens.some(token => {
            const t = token.toLowerCase();
            if (t.startsWith('.')) return ext === t;
            if (t.endsWith('/*')) return mime.startsWith(t.slice(0, -1));
            return mime === t;
        });
    }

    /** 把 File 投影成 FileCardListItem 形状的附件 */
    function makeAttachment(file: File): SenderAttachment {
        const relativePath = (file as File & {webkitRelativePath?: string}).webkitRelativePath || '';
        const baseItem: SenderAttachment = {
            uid: uid++,
            name: relativePath || file.name,
            byte: file.size,
            type: file.type,
            status: 'loading',
            percent: 0,
            raw: file,
            relativePath: relativePath || undefined,
        };
        baseItem.key = baseItem.uid;
        if (typeof URL !== 'undefined' && URL.createObjectURL) {
            // 本地预览 URL，无论上传成功与否都能显示缩略图
            baseItem.src = URL.createObjectURL(file);
        }

        // 允许业务在运行时补充附件展示字段（如 loadingText / errorText / poster），
        // 但核心上传状态字段仍由 Sender 内部管理。
        const mapped = getUploadProps().mapAttachment?.(file, baseItem) || {};

        return {
            ...baseItem,
            ...mapped,
            uid: baseItem.uid,
            key: baseItem.key,
            raw: baseItem.raw,
            request: baseItem.request,
            byte: baseItem.byte,
            relativePath: baseItem.relativePath,
            status: baseItem.status,
            percent: baseItem.percent,
        };
    }

    function updateAttachment(uidVal: number | string | undefined, patch: Partial<SenderAttachment>) {
        if (uidVal === undefined) return;
        const list = getAttachments().slice(0);
        const index = list.findIndex(a => a.uid === uidVal);
        if (index === -1) return;
        list[index] = {...list[index], ...patch};
        setAttachments(list);
    }

    async function performUpload(item: SenderAttachment) {
        const props = getUploadProps();
        const {action, headers, withCredentials, data, name, timeout} = props;

        if (!action) {
            // 没配 action 视为「仅本地暂存」，立即标记完成；保留 src/raw 让用户在 onMessageSend 时自行处理
            updateAttachment(item.uid, {status: 'done', percent: 100});
            instance.trigger('uploadSuccess', null, item);
            return;
        }

        const fieldName = name || 'file';
        const extra = isFunction(data) ? data(item) : (data || {});

        item.request = request({
            action,
            timeout,
            headers,
            withCredentials,
            data: {[fieldName]: item.raw, ...extra},
            onProgress: (e, percent) => {
                // loading 阶段最多展示到 99%，避免“100% 但仍在上传中”的错觉。
                updateAttachment(item.uid, {status: 'loading', percent: Math.min(99, percent)});
                instance.trigger('uploadProgress', e, item);
            },
            onError: (err: RequestError) => {
                updateAttachment(item.uid, {
                    status: 'error',
                    errorText: item.errorText || _$('上传失败'),
                });
                instance.trigger('uploadError', err, item);
            },
            onSuccess: (res) => {
                updateAttachment(item.uid, {status: 'done', percent: 100});
                instance.trigger('uploadSuccess', res, item);
            },
        });
    }

    async function addFiles(fileList: FileList | File[]) {
        if (isInputDisabled()) return;

        const props = getUploadProps();
        const accept = getAcceptAttr();
        const {limit, maxSize, autoUpload = true, beforeUpload} = props;
        const current = getAttachments();
        const incoming = Array.from(fileList);

        if (limit && current.length + incoming.length > limit) {
            const err = new Error(_$('超出文件数量最大限制：{limit}', {limit}));
            instance.trigger('uploadError', err, undefined as any);
            return;
        }

        const next = current.slice(0);
        // 暂存待上传项，先一次性入列再异步发起请求，避免 UI 抖动
        const queued: SenderAttachment[] = [];

        for (const file of incoming) {
            if (maxSize && file.size > maxSize * 1024) {
                const err = new Error(_$('"{name}" 超出文件最大限制：{maxSize}kb', {name: file.name, maxSize}));
                instance.trigger('uploadError', err, undefined as any);
                continue;
            }
            if (!isAcceptValid(file, accept)) {
                const err = new Error(_$('"{name}" 文件类型不合法', {name: file.name}));
                instance.trigger('uploadError', err, undefined as any);
                continue;
            }

            const item = makeAttachment(file);
            queued.push(item);
            next.push(item);
        }

        setAttachments(next);

        for (const item of queued) {
            if (beforeUpload) {
                const ok = await beforeUpload(item, getAttachments());
                if (!ok) {
                    removeAttachment(item, false);
                    continue;
                }
            }
            if (autoUpload) {
                performUpload(item);
            } else {
                updateAttachment(item.uid, {status: 'default'});
            }
        }
    }

    async function removeAttachment(item: SenderAttachment, runBefore = true) {
        const props = getUploadProps();
        const list = getAttachments();
        const index = list.findIndex(a => a.uid === item.uid);
        if (index === -1) return;

        if (runBefore && props.beforeRemove) {
            const ok = await props.beforeRemove(item, list);
            if (!ok) return;
        }

        if (item.request) {
            try { item.request.abort(); } catch (_e) { /* ignore */ }
        }
        if (item.src && item.src.startsWith('blob:') && typeof URL !== 'undefined' && URL.revokeObjectURL) {
            URL.revokeObjectURL(item.src);
        }
        const next = list.slice(0);
        next.splice(index, 1);
        setAttachments(next);
    }

    async function clearAttachments() {
        const list = getAttachments().slice(0);

        for (const item of list) {
            // clear() 语义上是一次完整重置，这里不再逐项走 beforeRemove，避免业务确认被重复触发。
            await removeAttachment(item, false);
        }
    }

    /** 从原生 file input 拿到 FileList 后清空它，确保用户重新选择同一个文件也能触发 change */
    function onInputChange(e: Event) {
        const input = e.target as HTMLInputElement;
        if (!isInputDisabled() && input.files && input.files.length) {
            addFiles(input.files);
        }
        input.value = '';
    }

    /** 触发左下角 + 号按钮的文件选择 */
    function pickFiles() {
        if (isInputDisabled()) return;
        const {limit} = getUploadProps();
        if (limit !== undefined && limit !== null && getAttachments().length >= Number(limit)) return;
        fileInputRef.value?.click();
    }

    return {
        getAcceptAttr,
        isMultiple,
        addFiles,
        removeAttachment,
        clearAttachments,
        onInputChange,
        pickFiles,
    };
}
