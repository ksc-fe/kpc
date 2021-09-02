import {TypeDefs} from 'intact';
import template from './index.vdt';
import {Dialog, DialogProps} from 'kpc/components/dialog';

type Placement = 'top' | 'bottom' | 'left' | 'right'

interface DrawerProps extends DialogProps {
  placement?: Placement
}

const typeDefs: Required<TypeDefs<DrawerProps>> = {
    placement: String,
    ...Dialog.typeDefs,
};

const defaults = (): Partial<DrawerProps> => ({
    placement: 'right',
    ...Dialog.defaults(),
});

export default class Drawer<T extends DrawerProps = DrawerProps> extends Dialog<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
}