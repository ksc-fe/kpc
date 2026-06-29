import Vue from 'vue';
import * as AI from '../../';
import {
    Bubble,
    BubbleList,
    FileCard,
    Sender,
    Think,
    XMarkdown,
    setTheme,
} from '../../';
import enUS from '../../i18n/en-US';
import {wait} from '../../../../test/utils';

describe('AI Vue Legacy Smoke', () => {
    it('should expose only AI entries from root import and render them together', async function() {
        this.timeout(10000);
        const container = document.createElement('div');
        document.body.appendChild(container);
        const exports = Object.keys(AI);

        expect(Bubble).to.exist;
        expect(BubbleList).to.exist;
        expect(FileCard).to.exist;
        expect(Sender).to.exist;
        expect(Think).to.exist;
        expect(XMarkdown).to.exist;
        expect(setTheme).to.be.a('function');
        expect(enUS).to.be.an('object');
        expect(exports).to.not.include('Button');
        expect(exports).to.not.include('Table');

        setTheme({color: {primary: '#1677ff'}});
        const vue = new Vue({
            el: container,
            template: `
                <div>
                    <bubble content="smoke" />
                    <bubble-list :items="[{key: '1', content: 'list item'}]" />
                    <file-card name="report.pdf" :byte="1024" />
                    <sender value="hello" />
                    <think content="thinking" />
                    <x-markdown
                        content="**markdown**"
                        :enable-mermaid="false"
                        :enable-formula="false"
                    />
                </div>
            `,
            components: {
                Bubble,
                BubbleList,
                FileCard,
                Sender,
                Think,
                XMarkdown,
            },
        });

        await wait(100);
        expect((vue.$el as HTMLElement).querySelector('.k-bubble')).to.exist;
        expect((vue.$el as HTMLElement).querySelector('.k-bubble-list')).to.exist;
        expect((vue.$el as HTMLElement).querySelector('.k-file-card')).to.exist;
        expect((vue.$el as HTMLElement).querySelector('.k-sender')).to.exist;
        expect((vue.$el as HTMLElement).querySelector('.k-think')).to.exist;
        expect((vue.$el as HTMLElement).querySelector('.k-xmarkdown')).to.exist;

        vue.$destroy();
        document.body.removeChild(vue.$el);
    });
});
