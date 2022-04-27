import * as components from './index';

export function install(Vue) {
    for (let key in components) {
        // the name of component starts with an upper case char
        const charCode = key.charCodeAt(0);
        if (charCode < 'A'.charCodeAt(0) && charCode > 'Z'.charCodeAt(0)) continue;

        const component = components[key];
        Vue.component(`K${key}`, component);
        // support call method like this.$message.success('test'), #88
        const obj = Vue.config.globalProperties;
        if (key === 'Message') {
            obj.$message = component;
        } else if (key === 'Dialog') {
            obj.$dialog = component;
        }
    }
}
