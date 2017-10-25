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
            _inputValue:0,
            _isDragging: false
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
        this.set('_inputValue', this.get('value'));
        this._onSliding = this._onSliding.bind(this);
        this._onSlideEnd = this._onSlideEnd.bind(this);

    }

    clickWrapper(e) {
        if (this.get('disabled')|| this.get('_isDragging')) return;
        let currentPosition = e.clientX;
        let newValue = this._setNewValue(currentPosition, this.get('_isDragging'));
        if (!this.get('isRange')) {
                this.set({
                    'value': newValue,
                    '_inputValue': newValue
                });
        } else {
            let leftBtnPosition = this.$sliderFirstBtn.getBoundingClientRect().left,
                rightBtnPosition = this.$sliderSecondBtn.getBoundingClientRect().left,
                valueArr = this.get('value');
            if (Math.abs(leftBtnPosition - currentPosition) <= Math.abs(rightBtnPosition -currentPosition))  {
                valueArr[0] = newValue;
            } else {
                valueArr[1] = newValue;
            }

            this.set('value', valueArr);
            this.update();
        }
    }

    onDragBtn(e) {
        this.set('_isDragging', true);
        window.addEventListener('mousemove', this._onSliding);
        window.addEventListener('mouseup', this._onSlideEnd)
    }


    _onSliding(e) {
        let tempValue = this._setNewValue(e.clientX, this.get('_isDragging')),
            step = this.get('step');
        this.set(
            {
                'value': tempValue,
                '_inputValue': Math.round(tempValue / step) * step
            }
        );

    }
    _onSlideEnd(e) {
        if (this.get('_isDragging')) {
            setTimeout(() => {
                this.set('_isDragging', false);
                let newValue = this._setNewValue(e.clientX, this.get('_isDragging'));
                this.set({
                    'value': newValue,
                    '_inputValue': newValue,
                });
                this.trigger('stop', newValue);
            }, 0);
            window.removeEventListener('mousemove', this._onSliding);
            window.removeEventListener('mouseup', this._onSlideEnd);
        }
    }

    _setNewValue(startPos, isdragging) {
        let currentPosition = startPos,
            boundingPosition = this.$slider.getBoundingClientRect().left,
            percent = (currentPosition - boundingPosition) / this.$slider.offsetWidth,
            sliderValue = this.get('max') - this.get('min'),
            step = this.get('step'),
            value;
        if (percent <= 0 ) {
            value = this.get ('min');
        } else if (percent >= 1) {
            value = this.get ('max')
        } else {
            value = isdragging ? sliderValue * percent : Math.round(sliderValue * percent / step) * step;
        };

        return value;
    }

}