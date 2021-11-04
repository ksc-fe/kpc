import * as components from './index';

export function install(Vue) {
    for (let key in components) {
        const component = components[key];
        Vue.component(`K${key}`, component);
        // support call method like this.$message.success('test'), #88
        // support vue2.0 and vue3.0
        const obj = Vue.prototype || Vue.config.globalProperties;
        if (key === 'Message') {
            obj.$message = component;
        } else if (key === 'Dialog') {
            obj.$dialog = component;
        }
    }
}
