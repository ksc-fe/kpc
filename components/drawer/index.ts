import {TypeDefs} from 'intact';
import template from './index.vdt';
import {BaseDialog, BaseDialogProps} from '../dialog/base';
import {Placement, placements} from './styles';
import {useDrawerResizable} from './useDrawerResizable';

export interface DrawerProps extends BaseDialogProps {
    placement?: Placement
    resizable?: boolean
}

const typeDefs: Required<TypeDefs<DrawerProps>> = {
    ...BaseDialog.typeDefs,
    placement: placements,
    resizable: Boolean,
};

const defaults = (): Partial<DrawerProps> => ({
    ...BaseDialog.defaults(),
    placement: 'right',
    draggable: false,
    resizable: false,
});

export class Drawer extends BaseDialog<DrawerProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private _resizable = useDrawerResizable(this.dialogRef);

    init() {
        super.init();
        
        this.watch('width', (v) => {
            this._resizable.drawerWidth.set(v || null);
        });
    }
}
