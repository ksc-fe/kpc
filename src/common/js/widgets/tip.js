define(function() {
    var $document = $(document);

    $.widget('kpc.tip', {
        options: {
            type: 'success',
            text: '',
            timeout: 5000
        },

        _create: function() {
            this.wrapper = $('<div class="ui-error-tip"></div>').hide();
            this.closeBtn = $('<div class="ui-close c-icon-close-white" title="关闭"></div>').appendTo(this.wrapper);
            this.content = $('<div class="ui-error-content"></div>').appendTo(this.wrapper);
            this.wrapper.appendTo($('body'));

            this._bindEvent();
        },

        _bindEvent: function() {
            this._on(this.wrapper, {
                mouseenter: function() {
                    clearTimeout(this.timer);
                },
                mouseleave: function() {
                    if (this.options.timeout) {
                        this.timer = setTimeout(_.bind(function() {
                            this._hide();
                        }, this), this.options.timeout);
                    }
                }
            });
        },

        _init: function() {
            var self = this,
                opt = this.options;

            this._reset();

            this.wrapper.attr('class',  'ui-error-tip ui-error-tip-' + opt.type);
            this.content.append('<span>' + opt.text + '</span>');
            this.wrapper.show('drop', { direction: 'up' });


            this.closeBtn.one('click', function() {
                self._hide();
            });

            if (opt.timeout) {
                this.timer = setTimeout(function() {
                    self._hide();
                }, opt.timeout);
            }
        },

        _reset: function() {
            clearTimeout(this.timer);
            // 如果有动画，让它立即执行完
            this.wrapper.stop(true, true);
            this.closeBtn.off('click');
            this.content.empty();
        },

        _destroy: function() {
            this._super();
            var $elem = this.wrapper;
            clearTimeout(this.timer);
            $elem.hide('drop', { direction: 'up' }, function() {
                $elem.remove();
            });
        },

        _hide: function() {
            var self = this;
            clearTimeout(this.timer);
            this.wrapper.hide('drop', { direction: 'up' }, function() {
                self._reset();
            });
        }
    });

    /**
     * 绑定在document上，实现单例
     */
    return function(options) {
        return $document.tip(options);
    };  
});
