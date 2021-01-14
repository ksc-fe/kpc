import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose";
import Intact from 'intact-vue';
import FormItem from './formItem';
import { hasOwn } from '../utils';
var h = Intact.Vdt.miss.h;

function Wrapper(props) {
  var key = props.key,
      _context = props._context,
      model = props.model,
      rest = _objectWithoutPropertiesLoose(props, ["key", "_context", "model"]);

  if (!key && model) {
    key = "$fi." + model;
  }

  return h(FormItem, _Object$assign({
    key: key,
    model: model,
    _context: _context
  }, model ? {
    'ev-$change:value': function ev$changeValue(c, v) {
      _context.data.set(model, v, {
        async: false
      });
    },
    value: _context.data.get(model)
  } : hasOwn.call(rest, 'value') ? // add a model to let FormItem validate this value
  {
    model: '__use_value'
  } : undefined, {}, rest));
}

Wrapper.blocks = FormItem.blocks;
export default Intact.functionalWrapper ? Intact.functionalWrapper(Wrapper) : Wrapper;