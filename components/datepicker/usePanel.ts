import {useInstance} from 'intact';
import {useState} from '../../hooks/useState';

export enum PanelTypes {
    Date,
    Time
} 

export enum PanelFlags {
    Start,
    End
}

export function usePanel() {
    const startPanel = useState<PanelTypes>(PanelTypes.Date);
    const endPanel = useState<PanelTypes>(PanelTypes.Date);

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

    return {startPanel, endPanel, changePanel, getPanel, reset};
}
