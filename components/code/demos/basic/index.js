export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

const code = `function test() {
    console.log('hello world');
}`;
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: code
        }
    }
}