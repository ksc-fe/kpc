define(function() {
    return $.widget('kpc.popmenu', {
        options: {
            // 菜单位置
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },

            // 菜单关联的按钮
            target: '',

            // 关联按钮的事件
            event: 'click',

            isAddClass: false
        },

        _create: function() {
            this.isOpen = false;

            if (this.options.isAddClass) {
                this.element.addClass('c-menu');
            }

            if (this.options.event === 'click') {
                this._bindClickEvent();
            } else if (this.options.event === 'hover') {
                this._bindHoverEvent();
            }
        },

        _bindHoverEvent: function() {
            var timer = null,
                self = this;

            var hover = function($elem) {
                self._on($elem, {
                    mouseenter: function() {
                        clearTimeout(timer);
                        self.show();
                    },
                    mouseleave: function() {
                        clearTimeout(timer);
                        timer = setTimeout(function() {
                            self.hide();
                        }, 200);
                    }
                });
            };

            hover(this.options.target);
            hover(this.element);
        },

        _bindClickEvent: function() {
            var self = this;

            this._on(this.options.target, {
                'click': function() {
                    self[self.isOpen ? 'hide' : 'show']();
                }
            });
        },

        /**
         * 展示菜单
         */
        show: function() {
            if (this.isOpen) {
                return;
            }
            this.options.target.addClass('active');
            this.element.show();
            this._position();
            // 如果是click事件,还需要绑定document的click事件,让其隐藏菜单
            if (this.options.event === 'click') {
                this._on(this.document, this._documentClick);
            }
            this.isOpen = true;
        },

        /**
         * 隐藏菜单
         */
        hide: function() {
            if (!this.isOpen) {
                return;
            }
            this.options.target.removeClass('active');
            this.element.hide();
            this._off(this.document);
            this.isOpen = false;
        },

        _documentClick: {
            mousedown: function( event ) {
                if ( !this.isOpen ) {
                    return;
                }

                if ( !$( event.target ).closest( ".c-menu" ).length ) {
                    this.hide( event );
                }
            }
        },

        _position: function() {
            this.element.position( $.extend( { of: this.options.target }, this.options.position ) );
        }
    });
});
