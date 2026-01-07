import * as components from './index';
import { isFunction } from 'intact-shared';

export function install(Vue) {
    for (let key in components) {
        // exclude the non-component properties
        // the name of component starts with an upper case char
        // and the value is a function
        const charCode = key.charCodeAt(0);
        if (charCode < 'A'.charCodeAt(0) || charCode > 'Z'.charCodeAt(0)) continue;

        const component = components[key];
        if (!isFunction(component)) continue;

        Vue.component(`K${key}`, component);
        // support call method like this.$message.success('test'), #88
        const obj = Vue.prototype;
        if (key === 'Message') {
            obj.$message = component;
        } else if (key === 'Dialog') {
            obj.$dialog = component;
        } else if (key === 'Notification') {
            obj.$notification = component;
        }
    }
}
