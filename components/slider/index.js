/**
 * Created by sylvia on 2017/10/18.
 */
import Intact from 'intact';
import template from './index.vdt'
import '../../styles/kpc.styl';
import './index.styl'

export default class Slider extends Intact {
    get template() { return template; }

    defaults() {
        return {
            max: 100,
            min: 0,
            value: 0,
            isRange: false,
            unit: '',
            isShowEnd: true,
            isShowInput: true,
            step: 1,

            _sliderValue: 0,
            _inputValue:0,
            _isDragging: false,
            _isFirst: false,
            _isSecond: false,
        }
    }

    static propTypes = {
        max: Number,
        min: Number,
        value: Number,
        isRange: Boolean,
        unit: String,
        isShowEnd: Boolean,
        isShowInput: Boolean,
        step: Number,
    }

    _init() {
        this._setFixedValue(this.get('value'));

        this.on("$change:_inputValue", (c, val) => {
            if (!this.get('_isDragging')) {
                this._setFixedValue(val);
            }
        });
    }

    _beforeUpdate(lastVNode, nextVNode) {
        if (lastVNode && nextVNode) {
            this._setFixedValue(this.get('value'));
        }
    }

    _setFixedValue(value) {
        const fixedValue = this._getFixedValue(value);
        this.set({
            value: fixedValue,
            _inputValue: fixedValue,
            _sliderValue: fixedValue,
        });
    }

    _getFixedValue(value) {
        let {step, max, min, isRange} = this.get();

        function fix(v) {
            if (Number.isNaN(Number(v))) {
                return min;
            } else if (v < min) {
                return min;
            } else if (v > max) {
                return max;
            } else {
                // for the accuracy
                return Number((Math.round(v / step) * step).toFixed(10));
            }
        }

        let fixedValue;
        if (isRange) {
            if (!Array.isArray(value)) {
                fixedValue = [min, min];
            } else {
                fixedValue = [fix(value[0]), fix(value[1])];
            }
        } else {
            fixedValue = fix(value);
        }

        return fixedValue;
    }

    _clickWrapper(e) {
        if (this.get('disabled') || this.get('_isDragging')) return;

        let currentPosition = e.clientX;
        let newValue = this._getSlidingValue(currentPosition);
        if (this.get('isRange')) {
            let leftBtnPosition = this.$sliderFirstBtn.getBoundingClientRect().left,
                rightBtnPosition = this.$sliderSecondBtn.getBoundingClientRect().left,
                valueArr = this.get('value').slice();
            if (Math.abs(leftBtnPosition - currentPosition) <= Math.abs(rightBtnPosition - currentPosition))  {
                valueArr[0] = newValue;
            } else {
                valueArr[1] = newValue;
            }
            newValue = valueArr;
        }

        this._setFixedValue(newValue);
    }
    
    _getSlidingValue(pos) {
        const rect = this.$slider.getBoundingClientRect();
        const percent = (pos - rect.left) / rect.width;
        const {max, min} = this.get();
        const sliderWidth = max - min;

        if (percent <= 0 ) {
            return min;
        } else if (percent >= 1) {
            return max;
        } else {
            return min + sliderWidth * percent;
        }
    }

    _onDrag(indexFlag, e) {
        if (this.get('disabled')) return;

        if (indexFlag) {
            const value = this.get('value');
            this._min = value[0];
            this._max = value[1];
            if (indexFlag === '_isFirst') {
                this.set({
                    _isDragging: true,
                    _isFirst: true,
                    _isSecond: false
                });
            } else {
                this.set({
                    _isDragging: true,
                    _isFirst: false,
                    _isSecond: true
                });
            }
        } else {
            this.set('_isDragging', true);
        }

        this.__onRangeSliding = this._onRangeSliding.bind(this, indexFlag);
        this.__onRangeSlideEnd = this._onRangeSlideEnd.bind(this, indexFlag);
        window.addEventListener('mousemove', this.__onRangeSliding);
        window.addEventListener('mouseup', this.__onRangeSlideEnd);
    }

    _onRangeSliding(indexFlag, e){
        if (this.get('disabled')) return;

        let tempValue = this._getSlidingValue(e.clientX, this.get('_isDragging'));
        let fixedValue;
        if (indexFlag) {
            if (indexFlag === '_isFirst') {
                if (this.get('_isSecond')) return;
                tempValue = [
                    Math.min(tempValue, this._max),
                    Math.max(tempValue, this._max)
                ];
            } else {
                if (this.get ('_isFirst')) return;
                tempValue = [
                    Math.min(tempValue, this._min),
                    Math.max(tempValue, this._min)
                ];
            }
        }

        fixedValue = this._getFixedValue(tempValue);

        this.set({
            value: fixedValue,
            _inputValue: fixedValue,
            _sliderValue: tempValue,
        });
    }

    _onRangeSlideEnd(indexFlag, e){
        if (this.get('disabled')) return;

        if (this.get('_isDragging')) {
            this.set('_isDragging', false, {silent: true});
            let newValue = this._getSlidingValue(e.clientX);
            if (indexFlag) {
                if (indexFlag === '_isFirst') {
                    if (this.get('_isSecond')) return;
                    this.set('_isFirst', false, {async: true});
                    newValue = [
                        Math.min(newValue, this._max), 
                        Math.max(newValue, this._max)
                    ];
                } else {
                    if (this.get('_isFirst')) return;
                    this.set('_isSecond', false, {async: true});
                    newValue = [
                        Math.min(newValue, this._min),
                        Math.max(newValue, this._min)
                    ];
                }
            }

            this._setFixedValue(newValue);

            this.trigger('stop', this.get('value'));

            window.removeEventListener('mousemove', this.__onRangeSliding);
            window.removeEventListener('mouseup', this.__onRangeSlideEnd);
        }
    }

    _stopPropagation(e) {
        e.stopPropagation();
    }

    _destory() {
        this._onRangeSlideEnd()
    }
}

export {Slider};
