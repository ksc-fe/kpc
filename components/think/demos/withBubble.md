---
title: 与 Bubble 组合
order: 4
---

可以将 `Think` 通过 `Bubble` 的 `beforeContent` 插槽插入到头像/角色名和正文之间，模拟真实的深度思考流式输出场景。

```vdt
import {Bubble, Think, Button, XMarkdown} from 'kpc';

<div class="think-demo-with-bubble">
    <div class="think-demo-with-bubble-actions">
        <Button ev-click={this.startStreaming}>开始流式思考</Button>
        <Button ev-click={this.reset}>重置</Button>
    </div>
    <Bubble
        avatar={true}
        roleName="AI 助手"
        streaming={this.get('streaming')}
        typing={true}
        loading={this.get('loading') && !this.get('thinkingContent')}
        variant="plain"
    >
        <b:beforeContent>
            <Think v-if={this.get('hasThinking')}
                title={this.get('thinkingTitle')}
                content={this.get('thinkingContent')}
                loading={this.get('thinking')}
                blink={this.get('thinking')}
                v-model:expanded="thinkExpanded"
            />
        </b:beforeContent>
        <b:content>
            <XMarkdown
                content={this.get('answer')}
                streaming={this.get('streaming')}
                loading={false}
                typing={{interval: 20, step: 3}}
            />
        </b:content>
    </Bubble>
</div>
```

```styl
.think-demo-with-bubble
    display flex
    flex-direction column
    gap 12px

.think-demo-with-bubble-actions
    display flex
    justify-content flex-start
    gap 8px

.think-demo-with-bubble-extra
    color #6b7280
    font-size 12px
```

```vue-script
mounted() {
    this.startStreaming();
},
```

```ts
import {bind} from 'kpc';

interface Props {
    loading: boolean
    hasThinking: boolean
    thinking: boolean
    thinkExpanded: boolean | undefined
    thinkingTitle: string
    thinkingContent: string
    answer: string
    streaming: boolean
}

// 深度思考内容
const thinkingChunks = [
    '用户询问关于 DeepSeek 的发展现状和前景评估，',
    '首先需要分析其技术路线：采用混合专家模型架构，',
    '在保持性能的同时有效降低了推理成本，',
    '开源版本已经支持多轮对话、代码生成等核心功能。',
    '',
    '从技术影响力来看，',
    '它在开源社区获得了较高的关注度，',
    '开发者可以直接部署使用，降低入门门槛。',
    '',
    '从应用场景分析，',
    '适合企业内部知识库、代码助手、',
    '以及需要低成本推理的场景。',
    '',
    '总结建议：',
    '可以持续关注并尝试使用，',
    '特别是在成本敏感的场景下具有明显优势。'
];

// 最终回答
const answerChunks = [
    '经过深入分析，我认为 DeepSeek 目前仍然值得关注，尤其是在开源生态和成本效率方面具有明显竞争力。',
    '',
    '**技术优势**：',
    '- 采用先进的混合专家模型架构',
    '- 推理成本显著低于同类产品',
    '- 开源版本功能完整，文档完善',
    '',
    '**应用建议**：',
    '- 适合企业内部部署使用',
    '- 可作为代码助手和知识库助手的基础模型',
    '- 在成本敏感的应用场景下优先考虑'
];

export default class extends Component<Props> {
    static template = template;

    private thinkingTimer: number | null = null;
    private answerTimer: number | null = null;

    static defaults() {
        return {
            loading: true,
            hasThinking: false,
            thinking: false,
            thinkExpanded: true,
            thinkingTitle: '',
            thinkingContent: '',
            answer: '',
            streaming: false,
        };
    }

    mounted() {
        this.startStreaming();
    }

    beforeUnmount() {
        this.clear();
    }

    clear() {
        if (this.thinkingTimer) {
            clearTimeout(this.thinkingTimer);
            this.thinkingTimer = null;
        }
        if (this.answerTimer) {
            clearTimeout(this.answerTimer);
            this.answerTimer = null;
        }
    }

    @bind
    startStreaming() {
        this.clear();

        // 重置状态
        this.set({
            loading: true,
            hasThinking: false,
            thinking: false,
            thinkExpanded: true,
            thinkingTitle: '',
            thinkingContent: '',
            answer: '',
            streaming: false,
        });

        // 模拟开始思考
        this.thinkingTimer = window.setTimeout(() => {
            this.set({
                hasThinking: true,
                thinking: true,
                thinkingTitle: '思考中...',
            });

            // 流式输出思考内容
            let index = 0;
            const streamThinking = () => {
                if (index < thinkingChunks.length) {
                    this.set('thinkingContent', this.get('thinkingContent') + thinkingChunks[index]);
                    index++;
                    this.thinkingTimer = window.setTimeout(streamThinking, 150);
                } else {
                    // 思考完成
                    this.set({
                        thinking: false,
                        thinkExpanded: false,
                        thinkingTitle: '深度思考完成（用时 8 秒）',
                    });

                    // 开始流式输出回答
                    this.answerTimer = window.setTimeout(() => {
                        this.set('streaming', true);
                        this.streamAnswer();
                    }, 500);
                }
            };
            streamThinking();
        }, 1000);
    }

    streamAnswer() {
        let index = 0;
        const stream = () => {
            if (index < answerChunks.length) {
                const nextChunk = answerChunks[index];
                const prefix = index === 0 ? '' : '\n';
                this.set('answer', this.get('answer') + prefix + nextChunk);
                index++;
                this.answerTimer = window.setTimeout(stream, 100);
            } else {
                // 全部完成
                this.set({
                    streaming: false,
                    loading: false,
                });
            }
        };
        stream();
    }

    @bind
    reset() {
        this.clear();
        this.set({
            loading: true,
            hasThinking: false,
            thinking: false,
            thinkExpanded: true,
            thinkingTitle: '',
            thinkingContent: '',
            answer: '',
            streaming: false,
        });
        this.startStreaming();
    }
}
```