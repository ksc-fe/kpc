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
        exclude: Function,
        shouldFix: Function,
    };

    defaults() {
        return {
            top: undefined,
            bottom: undefined,
            exclude: undefined,
            shouldFix: undefined,

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
        // for convenience of unit test
        ['top', 'bottom'].forEach(item => {
            this.on(`$change:${item}`, this._setStyle);
        })
        // const keys = ['top', 'bottom'];
        // this.on('$receive', (c, _keys) => {
            // if (keys.find(key => _keys.indexOf(key) > -1)) {
                // this._setStyle();
            // }
        // });

        this._setStyle();
        window.addEventListener('scroll', this._setStyle);
        // when window resize the position may change
        window.addEventListener('resize', this._setStyle);
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

    _setStyle(e) {
        let {top: offsetTop, bottom: offsetBottom, exclude, shouldFix} = this.get();
        const {top, bottom, width, height} = this.element.getBoundingClientRect();

        const resetStyle = () => {
            this.set({'_style': undefined, '_containerStyle': undefined});
        };
        const setStyle = (style) => {
            if (!exclude || exclude && !exclude.call(this, {
                offsetTop, offsetBottom, top, bottom, width, height
            })) {
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
            } else {
                resetStyle();
            }
        };

        if (offsetTop == null && offsetBottom == null) {
            offsetTop = 0;
        }

        if (offsetTop != null) {
            if (
                shouldFix && shouldFix.call(this, {offsetTop, offsetBottom}) || 
                !shouldFix && top <= offsetTop
            ) {
                return setStyle({top: `${offsetTop}px`});
            }
        } else {
            const viewportHeight = document.documentElement.clientHeight;
            if (
                shouldFix && shouldFix.call(this, {offsetTop, offsetBottom, viewportHeight}) || 
                !shouldFix && viewportHeight - bottom <= offsetBottom
            ) {
                return setStyle({bottom: `${offsetBottom}px`});
            }
        }

        return resetStyle();
    }

    _destroy() {
        window.removeEventListener('scroll', this._setStyle);
        window.removeEventListener('resize', this._setStyle);
        this._disconnect();
    }
}

export {Affix};
