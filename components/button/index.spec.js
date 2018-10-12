import Intact from 'intact';
import Button from 'kpc/components/button';
import {dispatchEvent, mount} from 'test/utils';
import GroupDemo from '~/components/button/demos/group';

describe('Button', () => {
    let instance;

    afterEach(() => {
        instance.destroy();
        document.body.removeChild(instance.element);
    });

    it('should change value when click radio buttons', () => {
        instance = mount(GroupDemo);

        dispatchEvent(instance.refs.__radioShanghai.element, 'click');
        expect(instance.get('city')).to.eql('shanghai');
        dispatchEvent(instance.refs.__checkboxShanghai.element, 'click');
        expect(instance.get('cities')).to.eql(['shanghai']);
        dispatchEvent(instance.refs.__checkboxShanghai.element, 'click');
        expect(instance.get('cities')).to.eql([]);
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
});
