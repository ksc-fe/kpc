import {TypeDefs} from 'intact';
import template from './index.vdt';
import {Dialog, DialogProps} from '../dialog';
import {Placement, placements} from './styles';

export interface DrawerProps extends DialogProps {
    placement?: Placement
}

const typeDefs: Required<TypeDefs<DrawerProps>> = {
    ...Dialog.typeDefs,
    placement: placements,
};

const defaults = (): Partial<DrawerProps> => ({
    ...Dialog.defaults(),
    placement: 'right',
});

export class Drawer<T extends DrawerProps = DrawerProps> extends Dialog<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}
