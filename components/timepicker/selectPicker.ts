import {Component, TypeDefs} from 'intact';
import {TimepickerProps, typeDefs} from './constants'
import template from './selectPicker.vdt';
import {useFormats} from './useFormats';
import {useDisabled} from '../datepicker/useDisabled';
import {useStep} from './useStep';

export class SelectPicker extends Component<TimepickerProps> {
    static template = template;
    static typeDefs = typeDefs;

    public formats = useFormats();
    public disabled = useDisabled(this.formats);
    public step = useStep(this.disabled, this.formats); 
}
