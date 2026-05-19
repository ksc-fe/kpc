import {createApp, h, render} from 'vue';
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

describe('AI Vue Smoke', () => {
    it('should expose only AI entries from root import and render them together', function() {
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
        createApp({
            render: () => h('div', [
                h(Bubble as any, {content: 'smoke'}),
                h(BubbleList as any, {items: [{key: '1', content: 'list item'}]}),
                h(FileCard as any, {name: 'report.pdf', byte: 1024}),
                h(Sender as any, {value: 'hello'}),
                h(Think as any, {content: 'thinking'}),
                h(XMarkdown as any, {
                    content: '**markdown**',
                    enableMermaid: false,
                    enableFormula: false,
                }),
            ]),
        }).mount(container);

        expect(container.querySelector('.k-bubble')).to.exist;
        expect(container.querySelector('.k-bubble-list')).to.exist;
        expect(container.querySelector('.k-file-card')).to.exist;
        expect(container.querySelector('.k-sender')).to.exist;
        expect(container.querySelector('.k-think')).to.exist;
        expect(container.querySelector('.k-xmarkdown')).to.exist;

        render(null, container);
        document.body.removeChild(container);
    });
});
