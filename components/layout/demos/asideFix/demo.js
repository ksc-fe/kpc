export {default as data} from './index.json';
import Intact from 'intact';

export default class extends Intact {
    @Intact.template()
    static template = '<div class="browser-mockup"><iframe height="400" src="/components/layout/demos/asideFix/index.html"></iframe></div>';
}