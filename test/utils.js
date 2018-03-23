import Intact from 'intact';

export function render(Component, props) {
    const c = new Component(props); 
    c.init();
    c.mount();
    return c;
}

export function mount(Component) {
    return Intact.mount(Component, document.body);
}

export function dispatchEvent(target, eventName, options) {
    let event;
    if (document.createEvent) {
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    } else if (document.createEventObject) {
        event = document.createEventObject();
        return target.fireEvent(`on${eventName}`, event);
    } else if (typeof CustomEvent !== 'undefined') {
        event = new CustomEvent(eventName);
    }
    Object.assign(event, options);
    target.dispatchEvent(event);
}

export function getElement(query) {
    const elements = document.querySelectorAll(query);
    return elements[elements.length - 1];
}
