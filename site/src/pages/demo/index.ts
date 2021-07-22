import {Component} from 'intact';
import template from './index.vdt';
import {req} from '../document';

interface DemoProps {
    path: string
    Demo: Component
}

export default class extends Component<DemoProps> {
    static template = template;

    async init() {
        let path = this.get('path');
        if (!path) {
            const qs: Record<string, string> = {};
            location.search.substring(1).split('&').forEach(item => {
                const [key, value] = item.split('=');
                qs[key] = value;
            });
            path = qs.path;
        }

        const Demo = await req(`./${path}/index.ts`);
        this.set({Demo});
    }
}
