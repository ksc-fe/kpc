export function render(Component, props) {
    const c = new Component(props); 
    c.init();
    c.mount();
    return c;
}
