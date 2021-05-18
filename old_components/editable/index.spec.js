import BasicDemo from '~/components/editable/demos/basic';
import ValidateDemo from '~/components/editable/demos/validate';
import {mount, unmount, dispatchEvent} from 'test/utils';
import Editable from 'kpc/components/editable';
import Intact from 'intact';

describe('Editable', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('basic test', () => {
        instance = mount(BasicDemo);

        const editable = instance.refs.__test;
        editable._edit();
        expect(instance.element.innerHTML).to.matchSnapshot();

        // input
        let input = editable.element.querySelector('input');
        input.value = 'test';
        input.blur();
        expect(instance.element.innerHTML).to.matchSnapshot();

        // keydown: esc
        editable._edit();
        input = editable.element.querySelector('input');
        input.value = 'new';
        dispatchEvent(input, 'keydown', {keyCode: 27});
        expect(instance.element.innerHTML).to.matchSnapshot();

        // keydown: enter
        editable._edit();
        input = editable.element.querySelector('input');
        input.value = 'new';
        dispatchEvent(input, 'keydown', {keyCode: 13});
        expect(instance.element.innerHTML).to.matchSnapshot();

        // reset
        editable.reset();
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('validate test', () => {
        instance = mount(ValidateDemo);

        const {__test1: first, __test2: second, __test3: third} = instance.refs;

        // validate
        first._edit();
        let input = first.element.querySelector('input');
        input.value = 'a';
        input.blur();
        expect(instance.element.innerHTML).to.matchSnapshot();

        second._edit();
        input = second.element.querySelector('input');
        input.value = 'a';
        input.blur();
        expect(instance.element.innerHTML).to.matchSnapshot();

        third._edit();
        input = third.element.querySelector('input');
        input.value = 'a';
        input.blur();
        expect(instance.element.innerHTML).to.matchSnapshot();

        // required
        input.focus();
        input.value = '';
        input.blur();
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('handle correctly even if the value is undefined', () => {
        class Demo extends Intact {
            @Intact.template()
            static template = `<Editable>{{ self.get('value') }}</Editable>`;

            defaults() {
                return {value: 'test'};
            }

            _init() {
                this.Editable = Editable;
            }
        }
        instance = mount(Demo);

        expect(instance.element.outerHTML).to.matchSnapshot();
        instance.element.querySelector('.k-edit').click();
        let input = instance.element.querySelector("input");
        input.value = 'aa';
        input.blur();
        expect(instance.element.outerHTML).to.matchSnapshot();
        instance.element.querySelector('.k-edit').click();
        input = instance.element.querySelector("input");
        expect(input.value).to.eql('aa');
    });
});
