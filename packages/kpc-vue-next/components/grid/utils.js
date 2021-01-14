import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
export default function gutterStyle(gutter, style, prop) {
  if (prop === void 0) {
    prop = 'margin';
  }

  var margin = gutter / 2;
  var sign = prop === 'margin' ? '-' : '';
  if (!style) style = '';

  if (typeof style === 'string') {
    style = "" + style + (!style || /;\s*$/.test(style) ? '' : ';') + prop + "-left: " + sign + margin + "px; " + prop + "-right: " + sign + margin + "px;";
  } else {
    var _Object$assign2;

    style = _Object$assign((_Object$assign2 = {}, _Object$assign2[prop + "Left"] = "" + sign + margin + "px", _Object$assign2[prop + "Right"] = "" + sign + margin + "px", _Object$assign2), style);
  }

  return style;
}
export var breakpoints = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];