import BasicDemo from '~/components/editable/demos/basic';
import ValidateDemo from '~/components/editable/demos/validate';
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
        let input = element.querySelector('textarea') as HTMLTextAreaElement;
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
        input = element.querySelector('textarea') as HTMLTextAreaElement;
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
        input = element.querySelector('textarea') as HTMLTextAreaElement;
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
        let input = (findDomFromVNode(first.$lastInput!, true) as HTMLElement).querySelector('textarea') as HTMLTextAreaElement;
        dispatchEvent(input, 'focus');
        input.value = 'a';
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'blur');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        // @ts-ignore
        second.edit();
        await wait();
        input = (findDomFromVNode(second.$lastInput!, true) as HTMLElement).querySelector('textarea') as HTMLTextAreaElement;
        input.value = 'a';
        dispatchEvent(input, 'input');
        dispatchEvent(input, 'blur');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        // @ts-ignore
        third.edit();
        await wait();
        input = (findDomFromVNode(third.$lastInput!, true) as HTMLElement).querySelector('textarea') as HTMLTextAreaElement;
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
        let input = element.querySelector("textarea") as HTMLTextAreaElement;
        input.value = 'aa';
        dispatchEvent(input, 'blur');
        await wait();
        expect(element.innerText).to.eql('test');
        element.querySelector<HTMLElement>('.k-editable-icon')!.click();
        await wait();
        input = element.querySelector("textarea") as HTMLTextAreaElement;
        expect(input.value).to.eql('aa');
    });
});
