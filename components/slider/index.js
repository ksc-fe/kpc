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
            value: [20, 50],
            isRange: true,
            unit: '',
            isShowEnd: true
        }
    }

    clickWrapper(e) {
        if(this.get('disabled')) return;
        let currentPosition = e.clientX,
            boundingPostion = this.$slider.getBoundingClientRect().left,
            percent = (currentPosition - boundingPostion) / this.$slider.offsetWidth,
            sliderValue = this.get('max') - this.get('min'),
            value;
            if(percent <= 0 ) {
                value = this.get ('min')
            } else if (percent >= 1) {
                value = this.get ('max')
            } else {
                value = sliderValue * percent;
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