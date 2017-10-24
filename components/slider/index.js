/**
 * Created by sylvia on 2017/10/18.
 */
import template from './index.vdt'
import './index.styl'

export default class extends Intact{
    get template() { return template;}

    defaults() {
        return {
            size: 'default',// default | small | mini
            max: 100,
            min: 0,
            value: 30,
            isRange: false,
            unit: '',
            isShowEnd: true,
            isShowInput: true,
            step: 10,
        }
    }

    _init() {
        //如有步长不为1时，调整value值
       if(this.get('step')!== 1) {
           let initValue = this.get('value'),
               step = this.get('step'),
               value = Math.round(initValue / step) * step;
           this.set('value', value);
       }
    }

    clickWrapper(e) {
        if(this.get('disabled')) return;
        let currentPosition = e.clientX,
            boundingPostion = this.$slider.getBoundingClientRect().left,
            percent = (currentPosition - boundingPostion) / this.$slider.offsetWidth,
            sliderValue = this.get('max') - this.get('min'),
            step = this.get('step'),
            value;
            if(percent <= 0 ) {
                value = this.get ('min')
            } else if (percent >= 1) {
                value = this.get ('max')
            } else {
                value = Math.round(sliderValue * percent / step) * step ;
            }
        if(!this.get('isRange')) {
                this.set('value', value);
        } else {
            let leftBtnPosition = this.$sliderFirstBtn.getBoundingClientRect().left,
                rightBtnPosition = this.$sliderSecondBtn.getBoundingClientRect().left,
                valueArr = this.get('value');
            Math.abs(leftBtnPosition - currentPosition) <= Math.abs(rightBtnPosition -currentPosition)   ? valueArr[0] = value: valueArr[1] = value;
            this.set('value', valueArr);
            this.update();
        }


    }


}