/**
 * Created by xuchaozheng on 16-3-16.
 */
define(['node_modules/kpc/src/views/components/slider'], function(template) {
    return Intact.extend({
        defaults: {
            'min':0,
            'max':100,
            'value':0,
            'unit':'',
            'width':200,
            'step':1,
        },
        template: template,
        _create: function() {
            var self = this;
            $(self.element).find(".slider").slider({
                orientation: "horizontal",
                range: 'min',
                max: self.get('max'),
                min: self.get('min'),
                value: self.get('value'),
                slide:function(event, ui){
                    self._validateSliderValue(ui.value);
                },
                stop:function(event, ui){
                    self._validateSliderValue(ui.value);
                    self.trigger('stop', self.get('value'));
                }
            });

        },
        _validateInput: function(e) {
            this._validateSliderValue(e.target.value);
            this.trigger('stop', this.get('value'));
        },
        _validateSliderValue: function(value) {
            var r = /^[0-9]*$/;
            this.set('value', value);
            if(r.test(value)){
                var sValue = value > this.get('max') ? this.get('max') : value;
                    sValue = sValue < this.get('min') ? this.get('min') : sValue;
                this._setSliderValue(sValue);
            }else{
                this._setSliderValue(this.get("min"));
            }
        },
        _setSliderValue: function(value) {
            if(value !== this.get('max') && value !== this.get('min')) {
                value = Math.ceil(value / this.get('step')) * this.get('step');
            }
            $(this.element).find('.slider').slider( "option", "value", value);
            this.set("value",value);
        },
        _destroy: function() {
            $(this.element).find('.slider').slider('destroy');
        }
    });
});
