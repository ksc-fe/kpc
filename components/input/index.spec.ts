import BasicDemo from '~/components/input/demos/basic';
import {mount, unmount, dispatchEvent, wait, getElement} from '../../test/utils';
import SearchDemo from '~/components/input/demos/search';
import FrozenDemo from '~/components/input/demos/frozen';
import AutoRowsDemo from '~/components/input/demos/autoRows';
import PasswordDemo from '~/components/input/demos/password';
import AutoWidthDemo from '~/components/input/demos/autowidth';
import {Input} from './';
import {Dialog} from '../dialog';
import { Component } from 'intact';

describe('Input', () => {
    afterEach(() => {unmount()});

    it('basic test', async () => {
        const [instance, element] = mount(BasicDemo); 

        const input = element.querySelector('input') as HTMLInputElement;
        instance.refs.__test.focus();
        input.value = 'test';
        dispatchEvent(input, 'input');
        await wait();
        expect(instance.get('value')).eql('test');

        instance.refs.__test.select();
    });

    it('search input', async () => {
        const onSearch = sinon.spy();
        SearchDemo.prototype.search = onSearch;

        const [instance, element] = mount(SearchDemo);

        expect(element.innerHTML).to.matchSnapshot();
        const btn = element.querySelector('.k-btn') as HTMLElement;

        btn.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        const input = element.querySelector('input') as HTMLInputElement;
        input.value = 'test';
        dispatchEvent(input, 'input');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        const form = element.querySelector('form') as HTMLFormElement;
        dispatchEvent(form, 'submit');
        await wait();
        expect(onSearch.calledWith('test')).to.be.true;

        btn.click();
        await wait();
        expect(onSearch.callCount).to.eql(2);
        expect(onSearch.calledWith('test')).to.be.true;
        expect(element.innerHTML).to.matchSnapshot();

        document.body.click();
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should frozen value on input', async () => {
        const [instance, element] = mount(FrozenDemo);

        const [input1, input2] = element.querySelectorAll<HTMLInputElement>('input');
        dispatchEvent(input2, 'focus');
        input2.value = '#123';
        dispatchEvent(input2, 'input');

        await wait();
        expect(input1.value).to.eql('#112233');
        expect(input2.value).to.eql('#123');

        dispatchEvent(input2, 'blur');
        await wait();
        expect(input2.value).to.eql('#112233');
    });

    it('should auto expand or shrink textarea', async () => {
        const [instance, element] = mount(AutoRowsDemo);
        const [textarea1, textarea2] = element.querySelectorAll('textarea');
        // const lineHeight = parseInt(getComputedStyle(textarea1).lineHeight);

        instance.set<string>('value1', 'a\nb');
        await wait();
        expect(textarea1.style.height).to.eql('50px');

        instance.set<string>('value1', 'a');
        await wait();
        expect(textarea1.style.height).to.eql('32px');

        instance.set<string>('value2', 'a');
        await wait();
        expect(textarea2.style.height).to.eql('68px');

        instance.set<string>('value2', 'a\nb\nc')
        await wait();
        expect(textarea2.style.height).to.eql('68px');

        instance.set<string>('value2', 'a\nb\nc\nd')
        await wait();
        expect(textarea2.style.height).to.eql('86px');

        instance.set<string>('value2', 'a\nb\nc\nd\ne\nf\ng\nh')
        await wait();
        expect(textarea2.style.height).to.eql('104px');
    });

    it('should show or hide password', async () => {
        const [instance, element] = mount(PasswordDemo);
        const input = element.querySelector<HTMLInputElement>('input')!;
        const icon = element.querySelector<HTMLElement>('.k-icon')!;
        const inputInstance = instance.refs.__demo as Input;

        icon.click();
        await wait();
        expect(input.type).to.eql('text');
        expect(element.innerHTML).to.matchSnapshot();

        icon.click();
        await wait();
        expect(input.type).to.eql('password');
        expect(element.innerHTML).to.matchSnapshot();

        // simulate receive type
        inputInstance.$props.type = 'number';
        (inputInstance as any).trigger('$receive:type', 'number');
        await wait();
        expect(input.type).to.eql('number');
        expect(icon.parentElement!.parentElement).to.eql(null);
        expect(element.innerHTML).to.matchSnapshot();

        // simulate receive showPassword
        inputInstance.$props.type = 'password';
        inputInstance.$props.showPassword = false;
        (inputInstance as any).trigger('$receive:type', 'password');
        (inputInstance as any).trigger('$receive:showPassword', false);
        await wait();
        expect(input.type).to.eql('password');
        expect(element.querySelector<HTMLElement>('.k-icon')).to.eql(null);
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should set width when dialog show and input mounted', async () => {
        class Demo extends Component<{show: boolean}> {
            static template = `
                var Dialog = this.Dialog;
                var Input = this.Input;
                <Dialog value={this.get('show')}>
                    <Input autoWidth placeholder="test" v-if={this.get('show')} />
                </Dialog>
            `;
            static defaults() {
                return {
                    show: false,
                };
            }
            private Dialog = Dialog;
            private Input = Input;
        }

        const [instance] = mount(Demo);
        instance.set('show', true);
        await wait(50);
        const dialog = getElement('.k-dialog')!;
        const width = parseInt(dialog.querySelector<HTMLInputElement>('.k-input-inner')!.style.width);
        expect(width).to.gt(1);
    });

    it('autoWidth', async() => {
        // should expand when input spaces
        const [instance, element] = mount(AutoWidthDemo);
        const input = element.querySelector('input') as HTMLInputElement;
        input.value = 'ab  ';
        dispatchEvent(input, 'input');
        await wait(50);
        expect(input.offsetWidth).to.gt(16);
    });

    it('should handle textarea resize correctly', async () => {
        class ResizeDemo extends Component {
            static template = `
                const {Input} = this;
                <div>
                    <Input type="textarea" resize="none" placeholder="resize none" />
                    <Input type="textarea" resize="vertical" placeholder="resize vertical" />
                    <Input type="textarea" resize="none" rows="auto" placeholder="resize none with auto rows" />
                </div>
            `;
            private Input = Input;
        }

        const [instance, element] = mount(ResizeDemo as any);
        
        const inputElements = element.querySelectorAll('.k-input');
        
        // should have k-resize-none class
        const resizeNoneElement = inputElements[0];
        expect(resizeNoneElement.classList.contains('k-resize-none')).to.be.true;
        expect(resizeNoneElement.classList.contains('k-resize-vertical')).to.be.false;
        
        const resizeVerticalElement = inputElements[1];
        expect(resizeVerticalElement.classList.contains('k-resize-vertical')).to.be.true;
        expect(resizeVerticalElement.classList.contains('k-resize-none')).to.be.false;
        
        // resize="none" with rows="auto" (should have k-resize-none class)
        const resizeNoneAutoElement = inputElements[2];
        expect(resizeNoneAutoElement.classList.contains('k-resize-none')).to.be.true;
        
        // Test CSS computed styles to ensure resize is applied correctly
        const textareas = element.querySelectorAll('.k-textarea');
        const textarea1 = textareas[0] as HTMLTextAreaElement;
        const textarea2 = textareas[1] as HTMLTextAreaElement;
        
        const computedStyle1 = getComputedStyle(textarea1);
        const computedStyle2 = getComputedStyle(textarea2);
        
        expect(computedStyle1.resize).to.eql('none');
        expect(computedStyle2.resize).to.eql('vertical');
    });
});
