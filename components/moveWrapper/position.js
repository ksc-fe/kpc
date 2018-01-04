const max = Math.max;
const abs = Math.abs;
const rHorizontal = /left|center|right/;
const rVertical = /top|center|bottom/;
const rOffset = /[\+\-]\d+(\.[\d]+)?%?/;
const rPosition = /^\w+/;
const rPercent = /%$/;

export default function position(elem, options) {
    options = Object.assign({}, options);

    const target = options.of || window;
    // const dimensions = getDimensions(target);
    if (target.preventDefault) {
        options.at = "left top";
    }
    const {
        width: targetWidth,
        height: targetHeight, 
        offset: targetOffset
    } = getDimensions(target);
    const basePosition = Object.assign({}, targetOffset);
    const collision = (options.collision || 'flip').split(' ');
    const offsets = {};

    ['my', 'at'].forEach(item => {
        let pos = (options[item] || '').split(' ');

        if (pos.length === 1) {
            pos = rHorizontal.test(pos[0]) ?
                pos.concat(['center']) :
                rVertical.test(pos[0]) ?
                    ['center'].concat(pos) :
                    ['center', 'center'];
        }
        pos[0] = rHorizontal.test(pos[0]) ? pos[0] : 'center';
        pos[1] = rVertical.test(pos[1]) ? pos[1] : 'center';

        const horizontalOffset = rOffset.exec(pos[0]);
        const verticalOffset = rOffset.exec(pos[1]);
        offsets[item] = [
            horizontalOffset ? horizontalOffset[0] : 0,
            verticalOffset ? verticalOffset[0] : 0
        ];

        options[item] = [
            rPosition.exec(pos[0])[0],
            rPosition.exec(pos[1])[0]
        ];
    });

    if (collision.length === 1) {
        collision[1] = collision[0];
    }

    const at = options.at;
    if (at[0] === 'right') {
        basePosition.left += targetWidth;
    } else if (at[0] === 'center') {
        basePosition.left += targetWidth / 2;
    }
    if (at[1] === 'bottom') {
        basePosition.top += targetHeight;
    } else if (at[1] === 'center') {
        basePosition.top += targetHeight / 2;
    }

    const atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
    basePosition.left += atOffset[0];
    basePosition.top += atOffset[1];

    const elemWidth = elem.offsetWidth;
    const elemHeight = elem.offsetHeight;
    const position = Object.assign({}, basePosition);
    const myOffset = getOffsets(offsets.my, elemWidth, elemHeight);

    const my = options.my;
    if (my[0] === 'right') {
        position.left -= elemWidth;
    } else if (my[0] === 'center') {
        position.left -= elemWidth / 2;
    }
    if (my[1] === 'bottom') {
        position.top -= elemHeight;
    } else if (my[1] === 'center') {
        position.top -= elemHeight / 2;
    }
    position.left += myOffset[0];
    position.top += myOffset[1];

    const style = elem.style;
    const {elemPosition} = window.getComputedStyle(elem);
    if (elemPosition === 'static') {
        style.position = 'relative';
    }
    style.left = position.left + 'px';
    style.top = position.top + 'px';

    if (options.using) {
        const left = targetOffset.left - position.left;
        const right = left + targetWidth - elemWidth;
        const top = targetOffset.top - position.top;
        const bottom = top + targetHeight - elemHeight;
        const feedback = {
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle',
        };
        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
        }
        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
        }
        if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
        } else {
            feedback.important = 'vertical';
        }
        options.using(feedback);
    }
}

function getDimensions(elem) {
    if (elem.nodeType === 9) {
        // document
        return {
            width: elem.offsetWidth,
            height: elem.offsetHeight,
            offset: {
                top: 0,
                left: 0
            }
        };
    } else if (elem === window) {
        let d = elem.document.documentElement;
        return {
            width: d.clientWidth,
            height: d.clientHeight,
            offset: {
                top: elem.pageYOffset || d.scrollTop,
                left: elem.pageXOffset || d.scrollLeft
            }
        };
    } else if (elem.preventDefault) {
        // event
        return {
            width: 0,
            height: 0,
            offset: {
                top: elem.pageY,
                left: elem.pageX
            }
        };
    }
    // dom
    const rect = elem.getBoundingClientRect();
    const d = elem.ownerDocument.defaultView;
    return {
        width: rect.width,
        height: rect.height,
        offset: {
            top: rect.top + d.pageYOffset,
            left: rect.left + d.pageXOffset
        }
    };
}

function getOffsets(offsets, width, height) {
    return [
        parseFloat(offsets[0]) * (rPercent.test(offsets[0]) ? width / 100 : 1),
        parseFloat(offsets[1]) * (rPercent.test(offsets[1]) ? height / 100 : 1),
    ];
}
