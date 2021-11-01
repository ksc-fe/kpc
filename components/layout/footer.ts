import {Component} from 'intact';
import template from './template.vdt';

export class Footer extends Component {
    static template = template;

    private getClassNames() {
        const {className} = this.get();
        return {
            'k-layout-footer': true,
            [className as string]: className,
        };
    }
}

