/**
 * Created by sylvia on 2017/10/18.
 */
import Intact from 'intact';
import template from './index.vdt'
import '../../styles/kpc.styl';
import './index.styl';
import {minMaxStep, isNullOrUndefined} from '../utils';

const {isEqual} = Intact.utils;

export default class Slider extends Intact {
    get template() { return template; }

    defaults() {
        return {
            max: 100,
            min: 0,
            value: undefined,
            isRange: false,
            unit: '',
            isShowEnd: true,
            isShowInput: true,
            step: 1,
            isShowStop: false,
            marks: undefined,
            disabled: false,
            showTooltip: false,
            always: false,
            animate: true,

            _sliderValue: 0,
            _inputValue: 0,
            _isDragging: false,
            _isFirst: false,
            _isSecond: false,
        }
    }

    static propTypes = {
        max: Number,
        min: Number,
        value: [Number, Array],
        isRange: Boolean,
        unit: String,
        isShowEnd: Boolean,
        isShowInput: Boolean,
        step: Number,
        isShowStop: Boolean,
        marks: Object,
        disabled: Boolean,
        showTooltip: Boolean,
        always: Boolean,
        animate: Boolean,
    };

    static events = {
        change: true,
    };

    static blocks = ['tooltip'];

    _init() {
        this.on("$change:_inputValue", (c, val) => {
            if (!this.get('_isDragging')) {
                this._setFixedValue(val, true);
            }
        });
        // make sure the min/max/step is valid
        const defaults = this.defaults();
        ['min', 'max', 'step'].forEach(item => {
            this.on(`$receive:${item}`, (c, v) => {
                if (typeof v !== 'number') {
                    this.set(item, defaults[item], {async: true});
                }
            });
        });
        const needFixedKeys = ['min', 'max', 'step', 'value'];
        this.on('$receive', (c, keys) => {
            if (
                !this.get('_isDragging') &&
                needFixedKeys.find(key => keys.indexOf(key) > -1)
            ) {
                this._setFixedValue(this.get('value'));
            }
        });

        // trigger change event expect dragging
        // we will also trigger the event on keyup and dragend
        this.on('$change:value', (c, v) => {
            if (!this.get('_isDragging')) {
                this.trigger('change', v);
            }
        });

        // position the tooltip after value changed
        this.on('$changed:value', () => {
            if (this.get('always')) {
                this._showTooltip();
            }
        });
    }

    _setFixedValue(value, isFromSpinner) {
        const fixedValue = this._getFixedValue(value);
        this.set({
            value: fixedValue,
            _inputValue: isFromSpinner ? value : fixedValue,
            _sliderValue: fixedValue,
        });
    }

    _getFixedValue(value) {
        let {min, isRange} = this.get();

        let fixedValue;
        if (isRange) {
            if (!Array.isArray(value)) {
                fixedValue = [min, min];
            } else {
                fixedValue = [this._fix(value[0]), this._fix(value[1])];
            }
        } else {
            fixedValue = this._fix(value);
        }

        return fixedValue;
    }

    _fix(v) {
        let {step, max, min} = this.get();

        if (min > max) {
            Intact.utils.error(new Error(`[Slider] min must less than or equal to max, but got min: ${min} max: ${max}`));
            return 0;
        }

        if (Number.isNaN(Number(v))) return min;
        return minMaxStep(v, min, max, step);
    }

    _clickWrapper(e) {
        if (this.get('disabled') || this.get('_isDragging')) return;

        let currentPosition = e.clientX;
        let newValue = this._getSlidingValue(currentPosition);
        if (this.get('isRange')) {
            newValue = this._generateRangeValue(newValue);
        }

        this._setFixedValue(newValue);
    }

    _generateRangeValue(v) {
        const [min, max] = this.get('value');
        if (Math.abs(min - v) <= Math.abs(max - v)) {
            return [v, max];
        } else {
            return [min, v];
        }
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

        this._isDragging = true;

        // when start drag, the element has been focusin
        // so we need not handle it here

        this.__onRangeSliding = this._onRangeSliding.bind(this, indexFlag);
        this.__onRangeSlideEnd = this._onRangeSlideEnd.bind(this, indexFlag);
        window.addEventListener('mousemove', this.__onRangeSliding);
        window.addEventListener('mouseup', this.__onRangeSlideEnd);
    }

    _onRangeSliding(indexFlag, e){
        let tempValue = this._getSlidingValue(e.clientX, this.get('_isDragging'));
        let fixedValue;

        tempValue = this._getTempValue(
            tempValue, indexFlag,
            this._min, this._max,
            indexFlag === '_isFirst'
        );

        fixedValue = this._getFixedValue(tempValue);

        this.set({
            value: fixedValue,
            _inputValue: fixedValue,
            _sliderValue: tempValue,
        });
        this._showTooltip();
    }

    _showTooltip() {
        if (!this.get('showTooltip')) return;

        const {tooltip1, tooltip2} = this.refs;
        tooltip1.show();
        tooltip1.position();
        if (tooltip2) {
            tooltip2.show();
            tooltip2.position();
        }
    }

