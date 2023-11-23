import {Component} from 'intact';
import template from './timeline.vdt';
import { useConfigContext } from '../config';

export interface TimelineProps { }

export class Timeline extends Component<TimelineProps> {
    static template = template;

    private config = useConfigContext();
}
