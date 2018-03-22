import Intact from 'intact';
import Button from './index';
import App from '../app/index';

/**
 * @desc 创建Intact组件实例
 * @param {Object} Component Intact组件
 * @param {Object} propsData props数据
 * @return {Object} Intact实例
 */
function getRenderedInstance (Component, propsData) {
    const Ctor = Intact.extend({
      defaults: Component.defaults,
      template: Component.template
    });
    const instance = new Ctor(propsData);
    return instance;
}

describe('Button unit test:', () => {
    let button;

    afterEach(() => {
        button.destroy();
    });

    it('should render correct primary type button', () => {
        button = render(Button, {
            type: "primary"
        });
        let buttonEle = button.element;
        expect(buttonEle.classList.contains('k-primary')).to.be.true;
        expect('aah').to.matchSnapshot();
    });
});
