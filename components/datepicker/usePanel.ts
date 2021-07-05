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
        const panel = flag === PanelFlags.Start ? startPanel : endPanel;
        panel.set(type);
    }

    return {startPanel, endPanel, changePanel};
}