    _hideTooltip() {
        const {tooltip1, tooltip2} = this.refs;
        tooltip1.hide();
        if (tooltip2) {
            tooltip2.hide();
        }
    }

    _getTempValue(value, isRange, min, max, isFirst) {
        if (isRange) {
            if (isFirst) {
                return [
                    Math.min(value, max),
                    Math.max(value, max)
                ];
            } else {
                return [
                    Math.min(value, min),
                    Math.max(value, min)
                ]
            }
        }
        return value;
    }

    _onRangeSlideEnd(indexFlag, e){
        if (this.get('_isDragging')) {
            this.set('_isDragging', false, {async: true});
            let newValue = this._getSlidingValue(e.clientX);
            if (indexFlag) {
                if (indexFlag === '_isFirst') {
                    this.$sliderFirstBtn.blur();

                    this.set('_isFirst', false, {async: true});
                    newValue = [
                        Math.min(newValue, this._max),
                        Math.max(newValue, this._max)
                    ];
                } else {
                    this.$sliderSecondBtn.blur();

                    this.set('_isSecond', false, {async: true});
                    newValue = [
                        Math.min(newValue, this._min),
                        Math.max(newValue, this._min)
                    ];
                }
            } else {
                this.$sliderFirstBtn.blur();
            }

            this._setFixedValue(newValue);

            // this.trigger('stop', this.get('value'));
            this._triggerChangeEvent();

            window.removeEventListener('mousemove', this.__onRangeSliding);
            window.removeEventListener('mouseup', this.__onRangeSlideEnd);

            this._isDragging = false;
        }
    }

    _onFocusin(indexFlag, e) {
        if (this.get('disabled')) return;

        // when mouse down the handle will focus too
        // if the focusin is invoked by mousedown for dragging
        // let the handle element blur to ignore keyboard operations
        // but we also need to set the states
        if (this._isDragging) {
            e.target.blur();
        }

        // remain the old value to detect change to trigger change event
        this._oldValue = this.get('value');

        if (this.get('isRange')) {
            const value = this.get('value');
            this._min = value[0];
            this._max = value[1];
            if (indexFlag === '_isFirst') {
                this._initValue = this._min;
                this.set({
                    _isDragging: true,
                    _isFirst: true,
                    _isSecond: false
                });
            } else {
                this._initValue = this._max;
                this.set({
                    _isDragging: true,
                    _isFirst: false,
                    _isSecond: true
                });
            }
        } else {
            this.set('_isDragging', true);
        }
        this._showTooltip();
    }

    _onFocusout(indexFlag) {
        if (this.get('disabled') || this._isDragging) return;

        if (this.get('isRange')) {
            if (indexFlag === '_isFirst') {
                this.set('_isFirst', false, {async: true});
            } else {
                this.set('_isSecond', false, {async: true});
            }
        }

        this.set('_isDragging', false, {async: true});
        this._hideTooltip();
    }

    _onKeydown(indexFlag, e) {
        if (this.get('disabled')) return;

        const step = this.get('step');
        if (e.keyCode === 37) { // left
            this._setValue(indexFlag, -step);
        } else if (e.keyCode === 39) { // right
            this._setValue(indexFlag, step);
        }
    }

    // trigger change event when keyup
    _onKeyUp({keyCode}) {
        if (keyCode === 37 || keyCode === 39) {
            this._triggerChangeEvent();
        }
    }

    _triggerChangeEvent() {
        const {value} = this.get();
        if (!isEqual(this._oldValue, value)) {
            this._oldValue = value;
            this.trigger('change', value);
        }
    }

    _setValue(indexFlag, step) {
        const value = this.get('value');

        if (!this.get('isRange')) {
            this._setFixedValue(value + step);
        } else {
            this._initValue += step;
            this._initValue = this._fix(this._initValue);

            let _value = this._getTempValue(
                this._initValue, indexFlag,
                this._min, this._max,
                indexFlag === '_isFirst'
            );

            this._setFixedValue(_value);

            // if overstep the boundary, reverse it
            if (indexFlag === '_isFirst') {
                if (this._initValue > this._max) {
                    this.$sliderFirstBtn.blur();
                    this.$sliderSecondBtn.focus();
                }
            } else if (indexFlag === '_isSecond') {
                if (this._initValue < this._min) {
                    this.$sliderSecondBtn.blur();
                    this.$sliderFirstBtn.focus();
                }
            }
        }
        this._showTooltip();
    }

    // only change the input value after change event tiggered, #294
    _onChange() {
        this.set('_inputValue', this.get('value'));
    }

    _setOneValue(v) {
        if (!this.get('isRange')) {
            this._setFixedValue(v);
        } else {
            this._setFixedValue(this._generateRangeValue(v));
        }
    }

    _stopPropagation(e) {
        /* istanbul ignore next */
        e.stopPropagation();
    }

    _destroy() {
        this._onRangeSlideEnd()
    }
}

export {Slider};
