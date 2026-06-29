import {Component} from 'intact';
import {mount, unmount, wait} from '../../test/utils';
import {Think} from '.';

describe('Think', () => {
    afterEach(() => {
        unmount();
    });

    it('should render title and content', async () => {
        class Demo extends Component {
            static template = `
                const { Think } = this;
                <div>
                    <Think title="已思考（用时 6 秒）" content="先拆解问题，再组织答案。" />
                </div>
            `;

            Think = Think;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-think-title')!.textContent).to.contain('已思考');
        expect(element.querySelector('.k-think-text')!.textContent).to.contain('先拆解问题');
    });

    it('should toggle content and trigger expand event', async () => {
        class Demo extends Component<{expanded: boolean}> {
            static template = `
                const { Think } = this;
                <div>
                    <Think
                        v-model:expanded="expanded"
                        content="thinking content"
                    />
                </div>
            `;

            static defaults() {
                return {
                    expanded: true,
                };
            }

            Think = Think;
        }

        const [instance, element] = mount(Demo);
        const root = element.querySelector<HTMLElement>('.k-think')!;
        const status = element.querySelector<HTMLElement>('.k-think-status')!;

        expect(root.classList.contains('k-think-expanded')).to.be.true;

        status.click();
        await wait(50);
        expect(instance.get('expanded')).to.eql(false);
        expect(root.classList.contains('k-think-expanded')).to.be.false;
    });

    it('should respect defaultExpanded in uncontrolled mode', async () => {
        class Demo extends Component {
            static template = `
                const { Think } = this;
                <div>
                    <Think
                        title="已思考"
                        content="默认折叠内容"
                        defaultExpanded={false}
                    />
                </div>
            `;

            Think = Think;
        }

        const [, element] = mount(Demo);

        const root = element.querySelector<HTMLElement>('.k-think')!;
        await wait(50);
        expect(root.classList.contains('k-think-expanded')).to.be.false;

        const status = element.querySelector<HTMLElement>('.k-think-status')!;
        status.click();
        await wait(50);

        expect(root.classList.contains('k-think-expanded')).to.be.true;
        expect(element.querySelector('.k-think-text')!.textContent).to.contain('默认折叠内容');
    });

    it('should reflect loading state on root and icon', async () => {
        class Demo extends Component {
            static template = `
                const { Think } = this;
                <div>
                    <Think title="思考中" loading content="内容" />
                </div>
            `;

            Think = Think;
        }

        const [, element] = mount(Demo);
        await wait(50);

        const root = element.querySelector<HTMLElement>('.k-think')!;
        expect(root.classList.contains('k-think-loading')).to.be.true;

        const icon = root.querySelector<HTMLElement>('.k-think-icon i')!;
        expect(icon.classList.contains('ion-load-c')).to.be.true;
        expect(icon.classList.contains('k-rotate')).to.be.true;
    });

    it('should apply blink class when blink is true', async () => {
        class Demo extends Component {
            static template = `
                const { Think } = this;
                <div>
                    <Think title="闪烁标题" blink content="正文" />
                </div>
            `;

            Think = Think;
        }

        const [, element] = mount(Demo);
        await wait(50);

        const root = element.querySelector<HTMLElement>('.k-think')!;
        expect(root.classList.contains('k-think-blink')).to.be.true;
    });

    it('should set max width from maxWidthString', async () => {
        class Demo extends Component {
            static template = `
                const { Think } = this;
                <div>
                    <Think title="标题" content="内容" maxWidthString="480px" />
                </div>
            `;

            Think = Think;
        }

        const [, element] = mount(Demo);
        await wait(50);

        const root = element.querySelector<HTMLElement>('.k-think')!;
        expect(root.style.maxWidth).to.eql('480px');
    });

    it('should emit expand with next expanded value', async () => {
        let last: boolean | undefined;

        class Demo extends Component {
            static template = `
                const { Think } = this;
                <div>
                    <Think
                        v-model:expanded="expanded"
                        content="c"
                        ev-expand={this.onExpand}
                    />
                </div>
            `;

            static defaults() {
                return {expanded: false};
            }

            Think = Think;

            onExpand = (v: boolean) => {
                last = v;
            };
        }

        const [instance, element] = mount(Demo);
        const status = element.querySelector<HTMLElement>('.k-think-status')!;

        status.click();
        await wait(50);
        expect(last).to.eql(true);
        expect(instance.get('expanded')).to.eql(true);

        status.click();
        await wait(50);
        expect(last).to.eql(false);
        expect(instance.get('expanded')).to.eql(false);
    });

    it('should hide arrow and content region when there is no content', async () => {
        class Demo extends Component {
            static template = `
                const { Think } = this;
                <div>
                    <Think title="仅标题" />
                </div>
            `;

            Think = Think;
        }

        const [, element] = mount(Demo);
        await wait(50);

        expect(element.querySelector('.k-think-arrow')).to.be.null;
        expect(element.querySelector('.k-think-wrapper')).to.be.null;
    });

    it('should not render extra and content wrappers for empty conditional slots', async () => {
        class Demo extends Component<{showSlot: boolean}> {
            static template = `
                const { Think } = this;
                <div>
                    <Think title="仅标题">
                        <b:extra>
                            <span v-if={this.get('showSlot')} class="conditional-extra">extra</span>
                        </b:extra>
                        <b:content>
                            <span v-if={this.get('showSlot')} class="conditional-content">content</span>
                        </b:content>
                    </Think>
                </div>
            `;

            static defaults() {
                return {
                    showSlot: false,
                };
            }

            Think = Think;
        }

        const [instance, element] = mount(Demo);
        await wait(50);

        expect(element.querySelector('.k-think-extra')).to.eql(null);
        expect(element.querySelector('.k-think-arrow')).to.eql(null);
        expect(element.querySelector('.k-think-wrapper')).to.eql(null);

        instance.set('showSlot', true);
        await wait(50);

        expect(element.querySelector('.conditional-extra')!.textContent).to.eql('extra');
        expect(element.querySelector('.conditional-content')!.textContent).to.eql('content');
        expect(element.querySelector('.k-think-arrow')).not.to.eql(null);
    });
});
