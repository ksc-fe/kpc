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
  
  let button, app;

  afterEach(() => {
      //button.destroy();
      //document.body.removeChild(button.element);
  });

  //Button type属性
  it('should render correct primary type button', () => {
    button = getRenderedInstance(Button, {
        type: "primary"
    });
    let type = button.get('type');
    expect(type).to.equal("primary");
    // button.init();
    // button.mount();
    // let buttonEle = button.element;
    // console.log('buttonEle', buttonEle);
    // expect(buttonEle.classList.contains('k-primary')).to.be.true;
  });

})