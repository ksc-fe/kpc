import {TypeDefs} from 'intact';
import template from './index.vdt';
import {BaseDialog, BaseDialogProps} from '../dialog/base';
import {Placement, placements} from './styles';

export interface DrawerProps extends BaseDialogProps {
    placement?: Placement
}

const typeDefs: Required<TypeDefs<DrawerProps>> = {
    ...BaseDialog.typeDefs,
    placement: placements,
};

const defaults = (): Partial<DrawerProps> => ({
    ...BaseDialog.defaults(),
    placement: 'right',
});

export class Drawer extends BaseDialog<DrawerProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
