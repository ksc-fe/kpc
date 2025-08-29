import BasicDemo, {data as basicDemoData} from '~/components/form/demos/basic';
import CustomDemo from '~/components/form/demos/custom';
import VariableDemo from '~/components/form/demos/variable';
import RemoteDemo from '~/components/form/demos/remote';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';
import {Component, findDomFromVNode} from 'intact';
import {Form, FormItem} from './';
import {Input} from '../input';
import { Select } from '../select';

RemoteDemo.prototype.validateUserName = function(value) {
    // mock api
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value === 'a') {
                reject({message: `用户名 ${value} 已被占用`});
            } else {
                resolve(true);
            }
        });
    });
};

describe('Form', () => {
    afterEach(() => unmount());

    it('validate', async () => {
        const [instance, element] = mount(BasicDemo, null, basicDemoData);
        const form = instance.refs.form as Form;

        await instance.handleSubmit();

        expect(element.innerHTML).to.matchSnapshot();
        const item = form.getFirstInvalidFormItem()!;
        expect(item.get('label')).to.eql('Input');
        const items = form.getAllInvalidFormItems();
        expect(items.length).to.eql(10);

        instance.reset();
        await wait();
        expect(instance.get('model')).to.matchSnapshot();

        // validate on focusout
        const input = element.querySelector('input') as HTMLInputElement;
        dispatchEvent(input, 'focus');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
        dispatchEvent(input, 'focusout');
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('custom rules', async () => {
        const [instance, element] = mount(CustomDemo);

        const [input, input1] = Array.from<HTMLElement>(element.querySelectorAll('input'));
        instance.set<{'descriptions.0': string}>('descriptions.0', '1');
        dispatchEvent(input, 'focusout');
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();

        instance.set<{'descriptions.0': string}>('descriptions.0', 'a');
        expect(element.innerHTML).to.matchSnapshot();
        instance.set<{'descriptions.1': string}>('descriptions.1', 'a');
        dispatchEvent(input1, 'focusout');
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();
        instance.set<{'descriptions.1': string}>('descriptions.1', 'b');
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('validate when rules have changed', async () => {
        const [instance, element] = mount(VariableDemo);
        const form = instance.refs.form as Form;

        const res = await form.validate();
        expect(res).to.be.true;

        instance.set('firstName', 'a');
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();
        instance.set('lastName', 'b');
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('validate asynchronously', async function() {
        this.timeout(0);
        const [i, element] = mount(RemoteDemo);

        const form = i.refs.form as Form;
        i.set('userName', 'a');
        await wait();
        let res = await form.validate();
        expect(res).to.be.false;
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();

        i.set('userName', 'b');
        await wait();
        res = await form.validate();
        expect(res).to.be.true;
        await wait(500);
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('should trigger submit event if form is valid', async () => {
        const [i, element] = mount(RemoteDemo);
        const form = i.refs.form as Form;
        const cb = sinon.spy();

        form.on('submit', cb);
        i.set('userName', 'a');
        dispatchEvent(element, 'submit');
        await wait(0);
        expect(cb.callCount).to.eql(0);

        i.set('userName', 'b');
        await wait();
        dispatchEvent(element, 'submit');
        await wait(0);
        expect(cb.callCount).to.eql(1);
    });

    it('methods', async function() {
        this.timeout(0);
        class Demo extends Component<{value: any, value1: any, rules: object, rules1: object}> {
            static template = `
                const Form = this.Form;
                const FormItem = this.FormItem;
                <Form ref="form">
                    <FormItem value={this.get('value')} rules={this.get('rules')} />
                    <FormItem value={this.get('value1')} rules={this.get('rules1')} />
                </Form>
            `
            private Form = Form;
            private FormItem = FormItem;
        }

        const [i, el] = mount(Demo);
        const form = i.refs.form;
        await form.validate();

        // required
        i.set({rules: {required: true}, value: ''});
        i.set('value', '  ');
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', ' 1 ');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', []);
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', ['']);
        await wait();
        expect(await form.validate()).to.be.true;

        // digits
        i.set({rules: {digits: true}, value: ''});
        i.set('value', 'a');
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', '1');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', '1.1');
        await wait();
        expect(await form.validate()).to.be.false;

        // email
        i.set({rules: {email: true}, value: ''});
        i.set('value', 'a@b');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'a@b.c');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'a@');
        await wait();
        expect(await form.validate()).to.be.false;

        // url
        i.set({rules: {url: true}, value: ''});
        i.set('value', 'http://www.a.com');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'https://a.com');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'ftp://a.com');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'http://www.a.com/a?b=c');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'a.com');
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', 'a');
        await wait();
        expect(await form.validate()).to.be.false;

        // date
        i.set({rules: {date: true}, value: ''});
        i.set('value', '2018-01-01');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', '2018/01/01');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', '2018/01/01 01:01:01');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', '20180101');
        await wait();
        expect(await form.validate()).to.be.false;

        // dateISO
        i.set({rules: {dateISO: true}, value: ''});
        i.set('value', '20180101');
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', '2018/01/01');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', '2018-01-01');
        await wait();
        expect(await form.validate()).to.be.true;

        // number
        i.set({rules: {number: true}, value: ''});
        i.set('value', '1');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', '1.1')
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', '-1.1')
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', '-1')
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', '1a')
        await wait();
        expect(await form.validate()).to.be.false;

        // minLength
        i.set({rules: {minLength: 2}, value: ''});
        i.set('value', 'a');
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', 'aa');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'aaa');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', ['a']);
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', ['a', 'a']);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', ['a', 'a', 'a']);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 1);
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', 11);
        await wait();
        expect(await form.validate()).to.be.true;

        // maxLength
        i.set({rules: {maxLength: 2}, value: ''});
        i.set('value', 'a');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'aa');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'aaa');
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', ['a']);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', ['a', 'a']);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', ['a', 'a', 'a']);
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', 1);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 111);
        await wait();
        expect(await form.validate()).to.be.false;

        // rangeLength
        i.set({rules: {rangeLength: [1, '2']}, value: ''});
        i.set('value', 'a');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'aa');
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 'aaa');
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', ['a']);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', ['a', 'a']);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', ['a', 'a', 'a']);
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', 1);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 11);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 111);
        await wait();
        expect(await form.validate()).to.be.false;

        // min
        i.set({rules: {min: 0}, value: ''});
        i.set('value', -1);
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', 0);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 1);
        await wait();
        expect(await form.validate()).to.be.true;

        // max
        i.set({rules: {max: 0}, value: ''});
        i.set('value', -1);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 0);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 1);
        await wait();
        expect(await form.validate()).to.be.false;

        // range
        i.set({rules: {range: [-1, 0]}, value: ''});
        i.set('value', -2);
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', -1);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 0);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 1);
        await wait();
        expect(await form.validate()).to.be.false;

        // step
        i.set({rules: {step: 0.3}, value: ''});
        i.set('value', 'a.a');
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', 0);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 0.1);
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value', 0.3);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', 0.6);
        await wait();
        expect(await form.validate()).to.be.true;
        i.set('value', -0.6);
        await wait();
        expect(await form.validate()).to.be.true;

        // equal
        i.set({rules: {equal: 1}, rules1: {equal: 1}, value: '1', value1: '1'});
        i.set('value', 1);
        await wait();
        expect(await form.validate()).to.be.false;
        i.set('value1', 1);
        await wait();
        expect(await form.validate()).to.be.true;
    });

    it('should show icon when text shows ellipsis', async () => {
        class Demo extends Component<{value: string}> {
            static template = `
                const {Form, FormItem, Input} = this;
                <Form ref="form">
                    <FormItem value={this.get('value')}
                        rules={{
                            required: true,
                            digits: true,
                        }}
                        messages={{
                            required: 'It is a very very very very very very very very very very very very very very very very very very long text.',
                        }}
                        ref="formItem"
                    >
                        <Input v-model="value" />
                    </FormItem>
                </Form>
            `;
            Form = Form;
            FormItem = FormItem;
            Input = Input;
        }
        const [instance] = mount(Demo);

        const {form, formItem} = instance.refs;
        await form.validate();
        await wait();
        const classList = formItem.error.errorRef.value!.parentElement.classList;
        expect(classList.contains('k-ellipsis')).to.be.true;

        instance.set('value', 'a');
        await wait();
        await form.validate();
        await wait();
        expect(classList.contains('k-ellipsis')).to.be.false;

        instance.set('value', '');
        await wait();
        await form.validate();
        await wait();
        expect(classList.contains('k-ellipsis')).to.be.true;
    });

    it('should not validate when select is disabled on init', async () => {
        class Demo extends Component {
            static template = `
                const {Form, FormItem, Select} = this;
                <Form ref="form">
                    <FormItem rules={{required: true}}>
                        <Select disabled />
                    </FormItem>
                </Form>
            `;
            Form = Form;
            FormItem = FormItem;
            Select = Select;
        }
        const [instance, element] = mount(Demo);

        await wait(500);
        expect(element.querySelector('.k-form-error')).to.be.null;
    });

    it('should validate on init when setting validateOnStart prop', async () => {
        class Demo extends Component {
            static template = `
                const {Form, FormItem} = this;
                <Form ref="form">
                    <FormItem rules={{required: true}} validateOnStart />
                </Form>
            `;
            Form = Form;
            FormItem = FormItem;
        }
        const [instance, element] = mount(Demo);

        await wait(500);
        expect(element.querySelector('.k-form-error')).to.be.exist;
    });
});
