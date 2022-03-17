import Button from 'kpc/components/button';
import {dispatchEvent, mount, unmount, wait} from 'test/utils';
import GroupDemo from '~/components/button/demos/group';

describe('Button', () => {
    let instance;

    afterEach(() => {
        unmount(instance);
    });

    it('should change value when click radio buttons', () => {
        instance = mount(GroupDemo);

        dispatchEvent(instance.refs.__radioShanghai.element, 'click');
        expect(instance.get('city')).to.eql('shanghai');
        dispatchEvent(instance.refs.__checkboxShanghai.element, 'click');
        expect(instance.get('cities')).to.eql(['shanghai']);
        dispatchEvent(instance.refs.__checkboxShanghai.element, 'click');
        expect(instance.get('cities')).to.eql([]);

        // should set value correctly, even if the type of value is not an array
        instance.set('cities', '');
        dispatchEvent(instance.refs.__checkboxShanghai.element, 'click');
        expect(instance.get('cities')).to.eql(['shanghai']);
    });

    it('method test', () => {
        instance = mount(Button);

        instance.showLoading();
        expect(instance.element.outerHTML).to.matchSnapshot();
        instance.hideLoading();
        expect(instance.element.outerHTML).to.matchSnapshot();
        instance.disable();
        expect(instance.element.outerHTML).to.matchSnapshot();
        instance.enable();
        expect(instance.element.outerHTML).to.matchSnapshot();
    });

    it('should blur on mouse up', async () => {
        instance = mount(Button);

        const el = instance.element;
        el.focus();
        // test color of focus style
        await wait(500); // has transition
        expect(getComputedStyle(el).color).to.eql('rgb(10, 94, 238)');
        dispatchEvent(el, 'mouseup');
        await wait(500);
        expect(getComputedStyle(el).color).to.eql('rgb(89, 89, 89)');
    });
});
