import BasicDemo from '~/components/form/demos/basic';
import CustomDemo from '~/components/form/demos/custom';
import VariableDemo from '~/components/form/demos/variable';
import RemoteDemo from '~/components/form/demos/remote';
import {mount, unmount, dispatchEvent} from 'test/utils';
import Intact from 'intact';
import {Form, FormItem} from 'kpc/components/form';

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
    let instance;

    // afterEach(() => unmount(instance));

    it('validate', (done) => {
        instance = mount(BasicDemo);

        const form = instance.refs.form;

        instance.handleSubmit().then(() => {
            expect(instance.element.innerHTML).to.matchSnapshot();
            const item = form.getFirstInvalidFormItem();
            expect(item.get('label')).to.eql('Input');

            instance.reset();
            expect(instance.get('model')).to.matchSnapshot();

            // validate on focusout
            const input = instance.element.querySelector('input');
            input.value = 'a';
            input.focus();
            expect(instance.element.innerHTML).to.matchSnapshot();
            input.blur();
            expect(instance.element.innerHTML).to.matchSnapshot();

            done();
        });
    });

    it('custom rules', (done) => {
        instance = mount(CustomDemo);

        const [input, input1] = instance.element.querySelectorAll('input');
        instance.set('descriptions.0', '1');
        dispatchEvent(input, 'focusout');
        setTimeout(() => {
            expect(instance.element.innerHTML).to.matchSnapshot();

            instance.set('descriptions.0', 'a');
            expect(instance.element.innerHTML).to.matchSnapshot();
            instance.set('descriptions.1', 'a');
            dispatchEvent(input1, 'focusout');
            setTimeout(() => {
                expect(instance.element.innerHTML).to.matchSnapshot();
                instance.set('descriptions.1', 'b');
                expect(instance.element.innerHTML).to.matchSnapshot();

                done();
            }, 500)
        }, 500);
    });

    it('validate when rules have changed', (done) => {
        instance = mount(VariableDemo); 

        const form = instance.refs.form;

        form.validate().then(res => {
            expect(res).to.be.true;

            instance.set('firstName', 'a');
            expect(instance.element.innerHTML).to.matchSnapshot();
            instance.set('lastName', 'b');
            expect(instance.element.innerHTML).to.matchSnapshot();

            done();
        });
    });

    it('validate asynchronously', function(done) {
        this.enableTimeouts(false);
        instance = mount(RemoteDemo);

        const form = instance.refs.form;
        instance.set('userName', 'a');
        form.validate().then(res => {
            expect(res).to.be.false;
            expect(instance.element.innerHTML).to.matchSnapshot();
            instance.set('userName', 'b');
            form.validate().then(res => {
                expect(res).to.be.true;
                expect(instance.element.innerHTML).to.matchSnapshot();

                done();
            });
        });
    });

    it('should trigger submit event if form is valid', (done) => {
        instance = mount(RemoteDemo);
        const form = instance.refs.form;
        const cb = sinon.spy();
        form.on('submit', cb);
        instance.set('userName', 'a');
        dispatchEvent(instance.element, 'submit');
        setTimeout(() => {
            expect(cb.callCount).to.eql(0);

            instance.set('userName', 'b');
            dispatchEvent(instance.element, 'submit');
            setTimeout(() => {
                expect(cb.callCount).to.eql(1);
                done();
            });
        });
    });

    it('methods', async function() {
        this.enableTimeouts(false);
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <Form ref="form">
                    <FormItem model="value" rules={{ self.get('rules') }} />
                    <FormItem model="value1" rules={{ self.get('rules1') }} />
                </Form>
            `
            _init() {
                this.Form = Form;
                this.FormItem = FormItem;
            }
        }

        instance = mount(Demo);
        const form = instance.refs.form;
        const el = form.element;
        await form.validate();

        // digits
        instance.set({rules: {digits: true}, value: ''});
        instance.set('value', 'a');
        expect(await form.validate()).to.be.false;
        instance.set('value', '1');
        expect(await form.validate()).to.be.true;
        instance.set('value', '1.1');
        expect(await form.validate()).to.be.false;

        // email
        instance.set({rules: {email: true}, value: ''});
        instance.set('value', 'a@b');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'a@b.c');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'a@');
        expect(await form.validate()).to.be.false;

        // url
        instance.set({rules: {url: true}, value: ''});
        instance.set('value', 'http://www.a.com');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'https://a.com');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'ftp://a.com');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'http://www.a.com/a?b=c');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'a.com');
        expect(await form.validate()).to.be.false;
        instance.set('value', 'a');
        expect(await form.validate()).to.be.false;

        // date
        instance.set({rules: {date: true}, value: ''});
        instance.set('value', '2018-01-01');
        expect(await form.validate()).to.be.true;
        instance.set('value', '2018/01/01');
        expect(await form.validate()).to.be.true;
        instance.set('value', '2018/01/01 01:01:01');
        expect(await form.validate()).to.be.true;
        instance.set('value', '20180101');
        expect(await form.validate()).to.be.false;

        // dateISO
        instance.set({rules: {dateISO: true}, value: ''});
        instance.set('value', '20180101');
        expect(await form.validate()).to.be.false;
        instance.set('value', '2018/01/01');
        expect(await form.validate()).to.be.true;
        instance.set('value', '2018-01-01');
        expect(await form.validate()).to.be.true;

        // number
        instance.set({rules: {number: true}, value: ''});
        instance.set('value', '1');
        expect(await form.validate()).to.be.true;
        instance.set('value', '1.1')
        expect(await form.validate()).to.be.true;
        instance.set('value', '-1.1')
        expect(await form.validate()).to.be.true;
        instance.set('value', '-1')
        expect(await form.validate()).to.be.true;
        instance.set('value', '1a')
        expect(await form.validate()).to.be.false;

        // minLength
        instance.set({rules: {minLength: 2}, value: ''});
        instance.set('value', 'a');
        expect(await form.validate()).to.be.false;
        instance.set('value', 'aa');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'aaa');
        expect(await form.validate()).to.be.true;
        instance.set('value', ['a']);
        expect(await form.validate()).to.be.false;
        instance.set('value', ['a', 'a']);
        expect(await form.validate()).to.be.true;
        instance.set('value', ['a', 'a', 'a']);
        expect(await form.validate()).to.be.true;
        instance.set('value', 1);
        expect(await form.validate()).to.be.false;
        instance.set('value', 11);
        expect(await form.validate()).to.be.true;

        // maxLength
        instance.set({rules: {maxLength: 2}, value: ''});
        instance.set('value', 'a');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'aa');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'aaa');
        expect(await form.validate()).to.be.false;
        instance.set('value', ['a']);
        expect(await form.validate()).to.be.true;
        instance.set('value', ['a', 'a']);
        expect(await form.validate()).to.be.true;
        instance.set('value', ['a', 'a', 'a']);
        expect(await form.validate()).to.be.false;
        instance.set('value', 1);
        expect(await form.validate()).to.be.true;
        instance.set('value', 111);
        expect(await form.validate()).to.be.false;

        // rangeLength
        instance.set({rules: {rangeLength: [1, '2']}, value: ''});
        instance.set('value', 'a');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'aa');
        expect(await form.validate()).to.be.true;
        instance.set('value', 'aaa');
        expect(await form.validate()).to.be.false;
        instance.set('value', ['a']);
        expect(await form.validate()).to.be.true;
        instance.set('value', ['a', 'a']);
        expect(await form.validate()).to.be.true;
        instance.set('value', ['a', 'a', 'a']);
        expect(await form.validate()).to.be.false;
        instance.set('value', 1);
        expect(await form.validate()).to.be.true;
        instance.set('value', 11);
        expect(await form.validate()).to.be.true;
        instance.set('value', 111);
        expect(await form.validate()).to.be.false;

        // min
        instance.set({rules: {min: 0}, value: ''});
        instance.set('value', -1);
        expect(await form.validate()).to.be.false;
        instance.set('value', 0);
        expect(await form.validate()).to.be.true;
        instance.set('value', 1);
        expect(await form.validate()).to.be.true;

        // max
        instance.set({rules: {max: 0}, value: ''});
        instance.set('value', -1);
        expect(await form.validate()).to.be.true;
        instance.set('value', 0);
        expect(await form.validate()).to.be.true;
        instance.set('value', 1);
        expect(await form.validate()).to.be.false;

        // range
        instance.set({rules: {range: [-1, 0]}, value: ''});
        instance.set('value', -2);
        expect(await form.validate()).to.be.false;
        instance.set('value', -1);
        expect(await form.validate()).to.be.true;
        instance.set('value', 0);
        expect(await form.validate()).to.be.true;
        instance.set('value', 1);
        expect(await form.validate()).to.be.false;

        // step
        instance.set({rules: {step: 0.3}, value: ''});
        instance.set('value', 'a.a');
        expect(await form.validate()).to.be.false;
        instance.set('value', 0);
        expect(await form.validate()).to.be.true;
        instance.set('value', 0.1);
        expect(await form.validate()).to.be.false;
        instance.set('value', 0.3);
        expect(await form.validate()).to.be.true;
        instance.set('value', 0.6);
        expect(await form.validate()).to.be.true;
        instance.set('value', -0.6);
        expect(await form.validate()).to.be.true;

        // equalTo
        instance.set({rules: {equalTo: 'value1'}, rules1: {equalTo: 'value'}, value: '', value1: ''});
        const eql = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    expect(el.innerHTML).to.matchSnapshot();
                    resolve();
                }, 400);
            });
        };
        instance.set('value', 1);
        await eql();
        instance.set('value1', 1);
        await eql();
        instance.set('value1', 2);
        await eql();
    });
});
