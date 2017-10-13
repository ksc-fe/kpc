import Intact from 'intact';
import Button from './index';

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
  
  let buttonVM;

  afterEach(() => {
      //buttonVM.$destroy(); //Intact未暴露$destroy
  });

  //Button type属性
  it('should render correct primary type button', () => {
    buttonVM = getRenderedInstance(Button, {
        type: "primary"
    });
    // let type = buttonVM.get('type');
    // expect(type).to.equal("primary");
    buttonVM.init();
    let buttonEle = buttonVM.element;
    console.log('buttonEle', buttonEle);
    expect(buttonEle.classList.contains('k-primary')).to.be.true;
  });

})