import {Component, createRef} from 'intact';
import template from './index.vdt';
import Layout from '../layout';
import {BestPractice} from './BestPractice';

export default class Index extends Layout {
    static template = template;

    static defaults() {
        return {
            ...Layout.defaults(),
            themeColor: '#0191EA'
        }
    }

    private bestPrac = createRef<BestPractice>();

    handleColorChange(color: string) {
        super.handleColorChange(color);
        this.bestPrac!.value?.setFrameValue(color);
        this.set('themeColor', color);
    }
}
