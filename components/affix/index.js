import Intact from 'intact';
import template from './index.vdt';
import ResizeObserver from 'resize-observer-polyfill'; 
import '../../styles/kpc.styl';
import './index.styl';

export default class Affix extends Intact {
    @Intact.template()
    static template = template;

    static events = {
        change: true,
    };

    static propTypes = {
        top: Number,
        bottom: Number,
    };

    defaults() {
        return {
            top: undefined,
            bottom: undefined,

            _style: undefined,
            _containerStyle: undefined,
        }
    }
    
    _mount() {
        this.on('$changed:_style', (c, v, o) => {
            if (v && !o) {
                this.trigger('change', true);
                this._observer();
            } else if (!v) {
                this.trigger('change', false);
                this._disconnect();
            }
        });
        const keys = ['top', 'bottom'];
        this.on('$receive', (c, _keys) => {
            if (keys.find(key => _keys.indexOf(key) > -1)) {
                this._setStyle();
            }
        });

        this._setStyle();
        window.addEventListener('scroll', this._setStyle);
    }

    /**
     * @brief when the container resized, change the fixed element's width
     *
     * @return 
     */
    _observer() {
        const ro = this.ro = new ResizeObserver(() => {
            const {_style} = this.get();
            this.set('_style', {
                ..._style,
                width: this.element.offsetWidth + 'px',
            });
        });
        ro.observe(this.element);
    }

    _disconnect() {
        if (this.ro) {
            this.ro.disconnect();
        }
    }

    _setStyle() {
        let {top: offsetTop, bottom: offsetBottom} = this.get();
        const {top, bottom, width, height} = this.element.getBoundingClientRect();
        const setStyle = (style) => {
            this.set({
                '_style': {
                    position: 'fixed',
                    width: `${width}px`,
                    ...style,
                },
                '_containerStyle': {
                    // width: `${width}px`,
                    height: `${height}px`,
                }
            });
        }

        if (offsetTop == null && offsetBottom == null) {
            offsetTop = 0;
        }
        if (offsetTop != null) {
            if (top <= offsetTop) {
                return setStyle({top: `${offsetTop}px`});
            } 
        } else {
            const viewportHeight = document.documentElement.clientHeight;
            if (viewportHeight - bottom <= offsetBottom) {
                return setStyle({bottom: `${offsetBottom}px`});
            }
        }

        return this.set({'_style': undefined, '_containerStyle': undefined});
    }

    _destroy() {
        window.removeEventListener('scroll', this._setStyle);
        this._disconnect();
    }
}
