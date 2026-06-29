import {Component, createVNode} from 'intact';
import mermaid from 'mermaid';
import {dispatchEvent, mount, unmount, wait} from '../../test/utils';
import {XMarkdown} from '.';
import {resolveStreamingRenderResult} from './markdown';

describe('XMarkdown', () => {
    function markdown(source: string) {
        const normalized = source.replace(/^\n/, '').replace(/\n\s*$/, '');
        const indent = normalized.match(/^ */)?.[0] || '';

        return indent ? normalized.replace(new RegExp(`^${indent}`, 'gm'), '') : normalized;
    }

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

    it('should render mermaid blocks with the real mermaid renderer', async function() {
        this.timeout(15000);

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown content={this.get('content')} />
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA[Start]-->B[Done]\n```',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('[data-kpc-mermaid="true"] svg'), 200, 50);

        const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]')!;
        expect(ready, block.textContent || block.innerHTML).to.be.true;

        const svg = block.querySelector<SVGSVGElement>('svg')!;

        expect(block.dataset.kpcRenderState).to.eql('done');
        expect(svg.getAttribute('viewBox')).not.to.eql(null);
        expect(block.querySelector('.k-xmarkdown-mermaid-error')).to.eql(null);
    });

    it('should render mermaid pie charts with quoted non-ascii labels', async function() {
        this.timeout(15000);

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown content={this.get('content')} />
            `;

            static defaults() {
                return {
                    content: markdown(`
                        \`\`\`mermaid
                        pie
                            "传媒及文化相关" : 35
                            "广告与市场营销" : 8
                            "游戏开发" : 15
                            "影视动画与特效" : 12
                            "互联网产品设计" : 10
                            "VR/AR开发" : 5
                            "其他" : 15
                        \`\`\`
                    `),
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('[data-kpc-mermaid="true"] svg'), 200, 50);

        const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]')!;
        expect(ready, block.textContent || block.innerHTML).to.be.true;

        expect(block.dataset.kpcRenderState).to.eql('done');
        expect(block.querySelector('.k-xmarkdown-mermaid-error')).to.eql(null);
        expect(block.textContent).not.to.contain('__name');
    });

    it('should reset mermaid theme state when custom mermaidConfig is removed', async function() {
        this.timeout(20000);

        const erSource = 'erDiagram\nCUSTOMER ||--o{ ORDER : places\nORDER ||--|{ ORDER_ITEM : contains\nPRODUCT ||--o{ ORDER_ITEM : includes';

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
                    content: `\`\`\`mermaid\n${erSource}\n\`\`\``,
                    mermaidConfig: {
                        theme: 'base',
                        themeVariables: {
                            primaryColor: '#e8f3ff',
                            primaryBorderColor: '#1677ff',
                            primaryTextColor: '#244055',
                            lineColor: '#1677ff',
                            secondaryColor: '#fff7e8',
                            tertiaryColor: '#f6fbff',
                        },
                    },
                };
            }

            XMarkdown = XMarkdown;

            useDefaultTheme() {
                (this as any).set('mermaidConfig', undefined);
            }
        }

        const [instance, element] = mount(Demo);
        const brandedReady = await waitFor(() => {
            const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]');
            return !!block
                && block.dataset.kpcRenderState === 'done'
                && !!block.querySelector('svg')
                && block.innerHTML.includes('#1677ff');
        }, 200, 50);

        expect(brandedReady, element.innerHTML).to.be.true;

        instance.useDefaultTheme();

        const defaultReady = await waitFor(() => {
            const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]');
            return !!block
                && block.dataset.kpcRenderState === 'done'
                && !!block.querySelector('svg')
                && block.innerHTML.includes('#9370DB')
                && !block.innerHTML.includes('#1677ff')
                && !block.innerHTML.includes('#e8f3ff');
        }, 200, 50);

        const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]')!;
        expect(defaultReady, block.innerHTML).to.be.true;
    });

    const mermaidDiagramCases = [
        {
            name: 'sequence',
            source: 'sequenceDiagram\nparticipant User\nparticipant Bot\nUser->>Bot: 你好\nBot-->>User: 已收到',
        },
        {
            name: 'class',
            source: 'classDiagram\nclass Message {\n  +string role\n  +string content\n}\nMessage <|-- UserMessage',
        },
        {
            name: 'state',
            source: 'stateDiagram-v2\n[*] --> Thinking\nThinking --> Answering\nAnswering --> [*]',
        },
        {
            name: 'er',
            source: 'erDiagram\nUSER ||--o{ MESSAGE : sends\nMESSAGE {\n  string content\n  datetime createdAt\n}',
        },
        {
            name: 'gantt',
            source: 'gantt\ndateFormat  YYYY-MM-DD\nsection Plan\n需求分析 :done, des1, 2026-01-01, 2d\n实现验证 :active, des2, after des1, 3d',
        },
        {
            name: 'journey',
            source: 'journey\ntitle Assistant flow\nsection Ask\n输入问题: 5: User\nsection Answer\n生成回复: 4: Bot',
        },
        {
            name: 'gitGraph',
            source: 'gitGraph\ncommit id: "init"\nbranch feature\ncheckout feature\ncommit id: "ai"\ncheckout main\nmerge feature',
        },
        {
            name: 'mindmap',
            source: 'mindmap\n  root((AI 对话))\n    需求\n    推理\n    回复',
        },
        {
            name: 'timeline',
            source: 'timeline\n    title Release\n    2026-01-01 : Plan\n    2026-01-05 : Build\n    2026-01-08 : Ship',
        },
        {
            name: 'quadrant',
            source: 'quadrantChart\ntitle 优先级\nx-axis Low --> High\ny-axis Low --> High\n功能A: [0.8, 0.7]\n功能B: [0.3, 0.4]',
        },
        {
            name: 'xychart',
            source: 'xychart-beta\ntitle "响应趋势"\nx-axis [Mon, Tue, Wed]\ny-axis "ms" 0 --> 100\nline [30, 45, 40]',
        },
        {
            name: 'requirement',
            source: 'requirementDiagram\nrequirement test_req {\n  id: 1\n  text: render markdown diagrams\n  risk: low\n  verifymethod: test\n}\nelement xmarkdown {\n  type: component\n}\nxmarkdown - satisfies -> test_req',
        },
        {
            name: 'c4',
            source: 'C4Context\ntitle System Context\nPerson(user, "User")\nSystem(app, "AI App")\nRel(user, app, "Uses")',
        },
        {
            name: 'sankey',
            source: 'sankey\nPrompt,Reasoning,10\nReasoning,Answer,8\nPrompt,Tool Call,2',
        },
        {
            name: 'block',
            source: 'block\ncolumns 3\nInput space Process\nInput --> Process\nProcess --> Output',
        },
        {
            name: 'packet',
            source: 'packet\n0-15: "Source Port"\n16-31: "Destination Port"\n32-63: "Sequence Number"',
        },
        {
            name: 'kanban',
            source: 'kanban\ntodo[Todo]\n  draft[Draft answer]\ndone[Done]\n  ship[Send response]',
        },
        {
            name: 'info',
            source: 'info',
        },
        {
            name: 'flowchart styled',
            source: 'flowchart TD\nA[用户输入] --> B{需要工具?}\nB -- 是 --> C[调用 API]\nB -- 否 --> D[直接回答]\nclassDef focus fill:#e8f3ff,stroke:#1677ff,color:#244055;\nclass A,C focus\nstyle D fill:#fff7e8,stroke:#faad14',
        },
        {
            name: 'sequence activation',
            source: 'sequenceDiagram\nautonumber\nparticipant User as 用户\nparticipant Bot as Assistant\nUser->>Bot: 生成总结\nactivate Bot\nBot-->>User: 流式返回\ndeactivate Bot',
        },
        {
            name: 'gantt detailed',
            source: 'gantt\ntitle 发布计划\ndateFormat  YYYY-MM-DD\nexcludes weekends\nsection 研发\n接入 Mermaid 11 :crit, active, dev, 2026-01-01, 3d\n回归测试 :test, after dev, 2d\nsection 发布\n灰度发布 :milestone, 2026-01-08, 0d',
        },
        {
            name: 'sankey spaced labels',
            source: 'sankey\nUser Input,Reasoning Stage,10\nReasoning Stage,Final Answer,8\nUser Input,Tool Call,2',
        },
        {
            name: 'block styled',
            source: 'block\ncolumns 4\nInput["输入"] space:1 Process["处理"] Output["输出"]\nInput --> Process\nProcess --> Output\nclassDef focus fill:#e8f3ff,stroke:#1677ff;\nclass Input,Process focus',
        },
        {
            name: 'kanban shaped',
            source: 'kanban\ntodo[Todo]\n  draft[Draft answer]\ndoing[Doing]\n  analyze((Analyze))\ndone[Done]\n  ship(Done)',
        },
        {
            name: 'c4 container boundary',
            source: 'C4Container\ntitle AI Chat\nPerson(user, "User")\nSystem_Boundary(chat, "AI Chat") {\n  Container(ui, "Web UI", "React")\n  Container(api, "API", "Node")\n}\nRel(user, ui, "Uses")\nRel(ui, api, "Calls")',
        },
    ];

    mermaidDiagramCases.forEach((item) => {
        it(`should render mermaid ${item.name} diagrams with the real mermaid renderer`, async function() {
            this.timeout(20000);

            class Demo extends Component<{content: string}> {
                static template = `
                    const { XMarkdown } = this;
                    <XMarkdown content={this.get('content')} />
                `;

                static defaults() {
                    return {
                        content: `\`\`\`mermaid\n${item.source}\n\`\`\``,
                    };
                }

                XMarkdown = XMarkdown;
            }

            const [, element] = mount(Demo);

            const ready = await waitFor(() => {
                const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]');
                const source = block?.querySelector<HTMLElement>('.k-xmarkdown-mermaid-source code')?.textContent || '';
                return !!block
                    && block.dataset.kpcRenderState === 'done'
                    && source.includes(item.source.split('\n')[0])
                    && !!block.querySelector('svg')
                    && !block.querySelector('.k-xmarkdown-mermaid-error');
            }, 200, 50);

            const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]')!;
            expect(ready, `${item.name}: ${block.textContent || block.innerHTML}`).to.be.true;
            expect(block.textContent, item.name).not.to.contain('__name');
        });
    });

    it('should render mermaid blocks, support zoom controls and toggle source view', async () => {
        sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'parse').resolves(true as any);
        const render = sinon.stub(mermaid, 'render').resolves({svg: '<svg class="mock-mermaid" viewBox="0 0 200 120"><text>diagram</text></svg>' as any} as any);

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
        expect(render.firstCall.args[0]).to.match(/^kpc-xmarkdown-mermaid-[a-z0-9]+-xmarkdown-block-0$/);
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

        dispatchEvent(diagramToggle, 'click');
        await wait(20);

        expect(block.dataset.kpcView).to.eql('diagram');
        expect(Number(block.dataset.kpcScale)).to.eql(Number(block.dataset.kpcInitialScale));
        expect(block.querySelector<SVGSVGElement>('svg')!.getBoundingClientRect().width).to.be.greaterThan(100);
    });

    it('should keep mermaid viewport at the fixed canvas height while fitting the diagram initially', async () => {
        sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'parse').resolves(true as any);
        sinon.stub(mermaid, 'render').resolves({svg: '<svg class="mock-mermaid-compact" viewBox="0 0 200 120"><text>diagram</text></svg>' as any} as any);

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <div style="width: 1200px;">
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
        const ready = await waitFor(() => !!element.querySelector('.mock-mermaid-compact'));

        expect(ready).to.be.true;

        const canvas = element.querySelector<HTMLElement>('.k-xmarkdown-mermaid-canvas')!;
        const viewport = element.querySelector<HTMLElement>('.k-xmarkdown-mermaid-viewport')!;
        const svg = element.querySelector<SVGSVGElement>('.k-xmarkdown-mermaid-stage svg')!;

        expect(getComputedStyle(canvas).backgroundColor).to.eql('rgb(255, 255, 255)');
        expect(getComputedStyle(canvas).backgroundImage).to.eql('none');
        expect(getComputedStyle(viewport).backgroundColor).to.eql('rgb(255, 255, 255)');
        expect(getComputedStyle(viewport).backgroundImage).to.eql('none');
        expect(Math.round(viewport.getBoundingClientRect().height)).to.eql(320);
        expect(svg.getBoundingClientRect().height).to.be.lessThan(320);
        expect(viewport.dataset.kpcCanDrag).to.eql('false');
        expect(viewport.dataset.kpcScrollX).to.eql('false');
        expect(viewport.dataset.kpcScrollY).to.eql('false');
        expect(getComputedStyle(viewport).overflowX).to.eql('hidden');
        expect(getComputedStyle(viewport).overflowY).to.eql('hidden');
        expect(viewport.scrollHeight).to.eql(viewport.clientHeight);
        expect(viewport.scrollWidth).to.eql(viewport.clientWidth);
    });

    it('should show only the needed mermaid scrollbar direction after zooming in', async () => {
        sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'parse').resolves(true as any);
        sinon.stub(mermaid, 'render').resolves({svg: '<svg class="mock-mermaid-wide" viewBox="0 0 900 120"><text>wide</text></svg>' as any} as any);

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <div style="width: 460px;">
                    <XMarkdown content={this.get('content')} />
                </div>
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart LR\nA-->B\n```',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.mock-mermaid-wide'));

        expect(ready).to.be.true;

        const viewport = element.querySelector<HTMLElement>('.k-xmarkdown-mermaid-viewport')!;
        const zoomIn = element.querySelector<HTMLElement>('[data-kpc-action="zoom-mermaid-in"]')!;

        expect(viewport.dataset.kpcCanDrag).to.eql('false');
        expect(viewport.dataset.kpcScrollX).to.eql('false');
        expect(viewport.dataset.kpcScrollY).to.eql('false');

        dispatchEvent(zoomIn, 'click');
        await wait(20);

        expect(viewport.dataset.kpcCanDrag).to.eql('true');
        expect(viewport.dataset.kpcScrollX).to.eql('true');
        expect(viewport.dataset.kpcScrollY).to.eql('false');
        expect(getComputedStyle(viewport).overflowX).to.eql('auto');
        expect(getComputedStyle(viewport).overflowY).to.eql('hidden');
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
        sinon.stub(mermaid, 'parse').resolves(true as any);
        sinon.stub(mermaid, 'render').resolves({svg: '<svg class="mock-mermaid-config" viewBox="0 0 200 120"><text>diagram</text></svg>' as any} as any);

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
        expect(initialize.firstCall.args[0].suppressErrorRendering).to.be.true;
        expect(initialize.firstCall.args[0].theme).to.eql('base');
        expect(initialize.firstCall.args[0].themeVariables.primaryColor).to.eql('#fff4cc');
    });

    it('should rerender mermaid when mermaidConfig changes', async () => {
        const initialize = sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'parse').resolves(true as any);
        const render = sinon.stub(mermaid, 'render').resolves({svg: '<svg class="mock-mermaid-update-config" viewBox="0 0 200 120"><text>diagram</text></svg>' as any} as any);

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
        expect(render.callCount).to.eql(1);
        expect(initialize.firstCall.args[0].themeVariables.primaryColor).to.eql('#e8f3ff');

        instance.updateConfig();

        const rerendered = await waitFor(() => initialize.callCount === 2 && render.callCount === 2, 60, 20);

        expect(rerendered).to.be.true;
        expect(initialize.secondCall.args[0].themeVariables.primaryColor).to.eql('#fff4cc');
    });

    it('should generate different mermaid render ids for sibling markdown instances with same content', async () => {
        sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'parse').resolves(true as any);
        const render = sinon.stub(mermaid, 'render').resolves({svg: '<svg class="mock-mermaid-duplicate" viewBox="0 0 200 120"><text>diagram</text></svg>' as any} as any);

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
        expect(render.callCount).to.eql(2);

        const renderIds = render.args.map((args: any[]) => args[0]);
        expect(renderIds[0]).to.not.eql(renderIds[1]);
        const firstMatch = /^kpc-xmarkdown-mermaid-([a-z0-9]+)-xmarkdown-block-0$/.exec(renderIds[0]);
        expect(firstMatch).to.not.eql(null);
        expect(renderIds[1]).to.eql(`kpc-xmarkdown-mermaid-${firstMatch![1]}-1-xmarkdown-block-0`);
    });

    it('should render complex mermaid demo content with lightweight stubbed output', async () => {
        sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'parse').resolves(true as any);
        const render = sinon.stub(mermaid, 'render').resolves({svg: '<svg class="mock-mermaid-demo" viewBox="0 0 320 180"><text>demo</text></svg>' as any} as any);

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
        expect(render.calledOnce).to.be.true;
        expect(render.firstCall.args[1]).to.contain('A[需求输入] --> B{方案评审}');
        expect(render.firstCall.args[1]).to.contain('G --> H');
        expect(block.querySelector('.k-xmarkdown-code-language')!.textContent).to.eql('Mermaid');
        expect(block.querySelector('[data-kpc-action="copy-mermaid"]')).not.to.eql(null);
        expect(block.querySelector('.k-xmarkdown-mermaid-source code')!.textContent).to.contain('组件设计');
    });

    it('should skip invalid mermaid frames while streaming', async () => {
        sinon.stub(mermaid, 'initialize');
        const parse = sinon.stub(mermaid, 'parse');
        parse.onFirstCall().resolves(false as any);
        parse.onSecondCall().resolves(true as any);
        const render = sinon.stub(mermaid, 'render').resolves({svg: '<svg class="mock-mermaid-streaming" viewBox="0 0 200 120"><text>diagram</text></svg>' as any} as any);

        class Demo extends Component<{content: string; streaming: boolean; errorCount: number}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    streaming={this.get('streaming')}
                    ev-mermaidError={() => this.set('errorCount', this.get('errorCount') + 1)}
                />
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->\n```',
                    streaming: true,
                    errorCount: 0,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const skipped = await waitFor(() => parse.calledOnce);

        expect(skipped).to.be.true;
        expect(render.called).to.be.false;
        expect(element.querySelector('[data-kpc-mermaid-stage="true"] svg')).to.eql(null);
        expect(element.querySelector('.k-xmarkdown-mermaid-error')).to.eql(null);
        expect(instance.get('errorCount')).to.eql(0);

        instance.set({
            content: '```mermaid\nflowchart TD\nA-->B\n```',
            streaming: false,
        });

        const rendered = await waitFor(() => !!element.querySelector('.mock-mermaid-streaming'));
        expect(rendered).to.be.true;
        expect(render.calledOnce).to.be.true;
        expect(instance.get('errorCount')).to.eql(0);
    });

    it('should keep mermaid error rendering suppressed while streaming', async () => {
        sinon.stub(mermaid, 'initialize');
        const parse = sinon.stub(mermaid, 'parse');
        parse.onFirstCall().resolves(false as any);
        parse.onSecondCall().resolves(true as any);
        const render = sinon.stub(mermaid, 'render')
            .resolves({svg: '<svg class="mock-mermaid-suppressed-error" viewBox="0 0 200 120"><text>diagram</text></svg>' as any} as any);

        class Demo extends Component<{content: string; streaming: boolean; errorCount: number}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    streaming={this.get('streaming')}
                    ev-mermaidError={() => this.set('errorCount', this.get('errorCount') + 1)}
                />
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->\n```',
                    streaming: true,
                    errorCount: 0,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const skipped = await waitFor(() => parse.calledOnce);

        expect(skipped).to.be.true;
        expect(render.called).to.be.false;
        expect(element.querySelector('.error-icon')).to.eql(null);
        expect(element.querySelector('.error-text')).to.eql(null);
        expect(element.querySelector('.k-xmarkdown-mermaid-error')).to.eql(null);
        expect(instance.get('errorCount')).to.eql(0);

        instance.set({
            content: '```mermaid\nflowchart TD\nA-->B\n```',
            streaming: false,
        });

        const rendered = await waitFor(() => !!element.querySelector('.mock-mermaid-suppressed-error'));
        expect(rendered).to.be.true;
        expect(render.calledOnce).to.be.true;
        expect(instance.get('errorCount')).to.eql(0);
    });

    it('should surface original mermaid parse errors after streaming completes', async () => {
        sinon.stub(mermaid, 'initialize');
        const parseError = new Error('Detailed Mermaid parse error');
        const parse = sinon.stub(mermaid, 'parse').rejects(parseError);
        const render = sinon.stub(mermaid, 'render');

        class Demo extends Component<{content: string; errorMessage: string}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    ev-mermaidError={(error) => this.set('errorMessage', error.message)}
                />
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->\n```',
                    errorMessage: '',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const errored = await waitFor(() => !!element.querySelector('.k-xmarkdown-mermaid-error'));

        expect(errored).to.be.true;
        expect(parse.firstCall.args[1].suppressErrors).to.be.false;
        expect(render.called).to.be.false;
        expect(element.querySelector('.k-xmarkdown-mermaid-error')!.textContent).to.contain('Detailed Mermaid parse error');
        expect(instance.get('errorMessage')).to.eql('Detailed Mermaid parse error');
    });

    it('should surface mermaid render errors while streaming', async () => {
        sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'parse').resolves(true as any);
        const renderError = new Error('Mermaid render failed');
        sinon.stub(mermaid, 'render').rejects(renderError);

        class Demo extends Component<{content: string; errorMessage: string}> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    streaming={true}
                    ev-mermaidError={(error) => this.set('errorMessage', error.message)}
                />
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->B\n```',
                    errorMessage: '',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const errored = await waitFor(() => !!element.querySelector('.k-xmarkdown-mermaid-error'));

        expect(errored).to.be.true;
        expect(element.querySelector('.k-xmarkdown-mermaid-error')!.textContent).to.contain('Mermaid render failed');
        expect(instance.get('errorMessage')).to.eql('Mermaid render failed');
    });

    it('should debounce mermaid renders while streaming and flush the final frame', async () => {
        const clock = sinon.useFakeTimers();
        sinon.stub(mermaid, 'initialize');
        const parse = sinon.stub(mermaid, 'parse').resolves(true as any);
        const render = sinon.stub(mermaid, 'render').callsFake((_id: string, source: string) => {
            const label = source.includes('C') ? 'final' : source.includes('B') ? 'middle' : 'first';
            return Promise.resolve({svg: `<svg class="mock-mermaid-${label}" viewBox="0 0 200 120"><text>${label}</text></svg>`} as any);
        });

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
                    content: '```mermaid\nflowchart TD\nA-->A\n```',
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        try {
            const [instance, element] = mount(Demo);

            instance.set('content', '```mermaid\nflowchart TD\nA-->B\n```');
            await Promise.resolve();
            instance.set('content', '```mermaid\nflowchart TD\nA-->C\n```');
            await Promise.resolve();

            expect(render.called).to.be.false;

            await clock.tickAsync(120);
            await wait();
            await wait();

            expect(element.querySelector('.mock-mermaid-final')).not.to.eql(null);
            expect(render.calledOnce).to.be.true;
            expect(render.firstCall.args[1]).to.contain('A-->C');
            expect(element.querySelector('.mock-mermaid-middle')).to.eql(null);

            instance.set({
                content: '```mermaid\nflowchart TD\nA-->D\n```',
                streaming: false,
            });
            await wait();
            await wait();

            expect(parse.callCount).to.eql(2);
            expect(render.callCount).to.eql(2);
            expect(render.secondCall.args[1]).to.contain('A-->D');
        } finally {
            clock.restore();
        }
    });

    it('should keep the last successful mermaid diagram visible while streaming updates are incomplete', async () => {
        sinon.stub(mermaid, 'initialize');
        const parse = sinon.stub(mermaid, 'parse');
        parse.onFirstCall().resolves(true as any);
        parse.onSecondCall().resolves(false as any);
        parse.onThirdCall().resolves(true as any);
        const render = sinon.stub(mermaid, 'render');
        render.onFirstCall().resolves({svg: '<svg class="mock-mermaid-stable" viewBox="0 0 200 120"><text>stable</text></svg>' as any} as any);
        render.onSecondCall().resolves({svg: '<svg class="mock-mermaid-next" viewBox="0 0 200 120"><text>next</text></svg>' as any} as any);

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
                    content: '```mermaid\nflowchart TD\nA-->B\n```',
                    streaming: false,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const firstReady = await waitFor(() => !!element.querySelector('.mock-mermaid-stable'));
        expect(firstReady).to.be.true;

        instance.set({
            content: '```mermaid\nflowchart TD\nA-->\n```',
            streaming: true,
        });

        const preserved = await waitFor(() => parse.callCount >= 2);
        expect(preserved).to.be.true;
        expect(render.calledOnce).to.be.true;
        expect(element.querySelector('.mock-mermaid-stable')).not.to.eql(null);
        expect(element.querySelector('.k-xmarkdown-mermaid-error')).to.eql(null);

        instance.set('content', '```mermaid\nflowchart TD\nA-->C\n```');

        const replaced = await waitFor(() => !!element.querySelector('.mock-mermaid-next'));
        expect(replaced).to.be.true;
        expect(render.calledTwice).to.be.true;
        expect(element.querySelector('.mock-mermaid-stable')).to.eql(null);
    });

    it('should refit growing mermaid diagrams while streaming without showing idle scrollbars', async () => {
        sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'parse').resolves(true as any);
        const render = sinon.stub(mermaid, 'render').callsFake((_id: string, source: string) => {
            const isLarge = source.includes('A-->C');
            return Promise.resolve({
                svg: isLarge
                    ? '<svg class="mock-mermaid-large" viewBox="0 0 720 360"><text>large</text></svg>'
                    : '<svg class="mock-mermaid-small" viewBox="0 0 200 120"><text>small</text></svg>',
            } as any);
        });

        class Demo extends Component<{content: string; streaming: boolean}> {
            static template = `
                const { XMarkdown } = this;
                <div style="width: 460px;">
                    <XMarkdown
                        content={this.get('content')}
                        streaming={this.get('streaming')}
                    />
                </div>
            `;

            static defaults() {
                return {
                    content: '```mermaid\nflowchart TD\nA-->B\n```',
                    streaming: false,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const firstReady = await waitFor(() => !!element.querySelector('.mock-mermaid-small'));
        expect(firstReady).to.be.true;

        instance.set({
            content: '```mermaid\nflowchart TD\nA-->C\n```',
            streaming: true,
        });

        const largeReady = await waitFor(() => !!element.querySelector('.mock-mermaid-large'), 200, 50);
        expect(largeReady).to.be.true;
        expect(render.calledTwice).to.be.true;

        const block = element.querySelector<HTMLElement>('[data-kpc-mermaid="true"]')!;
        const viewport = element.querySelector<HTMLElement>('.k-xmarkdown-mermaid-viewport')!;

        expect(Number(block.dataset.kpcScale)).to.eql(Number(block.dataset.kpcInitialScale));
        expect(viewport.dataset.kpcCanDrag).to.eql('false');
        expect(viewport.dataset.kpcScrollX).to.eql('false');
        expect(viewport.dataset.kpcScrollY).to.eql('false');
        expect(getComputedStyle(viewport).overflowX).to.eql('hidden');
        expect(getComputedStyle(viewport).overflowY).to.eql('hidden');
        expect(viewport.scrollHeight).to.eql(viewport.clientHeight);
        expect(viewport.scrollWidth).to.eql(viewport.clientWidth);
    });

    it('should ignore stale mermaid render results when a newer frame arrives first', async () => {
        sinon.stub(mermaid, 'initialize');
        sinon.stub(mermaid, 'parse').resolves(true as any);

        let resolveFirstRender!: (value: any) => void;
        const render = sinon.stub(mermaid, 'render');
        render.onFirstCall().returns(new Promise((resolve) => {
            resolveFirstRender = resolve;
        }) as any);
        render.onSecondCall().resolves({svg: '<svg class="mock-mermaid-fresh" viewBox="0 0 200 120"><text>fresh</text></svg>' as any} as any);

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
                    content: '```mermaid\nflowchart TD\nA-->B\n```',
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const firstStarted = await waitFor(() => render.calledOnce);
        expect(firstStarted).to.be.true;

        instance.set('content', '```mermaid\nflowchart TD\nA-->C\n```');
        resolveFirstRender({svg: '<svg class="mock-mermaid-stale" viewBox="0 0 200 120"><text>stale</text></svg>'});

        const freshRendered = await waitFor(() => !!element.querySelector('.mock-mermaid-fresh'));
        expect(freshRendered).to.be.true;
        expect(render.calledTwice).to.be.true;
        expect(element.querySelector('.mock-mermaid-stale')).to.eql(null);
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

        let hasStreamingText = false;
        for (let i = 0; i < 10; i++) {
            await wait(20);
            hasStreamingText = !!element.querySelector('[data-kpc-xmarkdown-streaming-text="true"]');
            if (hasStreamingText) break;
        }

        expect(hasStreamingText).to.be.false;
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

    it('should resume typing from previous rendered markdown after remount', async () => {
        const resumedContent = '# 标题\n\n一段稳定内容。';

        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    streaming={true}
                    typing={{interval: 16, step: 2, resumeFrom: this.get('resumedContent')}}
                />
            `;

            static defaults() {
                return {
                    resumedContent,
                    content: resumedContent,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const contentElement = element.querySelector('.k-xmarkdown-content')!;
        const initialText = contentElement.textContent || '';

        expect(initialText).to.contain('标题');
        expect(initialText).to.contain('一段稳定内容');
        expect(initialText).not.to.contain('继续生成中');

        instance.set({content: `${resumedContent}\n\n继续生成中`});
        const continued = await waitFor(() => contentElement.textContent!.includes('继续'));

        expect(continued).to.be.true;
        expect(contentElement.textContent).to.contain('继续');
    });

    it('should support content resume mode before appending new markdown text', async () => {
        class Demo extends Component<{
            content: string
        }> {
            static template = `
                const { XMarkdown } = this;
                <XMarkdown
                    content={this.get('content')}
                    streaming={true}
                    typing={{interval: 16, step: 2, resumeFrom: 'content'}}
                />
            `;

            static defaults() {
                return {
                    content: '# 标题\n\n已经渲染',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-content h1'));

        expect(ready).to.be.true;
        expect(element.querySelector('.k-xmarkdown-content')!.textContent).to.contain('已经渲染');

        instance.set('content', '# 标题\n\n已经渲染，继续生成');
        await wait(20);

        const text = element.querySelector('.k-xmarkdown-content')!.textContent || '';
        expect(text).to.contain('已经渲染');
        expect(text).not.to.contain('继续生成');
    });

    it('should reuse existing block DOM when streaming appends new blocks', async () => {
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

        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-content h1'));
        expect(ready).to.be.true;

        const body = element.querySelector('.k-xmarkdown-body')!;
        expect(body.querySelector('h1')).not.to.eql(null);

        const h1 = body.querySelector('h1')!;
        const paragraph = body.querySelector('p')!;
        (h1 as any).__kpcStableProbe = 'kept';
        (paragraph as any).__kpcStableParagraphProbe = 'kept';

        instance.set('content', '# 标题\n\n一段稳定的话。\n\n# 新标题');

        const appended = await waitFor(() => body.querySelectorAll('h1').length === 2, 30, 20);
        expect(appended).to.be.true;

        const sameH1 = body.querySelector('h1')!;
        expect((sameH1 as any).__kpcStableProbe).to.eql('kept');

        instance.set('content', '# 标题\n\n一段稳定的话。\n\n# 新标题\n\n第二段稳定的话。');

        const promoted = await waitFor(() => body.querySelectorAll('h1').length === 2, 30, 20);

        expect(promoted).to.be.true;
        expect((body.querySelector('h1') as any).__kpcStableProbe).to.eql('kept');
        expect((body.querySelector('p') as any).__kpcStableParagraphProbe).to.eql('kept');
    });

    it('should render open fenced code blocks in the normal markdown flow while streaming', async () => {
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
                    content: '上一段内容。\n\n```ts\nconst a = 1;',
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-code-block'));
        expect(ready).to.be.true;

        const codeBlock = element.querySelector<HTMLElement>('.k-xmarkdown-code-block')!;
        expect(codeBlock.textContent).to.contain('const a = 1;');
        expect(element.querySelector('.k-xmarkdown-content')!.textContent).not.to.contain('```ts');
    });

    it('should progressively fill table cells while streaming a new row', async () => {
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
                    content: markdown(`
                        | A | B | C |
                        | --- | --- | --- |
                        | 1 |
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const ready = await waitFor(() => {
            const cells = element.querySelectorAll<HTMLElement>('.k-xmarkdown-table-wrap td');
            return cells.length === 3 && cells[0].textContent === '1';
        });
        expect(ready).to.be.true;

        instance.set('content', markdown(`
            | A | B | C |
            | --- | --- | --- |
            | 1 | 2
        `));

        const filled = await waitFor(() => {
            const cells = element.querySelectorAll<HTMLElement>('.k-xmarkdown-table-wrap td');
            return cells.length === 3 && cells[1].textContent === '2';
        });

        expect(filled).to.be.true;
        expect(element.textContent).not.to.contain('| 1 | 2');

        instance.set('content', markdown(`
            | A | B | C |
            | --- | --- | --- |
            | 1 | 2 | 3 |

            下一段内容。
        `));

        const promoted = await waitFor(() => {
            const cells = element.querySelectorAll<HTMLElement>('.k-xmarkdown-table-wrap td');
            return cells.length === 3 && cells[2].textContent === '3';
        });

        expect(promoted).to.be.true;
    });

    it('should render streaming table snapshots from a full markdown answer', async () => {
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
                    content: markdown(`
                        # 服务方案推荐

                        下面是一段模型生成的多段 Markdown 回复。

                        ## 基础服务
                        | 服务 | 核心能力 |
                        | --- | --- |
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const tailTableReady = await waitFor(() => {
            const headers = element.querySelectorAll<HTMLElement>('.k-xmarkdown-table-wrap th');
            return headers.length === 2 && headers[0].textContent === '服务';
        });
        expect(tailTableReady).to.be.true;
        expect(element.textContent).not.to.contain('| 服务 | 核心能力');

        instance.set('content', markdown(`
            # 服务方案推荐

            下面是一段模型生成的多段 Markdown 回复。

            ## 基础服务
            | 服务 | 核心能力 | 适用场景 |
            | :--- | :--- | :--- |
            | 通用计算 | 弹性扩缩容，按需付费 | Web 应用、后台任务 |
            | 对象存储 | 海量文件存储，多副本冗余 | 图片、日志、备份 |

            ## 数据服务
            | 服务 | 核心能力 | 适用场景 |
            | :--- | :--- | :--- |
            | 关系数据库 | 事务一致性，自动备份 | 订单、账户、管理系统 |
            | 缓存服务 | 低延迟访问，高并发读写 | 热点数据、会话状态 |

            以上方案可以按业务阶段组合使用。
        `));

        const stableTableReady = await waitFor(() => {
            const cells = element.querySelectorAll<HTMLElement>('.k-xmarkdown-table-wrap td');
            return cells.length >= 12 && cells[6].textContent === '关系数据库';
        });

        expect(stableTableReady).to.be.true;
    });

    it('should render active streaming table with the normal markdown renderer', async () => {
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
                    content: markdown(`
                        ### 产品推荐

                        > 这里是一段模型输出的说明文字。

                        ### 关系型产品
                        | 产品 | 核心特点 | 典型适用场景 |
                        | :--- | :--- | :--- |
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        await wait(40);

        const headers = element.querySelectorAll<HTMLElement>('.k-xmarkdown-table-wrap th');
        expect(headers.length).to.eql(3);
        expect(headers[0].textContent).to.eql('产品');
        expect(element.textContent).not.to.contain('| 产品 | 核心特点 |');

        instance.set('content', markdown(`
            ### 产品推荐

            > 这里是一段模型输出的说明文字。

            ### 关系型产品
            | 产品 | 核心特点 | 典型适用场景 |
            | :--- | :--- | :--- |
            | **云数据库 MySQL** | 完全兼容 MySQL，高可用架构，支持自动备份与恢复 | 企业应用、电商业务、Web 站点 |
        `));

        const ready = await waitFor(() => {
            const cells = element.querySelectorAll<HTMLElement>('.k-xmarkdown-table-wrap td');
            const strong = element.querySelector<HTMLElement>('.k-xmarkdown-table-wrap td strong');
            return cells.length === 3 && strong?.textContent === '云数据库 MySQL';
        });

        expect(ready).to.be.true;
        expect(element.textContent).not.to.contain('| **云数据库 MySQL** |');
    });

    it('should keep plain pipe-prefixed text as text before a new table separator arrives', async () => {
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
                    content: markdown(`
                        | 能力 | 状态 | 说明 |
                        | --- | --- | --- |
                        | 标题 | 已支持 | 支持 H1-H6 |
                        | 代码块 | 已支持 | 默认支持语言头和复制 |

                        | 阶段
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => {
            return element.querySelectorAll('.k-xmarkdown-table-wrap').length === 1
                && element.querySelector('.k-xmarkdown-content')!.textContent!.includes('| 阶段');
        });

        expect(ready).to.be.true;
    });

    it('should keep an incomplete table body row inside the normal table rendering', async () => {
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
                    content: markdown(`
                        ### 方案清单
                        | 名称 | 推荐 |
                        | --- | --- |
                        | 方案一
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => {
            const cells = element.querySelectorAll<HTMLElement>('.k-xmarkdown-table-wrap td');
            return cells.length === 2 && cells[0].textContent === '方案一';
        });

        expect(ready).to.be.true;
        expect(element.textContent).not.to.contain('| 方案一');
    });

    it('should render inline markdown inside streaming table cells', async () => {
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
                    content: markdown(`
                        | 产品 | 状态 |
                        | --- | --- |
                        | **云数据库 MySQL** | \`ready\`
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => {
            const strong = element.querySelector<HTMLElement>('.k-xmarkdown-table-wrap td strong');
            const code = element.querySelector<HTMLElement>('.k-xmarkdown-table-wrap td code');
            return strong?.textContent === '云数据库 MySQL' && code?.textContent === 'ready';
        });

        expect(ready).to.be.true;
        expect(element.textContent).not.to.contain('**云数据库 MySQL**');
    });

    it('should keep spacing before a streaming table block', async () => {
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
                    content: markdown(`
                        ### 关系型数据库
                        | 产品 | 核心特点 |
                        | --- | --- |
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-body > .k-xmarkdown-table-wrap'));
        expect(ready).to.be.true;

        const tableWrap = element.querySelector<HTMLElement>('.k-xmarkdown-body > .k-xmarkdown-table-wrap')!;
        const tableStyle = getComputedStyle(tableWrap);
        expect(tableStyle.display).to.eql('block');
        expect(tableStyle.marginTop).to.eql('0px');
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

        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-content h1'));
        expect(ready).to.be.true;

        const body = element.querySelector('.k-xmarkdown-body')!;

        const firstHeading = body.querySelector('h1')!;
        const firstParagraph = body.querySelector('p')!;
        (firstHeading as any).__kpcFirstStableHeading = 'kept';
        (firstParagraph as any).__kpcFirstStableParagraph = 'kept';

        instance.set('content', '# 标题\n\n第一段稳定内容。\n\n# 第二个标题');

        const firstAppendReady = await waitFor(() => body.querySelectorAll('h1').length === 2, 30, 20);
        expect(firstAppendReady).to.be.true;

        instance.set('content', '# 标题\n\n第一段稳定内容。\n\n# 第二个标题\n\n第二段稳定内容。\n\n');

        const firstPromotionReady = await waitFor(() => body.querySelectorAll('h1').length === 2, 30, 20);
        expect(firstPromotionReady).to.be.true;
        expect((body.querySelector('h1') as any).__kpcFirstStableHeading).to.eql('kept');
        expect((body.querySelector('p') as any).__kpcFirstStableParagraph).to.eql('kept');

        const secondHeading = body.querySelectorAll('h1')[1] as HTMLElement;
        const secondParagraph = body.querySelectorAll('p')[1] as HTMLElement;
        (secondHeading as any).__kpcSecondStableHeading = 'kept';
        (secondParagraph as any).__kpcSecondStableParagraph = 'kept';

        instance.set('content', '# 标题\n\n第一段稳定内容。\n\n# 第二个标题\n\n第二段稳定内容。\n\n## 第三个标题');

        const secondAppendReady = await waitFor(() => body.querySelectorAll('h2').length === 1, 30, 20);
        expect(secondAppendReady).to.be.true;

        instance.set('content', '# 标题\n\n第一段稳定内容。\n\n# 第二个标题\n\n第二段稳定内容。\n\n## 第三个标题\n\n第三段稳定内容。');

        const secondPromotionReady = await waitFor(() => body.querySelectorAll('h1').length === 2
            && body.querySelectorAll('h2').length === 1, 30, 20);

        expect(secondPromotionReady).to.be.true;
        expect((body.querySelector('h1') as any).__kpcFirstStableHeading).to.eql('kept');
        expect((body.querySelector('p') as any).__kpcFirstStableParagraph).to.eql('kept');
        expect((body.querySelectorAll('h1')[1] as any).__kpcSecondStableHeading).to.eql('kept');
        expect((body.querySelectorAll('p')[1] as any).__kpcSecondStableParagraph).to.eql('kept');
    });

    it('should render typing suffix only when enabled', async () => {
        class Demo extends Component {
            static template = `
                const { XMarkdown } = this;
                <div>
                    <XMarkdown
                        className="suffix-enabled"
                        content={this.get('content')}
                        streaming={true}
                        typing={{interval: 16, step: 2, suffix: true}}
                    />
                    <XMarkdown
                        className="suffix-default"
                        content={this.get('content')}
                        streaming={true}
                        typing={{interval: 16, step: 2}}
                    />
                </div>
            `;

            static defaults() {
                return {
                    content: '# 标题\n\n一段内容',
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        await waitFor(() => !!element.querySelector('.suffix-enabled .k-xmarkdown-typing-suffix'));

        expect(element.querySelector('.suffix-enabled .k-xmarkdown-typing-suffix')!.querySelectorAll('span').length).to.eql(3);
        expect(element.querySelector('.suffix-default .k-xmarkdown-typing-suffix')).to.eql(null);
    });

    it('should keep unclosed block-level formula as trailing text during streaming', async () => {
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

        const ready = await waitFor(() => !!element.querySelector('.k-xmarkdown-content h1'));
        expect(ready).to.be.true;

        const body = element.querySelector('.k-xmarkdown-body')!;
        expect(body.querySelector('h1')).not.to.eql(null);
        expect(body.textContent).to.contain('$$');
        expect(body.querySelector('[data-kpc-xmarkdown-streaming-text="true"]')).not.to.eql(null);

        instance.set('content', '# 标题\n\n$$\n\\operatorname{score}(x)=\\sum_{i=1}^{n}\n$$');

        const formulaRendered = await waitFor(() => {
            return !body.querySelector('[data-kpc-xmarkdown-streaming-text="true"]')
                && !!element.querySelector('.katex');
        }, 60, 20);

        expect(formulaRendered).to.be.true;
    });

    it('should keep streaming formulas out of the main markdown source until they close', () => {
        const result = resolveStreamingRenderResult('# 标题\n\n$$\na + b', {
            enableFormula: true,
        });

        expect(result.source).to.eql('# 标题\n\n');
        expect(result.trailingNodes.length).to.be.greaterThan(0);
    });

    it('should keep incomplete inline content inside streaming blockquote', async () => {
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
                    content: markdown(`
                        > 📌 云服务提供关系型数据库、分布式数据库、
                        **NoS
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const ready = await waitFor(() => {
            const blockquote = element.querySelector<HTMLElement>('.k-xmarkdown-content blockquote');
            return !!blockquote && blockquote.textContent!.includes('**NoS');
        });

        expect(ready).to.be.true;
        expect(element.querySelector('blockquote')!.textContent).to.contain('**NoS');

        instance.set('content', markdown(`
            > 📌 云服务提供关系型数据库、分布式数据库、
            **NoSQL 数据库** 等多种类型
        `));

        const promoted = await waitFor(() => {
            const strong = element.querySelector<HTMLElement>('.k-xmarkdown-content blockquote strong');
            return strong?.textContent === 'NoSQL 数据库';
        });

        expect(promoted).to.be.true;
    });

    it('should keep incomplete inline content inside a single-line streaming blockquote', async () => {
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
                    content: markdown(`
                        > 📌 金山云提供 **关
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const ready = await waitFor(() => {
            const blockquote = element.querySelector<HTMLElement>('.k-xmarkdown-content blockquote');
            return !!blockquote && blockquote.textContent!.includes('**关');
        });

        expect(ready).to.be.true;
        expect(element.textContent).not.to.contain('\n*');

        instance.set('content', markdown(`
            > 📌 金山云提供 **关系型数据库**
        `));

        const promoted = await waitFor(() => {
            const strong = element.querySelector<HTMLElement>('.k-xmarkdown-content blockquote strong');
            return strong?.textContent === '关系型数据库';
        });

        expect(promoted).to.be.true;
    });

    it('should keep incomplete inline content inside streaming list items', async () => {
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
                    content: markdown(`
                        1. **关
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const ready = await waitFor(() => {
            const listItem = element.querySelector<HTMLElement>('.k-xmarkdown-content li');
            return !!listItem && listItem.textContent!.includes('**关');
        });

        expect(ready).to.be.true;

        instance.set('content', markdown(`
            1. **关系型数据库**
        `));

        const promoted = await waitFor(() => {
            const strong = element.querySelector<HTMLElement>('.k-xmarkdown-content li strong');
            return strong?.textContent === '关系型数据库';
        });

        expect(promoted).to.be.true;
    });

    it('should keep incomplete inline content inside lazy continuation list paragraphs', async () => {
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
                    content: markdown(`
                        1. 第一段

                           第二段里有 **关
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const ready = await waitFor(() => {
            const paragraphs = element.querySelectorAll<HTMLElement>('.k-xmarkdown-content li p');
            return paragraphs.length >= 2 && paragraphs[1].textContent!.includes('**关');
        });

        expect(ready).to.be.true;

        instance.set('content', markdown(`
            1. 第一段

               第二段里有 **关系型数据库**
        `));

        const promoted = await waitFor(() => {
            const strong = element.querySelector<HTMLElement>('.k-xmarkdown-content li p strong');
            return strong?.textContent === '关系型数据库';
        });

        expect(promoted).to.be.true;
    });

    it('should keep incomplete inline content inside streaming table cells', async () => {
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
                    content: markdown(`
                        | 产品 | 状态 |
                        | --- | --- |
                        | **云数据库 Postgr
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [instance, element] = mount(Demo);
        const ready = await waitFor(() => {
            const cell = element.querySelector<HTMLElement>('.k-xmarkdown-table-wrap td');
            return !!cell && cell.textContent!.includes('**云数据库 Postgr');
        });

        expect(ready).to.be.true;
        expect(element.textContent).not.to.contain('\n**云数据库 Postgr');

        instance.set('content', markdown(`
            | 产品 | 状态 |
            | --- | --- |
            | **云数据库 PostgreSQL** | ` + '`ready`' + `
        `));

        const promoted = await waitFor(() => {
            const strong = element.querySelector<HTMLElement>('.k-xmarkdown-table-wrap td strong');
            const code = element.querySelector<HTMLElement>('.k-xmarkdown-table-wrap td code');
            return strong?.textContent === '云数据库 PostgreSQL' && code?.textContent === 'ready';
        });

        expect(promoted).to.be.true;
    });

    it('should keep plain pipe-prefixed text as paragraph text instead of rendering a table', async () => {
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
                    content: markdown(`
                        ### 命令输出
                        | grep service.log
                    `),
                    streaming: true,
                };
            }

            XMarkdown = XMarkdown;
        }

        const [, element] = mount(Demo);
        const ready = await waitFor(() => {
            return element.querySelector('.k-xmarkdown-content')!.textContent!.includes('| grep service.log');
        });

        expect(ready).to.be.true;
        expect(element.querySelector('.k-xmarkdown-table-wrap')).to.eql(null);
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
        expect(Array.from(element.querySelector('.k-xmarkdown-body')!.children).map((item) => item.tagName.toLowerCase()))
            .to.eql(['h1', 'section', 'div', 'p']);
        expect(element.querySelector('.k-xmarkdown-body p:empty')).to.eql(null);

        const link = element.querySelector<HTMLAnchorElement>('.xmarkdown-enhanced-link')!;
        expect(link.getAttribute('data-track')).to.eql('demo-link');
        expect(link.getAttribute('target')).to.eql('_blank');
        expect(link.getAttribute('rel')).to.eql('noopener noreferrer');
    });

    it('should support codeBlockRenderers for code blocks and mermaid blocks', async () => {
        const initialize = sinon.stub(mermaid, 'initialize');
        const render = sinon.stub(mermaid, 'render');
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
        expect(render.called).to.be.false;
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
