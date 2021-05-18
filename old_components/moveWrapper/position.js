const max = Math.max;
const abs = Math.abs;
const rHorizontal = /left|center|right/;
const rVertical = /top|center|bottom/;
const rOffset = /[\+\-]\d+(\.[\d]+)?%?/;
const rPosition = /^\w+/;
const rPercent = /%$/;

function getDimensions(elem) {
    if (elem.nodeType === 9) {
        // document
        const {width, height} = getDocumentOrWindowRect(elem);
        return {
            width,
            height,
            offset: {
                top: 0,
                left: 0
            }
        };
    } else if (elem === window) {
        const {width, height} = getDocumentOrWindowRect(elem);
        return {
            width,
            height,
            offset: {
                top: elem.pageYOffset,
                left: elem.pageXOffset,
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
    return {
        width: rect.width,
        height: rect.height,
        offset: {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        },
        rect
    };
}

export function getDocumentOrWindowRect(elem) {
    if (elem === window) {
        const d = elem.document.documentElement;
        return {
            width: d.clientWidth,
            height: d.clientHeight,
        };
    }
    const d = elem.documentElement;
    const b = elem.body;
    return {
        width: max(
            b.scrollWidth, d.scrollWidth,
            b.offsetWidth, d.offsetWidth,
            d.clientWidth
        ),
        height: max(
            b.scrollHeight, d.scrollHeight,
            b.offsetHeight, d.offsetHeight,
            d.clientHeight
        )
    };
}

function getOffsets(offsets, width, height) {
    return [
        parseFloat(offsets[0]) * (rPercent.test(offsets[0]) ? width / 100 : 1),
        parseFloat(offsets[1]) * (rPercent.test(offsets[1]) ? height / 100 : 1),
    ];
}

// reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
let _scrollBarWidth;
export function scrollbarWidth() {
    if (_scrollBarWidth !== undefined) {
        return _scrollBarWidth;
    }

    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return (_scrollBarWidth = widthNoScroll - widthWithScroll);
}

function getScrollInfo(within) {
    const overflowX = within.isWindow || within.isDocument ?
        '' : within.element.style.overflowX;
    const overflowY = within.isWindow || within.isDocument ?
        '' : within.element.style.overflowY;
    const hasOverflowX = overflowX === 'scroll' ||
        (overflowX === 'auto' && within.width < within.element.scrollWidth);
    const hasOverflowY = overflowY === 'scroll' ||
        (overflowY === 'auto' && within.height < within.element.scrollHeight);

    return {
        width: hasOverflowY ? scrollbarWidth() : 0,
        height: hasOverflowX ? scrollbarWidth() : 0,
    };
}

function getWithinInfo(element) {
    element || (element = window);
    const isWindow = element === window;
    const isDocument = element.nodeType === 9;
    const hasOffset = !isWindow && !isDocument;

    const ret = {element, isWindow, isDocument};
    if (hasOffset) {
        const rect = element.getBoundingClientRect();
        ret.offset = {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset,
        };
        ret.width = rect.width;
        ret.height = rect.height;
        ret.scrollLeft = element.scrollLeft;
        ret.scrollTop = element.scrollTop;
    } else {
        ret.offset = {top: 0, left: 0};
        const rect = getDocumentOrWindowRect(element);
        ret.width = rect.width;
        ret.height = rect.height;
        ret.scrollLeft = window.pageXOffset;
        ret.scrollTop = window.pageYOffset;
    }

    return ret;
}

function parseCss(style, property) {
    return parseInt(style[property], 10) || 0;
}

function isInViewport(rect) {
    if (!rect) return true;

    const {top, bottom, left, right} = rect;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    return top <= windowHeight && bottom >= 0 && left <= windowWidth && right >= 0;
}

export default function position(elem, options) {
    options = Object.assign({}, options);

    const target = options.of || window;
    if (target.preventDefault) {
        options.at = "left top";
    }
    const {
        width: targetWidth,
        height: targetHeight,
        offset: targetOffset,
        rect: targetRect,
    } = getDimensions(target);
    const basePosition = Object.assign({}, targetOffset);
    // don't detect collison if the target is not in viewport
    const collision = isInViewport(targetRect) ? (options.collision || 'flip').split(' ') : ['none', 'none'];
    const offsets = {};
    const within = getWithinInfo(options.within);
    const scrollInfo = getScrollInfo(within);

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

    // maybe it has scaled, so we use getBoundingClientRect
    const {width: elemWidth, height: elemHeight} = elem.getBoundingClientRect();
    // const elemWidth = elem.offsetWidth;
    // const elemHeight = elem.offsetHeight;
    const position = Object.assign({}, basePosition);
    const myOffset = getOffsets(offsets.my, elemWidth, elemHeight);
    const computedStyle = window.getComputedStyle(elem);
    const marginLeft = parseCss(computedStyle, 'marginLeft');
    const marginTop = parseCss(computedStyle, 'marginTop');
    const collisionWidth = elemWidth + marginLeft + parseCss(computedStyle, 'marginRight') + scrollInfo.width;
    const collisionHeight = elemHeight + marginTop + parseCss(computedStyle, 'marginBottom') + scrollInfo.height;
    const collisionPosition = {marginLeft, marginTop};

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

    const collisionDirection = options.collisionDirection || ['left', 'top'];
    collisionDirection.forEach((dir, i) => {
        const coll = collision[i];
        if (rules[coll]) {
            rules[coll][dir](position, {
                targetWidth,
                targetHeight,
                elemWidth,
                elemHeight,
                collisionPosition,
                collisionWidth,
                collisionHeight,
                offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
                my: options.my,
                at: options.at,
                within,
                elem
            });
        }
    });

    if (options.using) {
        const left = targetOffset.left - position.left;
        const right = left + targetWidth - elemWidth;
        const top = targetOffset.top - position.top;
        const bottom = top + targetHeight - elemHeight;
        const feedback = {
            target: {
                element: target,
                left: targetOffset.left,
                top: targetOffset.top,
                width: targetWidth,
                height: targetHeight,
            },
            element: {
                element: elem,
                left: position.left,
                top: position.top,
                width: elemWidth,
                height: elemHeight,
            },
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle',
        };
        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
        }
        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
        }

        if (
            position.top + elemHeight <= targetOffset.top ||
            position.top >= targetOffset.top + targetHeight
        ) {
            feedback.important = 'vertical';
        } else if (
            position.left + elemWidth <= targetOffset.left ||
            position.left >= targetOffset.left + targetWidth
        ) {
            feedback.important = 'horizontal';
        } else if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
        } else {
            feedback.important = 'vertical';
        }

        options.using(feedback, position);
    }

    const style = elem.style;
    if (computedStyle.position === 'static') {
        style.position = 'relative';
    }
    const curOffset = getDimensions(elem).offset;
    const curCSSTop = computedStyle.top;
    const curCSSLeft = computedStyle.left;
    style.left = (position.left - curOffset.left) + (parseFloat(curCSSLeft) || 0) + 'px';
    style.top = (position.top - curOffset.top) + (parseFloat(curCSSTop) || 0) + 'px';
}

