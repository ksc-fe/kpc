import {useInstance, RefObject, onMounted, onBeforeUnmount} from 'intact';
import {useState} from '../../hooks/useState';
import {useDraggable} from '../../hooks/useDraggable';
import type {Drawer} from './';

export function useDrawerResizable(
    drawerRef: RefObject<HTMLElement>,
) {
    const instance = useInstance() as Drawer;
    const drawerWidth = useState<number | null>(null);
    const drawerHeight = useState<number | null>(null);
    const isResizing = useState(false);
    
    let startX = 0;
    let startWidth = 0;
    let startY = 0;
    let startHeight = 0;

    let minWidth = 200; // 最小宽度
    let maxWidth = window.innerWidth; // 最大宽度
    let minHeight = 200; // 最小高度
    let maxHeight = window.innerHeight; // 最大高度

    // 监听窗口大小变化，更新最大宽高
    let handleResize: (() => void) | null = null;
    onMounted(() => {
        handleResize = () => {
            maxWidth = window.innerWidth;
            maxHeight = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
        if (handleResize) {
            window.removeEventListener('resize', handleResize);
        }
    });

    // 宽度拖拽
    function onStartWidth(e: MouseEvent) {
        const drawer = drawerRef.value;
        if (!drawer) return;

        startX = e.clientX;
        startWidth = drawer.offsetWidth;
        drawerWidth.set(startWidth);
        isResizing.set(true);

        // 锁定全局样式
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    }

    function onMoveWidth(e: MouseEvent) {
        const drawer = drawerRef.value;
        if (!drawer) return;

        const {placement, resizable} = instance.get() as any;
        // 计算鼠标移动距离
        const deltaX = e.clientX - startX;
        let widthDelta = deltaX;
        
        // 根据 placement 调整拖拽方向
        if (placement === 'right') {
            widthDelta = -deltaX;
        } else if (placement === 'left') {
            widthDelta = deltaX;
        } else {
            // top / bottom 模式：由于是居中（left: 50%, transform: translateX(-50%)）对称增长
            // 宽度变化量应该是位移的两倍才能保持鼠标跟随
            widthDelta = deltaX * 2;
        }
        const newWidth = Math.max(
            minWidth,
            Math.min(maxWidth, startWidth + widthDelta)
        );
        if (typeof resizable === 'function') {
            resizable(newWidth); // 宽度受控
        } else if (resizable === true) {
            // 通过组件属性更新宽度
            // BaseDialog 会使用 width 属性渲染内层 .k-dialog 的 style.width
            (instance as any).set('width', newWidth);
        }
        drawerWidth.set(newWidth);
    }

    function onEndWidth() {
        isResizing.set(false);
        // 恢复全局样式
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }

    const widthDrag = useDraggable({
        onStart: onStartWidth,
        onMove: onMoveWidth,
        onEnd: onEndWidth,
        disable() {
            const {resizable, width} = instance.get() as any;
            if (!resizable) return true;
            if (resizable === true && width != null && drawerWidth.value == null) return true;
            return false;
        },
    });

    // 高度拖拽，仅在 placement 为 top / bottom 时启用
    function onStartHeight(e: MouseEvent) {
        const drawer = drawerRef.value;
        if (!drawer) return;

        const {placement, resizable} = instance.get();
        if (!resizable || (placement !== 'top' && placement !== 'bottom')) return;

        startY = e.clientY;
        startHeight = drawer.offsetHeight;
        drawerHeight.set(startHeight);
        isResizing.set(true);

        // 锁定全局样式
        document.body.style.cursor = 'row-resize';
        document.body.style.userSelect = 'none';
    }

    function onMoveHeight(e: MouseEvent) {
        const drawer = drawerRef.value;
        if (!drawer) return;

        const {placement} = instance.get();
        if (placement !== 'top' && placement !== 'bottom') return;

        const deltaY = e.clientY - startY;

        const heightDelta = placement === 'top' ? deltaY : -deltaY;

        const newHeight = Math.max(
            minHeight,
            Math.min(maxHeight, startHeight + heightDelta)
        );

        // 设置状态，由模板进行渲染
        drawerHeight.set(newHeight);
    }

    function onEndHeight() {
        isResizing.set(false);
        // 恢复全局样式
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }

    const heightDrag = useDraggable({
        onStart: onStartHeight,
        onMove: onMoveHeight,
        onEnd: onEndHeight,
        disable() {
            const {placement, resizable} = instance.get();
            return !resizable || (placement !== 'top' && placement !== 'bottom');
        },
    });

    // 重置 resize 状态
    function resetResizeState() {
        const {resizable} = instance.get() as any;
        if (typeof resizable !== 'function' && drawerWidth.value != null) {
            (instance as any).set('width', undefined);
        }
        drawerWidth.set(null);
        drawerHeight.set(null);
    }

    // 监听 placement 变化，切换时重置 resize 状态
    instance.watch('placement', (newPlacement, oldPlacement) => {
        if (oldPlacement !== undefined && newPlacement !== oldPlacement) {
            resetResizeState();
        }
    });

    // 获取宽度拖拽条位置
    function getResizeBarPosition(): 'left' | 'right' {
        const {placement} = instance.get();
        return placement === 'right' ? 'left' : 'right';
    }

    // 获取高度拖拽条位置
    function getHeightResizeBarPosition(): 'top' | 'bottom' {
        const {placement} = instance.get();
        return placement === 'top' ? 'bottom' : 'top';
    }

    return {
        drawerWidth,
        drawerHeight,
        isResizing,
        getResizeBarPosition,
        getHeightResizeBarPosition,
        startWidth: widthDrag.start,
        startHeight: heightDrag.start,
    };
}

