import Intact from 'intact';
import template from './panel.vdt';
import  tinycolor from 'tinycolor2';
import '../../styles/kpc.styl';
import './index.styl';

export default class ColorPanel extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        value: {
            type: String,
            required: true,
        },
        presets: Array,
    };

    defaults() {
        return {
            value: undefined,
            presets: [],
        };
    }

    _init() {
        this._initValues();
        this.on('$change:value', this._initValues);
    }

    _initValues() {
        const color = tinycolor(this.get('value')); 
        const oldHue = this._hsl ? this._hsl.h : null;
        
        this._color = color;
        this._format = color.getFormat();
        this._rgb = color.toRgb();
        this._hsv = color.toHsv();
        this._hsl = color.toHsl();
        this._hex = color.toHex();

        // if the r === g === b, keep the hue as the old value
        const {r, g, b} = this._rgb;
        if (r === g && g === b && oldHue !== null) {
            this._hsv.h = this._hsl.h = oldHue;
        }
    }

    _handleChange(e) {
        const {width, height, left: _left, top: _top} = this.refs.saturation.getBoundingClientRect();
        const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
        const y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
        let left = x - _left - window.pageXOffset;
        let top = y - _top - window.pageYOffset;

        left = Math.max(Math.min(width, left), 0);
        top = Math.max(Math.min(height, top), 0);

        const saturation = left / width;
        const bright = -top / height + 1;

        const hsv = this._hsv;
        hsv.s = saturation; 
        hsv.v = bright;
        const value = tinycolor(hsv).toString(this._format);

        this.set({value});
    }

    _onMouseDown(e) {
        this._handleChange(e);

        window.addEventListener('mousemove', this._onMouseMove);
        window.addEventListener('mouseup', this._onMouseUp);
    }

    _onMouseMove(e) {
        this._handleChange(e);        
    }

    _onMouseUp() {
        window.removeEventListener('mousemove', this._onMouseMove);
        window.removeEventListener('mouseup', this._onMouseUp);
    }

    _onChangeHue(c, v) {
        const hsl = this._hsl;
        hsl.h = v;
        const value = tinycolor(hsl).toString(this._format);
        // maybe r === g === b, the value is the same, even if we change the hue
        if (this.get('value') === value) {
            this.update();
        } else {
            this.set('value', value);
        }
    }

    _onChangeAlpha(c, v) {
        const rgb = this._rgb;
        rgb.a = v;
        this.set('value', tinycolor(rgb).toRgbString());
    }

    _onInputHex(e) {
        const hex = e.target.value.trim();
        const color = tinycolor(hex);
        if (color.isValid()) {
            this.set('value', color.toString(this._format));
        }
    }

    _changeRgb(type, e) {
        this._setInputValue(type, e, 255);
    }

    _changeAlpha(e) {
        this._setInputValue('a', e, 100, (v) => v / 100);
    }

    _setInputValue(type, e, maxValue, filter) {
        let value = e.target.value.trim();
        value = parseInt(value, 10);
        if (Number.isNaN(value)) return;

        value = Math.min(Math.max(0, value), maxValue);
        value = filter ? filter(value) : value;

        this._setValue(type, value);
    }

    _setValue(type, value) {
        const rgb = this._rgb;
        if (rgb[type] === value) return;

        rgb[type] = value; 
        this.set('value', tinycolor(rgb).toString('rgb'));
    }

    /**
     * disable animation of slider when we drag to change the value
     */
    _onDragStart() {
        this.refs.hueSlider.set('animate', false);
        this.refs.alphaSlider.set('animate', false);
    }

    _onDragEnd() {
        this.refs.hueSlider.set('animate', true);
        this.refs.alphaSlider.set('animate', true);
    }

    _forceUpdate() {
        this.update();
    }

    _destory() {
        this._onMouseUp();
    }
}
