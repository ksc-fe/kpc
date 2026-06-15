import {Component} from 'intact';
import {dispatchEvent, getElement, mount, unmount, wait} from '../../test/utils';
import {Sender} from '.';

function getDataTransfer(files: File[]) {
    const dataTransfer = new DataTransfer();

    files.forEach(file => dataTransfer.items.add(file));

    return dataTransfer;
}

function getClipboardData(files: File[]) {
    return {
        items: files.map(file => ({
            kind: 'file',
            getAsFile: () => file,
        })),
        files,
    };
}

function createDragFileEntry(file: File, name = file.name) {
    return {
        isFile: true,
        isDirectory: false,
        name,
        file(success: (file: File) => void) {
            success(file);
        },
    };
}

function createDragDirectoryEntry(name: string, entries: any[]) {
    return {
        isFile: false,
        isDirectory: true,
        name,
        createReader() {
            let called = false;

            return {
                readEntries(success: (entries: any[]) => void) {
                    if (called) {
                        success([]);
                        return;
                    }

                    called = true;
                    success(entries);
                },
            };
        },
    };
}

function getDataTransferWithEntries(entries: any[], files: File[] = []) {
    return {
        types: ['Files'],
        items: entries.map(entry => ({
            kind: 'file',
            webkitGetAsEntry: () => entry,
            getAsFile: () => entry.isFile ? null : null,
        })),
        files,
    };
}

