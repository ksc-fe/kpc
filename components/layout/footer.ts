import {Component} from 'intact';
import template from './template.vdt';
import { useConfigContext } from '../config';

export class Footer extends Component {
    static template = template;

    private config = useConfigContext();

    private getClassNames() {
        const {className} = this.get();
        const { k } = this.config;
        return {
            [`${k}-layout-footer`]: true,
            [className as string]: className,
        };
    }
}

