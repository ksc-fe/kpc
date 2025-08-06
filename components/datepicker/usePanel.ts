import {useInstance, createRef} from 'intact';
import {useState} from '../../hooks/useState';
import {Datepicker} from './index';
import {DatepickerCalendar} from './calendar';

// export enum PanelTypes {
//     Date,
//     Time
// } 

export enum PanelFlags {
    Start,
    End
}

export function usePanel() {
    const instance = useInstance() as Datepicker;
    // const startPanel = useState<PanelTypes>(type);
    // const endPanel = useState<PanelTypes>(type);
    const startRef = createRef<DatepickerCalendar>();
    const endRef = createRef<DatepickerCalendar>();

    // function changePanel(type: PanelTypes, flag: PanelFlags = PanelFlags.Start) {
    //     getPanel(flag).set(type);
    // }

    // function getPanel(flag: PanelFlags) {
    //     return flag === PanelFlags.Start ? startPanel : endPanel;
    // }

    // function reset() {
    //     startPanel.set(type);
    //     endPanel.set(type);
    // }

    // instance.on('show', reset);

    return {/* startPanel, endPanel, changePanel, getPanel, reset,  */startRef, endRef};
}
