import {Button} from './';
import {dispatchEvent, mount, unmount, wait} from '../../test/utils';
import GroupDemo from '~/components/button/demos/group';
import {findDomFromVNode} from 'intact';
import {button as buttonStyles} from './styles';
import tinycolor from 'tinycolor2';

describe('Button', () => {
    afterEach(() => unmount());

    it('should change value when click radio buttons', async () => {
        const [instance] = mount(GroupDemo);

        const radioShanggaiElement = findDomFromVNode(instance.refs.__radioShanghai.$lastInput, true) as HTMLElement;
        dispatchEvent(radioShanggaiElement, 'click');
        await wait();
        expect(instance.get('city')).to.eql('shanghai');

        const checkboxShanghaiElement = findDomFromVNode(instance.refs.__checkboxShanghai.$lastInput, true) as HTMLElement;
        dispatchEvent(checkboxShanghaiElement, 'click');
        await wait();
        expect(instance.get('cities')).to.eql(['shanghai']);

        dispatchEvent(checkboxShanghaiElement, 'click');
        await wait();
        expect(instance.get('cities')).to.eql([]);

        // should set value correctly, even if the type of value is not an array
        instance.set<string>('cities', '');
        dispatchEvent(checkboxShanghaiElement, 'click');
        await wait();
        expect(instance.get('cities')).to.eql(['shanghai']);
    });

    it('method test', async () => {
        const [instance, element] = mount(Button);

        instance.showLoading();
        await wait();
        expect(element.classList.contains('k-loading')).to.be.true;
        instance.hideLoading();
        await wait();
        expect(element.classList.contains('k-loading')).to.be.false;
        instance.disable();
        await wait();
        expect(element.classList.contains('k-disabled')).to.be.true;
        instance.enable();
        await wait();
        expect(element.classList.contains('k-disabled')).to.be.false;
    });

    it('should blur on mouse up', async () => {
        const [, element] = mount(Button);

        element.focus();
        // test color of focus style 
        await wait(500); // has transition
        expect(tinycolor(getComputedStyle(element).color).toHexString()).to.eql(buttonStyles.hoverColor);
        
        dispatchEvent(element, 'mouseup');
        await wait(500);
        expect(tinycolor(getComputedStyle(element).color).toHexString()).to.eql(buttonStyles.color);
    });
});
