import {Component} from 'intact';
import template from './timeline.vdt';

export interface TimelineProps { }

export class Timeline extends Component<TimelineProps> {
    static template = template;
}
