import template from './pageA.vdt';

export default class PageA extends Intact {
    @Intact.template()
    static template = template;
}