const rules = {
    fit: {
        left(position, data) {
            const within = data.within;
            const withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
            const outerWidth = within.width;
            const collisionPosLeft =  position.left - data.collisionPosition.marginLeft;
            const overLeft = withinOffset - collisionPosLeft;
            const overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
            let newOverRight;

            if (data.collisionWidth > outerWidth) {
                if (overLeft > 0 && overRight <=0) {
                    newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                    position.left += overLeft - newOverRight;
                } else if (overRight > 0 && overLeft <=0) {
                    position.left = withinOffset;
                } else if (overLeft > overRight) {
                    position.left = withinOffset + outerWidth - data.collisionWidth;
                } else {
                    position.left = withinOffset;
                }
            } else if (overLeft > 0) {
                position.left += overLeft;
            } else if (overRight > 0) {
                position.left -= overRight;
            } else {
                position.left = max(position.left - collisionPosLeft, position.left);
            }
        },

        top(position, data) {
            const within = data.within;
            const withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
            const outerHeight = data.within.height;
            const collisionPosTop = position.top - data.collisionPosition.marginTop;
            const overTop = withinOffset - collisionPosTop;
            const overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
            let newOverBottom;

            if (data.collisionHeight > outerHeight) {
                if (overTop > 0 && overBottom <= 0) {
                    newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                    position.top += overTop - newOverBottom;
                } else if (overBottom > 0 && overTop <= 0) {
                    position.top = withinOffset;
                } else if (overTop > overBottom) {
                    position.top = withinOffset + outerHeight - data.collisionHeight;
                } else {
                    position.top = withinOffset;
                }
            } else if (overTop > 0) {
                position.top += overTop;
            } else if (overBottom > 0) {
                position.top -= overBottom;
            } else {
                position.top = max(position.top - collisionPosTop, position.top);
            }
        }
    },

    flip: {
        left(position, data) {
            const within = data.within;
            const withinOffset = within.offset.left + within.scrollLeft;
            const outerWidth = within.width;
            const offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
            const collisionPosLeft = position.left - data.collisionPosition.marginLeft;
            const overLeft = collisionPosLeft - offsetLeft;
            const overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
            const myOffset = data.my[0] === 'left' ?
                -data.elemWidth :
                data.my[0] === 'right' ?
                    data.elemWidth : 0;
            const atOffset = data.at[0] === 'left' ?
                data.targetWidth :
                data.at[0] === 'right' ?
                    -data.targetWidth : 0;
            const offset = -2 * data.offset[0];
            let newOverRight;
            let newOverLeft;

            if (overLeft < 0) {
                newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                    position.left += myOffset + atOffset + offset;
                }
            } else if (overRight > 0) {
                newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                // the same to top
                // if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                if (newOverLeft > 0) {
                    position.left += myOffset + atOffset + offset;
                }
            }
        },

        top(position, data) {
            const within = data.within;
            const withinOffset = within.offset.top + within.scrollTop;
            const outerHeight = within.height;
            const offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
            const collisionPosTop = position.top - data.collisionPosition.marginTop;
            const overTop = collisionPosTop - offsetTop;
            const overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
            const myOffset = data.my[1] === 'top' ?
                -data.elemHeight :
                data.my[1] === 'bottom' ?
                    data.elemHeight : 0;
            const atOffset = data.at[1] === 'top' ?
                data.targetHeight :
                data.at[1] === 'bottom' ?
                    -data.targetHeight : 0;
            const offset = -2 * data.offset[1];
            let newOverTop;
            let newOverBottom;

            if (overTop < 0) {
                newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                    position.top += myOffset + atOffset + offset;
                }
            } else if (overBottom > 0) {
                newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                // because window can scroll down, when it beyond the top border,
                // we can not scroll it to view. Don't flip it in this case
                // if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                if (newOverTop > 0) {
                    position.top += myOffset + atOffset + offset;
                }
            }
        }
    },

    flipfit: {
        left(...args) {
            rules.flip.left(...args);
            rules.fit.left(...args);
        },

        top(...args) {
            rules.flip.top(...args);
            rules.fit.top(...args);
        }
    }
}


export {position};
