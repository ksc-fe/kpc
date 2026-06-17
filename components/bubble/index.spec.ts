import {Component} from 'intact';
import {mount, unmount, wait} from '../../test/utils';
import {Bubble} from '.';

describe('Bubble', () => {
    afterEach(() => {
        unmount();
    });

    it('should render placement, avatar and role name', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble avatar={true} roleName="助手" content="hello" />
                    <Bubble placement="end" avatar={true} roleName="我" content="world" variant="outlined" />
                    <Bubble placement="middle" avatar={false} content="system" variant="plain" />
                </div>
            `;

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);
        const bubbles = element.querySelectorAll('.k-bubble');

        expect(bubbles.length).to.eql(3);
        expect(bubbles[0].classList.contains('k-bubble-start')).to.be.true;
        expect(bubbles[0].querySelector('.k-bubble-avatar')).not.to.eql(null);
        expect(bubbles[0].querySelector('.k-bubble-header')!.textContent).to.contain('助手');
        expect(bubbles[1].classList.contains('k-bubble-end')).to.be.true;
        expect(bubbles[1].classList.contains('k-bubble-outlined')).to.be.true;
        expect(bubbles[2].classList.contains('k-bubble-middle')).to.be.true;
        expect(bubbles[2].classList.contains('k-bubble-plain')).to.be.true;

        const endMeta = bubbles[1].querySelector<HTMLElement>('.k-bubble-meta')!;
        const endHeader = bubbles[1].querySelector<HTMLElement>('.k-bubble-header')!;
        const middleMeta = bubbles[2].querySelector<HTMLElement>('.k-bubble-meta');

        expect(getComputedStyle(endMeta).flexDirection).to.eql('row-reverse');
        expect(getComputedStyle(endHeader).textAlign).to.eql('right');
        expect(middleMeta).to.eql(null);
    });

    it('should mirror corner shape by placement', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble shape="corner" placement="start" content="left" />
                    <Bubble shape="corner" placement="end" content="right" />
                    <Bubble shape="corner" placement="middle" content="center" />
                </div>
            `;

            Bubble = Bubble;
        }

        const [, element] = mount(Demo);
        const contents = element.querySelectorAll<HTMLElement>('.k-bubble-content');

        expect(getComputedStyle(contents[0]).borderTopLeftRadius).to.eql('0px');
        expect(getComputedStyle(contents[0]).borderTopRightRadius).not.to.eql('0px');
        expect(getComputedStyle(contents[0]).borderBottomLeftRadius).not.to.eql('0px');
        expect(getComputedStyle(contents[1]).borderTopRightRadius).to.eql('0px');
        expect(getComputedStyle(contents[1]).borderTopLeftRadius).not.to.eql('0px');
        expect(getComputedStyle(contents[1]).borderBottomRightRadius).not.to.eql('0px');
        expect(getComputedStyle(contents[2]).borderTopLeftRadius).to.eql('0px');
        expect(getComputedStyle(contents[2]).borderTopRightRadius).to.eql('0px');
        expect(getComputedStyle(contents[2]).borderBottomLeftRadius).not.to.eql('0px');
        expect(getComputedStyle(contents[2]).borderBottomRightRadius).not.to.eql('0px');
    });

    it('should render loading state', async () => {
        class Demo extends Component<{loading: boolean}> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble loading={this.get('loading')} content="正在生成中" />
                </div>
            `;

            static defaults() {
                return {
                    loading: true
                };
            }

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);
        await wait(40);

        expect(element.querySelector('.k-bubble-loading')).not.to.eql(null);

        instance.set('loading', false);
        await wait();
        expect(element.querySelector('.k-bubble-loading')).to.eql(null);
    });

    it('should only render footer when custom footer slot is provided', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble content="no footer" />
                    <Bubble content="custom footer">
                        <b:footer>
                            <span class="custom-footer">custom</span>
                        </b:footer>
                    </Bubble>
                </div>
            `;

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);
        const footers = element.querySelectorAll('.k-bubble-footer');

        expect(footers.length).to.eql(1);
        expect(element.querySelector('.custom-footer')!.textContent).to.eql('custom');
    });

    it('should keep custom footer visible during loading and typing', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble loading={true} content="custom footer">
                        <b:footer>
                            <span class="custom-loading-footer">stop</span>
                        </b:footer>
                    </Bubble>
                    <Bubble typing={true} content="typing footer">
                        <b:footer>
                            <span class="custom-typing-footer">typing</span>
                        </b:footer>
                    </Bubble>
                </div>
            `;

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);

        expect(element.querySelector('.custom-loading-footer')!.textContent).to.eql('stop');
        expect(element.querySelector('.custom-typing-footer')!.textContent).to.eql('typing');
    });

    it('should render footer when footer slot is provided without content', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble>
                        <b:footer>
                            <span class="custom-footer-only">footer only</span>
                        </b:footer>
                    </Bubble>
                </div>
            `;

            Bubble = Bubble;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-bubble')).not.to.eql(null);
        expect(element.querySelector('.k-bubble-content')).to.eql(null);
        expect(element.querySelector('.custom-footer-only')!.textContent).to.eql('footer only');
    });

    it('should not render wrappers for empty conditional slots', async () => {
        class Demo extends Component<{
            showSlot: boolean
        }> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble content="main content">
                        <b:beforeContent>
                            <span v-if={this.get('showSlot')} class="conditional-before-content">before</span>
                        </b:beforeContent>
                        <b:attachments>
                            <span v-if={this.get('showSlot')} class="conditional-attachments">attachments</span>
                        </b:attachments>
                        <b:bottom>
                            <span v-if={this.get('showSlot')} class="conditional-bottom">bottom</span>
                        </b:bottom>
                        <b:footer>
                            <span v-if={this.get('showSlot')} class="conditional-footer">footer</span>
                        </b:footer>
                        <b:extra>
                            <span v-if={this.get('showSlot')} class="conditional-extra">extra</span>
                        </b:extra>
                    </Bubble>
                </div>
            `;

            static defaults() {
                return {
                    showSlot: false,
                };
            }

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);

        expect(element.querySelector('.k-bubble-before-content')).to.eql(null);
        expect(element.querySelector('.k-bubble-attachments')).to.eql(null);
        expect(element.querySelector('.k-bubble-bottom')).to.eql(null);
        expect(element.querySelector('.k-bubble-footer')).to.eql(null);
        expect(element.querySelector('.k-bubble-extra')).to.eql(null);
        expect(element.querySelector('.k-bubble-text')!.textContent).to.contain('main content');

        instance.set('showSlot', true);
        await wait();

        expect(element.querySelector('.conditional-before-content')!.textContent).to.eql('before');
        expect(element.querySelector('.conditional-attachments')!.textContent).to.eql('attachments');
        expect(element.querySelector('.conditional-bottom')!.textContent).to.eql('bottom');
        expect(element.querySelector('.conditional-footer')!.textContent).to.eql('footer');
        expect(element.querySelector('.conditional-extra')!.textContent).to.eql('extra');
    });

    it('should fallback to default loading when custom loading slot is empty', async () => {
        class Demo extends Component<{
            showLoadingSlot: boolean
        }> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble loading={true}>
                        <b:loading>
                            <span v-if={this.get('showLoadingSlot')} class="custom-loading-slot">loading</span>
                        </b:loading>
                    </Bubble>
                </div>
            `;

            static defaults() {
                return {
                    showLoadingSlot: false,
                };
            }

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);

        expect(element.querySelector('.custom-loading-slot')).to.eql(null);
        expect(element.querySelector('.k-bubble-loading')).not.to.eql(null);

        instance.set('showLoadingSlot', true);
        await wait();

        expect(element.querySelector('.custom-loading-slot')!.textContent).to.eql('loading');
        expect(element.querySelector('.k-bubble-loading')).to.eql(null);
    });

    it('should render bottom inside bubble content and keep extra below footer', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble content="main content">
                        <b:bottom>
                            <div class="custom-bubble-bottom">bottom</div>
                        </b:bottom>
                        <b:footer>
                            <div class="custom-bubble-footer-order">footer</div>
                        </b:footer>
                        <b:extra>
                            <div class="custom-bubble-extra-order">extra</div>
                        </b:extra>
                    </Bubble>
                </div>
            `;

            Bubble = Bubble;
        }

        const [, element] = mount(Demo);
        const content = element.querySelector('.k-bubble-content')!;
        const text = element.querySelector('.k-bubble-text')!;
        const bottom = element.querySelector('.custom-bubble-bottom')!;
        const footer = element.querySelector('.custom-bubble-footer-order')!;
        const extra = element.querySelector('.custom-bubble-extra-order')!;

        expect(content.contains(bottom)).to.be.true;
        expect(text.compareDocumentPosition(bottom) & Node.DOCUMENT_POSITION_FOLLOWING).to.not.eql(0);
        expect(footer.compareDocumentPosition(extra) & Node.DOCUMENT_POSITION_FOLLOWING).to.not.eql(0);
    });

    it('should not render bubble when content is empty and loading is false', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble content="" />
                </div>
            `;

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);

        expect(element.querySelector('.k-bubble')).to.eql(null);
    });

    it('should render beforeContent slot without showing empty bubble content', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble avatar={true} roleName="AI 助手" content="">
                        <b:beforeContent>
                            <div class="bubble-before-content">thinking</div>
                        </b:beforeContent>
                    </Bubble>
                </div>
            `;

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);

        expect(element.querySelector('.k-bubble')).not.to.eql(null);
        expect(element.querySelector('.bubble-before-content')!.textContent).to.eql('thinking');
        expect(element.querySelector('.k-bubble-content')).to.eql(null);
    });

    it('should render attachments slot inside bubble content before text', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble content="附件说明">
                        <b:attachments>
                            <div class="bubble-attachments-slot">attachments</div>
                        </b:attachments>
                    </Bubble>
                </div>
            `;

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);
        const attachments = element.querySelector('.k-bubble-attachments');
        const text = element.querySelector('.k-bubble-text');

        expect(attachments).not.to.eql(null);
        expect(attachments!.textContent).to.contain('attachments');
        expect(text).not.to.eql(null);
        expect(text!.textContent).to.contain('附件说明');
        expect(attachments!.compareDocumentPosition(text!) & Node.DOCUMENT_POSITION_FOLLOWING).to.not.eql(0);
    });

    it('should keep custom slot content constrained inside bubble content width', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble maxWidthString="320px">
                        <b:content>
                            <div class="bubble-custom-slot-width">custom slot</div>
                        </b:content>
                    </Bubble>
                </div>
            `;

            Bubble = Bubble;
        }

        const [, element] = mount(Demo);
        const content = element.querySelector<HTMLElement>('.k-bubble-content')!;
        const customSlot = element.querySelector<HTMLElement>('.bubble-custom-slot-width')!;

        expect(getComputedStyle(content).maxWidth).to.eql('100%');
        expect(getComputedStyle(customSlot).maxWidth).to.eql('100%');
        expect(getComputedStyle(customSlot).minWidth).to.eql('0px');
    });

    it('should render bubble when only attachments slot is provided', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble content="">
                        <b:attachments>
                            <div class="bubble-attachments-only">files only</div>
                        </b:attachments>
                    </Bubble>
                </div>
            `;

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);

        expect(element.querySelector('.k-bubble')).not.to.eql(null);
        expect(element.querySelector('.bubble-attachments-only')!.textContent).to.eql('files only');
        expect(element.querySelector('.k-bubble-text')).to.eql(null);
    });

    it('should restart typing from empty after loading resets a reused bubble', async () => {
        class Demo extends Component<{
            loading: boolean
            content: string
        }> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble
                        loading={this.get('loading')}
                        typing={{interval: 16, step: 2}}
                        content={this.get('content')}
                    />
                </div>
            `;

            static defaults() {
                return {
                    loading: false,
                    content: 'old content',
                };
            }

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);
        await wait(120);

        instance.set({
            loading: true,
            content: 'new round',
        });
        await wait();

        instance.set('loading', false);
        await wait(40);

        const text = element.querySelector('.k-bubble-text')!.textContent!;
        expect(text.length).to.be.greaterThan(0);
        expect(text.length).to.be.lessThan('new round'.length);
        expect(text).not.to.eql('new round');
    });

    it('should keep the loading shell mounted between loading finish and the first streaming chunk', async () => {
        class Demo extends Component<{
            loading: boolean
            streaming: boolean
            content: string
        }> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble
                        loading={this.get('loading')}
                        streaming={this.get('streaming')}
                        typing={{interval: 16, step: 2}}
                        content={this.get('content')}
                    />
                </div>
            `;

            static defaults() {
                return {
                    loading: true,
                    streaming: false,
                    content: '',
                };
            }

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);
        const bubble = element.querySelector('.k-bubble');

        expect(bubble).not.to.eql(null);
        expect(element.querySelector('.k-bubble-loading')).not.to.eql(null);

        instance.set({
            loading: false,
            streaming: true,
        });
        await wait();

        expect(element.querySelector('.k-bubble')).to.eql(bubble);
        expect(element.querySelector('.k-bubble-loading')).not.to.eql(null);

        instance.set('content', 'ab');
        await wait(24);

        expect(element.querySelector('.k-bubble-loading')).to.eql(null);
        expect(element.querySelector('.k-bubble-text')!.textContent).to.contain('ab');
    });

    it('should trigger typing events during animation and typingComplete once after streaming ends', async () => {
        class Demo extends Component<{
            content: string
            streaming: boolean
            typingCount: number
            completeCount: number
            completedContent: string
        }> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble
                        content={this.get('content')}
                        streaming={this.get('streaming')}
                        typing={{interval: 16, step: 2}}
                        ev-typing={() => this.set('typingCount', this.get('typingCount') + 1)}
                        ev-typingComplete={(content) => this.set({
                            completeCount: this.get('completeCount') + 1,
                            completedContent: content,
                        })}
                    />
                </div>
            `;

            static defaults() {
                return {
                    content: '',
                    streaming: true,
                    typingCount: 0,
                    completeCount: 0,
                    completedContent: '',
                };
            }

            Bubble = Bubble;
        }

        const [instance] = mount(Demo);

        instance.set('content', 'abcd');
        await wait(80);
        expect(instance.get('typingCount')).to.be.greaterThan(0);
        expect(instance.get('completeCount')).to.eql(0);

        instance.set('content', 'abcdef');
        await wait(80);
        expect(instance.get('completeCount')).to.eql(0);

        instance.set('streaming', false);
        await wait(24);
        expect(instance.get('completeCount')).to.eql(1);
        expect(instance.get('completedContent')).to.eql('abcdef');
    });

    it('should trigger typingComplete when a loading round finishes with empty content', async () => {
        class Demo extends Component<{
            loading: boolean
            completeCount: number
            completedContent: string
        }> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble
                        loading={this.get('loading')}
                        content=""
                        ev-typingComplete={(content) => this.set({
                            completeCount: this.get('completeCount') + 1,
                            completedContent: content,
                        })}
                    />
                </div>
            `;

            static defaults() {
                return {
                    loading: true,
                    completeCount: 0,
                    completedContent: 'not-empty',
                };
            }

            Bubble = Bubble;
        }

        const [instance] = mount(Demo);

        instance.set('loading', false);
        await wait();

        expect(instance.get('completeCount')).to.eql(1);
        expect(instance.get('completedContent')).to.eql('');
    });

    it('should keep the shared prefix when streaming content is revised', async () => {
        class Demo extends Component<{
            content: string
            streaming: boolean
        }> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble
                        content={this.get('content')}
                        streaming={this.get('streaming')}
                        typing={{interval: 16, step: 2}}
                    />
                </div>
            `;

            static defaults() {
                return {
                    content: 'hello world',
                    streaming: true,
                };
            }

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);

        let firstText = '';
        for (let i = 0; i < 8; i++) {
            await wait(20);
            firstText = element.querySelector('.k-bubble-text')!.textContent || '';
            if (firstText.includes('hello')) break;
        }
        expect(firstText).to.contain('hello');

        instance.set('content', 'hello, world');
        let nextText = '';
        for (let i = 0; i < 6; i++) {
            await wait(20);
            nextText = element.querySelector('.k-bubble-text')!.textContent || '';
            if (nextText.startsWith('hello')) break;
        }
        expect(nextText.startsWith('hello')).to.be.true;
        expect(nextText).not.to.eql('');
    });

    it('should resume typing from previous rendered content after remount', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble
                        content="hello world"
                        streaming={true}
                        typing={{interval: 16, step: 2, resumeFrom: 'hello'}}
                    />
                </div>
            `;

            Bubble = Bubble;
        }

        const [, element] = mount(Demo);
        const text = element.querySelector('.k-bubble-text')!.textContent || '';

        expect(text).to.eql('hello');

        let nextText = text;
        for (let i = 0; i < 6; i++) {
            await wait(20);
            nextText = element.querySelector('.k-bubble-text')!.textContent || '';
            if (nextText.length > text.length) break;
        }

        expect(nextText.startsWith('hello')).to.be.true;
        expect(nextText.length).to.be.greaterThan(text.length);
    });

    it('should support content resume mode without replaying existing content', async () => {
        class Demo extends Component<{
            content: string
        }> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble
                        content={this.get('content')}
                        streaming={true}
                        typing={{interval: 16, step: 2, resumeFrom: 'content'}}
                    />
                </div>
            `;

            static defaults() {
                return {
                    content: 'already rendered',
                };
            }

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);

        expect(element.querySelector('.k-bubble-text')!.textContent).to.eql('already rendered');

        instance.set('content', 'already rendered and more');
        await wait(20);

        const text = element.querySelector('.k-bubble-text')!.textContent || '';
        expect(text.startsWith('already rendered')).to.be.true;
        expect(text.length).to.be.lessThan('already rendered and more'.length);
    });

    it('should restart typing from empty when keepPrefix is false', async () => {
        class Demo extends Component<{
            content: string
        }> {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble
                        content={this.get('content')}
                        streaming={true}
                        typing={{interval: 16, step: 2, keepPrefix: false}}
                    />
                </div>
            `;

            static defaults() {
                return {
                    content: 'hello world',
                };
            }

            Bubble = Bubble;
        }

        const [instance, element] = mount(Demo);

        let initialText = '';
        for (let i = 0; i < 12; i++) {
            initialText = element.querySelector('.k-bubble-text')?.textContent || '';
            if (initialText.includes('hello')) break;
            await wait(20);
        }
        expect(initialText).to.contain('hello');

        instance.set('content', 'hello there');
        await wait();

        let text = '';
        for (let i = 0; i < 6; i++) {
            await wait(20);
            text = element.querySelector('.k-bubble-text')?.textContent || '';
            if (text) break;
        }

        expect(text).not.to.contain('hello');
        expect(text.length).to.be.lessThan('hello'.length);
    });

    it('should render typing suffix only when enabled', async () => {
        class Demo extends Component {
            static template = `
                const { Bubble } = this;
                <div>
                    <Bubble
                        className="suffix-enabled"
                        content="hello"
                        typing={{interval: 16, step: 2, suffix: true}}
                        streaming={true}
                    />
                    <Bubble
                        className="suffix-default"
                        content="hello"
                        typing={{interval: 16, step: 2}}
                        streaming={true}
                    />
                </div>
            `;
            Bubble = Bubble;
        }

        const [, element] = mount(Demo);
        for (let i = 0; i < 10; i++) {
            if (element.querySelector('.suffix-enabled .k-bubble-typing-suffix')) break;
            await wait(20);
        }

        const enabledSuffix = element.querySelector('.suffix-enabled .k-bubble-typing-suffix')!;

        expect(enabledSuffix.querySelectorAll('span').length).to.eql(3);
        expect(element.querySelector('.suffix-default .k-bubble-typing-suffix')).to.eql(null);
    });

});
