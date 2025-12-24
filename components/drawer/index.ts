import {TypeDefs} from 'intact';
import template from './index.vdt';
import {BaseDialog, BaseDialogProps} from '../dialog/base';
import {Placement, placements} from './styles';
import {useDrawerResizable} from './useDrawerResizable';

export interface DrawerProps extends BaseDialogProps {
    placement?: Placement
    // 支持布尔或回调函数，回调用于受控模式下获取最新宽度
    resizable?: boolean | ((width: number) => void)
}

const typeDefs: Required<TypeDefs<DrawerProps>> = {
    ...BaseDialog.typeDefs,
    placement: placements,
    resizable: [Boolean, Function] as any,
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

    private resizable = useDrawerResizable(this.dialogRef);

    shouldShowResizeBar(): boolean {
        const {resizable} = this.get();
        return !!resizable;
    }

    getResizeBarPosition(): 'left' | 'right' {
        return this.resizable.getResizeBarPosition();
    }

    shouldShowHeightResizeBar(): boolean {
        const {resizable, placement} = this.get();
        return !!(resizable && (placement === 'top' || placement === 'bottom'));
    }

    getHeightResizeBarPosition(): 'top' | 'bottom' {
        return this.resizable.getHeightResizeBarPosition();
    }
}
