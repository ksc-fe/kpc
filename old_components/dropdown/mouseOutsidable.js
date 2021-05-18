/**
 * don't hide the dropdown when user mouse down and move outside, #392
 * the order of events is mousedown -> mouseup -> click
 */
export default function init(component) {
    component._onMouseDown = () => onMouseDown(component);
    component._onMouseUp = () => onMouseUp(component);
    component.on('$destroyed', onDestroyed);
}

function onMouseDown(instance) {
    instance._mousedown = true;
    document.addEventListener('mouseup', instance._onMouseUp);
}

function onMouseUp(instance) {
    instance._mousedownTimer = setTimeout(() => {
        instance._mousedown = false;
    });
    document.removeEventListener('mouseup', instance._onMouseUp);
}

function onDestroyed(instance) {
    clearTimeout(instance._mousedownTimer);
    instance._mousedown = false;
    document.removeEventListener('mouseup', instance._onMouseUp);
}
