import {Component, createVNode} from 'intact';
import mermaid from 'mermaid/dist/mermaid.min.js';
import {dispatchEvent, mount, unmount, wait} from '../../test/utils';
import {XMarkdown} from '.';
import {createStreamingTailCache, splitMarkdownForStreaming} from './markdown';

describe('XMarkdown', () => {
    async function waitFor(check: () => boolean, retries = 30, interval = 20) {
        for (let i = 0; i < retries; i++) {
            if (check()) return true;
            await wait(interval);
        }

        return check();
    }

    afterEach(() => {
        sinon.restore();
        unmount();
    });

    it('should render markdown blocks, code toolbar and formula', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown content={this.get('content')} />
            `;

            static defaults() {
                return {
                    content: [
                        '# 标题',
                        '',
                        '> 引用内容',
                        '',
                        '$E = mc^2$',
                        '',
                        '| A | B |',
                        '| --- | --- |',
                        '| 1 | 2 |',
                        '',
                        '```ts',
                        'const value = 1;',
                        '```',
                    ].join('\n'),
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-code-toolbar') && !!element.querySelector('.katex'), 60, 20);

        expect(ready).to.be.true;

        expect(element.querySelector('.k-xmarkdown-content h1')).not.to.eql(null);
        expect(element.querySelector('.k-xmarkdown-content')!.textContent).to.contain('标题');
        expect(element.querySelector('.k-xmarkdown-content blockquote')!.textContent).to.contain('引用内容');
        expect(element.querySelector('.k-xmarkdown-content table')).not.to.eql(null);
        expect(element.querySelector('.k-xmarkdown-table-wrap table')).not.to.eql(null);
        expect(element.querySelector('.k-xmarkdown-code-toolbar')).not.to.eql(null);
        expect(element.querySelector('.katex')).not.to.eql(null);
    });

    it('should sanitize raw html by default', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown content={'<script>alert(1)</script><b>safe</b>'} />
            `;

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        await wait(40);

        expect(element.querySelector('script')).to.eql(null);
        expect(element.querySelector('b')).to.eql(null);
        expect(element.querySelector('.k-xmarkdown-content')!.textContent).to.contain('safe');
    });

    it('should ignore empty loading and empty slots', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <div>
                    <XMarkdown className="empty-loading" loading>
                        <b:loading>
                            <span v-if={false} class="empty-loading-slot">loading</span>
                        </b:loading>
                    </XMarkdown>
                    <XMarkdown className="empty-empty">
                        <b:empty>
                            <span v-if={false} class="empty-empty-slot">empty</span>
                        </b:empty>
                    </XMarkdown>
                </div>
            `;

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.empty-loading .k-xmarkdown-loading')).not.to.eql(null);
        expect(element.querySelector('.empty-loading-slot')).to.eql(null);
        expect(element.querySelector('.empty-empty .k-xmarkdown-empty')).to.eql(null);
    });

    it('should render paragraph text with 12px font size', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown content="正文内容" />
            `;

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        await wait(20);

        const paragraph = element.querySelector<HTMLElement>('.k-xmarkdown-content p')!;
        expect(getComputedStyle(paragraph).fontSize).to.eql('12px');
    });

    it('should render code and table text with 12px font size', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown content={this.get('content')} />
            `;

            static defaults() {
                return {
                    content: [
                        '正文 `inlineCode`',
                        '',
                        '| A | B |',
                        '| --- | --- |',
                        '| 1 | 2 |',
                        '',
                        '```ts',
                        'const value = 1;',
                        '```',
                    ].join('\n'),
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-code-block'));

        expect(ready).to.be.true;

        const inlineCode = element.querySelector<HTMLElement>('.k-xmarkdown-inline-code')!;
        const codeBlock = element.querySelector<HTMLElement>('.k-xmarkdown-code-block pre')!;
        const table = element.querySelector<HTMLElement>('.k-xmarkdown-table-wrap > table')!;
        const tableCell = element.querySelector<HTMLElement>('.k-xmarkdown-table-wrap td')!;

        expect(getComputedStyle(inlineCode).fontSize).to.eql('12px');
        expect(getComputedStyle(codeBlock).fontSize).to.eql('12px');
        expect(getComputedStyle(table).fontSize).to.eql('12px');
        expect(getComputedStyle(tableCell).fontSize).to.eql('12px');
    });

    it('should copy code and emit codeCopy', async () => {
        const writeText = sinon.stub().resolves();
        Object.defineProperty(navigator, 'clipboard', {
            value: {writeText},
            configurable: true,
        });

        class Demo extends Component<{copiedCode: string}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    ev-codeCopy={(code) => this.set('copiedCode', code)}
                />
            `;

            static defaults() {
                return {
                    content: '```ts\nconst value = 1;\n```',
                    copiedCode: '',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector<HTMLElement>('[data-kpc-action="copy-code"]'));

        expect(ready).to.be.true;

        const button = element.querySelector<HTMLElement>('[data-kpc-action="copy-code"]')!;
        const block = button.closest<HTMLElement>('[data-kpc-code-block="true"]')!;
        dispatchEvent(button, 'click');
        await wait(30);

        expect(writeText.calledOnce).to.be.true;
        expect(writeText.firstCall.args[0]).to.eql('const value = 1;');
        expect(instance.get('copiedCode')).to.eql('const value = 1;');
        expect(button.getAttribute('title')).to.eql('已复制');
        expect(block.dataset.kpcSource).to.eql(undefined);
        expect(block.dataset.kpcBlockId).to.not.eql(undefined);
    });

    it('should keep unsupported languages as code blocks without syntax highlighting', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown content={this.get('content')} />
            `;

            static defaults() {
                return {
                    content: '```unknownlang\n++>---.\n```',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-code-block'));

        expect(ready).to.be.true;

        const block = element.querySelector<HTMLElement>('.k-xmarkdown-code-block')!;
        const language = block.querySelector('.k-xmarkdown-code-language')!;
        const code = block.querySelector('pre code')!;

        expect(language.textContent).to.eql('unknownlang');
        expect(code.textContent).to.contain('++>---.');
        expect(code.className).to.eql('hljs');
    });

    it('should hide code toolbar when showCodeHeader is false', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    showCodeHeader={false}
                />
            `;

            static defaults() {
                return {
                    content: '```ts\nconst value = 1;\n```',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-code-block'));

        expect(ready).to.be.true;
        expect(element.querySelector('.k-xmarkdown-code-toolbar')).to.eql(null);
        expect(element.querySelector('.k-xmarkdown-code-body')).to.eql(null);
        expect(element.querySelector('pre code')!.textContent).to.contain('const value = 1;');
    });

    it('should render mermaid blocks, support zoom controls and toggle source view', async () => {
        sinon.stub(mermaid, 'initialize');
        const renderAsync = sinon.stub(mermaid, 'renderAsync').resolves(
            '<svg class="mock-mermaid" viewBox="0 0 200 120"><text>diagram</text></svg>' as any
        );

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown content={this.get('content')} />
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->B\n```',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector<HTMLElement>('[data-kpc-mermaid="true"] svg'));

        expect(ready).to.be.true;

        const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]')!;
        const root = element.matches('.k-xmarkdown')
            ? element as HTMLElement
            : element.querySelector<HTMLElement>('.k-xmarkdown')!;
        const content = root.querySelector<HTMLElement>('.k-xmarkdown-content')!;
        const mermaidBody = block.querySelector<HTMLElement>('.k-xmarkdown-mermaid-body')!;
        const viewport = block.querySelector<HTMLElement>('.k-xmarkdown-mermaid-viewport')!;
        expect(block.querySelector('.mock-mermaid')).not.to.eql(null);
        expect(renderAsync.firstCall.args[0]).to.match(/^kpc-xmarkdown-mermaid-[a-z0-9]+-xmarkdown-block-0$/);
        expect(block.dataset.kpcSource).to.eql(undefined);
        expect(block.dataset.kpcBlockId).to.not.eql(undefined);
        expect(getComputedStyle(root).maxWidth).to.eql('100%');
        expect(getComputedStyle(content).maxWidth).to.eql('100%');
        expect(getComputedStyle(block).maxWidth).to.eql('100%');
        expect(getComputedStyle(mermaidBody).maxWidth).to.eql('100%');
        expect(getComputedStyle(viewport).maxWidth).to.eql('100%');
        const diagramToggle = block.querySelector<HTMLElement>('[data-kpc-action="set-mermaid-view-diagram"]')!;
        expect(diagramToggle.getAttribute('aria-pressed')).to.eql('true');

        const zoomIn = block.querySelector<HTMLElement>('[data-kpc-action="zoom-mermaid-in"]')!;
        const initialScale = Number(block.dataset.kpcScale || '1');
        dispatchEvent(zoomIn, 'click');
        await wait(40);

        expect(Number(block.dataset.kpcScale)).to.be.greaterThan(initialScale);
        expect(block.querySelector<SVGSVGElement>('svg')!.style.width).not.to.eql('');

        const resetZoom = block.querySelector<HTMLElement>('[data-kpc-action="reset-mermaid-zoom"]')!;
        dispatchEvent(resetZoom, 'click');
        await wait(40);

        expect(Number(block.dataset.kpcScale)).to.eql(initialScale);

        const toggle = block.querySelector<HTMLElement>('[data-kpc-action="set-mermaid-view-source"]')!;
        dispatchEvent(toggle, 'click');
        await wait(20);

        expect(block.dataset.kpcView).to.eql('source');
        expect(toggle.dataset.kpcSelected).to.eql('true');
        expect(toggle.getAttribute('aria-pressed')).to.eql('true');
    });

    it('should render mermaid fences as plain code blocks when enableMermaid is false', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    enableMermaid={false}
                    content={this.get('content')}
                />
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->B\n```',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-code-block'));

        expect(ready).to.be.true;
        expect(element.querySelector('[data-kpc-mermaid="true"]')).to.eql(null);
        expect(element.querySelector('.k-xmarkdown-code-language')!.textContent).to.eql('mermaid');
        expect(element.querySelector('pre code')!.textContent).to.contain('flowchart TD');
    });

    it('should merge custom mermaidConfig when rendering mermaid', async () => {
        const initialize = sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'renderAsync').resolves(
            '<svg class="mock-mermaid-config" viewBox="0 0 200 120"><text>diagram</text></svg>' as any
        );

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    mermaidConfig={this.get('mermaidConfig')}
                />
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->B\n```',
                    mermaidConfig: {
                        theme: 'base',
                        themeVariables: {
                            primaryColor: '#fff4cc',
                        },
                    },
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.mock-mermaid-config'));

        expect(ready).to.be.true;
        expect(initialize.calledOnce).to.be.true;
        expect(initialize.firstCall.args[0].startOnLoad).to.be.false;
        expect(initialize.firstCall.args[0].securityLevel).to.eql('strict');
        expect(initialize.firstCall.args[0].theme).to.eql('base');
        expect(initialize.firstCall.args[0].themeVariables.primaryColor).to.eql('#fff4cc');
    });

    it('should rerender mermaid when mermaidConfig changes', async () => {
        const initialize = sinon.stub(mermaid, 'initialize');
        const renderAsync = sinon.stub(mermaid, 'renderAsync').resolves(
            '<svg class="mock-mermaid-update-config" viewBox="0 0 200 120"><text>diagram</text></svg>' as any
        );

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <div>
                    <XMarkdown
                        content={this.get('content')}
                        mermaidConfig={this.get('mermaidConfig')}
                    />
                </div>
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->B\n```',
                    mermaidConfig: {
                        theme: 'base',
                        themeVariables: {
                            primaryColor: '#e8f3ff',
                        },
                    },
                };
            }

            XMarkdown = XMarkdown;

            updateConfig() {
                (this as any).set('mermaidConfig.themeVariables.primaryColor', '#fff4cc');
            }
        }

        const [instance, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.mock-mermaid-update-config'));

        expect(ready).to.be.true;
        expect(initialize.callCount).to.eql(1);
        expect(renderAsync.callCount).to.eql(1);
        expect(initialize.firstCall.args[0].themeVariables.primaryColor).to.eql('#e8f3ff');

        instance.updateConfig();

        const rerendered = await waitFor(() => initialize.callCount === 2 && renderAsync.callCount === 2, 60, 20);

        expect(rerendered).to.be.true;
        expect(initialize.secondCall.args[0].themeVariables.primaryColor).to.eql('#fff4cc');
    });

    it('should generate different mermaid render ids for sibling markdown instances with same content', async () => {
        sinon.stub(mermaid, 'initialize');
        const renderAsync = sinon.stub(mermaid, 'renderAsync').resolves(
            '<svg class="mock-mermaid-duplicate" viewBox="0 0 200 120"><text>diagram</text></svg>' as any
        );

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <div class="xmarkdown-mermaid-duplicate-demo">
                    <XMarkdown content={this.get('content')} />
                    <XMarkdown content={this.get('content')} />
                </div>
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->B\n```',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => element.querySelectorAll<HTMLElement>('.mock-mermaid-duplicate').length === 2);

        expect(ready).to.be.true;
        expect(renderAsync.callCount).to.eql(2);

        const renderIds = renderAsync.args.map((args: any[]) => args[0]);
        expect(renderIds[0]).to.not.eql(renderIds[1]);
        const firstMatch = /^kpc-xmarkdown-mermaid-([a-z0-9]+)-xmarkdown-block-0$/.exec(renderIds[0]);
        expect(firstMatch).to.not.eql(null);
        expect(renderIds[1]).to.eql(`kpc-xmarkdown-mermaid-${firstMatch![1]}-1-xmarkdown-block-0`);
    });

    it('should render complex mermaid demo content with lightweight stubbed output', async () => {
        sinon.stub(mermaid, 'initialize');
        const renderAsync = sinon.stub(mermaid, 'renderAsync').resolves(
            '<svg class="mock-mermaid-demo" viewBox="0 0 320 180"><text>demo</text></svg>' as any
        );

        const complexMermaidContent = [
            '```mermaid',
            'flowchart LR',
            '    A[需求输入] --> B{方案评审}',
            '    B -->|通过| C[组件设计]',
            '    B -->|补充信息| D[补充需求]',
            '    D --> B',
            '',
            '    C --> E[交互定义]',
            '    C --> F[渲染实现]',
            '    E --> G[边界校验]',
            '    F --> H[发版验证]',
            '',
            '    G --> H',
            '```',
        ].join('\n');

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown content={this.get('content')} />
            `;

            static defaults() {
                return {
                    content: complexMermaidContent,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector<HTMLElement>('.mock-mermaid-demo'));

        expect(ready).to.be.true;

        const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]')!;
        expect(block.querySelector('.mock-mermaid-demo')).not.to.eql(null);
        expect(renderAsync.calledOnce).to.be.true;
        expect(renderAsync.firstCall.args[1]).to.contain('A[需求输入] --> B{方案评审}');
        expect(renderAsync.firstCall.args[1]).to.contain('G --> H');
        expect(block.querySelector('.k-xmarkdown-code-language')!.textContent).to.eql('Mermaid');
        expect(block.querySelector('[data-kpc-action="copy-mermaid"]')).not.to.eql(null);
        expect(block.querySelector('.k-xmarkdown-mermaid-source code')!.textContent).to.contain('组件设计');
    });

    it('should support typing and streaming completion', async () => {
        class Demo extends Component<{
            content: string
            streaming: boolean
            typingCount: number
            completeCount: number
        }> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    streaming={this.get('streaming')}
                    typing={{interval: 16, step: 2}}
                    ev-typing={() => this.set('typingCount', this.get('typingCount') + 1)}
                    ev-typingComplete={() => this.set('completeCount', this.get('completeCount') + 1)}
                />
            `;

            static defaults() {
                return {
                    content: '# 标题\n\n- alpha\n- beta',
                    streaming: true,
                    typingCount: 0,
                    completeCount: 0,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);

        let hasTail = false;
        for (let i = 0; i < 10; i++) {
            await wait(20);
            hasTail = !!element.querySelector('[data-kpc-xmarkdown-tail="true"]');
            if (hasTail) break;
        }

        expect(hasTail).to.be.true;
        expect(instance.get('typingCount')).to.be.greaterThan(0);
        expect(instance.get('completeCount')).to.eql(0);

        instance.set('streaming', false);

        for (let i = 0; i < 20 && instance.get('completeCount') === 0; i++) {
            await wait(20);
        }

        const rendered = await waitFor(() => element.querySelectorAll('.k-xmarkdown-content li').length === 2);

        expect(instance.get('completeCount')).to.eql(1);
        expect(rendered).to.be.true;
        expect(element.querySelector('.k-xmarkdown-content h1')).not.to.eql(null);
        expect(element.querySelector('.k-xmarkdown-content')!.textContent).to.contain('标题');
        expect(element.querySelectorAll('.k-xmarkdown-content li').length).to.eql(2);
    });

    it('should split rendered content into stable and tail containers and reuse stable DOM on streaming updates', async () => {
        class Demo extends Component<{content: string; streaming: boolean}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    streaming={this.get('streaming')}
                />
            `;

            static defaults() {
                return {
                    content: '# 标题\n\n一段稳定的话。\n\n',
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);

        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-stable h1'));
        expect(ready).to.be.true;

        const stableContainer = element.querySelector('.k-xmarkdown-stable')!;
        const tailContainer = element.querySelector('.k-xmarkdown-tail')!;

        expect(stableContainer).not.to.eql(null);
        expect(tailContainer).not.to.eql(null);
        expect(stableContainer.querySelector('h1')).not.to.eql(null);
        expect(tailContainer.innerHTML).to.eql('');

        const h1 = stableContainer.querySelector('h1')!;
        const paragraph = stableContainer.querySelector('p')!;
        (h1 as any).__kpcStableProbe = 'kept';
        (paragraph as any).__kpcStableParagraphProbe = 'kept';

        instance.set('content', '# 标题\n\n一段稳定的话。\n\n# 新标题');

        const hasTail = await waitFor(() => !!tailContainer.querySelector('[data-kpc-xmarkdown-tail="true"]'), 30, 20);
        expect(hasTail).to.be.true;

        const sameH1 = stableContainer.querySelector('h1')!;
        expect((sameH1 as any).__kpcStableProbe).to.eql('kept');
        expect(tailContainer.querySelector('[data-kpc-xmarkdown-tail="true"]')).not.to.eql(null);
        expect(stableContainer.querySelector('[data-kpc-xmarkdown-tail="true"]')).to.eql(null);

        instance.set('content', '# 标题\n\n一段稳定的话。\n\n# 新标题\n\n第二段稳定的话。');

        const promoted = await waitFor(() => {
            return !tailContainer.querySelector('[data-kpc-xmarkdown-tail="true"]')
                && stableContainer.querySelectorAll('h1').length === 2;
        }, 30, 20);

        expect(promoted).to.be.true;
        expect((stableContainer.querySelector('h1') as any).__kpcStableProbe).to.eql('kept');
        expect((stableContainer.querySelector('p') as any).__kpcStableParagraphProbe).to.eql('kept');
    });

    it('should keep previous stable DOM across multiple append-only promotions', async () => {
        class Demo extends Component<{content: string; streaming: boolean}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    streaming={this.get('streaming')}
                />
            `;

            static defaults() {
                return {
                    content: '# 标题\n\n第一段稳定内容。\n\n',
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);

        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-stable h1'));
        expect(ready).to.be.true;

        const stableContainer = element.querySelector('.k-xmarkdown-stable')!;
        const tailContainer = element.querySelector('.k-xmarkdown-tail')!;

        const firstHeading = stableContainer.querySelector('h1')!;
        const firstParagraph = stableContainer.querySelector('p')!;
        (firstHeading as any).__kpcFirstStableHeading = 'kept';
        (firstParagraph as any).__kpcFirstStableParagraph = 'kept';

        instance.set('content', '# 标题\n\n第一段稳定内容。\n\n# 第二个标题');

        const firstTailReady = await waitFor(() => !!tailContainer.querySelector('[data-kpc-xmarkdown-tail="true"]'), 30, 20);
        expect(firstTailReady).to.be.true;

        instance.set('content', '# 标题\n\n第一段稳定内容。\n\n# 第二个标题\n\n第二段稳定内容。\n\n');

        const firstPromotionReady = await waitFor(() => stableContainer.querySelectorAll('h1').length === 2, 30, 20);
        expect(firstPromotionReady).to.be.true;
        expect((stableContainer.querySelector('h1') as any).__kpcFirstStableHeading).to.eql('kept');
        expect((stableContainer.querySelector('p') as any).__kpcFirstStableParagraph).to.eql('kept');

        const secondHeading = stableContainer.querySelectorAll('h1')[1] as HTMLElement;
        const secondParagraph = stableContainer.querySelectorAll('p')[1] as HTMLElement;
        (secondHeading as any).__kpcSecondStableHeading = 'kept';
        (secondParagraph as any).__kpcSecondStableParagraph = 'kept';

        instance.set('content', '# 标题\n\n第一段稳定内容。\n\n# 第二个标题\n\n第二段稳定内容。\n\n## 第三个标题');

        const secondTailReady = await waitFor(() => !!tailContainer.querySelector('[data-kpc-xmarkdown-tail="true"]'), 30, 20);
        expect(secondTailReady).to.be.true;

        instance.set('content', '# 标题\n\n第一段稳定内容。\n\n# 第二个标题\n\n第二段稳定内容。\n\n## 第三个标题\n\n第三段稳定内容。');

        const secondPromotionReady = await waitFor(() => stableContainer.querySelectorAll('h1').length === 2
            && stableContainer.querySelectorAll('h2').length === 1, 30, 20);

        expect(secondPromotionReady).to.be.true;
        expect((stableContainer.querySelector('h1') as any).__kpcFirstStableHeading).to.eql('kept');
        expect((stableContainer.querySelector('p') as any).__kpcFirstStableParagraph).to.eql('kept');
        expect((stableContainer.querySelectorAll('h1')[1] as any).__kpcSecondStableHeading).to.eql('kept');
        expect((stableContainer.querySelectorAll('p')[1] as any).__kpcSecondStableParagraph).to.eql('kept');
    });

    it('should put unclosed block-level formula into tail container during streaming', async () => {
        class Demo extends Component<{content: string; streaming: boolean}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    streaming={this.get('streaming')}
                />
            `;

            static defaults() {
                return {
                    // $$ 后面没有闭合的 $$
                    content: '# 标题\n\n$$\n\\operatorname{score}(x)=\\sum_{i=1}^{n}',
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);

        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-stable h1'));
        expect(ready).to.be.true;

        const stableContainer = element.querySelector('.k-xmarkdown-stable')!;
        const tailContainer = element.querySelector('.k-xmarkdown-tail')!;

        // 标题应该在 stable 中
        expect(stableContainer.querySelector('h1')).not.to.eql(null);
        // 块级公式 $$ 应该在 tail 中（因为未闭合）
        expect(tailContainer.textContent).to.contain('$$');
        expect(tailContainer.querySelector('[data-kpc-xmarkdown-tail="true"]')).not.to.eql(null);

        // 闭合公式后，整个公式应该渲染在 stable 中
        instance.set('content', '# 标题\n\n$$\n\\operatorname{score}(x)=\\sum_{i=1}^{n}\n$$');

        const formulaRendered = await waitFor(() => {
            // 公式闭合后，tail 应该为空或没有 $$
            return tailContainer.innerHTML === '' || !tailContainer.textContent?.includes('$$');
        }, 30, 20);

        expect(formulaRendered).to.be.true;
    });

    it('should keep incomplete inline tokens in tail cache during streaming', () => {
        const cache = createStreamingTailCache();

        let result = splitMarkdownForStreaming('请看[文', cache);
        expect(result.stableSource).to.eql('请看');
        expect(result.tailText).to.eql('[文');

        result = splitMarkdownForStreaming('请看[文档](https://example.com)', cache);
        expect(result.stableSource).to.eql('请看[文档](https://example.com)');
        expect(result.tailText).to.eql('');

        result = splitMarkdownForStreaming('请看[文档](https://example.com)\n<notice-card tit', cache);
        expect(result.stableSource).to.eql('请看[文档](https://example.com)\n');
        expect(result.tailText).to.eql('<notice-card tit');
    });

    it('should render raw html when allowHtml and sanitizeOptions are enabled', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    allowHtml
                    content={this.get('content')}
                    sanitizeOptions={this.get('sanitizeOptions')}
                />
            `;

            static defaults() {
                return {
                    content: [
                        '<mark data-track="demo-mark">safe</mark>',
                        '<notice-card title="发布建议">先补文档，再补单测。</notice-card>',
                    ].join('\n'),
                    sanitizeOptions: {
                        ADD_TAGS: ['notice-card'],
                        ADD_ATTR: ['title', 'data-track'],
                    },
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('notice-card'));

        expect(ready).to.be.true;
        expect(element.querySelector('mark')!.getAttribute('data-track')).to.eql('demo-mark');
        expect(element.querySelector('notice-card')!.getAttribute('title')).to.eql('发布建议');
        expect(element.querySelector('notice-card')!.textContent).to.contain('先补文档，再补单测。');
    });

    it('should keep formula text when enableFormula is false', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    enableFormula={false}
                    content={'$E = mc^2$'}
                />
            `;

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        await wait(60);

        expect(element.querySelector('.katex')).to.eql(null);
        expect(element.querySelector('.k-xmarkdown-content')!.textContent).to.contain('$E = mc^2$');
    });

    it('should support custom formulaDelimiters and formulaMacros', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={'\\\\[f: \\\\RR \\\\to \\\\RR\\\\]'}
                    formulaDelimiters={'brackets'}
                    formulaMacros={this.get('formulaMacros')}
                />
            `;

            static defaults() {
                return {
                    formulaMacros: {
                        '\\\\RR': '\\\\mathbb{R}',
                    },
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.katex'), 60, 20);

        expect(ready).to.be.true;
        expect(element.querySelector('.k-xmarkdown-content')!.textContent).not.to.contain('\\[');
    });

    it('should support tagAttrs and tagRenderers for custom tags', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    allowHtml
                    content={this.get('content')}
                    sanitizeOptions={this.get('sanitizeOptions')}
                    tagAttrs={this.tagAttrs}
                    tagRenderers={this.tagRenderers}
                />
            `;

            static defaults() {
                return {
                    content: [
                        '# 标签增强示例',
                        '',
                        '<notice-card title="发布建议">先补 Demo，再补单测。</notice-card>',
                        '',
                        '| 阶段 | 状态 |',
                        '| --- | --- |',
                        '| 联调 | 进行中 |',
                        '',
                        '更多信息请查看 [文档](https://example.com)。',
                    ].join('\n'),
                    sanitizeOptions: {
                        ADD_TAGS: ['notice-card'],
                        ADD_ATTR: ['title'],
                    },
                };
            }

            XMarkdown = XMarkdown;

            tagAttrs = {
                a: () => ({
                    className: 'xmarkdown-enhanced-link',
                    'data-track': 'demo-link',
                }),
            };

            tagRenderers = {
                'notice-card': (context: any) => createVNode('section', {className: 'xmarkdown-custom-card'}, [
                    createVNode('h4', {className: 'xmarkdown-custom-card-title'}, context.attrs.title || '提示'),
                    createVNode('div', {className: 'xmarkdown-custom-card-body'}, context.textContent),
                ]),
                table: () => createVNode('section', {className: 'xmarkdown-custom-table'}, 'custom table'),
            };
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.xmarkdown-custom-card'));

        expect(ready).to.be.true;
        expect(element.querySelector('notice-card')).to.eql(null);
        expect(element.querySelector('table')).to.eql(null);
        expect(element.querySelector('.xmarkdown-custom-card-title')!.textContent).to.eql('发布建议');
        expect(element.querySelector('.xmarkdown-custom-card-body')!.textContent).to.contain('先补 Demo，再补单测。');
        expect(element.querySelector('.xmarkdown-custom-table')!.textContent).to.contain('custom table');
        expect(Array.from(element.querySelector('.k-xmarkdown-stable')!.children).map((item) => item.tagName.toLowerCase()))
            .to.eql(['h1', 'section', 'div', 'p']);
        expect(element.querySelector('.k-xmarkdown-stable p:empty')).to.eql(null);

        const link = element.querySelector<HTMLAnchorElement>('.xmarkdown-enhanced-link')!;
        expect(link.getAttribute('data-track')).to.eql('demo-link');
        expect(link.getAttribute('target')).to.eql('_blank');
        expect(link.getAttribute('rel')).to.eql('noopener noreferrer');
    });

    it('should support codeBlockRenderers for code blocks and mermaid blocks', async () => {
        const initialize = sinon.stub(mermaid, 'initialize');
        const renderAsync = sinon.stub(mermaid, 'renderAsync');
        const codeContexts: any[] = [];
        const mermaidContexts: any[] = [];

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    codeBlockRenderers={this.codeBlockRenderers}
                />
            `;

            static defaults() {
                return {
                    content: [
                        '```ts',
                        'const value: number = 1;',
                        '```',
                        '',
                        '```mermaid',
                        'flowchart TD',
                        'A-->B',
                        '```',
                    ].join('\n'),
                };
            }

            XMarkdown = XMarkdown;

            codeBlockRenderers = {
                ts: (context: any) => {
                    codeContexts.push(context);
                    return createVNode('section', {className: 'xmarkdown-custom-code-block'}, [
                        createVNode('span', {className: 'xmarkdown-custom-code-title'}, `${context.blockType}:${context.language}`),
                        createVNode('pre', {className: 'xmarkdown-custom-code-body'}, context.source),
                    ]);
                },
                mermaid: (context: any) => {
                    mermaidContexts.push(context);
                    return createVNode('section', {className: 'xmarkdown-custom-mermaid-block'}, [
                        createVNode('h4', {className: 'xmarkdown-custom-mermaid-title'}, 'custom mermaid'),
                        createVNode('code', {className: 'xmarkdown-custom-mermaid-body'}, context.source),
                    ]);
                },
            };
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => {
            return !!element.querySelector('.xmarkdown-custom-code-block')
                && !!element.querySelector('.xmarkdown-custom-mermaid-block');
        });

        expect(ready).to.be.true;
        expect(initialize.called).to.be.false;
        expect(renderAsync.called).to.be.false;
        expect(codeContexts[0].language).to.eql('ts');
        expect(codeContexts[0].normalizedLanguage).to.eql('typescript');
        expect(codeContexts[0].blockType).to.eql('code');
        expect(mermaidContexts[0].language).to.eql('mermaid');
        expect(mermaidContexts[0].blockType).to.eql('mermaid');
        expect(element.querySelector('[data-kpc-mermaid="true"]')).to.eql(null);
        expect(element.querySelector('.k-xmarkdown-code-toolbar')).to.eql(null);
    });

    it('should refresh renderer when codeBlockRenderers change', async () => {
        class Demo extends Component<{codeBlockRenderers?: any}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    codeBlockRenderers={this.get('codeBlockRenderers')}
                />
            `;

            static defaults() {
                return {
                    content: '```ts\nconst value = 1;\n```',
                    codeBlockRenderers: undefined,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const initialReady = await waitFor(() => !!element.querySelector('.k-xmarkdown-code-toolbar'));

        expect(initialReady).to.be.true;
        expect(element.querySelector('.xmarkdown-refresh-code-block')).to.eql(null);

        instance.set('codeBlockRenderers', {
            ts: (context: any) => createVNode(
                'section',
                {className: 'xmarkdown-refresh-code-block'},
                context.source
            ),
        });

        const refreshed = await waitFor(() => !!element.querySelector('.xmarkdown-refresh-code-block'));
        expect(refreshed).to.be.true;
        expect(element.querySelector('.k-xmarkdown-code-toolbar')).to.eql(null);
    });

    it('should support plugins for markdown extension and render tree transform', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    plugins={this.plugins}
                />
            `;

            static defaults() {
                return {
                    content: [
                        '# 插件标题',
                        '',
                        '> 插件引用',
                    ].join('\n'),
                };
            }

            XMarkdown = XMarkdown;

            plugins = [{
                extendMarkdown(markdown: any) {
                    markdown.core.ruler.push('xmarkdown-heading-plugin', (state: any) => {
                        state.tokens.forEach((token: any) => {
                            if (token.type === 'heading_open') {
                                token.attrPush(['data-plugin-source', 'markdown-it']);
                            }
                        });
                    });
                },
            }, {
                transformRenderTree(nodes: any[]) {
                    return nodes.map((node) => {
                        if (node.type !== 'element' || node.tag !== 'blockquote') {
                            return node;
                        }

                        return {
                            ...node,
                            attrs: {
                                ...node.attrs,
                                'data-plugin-transform': 'render-tree',
                            },
                        };
                    });
                },
            }];
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-content blockquote'));

        expect(ready).to.be.true;
        expect(element.querySelector('h1')!.getAttribute('data-plugin-source')).to.eql('markdown-it');
        expect(element.querySelector('blockquote')!.getAttribute('data-plugin-transform')).to.eql('render-tree');
    });

    it('should refresh renderer when plugins change', async () => {
        class Demo extends Component<{plugins: any[]}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={'# 插件刷新'}
                    plugins={this.get('plugins')}
                />
            `;

            static defaults() {
                return {
                    plugins: [],
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const initialReady = await waitFor(() => !!element.querySelector('h1'));

        expect(initialReady).to.be.true;
        expect(element.querySelector('h1')!.getAttribute('data-refresh-plugin')).to.eql(null);

        instance.set('plugins', [{
            extendMarkdown(markdown: any) {
                markdown.core.ruler.push('xmarkdown-refresh-plugin', (state: any) => {
                    state.tokens.forEach((token: any) => {
                        if (token.type === 'heading_open') {
                            token.attrPush(['data-refresh-plugin', 'updated']);
                        }
                    });
                });
            },
        }]);

        const refreshed = await waitFor(() => element.querySelector('h1')!.getAttribute('data-refresh-plugin') === 'updated');
        expect(refreshed).to.be.true;
    });

    it('should support plugins transforming citation markers from business data', async () => {
        const citations = [{
            title: '引用来源一',
            link: 'https://example.com/source-1',
        }];

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={'正文引用[1][2]'}
                    plugins={this.plugins}
                />
            `;

            XMarkdown = XMarkdown;

            plugins = [{
                transformRenderTree(nodes: any[]) {
                    return transformCitationNodes(nodes, true);
                },
            }];
        }

        function transformCitationNodes(nodes: any[], appendSection = false) {
            const nextNodes: any[] = [];

            nodes.forEach((node) => {
                if (node.type === 'text') {
                    nextNodes.push(...splitCitationText(node.content));
                    return;
                }

                if (node.type !== 'element') {
                    nextNodes.push(node);
                    return;
                }

                nextNodes.push({
                    ...node,
                    children: transformCitationNodes(node.children),
                });
            });

            if (!appendSection || !citations.length) return nextNodes;

            return [
                ...nextNodes,
                {
                    type: 'element',
                    tag: 'section',
                    attrs: {
                        'data-citation-section': 'true',
                    },
                    children: [{
                        type: 'text',
                        content: `Sources: ${citations.length}`,
                    }],
                },
            ];
        }

        function splitCitationText(text: string) {
            const nextNodes: any[] = [];
            const pattern = /\[(\d+)\]/g;
            let lastIndex = 0;
            let match: RegExpExecArray | null;

            while ((match = pattern.exec(text))) {
                const index = Number(match[1]);
                const citation = citations[index - 1];

                if (match.index > lastIndex) {
                    nextNodes.push({
                        type: 'text',
                        content: text.slice(lastIndex, match.index),
                    });
                }

                nextNodes.push(citation
                    ? {
                        type: 'element',
                        tag: 'a',
                        attrs: {
                            href: citation.link,
                            'data-citation-index': String(index),
                        },
                        children: [{
                            type: 'text',
                            content: String(index),
                        }],
                    }
                    : {
                        type: 'text',
                        content: match[0],
                    });

                lastIndex = match.index + match[0].length;
            }

            if (!nextNodes.length) {
                return [{
                    type: 'text',
                    content: text,
                }];
            }

            if (lastIndex < text.length) {
                nextNodes.push({
                    type: 'text',
                    content: text.slice(lastIndex),
                });
            }

            return nextNodes;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('[data-citation-index="1"]'));

        expect(ready).to.be.true;
        expect(element.querySelectorAll('[data-citation-index]').length).to.eql(1);
        expect(element.querySelector('[data-citation-index="1"]')!.getAttribute('href')).to.eql('https://example.com/source-1');
        expect(element.querySelector('.k-xmarkdown-content')!.textContent).to.contain('[2]');
        expect(element.querySelector('[data-citation-section="true"]')!.textContent).to.contain('Sources: 1');
    });

    it('should avoid duplicate markdown rendering during initial mount', async () => {
        const transformRenderTree = sinon.spy((nodes: any[]) => nodes);

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={'# 初始化渲染'}
                    plugins={this.plugins}
                />
            `;

            XMarkdown = XMarkdown;

            plugins = [{
                transformRenderTree,
            }];
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('h1'));

        expect(ready).to.be.true;
        expect(transformRenderTree.callCount).to.eql(1);
    });
});
