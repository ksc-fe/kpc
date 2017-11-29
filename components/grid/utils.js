export default function gutterStyle(gutter, style, prop = 'margin') {
    let margin = gutter / 2;
    let sign = prop === 'margin' ? '-' : '';
    if (!style) style = '';
    if (typeof style === 'string') {
        style = `${style}${!style || /;\s*$/.test(style) ? '' : ';'}${prop}-left: ${sign}${margin}px; ${prop}-right: ${sign}${margin}px;`
    } else {
        style = {
            [`${prop}Left`]: `${sign}${margin}px`,
            [`${prop}Right`]: `${sign}${margin}px`,
            ...style
        };
    }
    return style;
}