describe('Sender', () => {
    afterEach(() => {
        unmount();
    });

    it('should render textarea, attachment button and send button by default', async () => {
        class Demo extends Component {
            static template = `const { Sender } = this; <div><Sender /></div>`;
            Sender = Sender;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-sender')).not.to.eql(null);
        expect(element.querySelector('.k-sender-input')).not.to.eql(null);
        expect(element.querySelector('.k-sender-attach-btn')).not.to.eql(null);
        expect(element.querySelector('.k-sender-input')!.getAttribute('placeholder')).to.eql('输入对话内容（Enter发送， Shift + Enter 换行）');
        const sendBtn = element.querySelector<HTMLButtonElement>('.k-sender-send-btn')!;
        expect(sendBtn).not.to.eql(null);
        // 空内容应当自动禁用发送
        expect(sendBtn.disabled).to.eql(true);
    });

    it('should enable send button when value is non-empty', async () => {
        class Demo extends Component<{value: string}> {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender value={this.get('value')} />
                </div>
            `;
            static defaults() { return {value: ''}; }
            Sender = Sender;
        }

        const [instance, element] = mount(Demo);
        const sendBtn = element.querySelector<HTMLButtonElement>('.k-sender-send-btn')!;
        expect(sendBtn.disabled).to.eql(true);

        instance.set('value', '你好');
        await wait();
        expect(sendBtn.disabled).to.eql(false);
    });

    it('should trigger messageSend on Enter and clear value', async () => {
        let sent = '';
        class Demo extends Component<{value: string}> {
            static template = `
                const { Sender } = this;
                <Sender
                    value={this.get('value')}
                    ev-$change:value={(v) => this.set('value', v)}
                    ev-messageSend={this.onSend}
                />
            `;
            static defaults() { return {value: 'hi'}; }
            Sender = Sender;
            onSend = (payload: any) => { sent = payload.value; };
        }

        const [instance, element] = mount(Demo);
        const textarea = element.querySelector<HTMLTextAreaElement>('.k-sender-input')!;
        textarea.focus();
        dispatchEvent(textarea, 'keydown', {key: 'Enter', keyCode: 13});
        await wait();

        expect(sent).to.eql('hi');
        expect(instance.get('value')).to.eql('');
    });

    it('should expose focus and blur methods', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <Sender ref={(i) => this.senderRef = i} />
            `;
            Sender = Sender;
            senderRef: Sender | null = null;
        }

        const [instance, element] = mount(Demo);
        const textarea = element.querySelector<HTMLTextAreaElement>('.k-sender-input')!;
        const shell = element.querySelector<HTMLElement>('.k-sender-shell')!;

        instance.senderRef!.focus();
        await wait();
        expect(document.activeElement).to.eql(textarea);
        expect(shell.classList.contains('k-sender-active')).to.be.true;
        // active 态叠加 backdrop-filter 与多层负 spread 阴影；Headless Chrome 下
        // getComputedStyle(boxShadow) 会归一化为全零，无法可靠断言具体色值。
        expect(getComputedStyle(shell).backdropFilter).to.contain('blur(4px)');

        instance.senderRef!.blur();
        await wait();
        expect(document.activeElement).not.to.eql(textarea);
        expect(shell.classList.contains('k-sender-active')).to.be.false;
        expect(getComputedStyle(shell).backdropFilter).to.eql('none');
    });

    it('should expose submit method', async () => {
        let sent = '';
        class Demo extends Component<{value: string}> {
            static template = `
                const { Sender } = this;
                <Sender
                    ref={(i) => this.senderRef = i}
                    value={this.get('value')}
                    ev-$change:value={(v) => this.set('value', v)}
                    ev-messageSend={this.onSend}
                />
            `;
            static defaults() { return {value: 'hello'}; }
            Sender = Sender;
            senderRef: Sender | null = null;
            onSend = (payload: any) => { sent = payload.value; };
        }

        const [instance] = mount(Demo);

        instance.senderRef!.submit();
        await wait();

        expect(sent).to.eql('hello');
        expect(instance.get('value')).to.eql('');
    });

    it('should expose clear method', async () => {
        class Demo extends Component<{value: string; attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    ref={(i) => this.senderRef = i}
                    value={this.get('value')}
                    attachments={this.get('attachments')}
                    ev-$change:value={(v) => this.set('value', v)}
                    ev-$change:attachments={(attachments) => this.set('attachments', attachments)}
                />
            `;
            static defaults() {
                return {
                    value: 'hello',
                    attachments: [{key: 'a', uid: 'a', name: 'note.txt', status: 'done'}],
                };
            }
            Sender = Sender;
            senderRef: Sender | null = null;
        }

        const [instance] = mount(Demo);

        instance.senderRef!.clear();
        await wait();

        expect(instance.get('value')).to.eql('');
        expect(instance.get('attachments')).to.eql([]);
    });

    it('should abort uploading attachments when clear method is called', async () => {
        let aborted = 0;
        class Demo extends Component<{value: string; attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    ref={(i) => this.senderRef = i}
                    value={this.get('value')}
                    attachments={this.get('attachments')}
                    ev-$change:value={(v) => this.set('value', v)}
                    ev-$change:attachments={(attachments) => this.set('attachments', attachments)}
                />
            `;
            static defaults() {
                return {
                    value: 'hello',
                    attachments: [
                        {
                            key: 'a',
                            uid: 'a',
                            name: 'note.txt',
                            status: 'loading',
                            src: 'blob:test',
                            request: {
                                abort() {
                                    aborted++;
                                },
                            },
                        },
                    ],
                };
            }
            Sender = Sender;
            senderRef: Sender | null = null;
        }

        const revokeObjectURL = URL.revokeObjectURL;
        let revoked = '';
        URL.revokeObjectURL = (url: string) => {
            revoked = url;
        };

        const [instance] = mount(Demo);

        instance.senderRef!.clear();
        await wait();

        expect(aborted).to.eql(1);
        expect(revoked).to.eql('blob:test');
        expect(instance.get('value')).to.eql('');
        expect(instance.get('attachments')).to.eql([]);

        URL.revokeObjectURL = revokeObjectURL;
    });

    it('should expose stopGenerate method', async () => {
        let stopped = 0;
        class Demo extends Component<{generating: boolean}> {
            static template = `
                const { Sender } = this;
                <Sender
                    ref={(i) => this.senderRef = i}
                    generating={this.get('generating')}
                    ev-stopGenerate={this.onStop}
                />
            `;
            static defaults() { return {generating: true}; }
            Sender = Sender;
            senderRef: Sender | null = null;
            onStop = () => { stopped++; };
        }

        const [instance] = mount(Demo);

        instance.senderRef!.stopGenerate();
        await wait();
        expect(stopped).to.eql(1);

        instance.set('generating', false);
        await wait();
        instance.senderRef!.stopGenerate();
        await wait();
        expect(stopped).to.eql(1);
    });

    it('should NOT submit on Shift+Enter', async () => {
        let sentCount = 0;
        class Demo extends Component<{value: string}> {
            static template = `
                const { Sender } = this;
                <Sender value={this.get('value')} ev-messageSend={this.onSend} />
            `;
            static defaults() { return {value: 'hi'}; }
            Sender = Sender;
            onSend = () => { sentCount++; };
        }

        const [, element] = mount(Demo);
        const textarea = element.querySelector<HTMLTextAreaElement>('.k-sender-input')!;
        dispatchEvent(textarea, 'keydown', {key: 'Enter', keyCode: 13, shiftKey: true});
        await wait();

        expect(sentCount).to.eql(0);
    });

    it('should switch to stop button when generating and trigger stopGenerate on click', async () => {
        let stopped = 0;
        class Demo extends Component<{generating: boolean}> {
            static template = `
                const { Sender } = this;
                <Sender
                    generating={this.get('generating')}
                    ev-stopGenerate={this.onStop}
                />
            `;
            static defaults() { return {generating: true}; }
            Sender = Sender;
            onStop = () => { stopped++; };
        }

        const [, element] = mount(Demo);
        const sendBtn = element.querySelector<HTMLButtonElement>('.k-sender-send-btn')!;
        // 生成中按钮 title 应该为「停止生成」
        expect(sendBtn.title).to.contain('停止');
        // 生成中即使内容为空也是可点的
        expect(sendBtn.disabled).to.eql(false);

        sendBtn.click();
        await wait();
        expect(stopped).to.eql(1);
    });

    it('should respect stopDisabled prop when generating', async () => {
        let stopped = 0;
        class Demo extends Component<{stopDisabled: boolean}> {
            static template = `
                const { Sender } = this;
                <Sender
                    ref={(i) => this.senderRef = i}
                    generating={true}
                    stopDisabled={this.get('stopDisabled')}
                    ev-stopGenerate={this.onStop}
                />
            `;
            static defaults() { return {stopDisabled: true}; }
            Sender = Sender;
            senderRef: Sender | null = null;
            onStop = () => { stopped++; };
        }

        const [instance, element] = mount(Demo);
        const sendBtn = element.querySelector<HTMLButtonElement>('.k-sender-send-btn')!;

        expect(sendBtn.title).to.contain('停止');
        expect(sendBtn.disabled).to.eql(true);

        sendBtn.click();
        await wait();
        expect(stopped).to.eql(0);

        instance.senderRef!.stopGenerate();
        await wait();
        expect(stopped).to.eql(0);

        instance.set('stopDisabled', false);
        await wait();
        expect(sendBtn.disabled).to.eql(false);

        instance.senderRef!.stopGenerate();
        await wait();
        expect(stopped).to.eql(1);
    });

    it('should respect disabled prop', async () => {
        class Demo extends Component {
            static template = `const { Sender } = this; <div><Sender disabled={true} value="hi" /></div>`;
            Sender = Sender;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-sender')!.classList.contains('k-sender-disabled')).to.eql(true);
        const textarea = element.querySelector<HTMLTextAreaElement>('.k-sender-input')!;
        expect(textarea.disabled).to.eql(true);
        const sendBtn = element.querySelector<HTMLButtonElement>('.k-sender-send-btn')!;
        expect(sendBtn.disabled).to.eql(true);
    });

    it('should respect sendDisabled prop without disabling input and upload', async () => {
        let sentCount = 0;
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender
                        ref={(i) => this.senderRef = i}
                        sendDisabled={true}
                        value="hi"
                        clearOnSend={false}
                        ev-messageSend={this.onSend}
                    />
                </div>
            `;
            Sender = Sender;
            senderRef: Sender | null = null;
            onSend = () => { sentCount++; };
        }

        const [instance, element] = mount(Demo);

        const root = element.querySelector('.k-sender')!;
        expect(root.classList.contains('k-sender-disabled')).to.eql(false);

        const textarea = element.querySelector<HTMLTextAreaElement>('.k-sender-input')!;
        expect(textarea.disabled).to.eql(false);

        const attachBtn = element.querySelector<HTMLButtonElement>('.k-sender-attach-btn')!;
        expect(attachBtn.disabled).to.eql(false);

        const sendBtn = element.querySelector<HTMLButtonElement>('.k-sender-send-btn')!;
        expect(sendBtn.disabled).to.eql(true);

        sendBtn.click();
        await wait();
        expect(sentCount).to.eql(0);

        instance.senderRef!.submit();
        await wait();
        expect(sentCount).to.eql(0);

        dispatchEvent(textarea, 'keydown', {key: 'Enter', keyCode: 13});
        await wait();
        expect(sentCount).to.eql(0);
    });

    it('should disable input interactions without disabling stop generation', async () => {
        let sentCount = 0;
        let stopped = 0;
        let inputChanged = 0;
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender
                        ref={(i) => this.senderRef = i}
                        value="hi"
                        generating={true}
                        inputDisabled={true}
                        dragFile={true}
                        pasteFile={true}
                        clearOnSend={false}
                        ev-messageSend={this.onSend}
                        ev-stopGenerate={this.onStop}
                        ev-$change:value={this.onInputChange}
                    />
                </div>
            `;
            Sender = Sender;
            senderRef: Sender | null = null;
            onSend = () => { sentCount++; };
            onStop = () => { stopped++; };
            onInputChange = () => { inputChanged++; };
        }

        const [instance, element] = mount(Demo);
        const root = element.querySelector('.k-sender')!;
        const shell = element.querySelector<HTMLElement>('.k-sender-shell')!;
        const textarea = element.querySelector<HTMLTextAreaElement>('.k-sender-input')!;
        const attachBtn = element.querySelector<HTMLButtonElement>('.k-sender-attach-btn')!;
        const sendBtn = element.querySelector<HTMLButtonElement>('.k-sender-send-btn')!;

        expect(root.classList.contains('k-sender-disabled')).to.eql(false);
        expect(root.classList.contains('k-sender-input-disabled')).to.eql(true);
        expect(textarea.disabled).to.eql(true);
        expect(attachBtn.disabled).to.eql(true);
        expect(sendBtn.title).to.contain('停止');
        expect(sendBtn.disabled).to.eql(false);
        expect(getComputedStyle(shell).backgroundColor).not.to.eql('rgb(255, 255, 255)');

        dispatchEvent(textarea, 'keydown', {key: 'Enter', keyCode: 13});
        dispatchEvent(textarea, 'input');
        dispatchEvent(textarea, 'paste', {
            clipboardData: getClipboardData([new File(['a'], 'a.txt', {type: 'text/plain'})]),
        });
        await wait();
        expect(sentCount).to.eql(0);
        expect(inputChanged).to.eql(0);

        instance.senderRef!.addFiles([new File(['b'], 'b.txt', {type: 'text/plain'})]);
        await wait();
        expect((instance.senderRef as any).get('attachments') || []).to.eql([]);

        sendBtn.click();
        await wait();
        expect(stopped).to.eql(1);

        instance.senderRef!.stopGenerate();
        await wait();
        expect(stopped).to.eql(2);
    });

    it('should render attachments via FileCardList and emit change on delete', async () => {
        let lastAttachments: any[] | null = null;
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    attachments={this.get('attachments')}
                    ev-$change:attachments={this.onChange}
                />
            `;
            static defaults() {
                return {
                    attachments: [
                        {key: 'a', uid: 'a', name: 'note.txt', byte: 1024, status: 'done'},
                    ],
                };
            }
            Sender = Sender;
            onChange = (items: any[]) => { lastAttachments = items; };
        }

        const [, element] = mount(Demo);
        expect(element.querySelector('.k-sender-attachments')).not.to.eql(null);
        expect(element.querySelectorAll('.k-file-card').length).to.eql(1);

        const deleteBtn = element.querySelector<HTMLElement>('.k-file-card-delete')!;
        deleteBtn.click();
        await wait();
        expect(lastAttachments).not.to.eql(null);
        expect(lastAttachments!.length).to.eql(0);
    });

    it('should expose attachment click and delete events', async () => {
        let clickCount = 0;
        let deleteCount = 0;
        let lastDeleted: any = null;

        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    attachments={this.get('attachments')}
                    ev-attachmentClick={this.onAttachmentClick}
                    ev-attachmentDelete={this.onAttachmentDelete}
                />
            `;
            static defaults() {
                return {
                    attachments: [
                        {key: 'a', uid: 'a', name: 'note.txt', byte: 1024, status: 'done'},
                    ],
                };
            }
            Sender = Sender;
            onAttachmentClick = () => { clickCount += 1; };
            onAttachmentDelete = (item: any) => {
                deleteCount += 1;
                lastDeleted = item;
            };
        }

        const [, element] = mount(Demo);
        const card = element.querySelector<HTMLElement>('.k-file-card')!;
        card.click();
        await wait();
        expect(clickCount).to.eql(1);

        const deleteBtn = element.querySelector<HTMLElement>('.k-file-card-delete')!;
        deleteBtn.click();
        await wait();
        expect(deleteCount).to.eql(1);
        expect(lastDeleted?.name).to.eql('note.txt');
    });

    it('should expose send button slot params', async () => {
        let captured: any = null;
        class Demo extends Component<{value: string; generating: boolean; stopDisabled: boolean}> {
            static template = `
                const { Sender } = this;
                <Sender
                    value={this.get('value')}
                    generating={this.get('generating')}
                    stopDisabled={this.get('stopDisabled')}
                >
                    <b:sendButton args="scope">
                        <button class="custom-send" disabled={scope.generating ? scope.stopDisabled : scope.disabled}>
                            {scope.generating ? 'STOP' : 'SEND'}
                        </button>
                    </b:sendButton>
                </Sender>
            `;
            static defaults() { return {value: 'hi', generating: false, stopDisabled: false}; }
            Sender = Sender;
            capture = (p: any) => { captured = p; };
        }

        const [instance, element] = mount(Demo);
        const btn = element.querySelector<HTMLButtonElement>('.custom-send')!;
        expect(btn).not.to.eql(null);
        expect(btn.textContent!.trim()).to.eql('SEND');

        instance.set('generating', true);
        await wait();
        const stopBtn = element.querySelector<HTMLButtonElement>('.custom-send')!;
        expect(stopBtn.textContent!.trim()).to.eql('STOP');
        expect(stopBtn.disabled).to.eql(false);

        instance.set('stopDisabled', true);
        await wait();
        expect(stopBtn.disabled).to.eql(true);
    });

    it('should render tooltip for default buttons by buttonTooltip', async () => {
        class Demo extends Component<{generating: boolean}> {
            static template = `
                const { Sender } = this;
                <Sender
                    value="hello"
                    generating={this.get('generating')}
                    uploadButton="list"
                    buttonTooltip={{
                        send: '发送提示',
                        stop: '停止提示',
                        upload: '上传提示',
                        listUpload: '参考提示',
                    }}
                />
            `;
            static defaults() { return {generating: false}; }
            Sender = Sender;
        }

        const [instance, element] = mount(Demo);
        const sendBtn = element.querySelector<HTMLElement>('.k-sender-send-btn')!;
        expect(sendBtn.getAttribute('title')).to.eql(null);
        dispatchEvent(sendBtn, 'mouseenter');
        await wait(0);
        expect(getElement('.k-tooltip-content')!.textContent).to.contain('发送提示');
        dispatchEvent(sendBtn, 'mouseleave');
        await wait(600);

        instance.set('generating', true);
        await wait();
        const stopBtn = element.querySelector<HTMLElement>('.k-sender-send-btn')!;
        dispatchEvent(stopBtn, 'mouseenter');
        await wait(0);
        expect(getElement('.k-tooltip-content')!.textContent).to.contain('停止提示');
        dispatchEvent(stopBtn, 'mouseleave');
        await wait(600);

        const listUpload = element.querySelector<HTMLElement>('.k-sender-list-upload')!;
        expect(listUpload.getAttribute('title')).to.eql(null);
        dispatchEvent(listUpload, 'mouseenter');
        await wait(0);
        expect(getElement('.k-tooltip-content')!.textContent).to.contain('参考提示');
    });

    it('should disable default button tooltip by false value', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <Sender
                    value="hello"
                    buttonTooltip={{send: false, upload: false}}
                />
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        const sendBtn = element.querySelector<HTMLElement>('.k-sender-send-btn')!;
        const uploadBtn = element.querySelector<HTMLElement>('.k-sender-attach-btn')!;

        expect(sendBtn.getAttribute('title')).to.eql(null);
        expect(uploadBtn.getAttribute('title')).to.eql(null);
        expect(element.querySelector('.k-sender-send-tooltip')).to.eql(null);
        expect(element.querySelector('.k-sender-upload-tooltip')).to.eql(null);
        expect(sendBtn.getAttribute('aria-label')).to.eql('发送');
        expect(uploadBtn.getAttribute('aria-label')).to.eql('上传附件');
    });

    it('should render beforeInput inside shell and configure inside toolbar middle', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <Sender>
                    <b:beforeInput>
                        <div class="top-suggest">推荐</div>
                    </b:beforeInput>
                    <b:configure>
                        <div class="bottom-tools">工具</div>
                    </b:configure>
                </Sender>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        const top = element.querySelector('.top-suggest')!;
        const tools = element.querySelector('.bottom-tools')!;
        expect(top).not.to.eql(null);
        expect(tools).not.to.eql(null);

        // beforeInput 包装容器在 shell 内
        const shell = element.querySelector('.k-sender-shell')!;
        expect(shell.contains(top)).to.eql(true);
        // configure 落在 toolbar 中间
        const middle = element.querySelector('.k-sender-toolbar-middle')!;
        expect(middle).not.to.eql(null);
        expect(middle.contains(tools)).to.eql(true);

        // configure 处于附件按钮和发送按钮之间
        const left = element.querySelector('.k-sender-toolbar-left')!;
        const right = element.querySelector('.k-sender-toolbar-right')!;
        const toolbar = element.querySelector('.k-sender-toolbar')!;
        const children = Array.from(toolbar.children);
        expect(children.indexOf(left)).to.be.lessThan(children.indexOf(middle));
        expect(children.indexOf(middle)).to.be.lessThan(children.indexOf(right));
    });

    it('should render prefix inside input area before textarea', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <Sender>
                    <b:prefix>
                        <span class="custom-prefix">AI</span>
                    </b:prefix>
                </Sender>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        const inputArea = element.querySelector('.k-sender-input-area')!;
        const prefix = element.querySelector('.k-sender-prefix')!;
        const customPrefix = element.querySelector('.custom-prefix')!;
        const textarea = element.querySelector('.k-sender-input')!;
        const children = Array.from(inputArea.children);

        expect(prefix).not.to.eql(null);
        expect(prefix.contains(customPrefix)).to.eql(true);
        expect(children.indexOf(prefix)).to.be.lessThan(children.indexOf(textarea));
    });

    it('should render header above shell and footer below shell', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <Sender>
                    <b:header>
                        <button class="new-chat-btn">开启新对话</button>
                    </b:header>
                    <b:footer>
                        <div class="sender-disclaimer">AI生成，仅供参考。</div>
                    </b:footer>
                </Sender>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        const header = element.querySelector('.k-sender-header') as HTMLElement;
        const footer = element.querySelector('.k-sender-footer') as HTMLElement;
        const shell = element.querySelector('.k-sender-shell') as HTMLElement;

        expect(header).not.to.eql(null);
        expect(footer).not.to.eql(null);
        expect(header.querySelector('.new-chat-btn')).not.to.eql(null);
        expect(footer.querySelector('.sender-disclaimer')!.textContent!.trim()).to.eql('AI生成，仅供参考。');
        expect(shell.contains(header)).to.eql(false);
        expect(shell.contains(footer)).to.eql(false);
        expect(Array.from(element.children)).to.eql([header, shell, footer]);
    });

    // 布局插槽为空时，不保留 header/footer/beforeInput/configure/uploadButton 的空壳。
    it('should not render wrappers for empty layout slots', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender uploadButton="none">
                        <b:header>
                            <span v-if={false} class="empty-header">header</span>
                        </b:header>
                        <b:beforeInput>
                            <span v-if={false} class="empty-before-input">before</span>
                        </b:beforeInput>
                        <b:prefix>
                            <span v-if={false} class="empty-prefix">prefix</span>
                        </b:prefix>
                        <b:uploadButton args="scope">
                            <button v-if={false} class="empty-upload-button" type="button">upload</button>
                        </b:uploadButton>
                        <b:configure>
                            <span v-if={false} class="empty-configure">configure</span>
                        </b:configure>
                        <b:footer>
                            <span v-if={false} class="empty-footer">footer</span>
                        </b:footer>
                    </Sender>
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-sender-header')).to.eql(null);
        expect(element.querySelector('.k-sender-before-input')).to.eql(null);
        expect(element.querySelector('.k-sender-prefix')).to.eql(null);
        expect(element.querySelector('.k-sender-toolbar-left')).to.eql(null);
        expect(element.querySelector('.k-sender-toolbar-middle')).to.eql(null);
        expect(element.querySelector('.k-sender-footer')).to.eql(null);
        expect(element.querySelector('.k-sender-toolbar-right')).not.to.eql(null);
    });

    it('should render default upload button in toolbar by default', async () => {
        class Demo extends Component {
            static template = `const { Sender } = this; <div><Sender /></div>`;
            Sender = Sender;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-sender-toolbar-left')).not.to.eql(null);
        expect(element.querySelector('.k-sender-attach-btn')).not.to.eql(null);
        expect(element.querySelector('.k-sender-list-upload')).to.eql(null);
    });

    it('should show dashed upload button in attachment list', async () => {
        class Demo extends Component {
            static template = `const { Sender } = this; <div><Sender uploadButton="list" /></div>`;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        expect(element.querySelector('.k-sender-attach-btn')).to.eql(null);
        // 列表入口即使没有附件也要展示 FileCardList，用来承载前置 + 框
        expect(element.querySelector('.k-sender-attachments')).not.to.eql(null);
        const addBox = element.querySelector('.k-sender-list-upload')!;
        expect(addBox).not.to.eql(null);
        expect(addBox.getAttribute('title')).to.eql('参考内容');
        expect(addBox.getAttribute('aria-label')).to.eql('参考内容');
        expect(addBox.querySelector('.k-sender-list-upload-text')!.textContent!.trim()).to.eql('参考内容');
        expect(addBox.querySelector('.k-icon-add-bold')).not.to.eql(null);
        // 点击 + 框会触发 file input click
        let clicked = 0;
        const fileInput = element.querySelector<HTMLInputElement>('.k-sender-file-input')!;
        fileInput.addEventListener('click', (e) => { clicked++; e.preventDefault(); });
        (addBox as HTMLElement).click();
        await wait();
        expect(clicked).to.eql(1);
    });

    it('should let configure start from the left edge when upload button is not in toolbar', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender uploadButton="list">
                        <b:configure>
                            <div class="sender-tools">配置项</div>
                        </b:configure>
                    </Sender>
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        const toolbar = element.querySelector('.k-sender-toolbar') as HTMLElement;
        const middle = element.querySelector('.k-sender-toolbar-middle') as HTMLElement;

        expect(element.querySelector('.k-sender-toolbar-left')).to.eql(null);
        expect(toolbar.firstElementChild).to.eql(middle);
        expect(middle.querySelector('.sender-tools')!.textContent!.trim()).to.eql('配置项');
    });

    it('should hide list upload button when reaching uploadProps.limit', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender uploadButton="list"
                        uploadProps={{limit: 1}}
                        attachments={[{key: 'a', uid: 'a', name: 'p.png', type: 'image/png', src: ''}]}
                    />
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        expect(element.querySelector('.k-sender-list-upload')).to.eql(null);
        // 文件卡片仍然渲染
        expect(element.querySelector('.k-file-card')).not.to.eql(null);
    });

    it('should pass uploadButton slot params and render it in toolbar', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender uploadProps={{limit: 1}} attachments={[
                        {key: 'a', uid: 'a', name: 'note.txt'},
                    ]}>
                        <b:uploadButton args="scope">
                            <button
                                class="custom-upload"
                                disabled={scope.disabled || scope.reachLimit}
                                ev-click={scope.pickFiles}
                            >{scope.position}</button>
                        </b:uploadButton>
                    </Sender>
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        const button = element.querySelector<HTMLButtonElement>('.custom-upload')!;

        expect(button).not.to.eql(null);
        expect(button.textContent!.trim()).to.eql('toolbar');
        expect(button.disabled).to.eql(true);
        expect(element.querySelector('.k-sender-attach-btn')).to.eql(null);
    });

    it('should add local files through uploadButton slot params', async () => {
        let lastAttachments: any[] = [];
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    attachments={this.get('attachments')}
                    uploadProps={{accept: '.txt', autoUpload: false}}
                    ev-$change:attachments={this.onChange}
                >
                    <b:uploadButton args="scope">
                        <button
                            class="custom-add-files"
                            ev-click={() => scope.addFiles([this.file])}
                        >add</button>
                    </b:uploadButton>
                </Sender>
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            file = new File(['hello'], 'hello.txt', {type: 'text/plain'});
            onChange = (items: any[]) => { lastAttachments = items; };
        }

        const [, element] = mount(Demo);
        const button = element.querySelector<HTMLButtonElement>('.custom-add-files')!;

        button.click();
        await wait();

        expect(lastAttachments.length).to.eql(1);
        expect(lastAttachments[0].name).to.eql('hello.txt');
        expect(lastAttachments[0].status).to.eql('default');
    });

    it('should render uploadButton slot in attachment list when uploadButton is list', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender uploadButton="list">
                        <b:uploadButton args="scope">
                            <button class="custom-list-upload" ev-click={scope.pickFiles}>{scope.position}</button>
                        </b:uploadButton>
                    </Sender>
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-sender-toolbar-left')).to.eql(null);
        expect(element.querySelector('.k-sender-list-upload')).to.eql(null);
        expect(element.querySelector('.k-file-card-list-prefix .custom-list-upload')!.textContent!.trim()).to.eql('list');
    });

    it('should expose addFiles method', async () => {
        let lastAttachments: any[] = [];
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    ref={(i) => this.senderRef = i}
                    attachments={this.get('attachments')}
                    uploadProps={{autoUpload: false}}
                    ev-$change:attachments={this.onChange}
                />
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            senderRef: Sender | null = null;
            onChange = (items: any[]) => { lastAttachments = items; };
        }

        const [instance] = mount(Demo);
        const file = new File(['hello'], 'dialog.txt', {type: 'text/plain'});

        instance.senderRef!.addFiles([file]);
        await wait();

        expect(lastAttachments.length).to.eql(1);
        expect(lastAttachments[0].name).to.eql('dialog.txt');
        expect(lastAttachments[0].status).to.eql('default');
    });

    it('should render card-view attachments uniformly as file cards', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender attachments={[
                        {key: 'a', uid: 'a', name: 'pic.png', type: 'image/png', src: 'data:image/png;base64,AAAA'},
                        {key: 'b', uid: 'b', name: 'note.txt', type: 'text/plain'},
                    ]} />
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        // card 视图下，图片附件也应当以「文件卡」形式呈现，而不是图片缩略图
        expect(element.querySelectorAll('.k-file-card-file').length).to.eql(2);
        expect(element.querySelectorAll('.k-file-card-media').length).to.eql(0);
    });

    it('should keep image media cards (square) in media view', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender fileView="media" attachments={[
                        {key: 'a', uid: 'a', name: 'pic.png', type: 'image/png', src: 'data:image/png;base64,AAAA'},
                    ]} />
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        // media 视图下保留 FileCard 的图片渲染（自带 1:1 裁剪），不强制转成 file 卡片
        expect(element.querySelector('.k-file-card-media.k-file-card-type-image')).not.to.eql(null);
    });

    it('should enable name tooltip for Sender media attachments', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender fileView="media" attachments={[
                        {key: 'a', uid: 'a', name: 'very-long-image-name.png', type: 'image/png', src: 'data:image/png;base64,AAAA'},
                    ]} />
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        const mediaView = element.querySelector('.k-file-card-media-view') as HTMLElement;

        expect(mediaView.querySelector('.k-media-name-tooltip-trigger')).not.to.eql(null);
        expect(mediaView.getAttribute('title')).to.eql(null);
    });

    it('should infer media type from name in media view when attachment type is generic mime', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender fileView="media" attachments={[
                        {key: 'a', uid: 'a', name: 'pic.png', type: 'application/octet-stream', src: 'blob:mock'},
                    ]} />
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-file-card-media.k-file-card-type-image')).not.to.eql(null);
        expect(element.querySelector('.k-file-card-file')).to.eql(null);
    });

    it('should keep explicit image type in media view even when src has no extension', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <div>
                    <Sender fileView="media" attachments={[
                        {key: 'a', uid: 'a', name: 'unsplash.jpg', type: 'image', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'},
                    ]} />
                </div>
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-file-card-media.k-file-card-type-image')).not.to.eql(null);
        expect(element.querySelector('.k-media-image')).not.to.eql(null);
    });

    it('should support directory selection and preserve relative path metadata', async () => {
        let lastAttachments: any[] = [];
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    attachments={this.get('attachments')}
                    uploadProps={{directory: true}}
                    ev-$change:attachments={this.onChange}
                />
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            onChange = (items: any[]) => { lastAttachments = items; };
        }

        const [, element] = mount(Demo);
        const input = element.querySelector<HTMLInputElement>('.k-sender-file-input')!;

        expect(input.getAttribute('directory')).to.eql('');
        expect(input.getAttribute('webkitdirectory')).to.eql('');

        const file = new File(['hello'], 'hello.txt', {type: 'text/plain'});
        Object.defineProperty(file, 'webkitRelativePath', {
            value: 'docs/hello.txt',
            configurable: true,
        });
        Object.defineProperty(input, 'files', {
            value: [file],
            configurable: true,
        });

        dispatchEvent(input, 'change');
        await wait();

        expect(lastAttachments.length).to.eql(1);
        expect(lastAttachments[0].name).to.eql('docs/hello.txt');
        expect(lastAttachments[0].relativePath).to.eql('docs/hello.txt');
    });

    it('should support mapAttachment for runtime uploading items', async () => {
        let lastAttachments: any[] = [];
        let resolveBeforeUpload: ((value: boolean) => void) | undefined;

        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    attachments={this.get('attachments')}
                    uploadProps={this.getUploadProps()}
                    ev-$change:attachments={this.onChange}
                />
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            onChange = (items: any[]) => { lastAttachments = items; };
            getUploadProps() {
                return {
                    autoUpload: false,
                    beforeUpload: () => new Promise<boolean>((resolve) => {
                        resolveBeforeUpload = resolve;
                    }),
                    mapAttachment: (file: File) => ({
                        loadingText: `上传中 ${file.name}`,
                        errorText: `上传失败 ${file.name}`,
                    }),
                };
            }
        }

        const [, element] = mount(Demo);
        const input = element.querySelector<HTMLInputElement>('.k-sender-file-input')!;
        const file = new File(['hello'], 'hello.txt', {type: 'text/plain'});
        Object.defineProperty(input, 'files', {
            value: [file],
            configurable: true,
        });

        dispatchEvent(input, 'change');
        await wait();

        expect(lastAttachments.length).to.eql(1);
        expect(lastAttachments[0].loadingText).to.eql('上传中 hello.txt');
        expect(lastAttachments[0].errorText).to.eql('上传失败 hello.txt');
        expect(element.querySelector('.k-file-card-description')?.textContent).to.contain('上传中 hello.txt');

        if (resolveBeforeUpload) {
            resolveBeforeUpload(true);
        }
    });

    it('should show fullscreen drag mask and add dropped files when dragFile is enabled', async () => {
        let lastAttachments: any[] = [];
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    dragFile={true}
                    attachments={this.get('attachments')}
                    ev-$change:attachments={this.onChange}
                />
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            onChange = (items: any[]) => { lastAttachments = items; };
        }

        const [, element] = mount(Demo);
        const file = new File(['hello'], 'hello.txt', {type: 'text/plain'});

        dispatchEvent(document, 'dragenter', {
            dataTransfer: getDataTransfer([file]),
        });
        await wait();

        const mask = element.querySelector('.k-sender-drag-mask') as HTMLElement;
        const card = element.querySelector('.k-sender-drag-card') as HTMLElement;
        const icon = element.querySelector('.k-sender-drag-card .k-icon') as HTMLElement;
        const text = element.querySelector('.k-sender-drag-text') as HTMLElement;

        expect(mask).not.to.eql(null);
        expect(text.textContent).to.eql('文件拖动到此处即可上传');
        expect(getComputedStyle(mask).backgroundColor).to.eql('rgba(255, 255, 255, 0.72)');
        expect(getComputedStyle(card).flexDirection).to.eql('column');
        expect(getComputedStyle(icon).color).to.eql('rgb(83, 112, 255)');
        expect(getComputedStyle(card).boxShadow).to.eql('none');
        expect(getComputedStyle(card).borderTopWidth).to.eql('0px');

        dispatchEvent(document, 'drop', {
            dataTransfer: getDataTransfer([file]),
        });
        await wait();

        expect(element.querySelector('.k-sender-drag-mask')).to.eql(null);
        expect(lastAttachments.length).to.eql(1);
        expect(lastAttachments[0].name).to.eql('hello.txt');
    });

    it('should ignore non-file drags when dragFile is enabled', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <Sender dragFile={true} />
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);

        dispatchEvent(document, 'dragenter', {
            dataTransfer: {
                types: ['text/plain'],
            },
        });
        await wait();

        expect(element.querySelector('.k-sender-drag-mask')).to.eql(null);
    });

    it('should trigger uploadError for invalid file type on drag drop', async () => {
        let errorMessage = '';
        let lastAttachments: any[] = [];
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    dragFile={true}
                    attachments={this.get('attachments')}
                    uploadProps={{accept: 'image/*'}}
                    ev-$change:attachments={this.onChange}
                    ev-uploadError={this.onUploadError}
                />
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            onChange = (items: any[]) => { lastAttachments = items; };
            onUploadError = (error: Error) => { errorMessage = error.message; };
        }

        const [, element] = mount(Demo);
        const file = new File(['hello'], 'hello.txt', {type: 'text/plain'});

        dispatchEvent(document, 'dragenter', {
            dataTransfer: getDataTransfer([file]),
        });
        await wait();
        expect(element.querySelector('.k-sender-drag-mask')).not.to.eql(null);

        dispatchEvent(document, 'drop', {
            dataTransfer: getDataTransfer([file]),
        });
        await wait();

        expect(errorMessage).to.eql('"hello.txt" 文件类型不合法');
        expect(lastAttachments.length).to.eql(0);
        expect(element.querySelector('.k-sender-drag-mask')).to.eql(null);
    });

    it('should flatten dragged directory files when uploadProps.directory is enabled', async () => {
        let lastAttachments: any[] = [];
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    dragFile={true}
                    attachments={this.get('attachments')}
                    uploadProps={{directory: true}}
                    ev-$change:attachments={this.onChange}
                />
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            onChange = (items: any[]) => { lastAttachments = items; };
        }

        const [, element] = mount(Demo);
        const noteFile = new File(['note'], 'note.txt', {type: 'text/plain'});
        const imageFile = new File(['image'], 'cover.png', {type: 'image/png'});
        const docsDir = createDragDirectoryEntry('docs', [
            createDragFileEntry(noteFile),
            createDragDirectoryEntry('assets', [
                createDragFileEntry(imageFile),
            ]),
        ]);

        dispatchEvent(document, 'dragenter', {
            dataTransfer: getDataTransfer([noteFile]),
        });
        await wait();
        expect(element.querySelector('.k-sender-drag-mask')).not.to.eql(null);

        dispatchEvent(document, 'drop', {
            dataTransfer: getDataTransferWithEntries([docsDir]),
        });
        await wait(20);

        expect(lastAttachments.length).to.eql(2);
        expect(lastAttachments.map(item => item.name)).to.eql([
            'docs/note.txt',
            'docs/assets/cover.png',
        ]);
        expect(lastAttachments.map(item => item.relativePath)).to.eql([
            'docs/note.txt',
            'docs/assets/cover.png',
        ]);
        expect(element.querySelector('.k-sender-drag-mask')).to.eql(null);
    });

    it('should still validate flattened directory files on drag drop', async () => {
        let errorMessage = '';
        let lastAttachments: any[] = [];
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    dragFile={true}
                    attachments={this.get('attachments')}
                    uploadProps={{directory: true, accept: 'image/*'}}
                    ev-$change:attachments={this.onChange}
                    ev-uploadError={this.onUploadError}
                />
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            onChange = (items: any[]) => { lastAttachments = items; };
            onUploadError = (error: Error) => { errorMessage = error.message; };
        }

        const [, element] = mount(Demo);
        const file = new File(['hello'], 'hello.txt', {type: 'text/plain'});
        const docsDir = createDragDirectoryEntry('docs', [
            createDragFileEntry(file),
        ]);

        dispatchEvent(document, 'dragenter', {
            dataTransfer: getDataTransfer([file]),
        });
        await wait();
        expect(element.querySelector('.k-sender-drag-mask')).not.to.eql(null);

        dispatchEvent(document, 'drop', {
            dataTransfer: getDataTransferWithEntries([docsDir]),
        });
        await wait(20);

        expect(errorMessage).to.eql('"hello.txt" 文件类型不合法');
        expect(lastAttachments.length).to.eql(0);
        expect(element.querySelector('.k-sender-drag-mask')).to.eql(null);
    });

    it('should add pasted files when pasteFile is enabled', async () => {
        let lastAttachments: any[] = [];
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    pasteFile={true}
                    attachments={this.get('attachments')}
                    ev-$change:attachments={this.onChange}
                />
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            onChange = (items: any[]) => { lastAttachments = items; };
        }

        const [, element] = mount(Demo);
        const textarea = element.querySelector<HTMLTextAreaElement>('.k-sender-input')!;
        const file = new File(['image'], 'cover.png', {type: 'image/png'});

        dispatchEvent(textarea, 'paste', {
            clipboardData: getClipboardData([file]),
        });
        await wait();

        expect(lastAttachments.length).to.eql(1);
        expect(lastAttachments[0].name).to.eql('cover.png');
    });

    it('should trigger uploadError for invalid file type on paste', async () => {
        let errorMessage = '';
        let lastAttachments: any[] = [];
        class Demo extends Component<{attachments: any[]}> {
            static template = `
                const { Sender } = this;
                <Sender
                    pasteFile={true}
                    attachments={this.get('attachments')}
                    uploadProps={{accept: 'image/*'}}
                    ev-$change:attachments={this.onChange}
                    ev-uploadError={this.onUploadError}
                />
            `;
            static defaults() {
                return {
                    attachments: [],
                };
            }
            Sender = Sender;
            onChange = (items: any[]) => { lastAttachments = items; };
            onUploadError = (error: Error) => { errorMessage = error.message; };
        }

        const [, element] = mount(Demo);
        const textarea = element.querySelector<HTMLTextAreaElement>('.k-sender-input')!;
        const file = new File(['hello'], 'hello.txt', {type: 'text/plain'});

        dispatchEvent(textarea, 'paste', {
            clipboardData: getClipboardData([file]),
        });
        await wait();

        expect(errorMessage).to.eql('"hello.txt" 文件类型不合法');
        expect(lastAttachments.length).to.eql(0);
    });

    it('should keep native text paste when pasteFile is disabled', async () => {
        class Demo extends Component {
            static template = `
                const { Sender } = this;
                <Sender />
            `;
            Sender = Sender;
        }

        const [, element] = mount(Demo);
        const textarea = element.querySelector<HTMLTextAreaElement>('.k-sender-input')!;
        const file = new File(['image'], 'cover.png', {type: 'image/png'});

        const event = document.createEvent('Event');
        event.initEvent('paste', true, true);
        Object.assign(event, {
            clipboardData: getClipboardData([file]),
        });

        textarea.dispatchEvent(event);
        await wait();

        expect(event.defaultPrevented).to.eql(false);
    });
});
