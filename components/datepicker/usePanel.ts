import {useInstance, createRef} from 'intact';
import {useState} from '../../hooks/useState';
import {Datepicker} from './index';
import {DatepickerCalendar} from './calendar';

export enum PanelTypes {
    Date,
    Time
} 

export enum PanelFlags {
    Start,
    End
}

export function usePanel() {
    const instance = useInstance() as Datepicker;
    const startPanel = useState<PanelTypes>(PanelTypes.Date);
    const endPanel = useState<PanelTypes>(PanelTypes.Date);
    const startRef = createRef<DatepickerCalendar>();
    const endRef = createRef<DatepickerCalendar>();

    function changePanel(type: PanelTypes, flag: PanelFlags = PanelFlags.Start) {
        getPanel(flag).set(type);
    }

    function getPanel(flag: PanelFlags) {
        return flag === PanelFlags.Start ? startPanel : endPanel;
    }

    function reset() {
        startPanel.set(PanelTypes.Date);
        endPanel.set(PanelTypes.Date);
    }

    instance.on('show', reset);

    return {startPanel, endPanel, changePanel, getPanel, reset, startRef, endRef};
}
