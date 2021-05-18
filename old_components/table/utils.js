// export function addClass(element, className) {
    // if (className) {
        // if (element.classList) {
            // element.classList.add(className);
        // } else if (!hasClass(element, className)) {
            // element.className += ` ${className}`;
        // }
    // }
    // return element;
// }

// export function removeClass(element, className) {
    // if (className) {
        // if (element.classList) {
            // element.classList.remove(className);
        // } else if (hasClass(element, className)) {
            // element.className = element.className
                // .replace(new RegExp(`(^|\\s)${className}(?:\\s|$)`, 'g'), '$1')
                // .replace(/\s+/g, ' ') // multiple spaces to one
                // .replace(/^\s*|\s*$/g, ''); // trim the ends
        // }
    // }
// }

/**
 * we must render the children of invisible cell, because it may change the height
 */
export const isInvisible = (onlyLeft, onlyRight, props) => {
    return props.fixed !== 'left' && onlyLeft || props.fixed !== 'right' && onlyRight;
}

