---
title: 自定义附件弹窗
order: 12
---

通过 `uploadButton` 扩展点可以接入业务自己的附件弹窗。本地文件确认后调用 `scope.addFiles(files)`，会复用 `Sender` 内置的校验、上传与回显逻辑；URL 等非本地文件附件可以直接更新 `attachments`。没有文件后缀的图片 URL，可以显式设置 `type: 'image'`。

```vdt
import {Sender, Button, Dialog, Radio, Input, Icon} from 'kpc';

<div>
    <Sender
        v-model:value="value"
        v-model:attachments="attachments"
        uploadButton="list"
        fileView="media"
        uploadProps={this.getUploadProps()}
    >
        <b:uploadButton args="scope">
            <div
                class={{
                    'sender-custom-attachment-upload': true,
                    'sender-custom-attachment-upload-disabled': scope.disabled || scope.reachLimit,
                }}
                ev-click={this.openDialog.bind(this, scope)}
                role="button"
                title="添加附件"
                aria-label="添加附件"
            >
                <Icon class="k-icon-add-bold" />
                <div class="sender-custom-attachment-upload-text">添加附件</div>
            </div>
        </b:uploadButton>
    </Sender>

    <Dialog
        v-model="dialogVisible"
        title="添加参考内容"
        ok={this.confirmAttachment}
    >
        <div class="sender-custom-attachment-dialog">
            <Radio v-model="mode" trueValue="file">本地文件</Radio>
            <Radio v-model="mode" trueValue="url">URL</Radio>
            <div v-if={this.get('mode') === 'file'} style="margin-top: 16px;">
                <input type="file" multiple ref={(i) => this.fileInput = i} />
            </div>
            <div v-else style="margin-top: 16px;">
                <Input v-model="url" placeholder="https://example.com/image.png" />
            </div>
        </div>
    </Dialog>
</div>
```

```styl
.sender-custom-attachment-dialog
    display flex
    flex-direction column
    gap 12px
.sender-custom-attachment-upload
    display inline-flex
    flex-direction column
    align-items center
    justify-content center
    gap 8px
    width 64px
    height 64px
    box-sizing border-box
    flex 0 0 auto
    padding 0
    border-radius 8px
    border 1px dashed #d9d9d9
    background #fff
    color #808080
    cursor pointer
    transition border-color 0.25s, color 0.25s
    &:hover
        border-color #5370ff
        color #5370ff
    .k-icon
        font-size 20px
        color inherit
.sender-custom-attachment-upload-text
    font-size 12px
    line-height 1
    color inherit
.sender-custom-attachment-upload-disabled
    cursor not-allowed
    color #bfbfbf
    &:hover
        border-color #d9d9d9
        color #bfbfbf
```

```ts
import {bind, Message} from 'kpc';
import type {SenderAttachment, UploadButtonSlotParams} from 'kpc';

interface Props {
    value?: string
    attachments?: SenderAttachment[]
    dialogVisible?: boolean
    mode?: 'file' | 'url'
    url?: string
}

export default class extends Component<Props> {
    static template = template;

    private uploadScope: UploadButtonSlotParams | null = null;
    private fileInput: HTMLInputElement | null = null;

    static defaults() {
        return {
            value: '',
            attachments: [],
            dialogVisible: false,
            mode: 'file' as const,
            url: '',
        };
    }

    getUploadProps() {
        return {
            accept: 'image/*,.pdf,.doc,.docx',
            limit: 6,
        };
    }

    @bind
    openDialog(scope: UploadButtonSlotParams) {
        this.uploadScope = scope;
        this.set('dialogVisible', true);
    }

    @bind
    confirmAttachment() {
        if (this.get('mode') === 'file') {
            const files = this.fileInput?.files;
            if (!files || files.length === 0) {
                Message.warning('请选择文件');
                return false;
            }
            this.set('dialogVisible', false);
            this.uploadScope?.addFiles(files);
        } else {
            const url = (this.get('url') || '').trim();
            if (!url) {
                Message.warning('请输入 URL');
                return false;
            }
            const attachments = this.get('attachments') || [];
            const name = this.getAttachmentName(url);
            this.set({
                attachments: attachments.concat({
                    key: url,
                    uid: url,
                    name,
                    type: 'image',
                    src: url,
                    status: 'done' as const,
                }),
                url: '',
                dialogVisible: false,
            });
        }
        return true;
    }

    getAttachmentName(url: string) {
        try {
            const parsed = new URL(url);
            const last = parsed.pathname.split('/').filter(Boolean).pop() || 'url-image.jpg';
            if (/\.[a-z0-9]+$/i.test(last)) return decodeURIComponent(last);
            return decodeURIComponent(last) + '.jpg';
        } catch (_e) {
            const fallback = url.split('/').pop() || 'url-image.jpg';
            if (/\.[a-z0-9]+$/i.test(fallback)) return fallback;
            return fallback + '.jpg';
        }
    }
}
```
