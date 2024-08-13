import BasicDemo from '~/components/editable/demos/basic';
import ValidateDemo from '~/components/editable/demos/validate';
import TextAreaDemo from '~/components/editable/demos/textarea';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';
import {Editable} from './';
import {Component, findDomFromVNode} from 'intact';

describe('Editable', () => {
    afterEach(() => {unmount()});

    it('basic test', async () => {
        const [instance, element] = mount(BasicDemo);

        const editable = instance.refs.__test as Editable;
        // @ts-ignore
        editable.edit();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        // input
        let input = element.querySelector('input') as HTMLInputElement;
        input.value = 'test';
        dispatchEvent(input, 'blur');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('text')).to.eql('test');

        // keydown: esc
        // @ts-ignore
        editable.edit();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        input = element.querySelector('input') as HTMLInputElement;
        input.value = 'new';
        dispatchEvent(input, 'keydown', {keyCode: 27});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('text')).to.eql('test');

        // keydown: enter
        // @ts-ignore
        editable.edit();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        input = element.querySelector('input') as HTMLInputElement;
        input.value = 'new';
        dispatchEvent(input, 'keydown', {keyCode: 13});
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        expect(instance.get('text')).to.eql('new');
    });

    it('validate test', async () => {
        const [instance, element] = mount(ValidateDemo);

        const {__test1: first, __test2: second, __test3: third} = instance.refs as Record<string, Editable>;

        // validate
        // @ts-ignore
        first.edit();
        await wait();
        let input = (findDomFromVNode(first.$lastInput!, true) as HTMLElement).querySelector('input') as HTMLInputElement;
        dispatchEvent(input, 'focus');
        input.value = 'a';
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'blur');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        // @ts-ignore
        second.edit();
        await wait();
        input = (findDomFromVNode(second.$lastInput!, true) as HTMLElement).querySelector('input') as HTMLInputElement;
        input.value = 'a';
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'blur');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        // @ts-ignore
        third.edit();
        await wait();
        input = (findDomFromVNode(third.$lastInput!, true) as HTMLElement).querySelector('input') as HTMLInputElement;
        input.value = 'a';
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'blur');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        // required
        input.value = '';
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'blur');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('handle correctly even if the value is undefined', async () => {
        class Demo extends Component<{value: string}> {
            static template = `const {Editable} = this; <Editable>{this.get('value')}</Editable>`;

            static defaults() {
                return {value: 'test'};
            }

            private Editable = Editable;
        }

        const [instance, element] = mount(Demo);

        expect(element.outerHTML).to.matchSnapshot();
        element.querySelector<HTMLElement>('.k-editable-icon')!.click();
        await wait();
        let input = element.querySelector("input") as HTMLInputElement;
        input.value = 'aa';
        dispatchEvent(input, 'blur');
        await wait();
        expect(element.innerText).to.eql('test');
        element.querySelector<HTMLElement>('.k-editable-icon')!.click();
        await wait();
        input = element.querySelector("input") as HTMLInputElement;
        expect(input.value).to.eql('aa');
    });

    it('should auto use input or textarea', async () => {
        const [instance, element] = mount(TextAreaDemo);
        const editable = instance.refs.__test as Editable;
        // @ts-ignore
        editable.edit();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        let input = element.querySelector('input') as HTMLInputElement;
        let textarea = element.querySelector('textarea') as HTMLTextAreaElement;
        expect(input).to.be.null;
        
        textarea.value = 'test';
        dispatchEvent(textarea, 'blur');
        await wait();
        expect(instance.get('text')).to.eql('test');

        editable.set('rows', 1);
        await wait();
        // @ts-ignore
        editable.edit();
        await wait();
        let textarea2 = element.querySelector('textarea') as HTMLTextAreaElement;
        expect(textarea2).to.be.null;
    });
});
