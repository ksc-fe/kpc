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
            }, 200)
        }, 200);
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

    it('validate asynchronously', (done) => {
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

    it('methods', () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <Form>
                    <FormItem model="value" rules={{ self.get('rules') }} />
                </Form>
            `
            defaults() {
                this.Form = Form;
                this.FormItem = FormItem;
                return {
                    rules: {
                        required: true,
                    }
                }
            }
        }
        instance = mount(Demo);
    });
});
