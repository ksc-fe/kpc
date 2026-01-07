import {
    Component,
    VNode,
    TypeDefs,
    render,
    createVNode as h,
    Children,
    Props,
} from 'intact';
import template from './notification.vdt';
import {Notifications} from './notifications';
import {useDelayClose} from '../../hooks/useDelayClose';
import {bind} from '../utils';
import { useConfigContext } from '../config';

export interface NotificationProps {
    title?: Children,
    content?: Children
    duration?: number
    type?: 'info' | 'error' | 'success' | 'warning' | ''
    closable?: boolean
    icon?: string | VNode
    position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | 'top' | 'bottom'
    className?: string
    onClick?: (e: MouseEvent) => void
    onClose?: () => void
}

const typeDefs: Required<TypeDefs<NotificationProps>> = {
    title: [String, VNode],
    content: [String, VNode],
    duration: Number,
    type: ['info', 'error', 'success', 'warning', ''],
    closable: Boolean,
    icon: [String, VNode],
    position: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'top', 'bottom'],
    className: String,
    onClick: Function,
    onClose: Function,
};

let id = 0;
const defaults = (): Partial<NotificationProps> => ({
    duration: 4500,
    type: '',
    closable: true,
    position: 'topRight',
});
// 按位置维护多个容器实例
let notificationsMap: Map<string, Notifications> = new Map();
// 存储 notificationId -> { position, key } 的映射，用于通过 id 关闭通知
let notificationIdMap: Map<number, { position: string; key: number | string }> = new Map();

export class Notification extends Component<NotificationProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static classNamePrefix: string;

    /**
     * 显示通知
     * @param props 通知配置对象
     * @returns 返回通知的唯一 ID，可用于调用 close 方法关闭通知
     */
    static notice(props: Partial<NotificationProps>): number {
        const notificationId = id++;
        const key = notificationId;
        const finalProps = {
            ...props,
            key,
            type: props.type ?? '',
            duration: props.duration ?? 4500,
            position: props.position || 'topRight',
        } as Partial<Props<NotificationProps>>;

        const position = finalProps.position!;

        // 存储 notificationId 到 position 和 key 的映射
        notificationIdMap.set(notificationId, { position, key });

        // 如果该位置的容器不存在，创建并挂载
        if (!notificationsMap.has(position)) {
            const container = document.createElement('div');
            document.body.append(container);
            // @ts-ignore 类型实例化过深
            render(h(Notifications, {
                ref: (i: Notifications | null) => {
                    if (i) {
                        notificationsMap.set(position, i);
                        // 设置清理回调
                        i.__cleanup = () => {
                            notificationsMap.delete(position);
                            render(null, container);
                            container.remove();
                        };
                    }
                },
                classNamePrefix: Notification.classNamePrefix,
                position,
            } as any), container);
        }

        // @ts-ignore 类型实例化过深
        notificationsMap.get(position)!.notice(h(Notification, finalProps as any));
        return notificationId;
    }

    /**
     * 关闭指定 ID 的通知
     * @param id 通知的唯一 ID，由 notice 方法返回
     */
    static close(id: number) {
        const notificationInfo = notificationIdMap.get(id);
        if (!notificationInfo) {
            if (process.env.NODE_ENV !== 'production') {
                console.warn(`Notification with id ${id} does not exist.`);
            }
            return;
        }

        const { position, key } = notificationInfo;
        const notifications = notificationsMap.get(position);
        if (notifications) {
            notifications.delete(key);
        }
        // 从映射中移除
        notificationIdMap.delete(id);
    }

    static info(props: Partial<NotificationProps>): number {
        return Notification.notice({...props, type: 'info'});
    }

    static error(props: Partial<NotificationProps>): number {
        return Notification.notice({...props, type: 'error'});
    }

    static success(props: Partial<NotificationProps>): number {
        return Notification.notice({...props, type: 'success'});
    }

    static warning(props: Partial<NotificationProps>): number {
        return Notification.notice({...props, type: 'warning'});
    }

    private delayClose = useDelayClose(
        this.close,
        this.get('duration')!
    );
    private config = useConfigContext();

    @bind
    onClick(e: MouseEvent) {
        const onClick = this.get('onClick');
        if (onClick) {
            onClick(e);
        }
    }

    @bind
    onCloseClick(e: MouseEvent) {
        e.stopPropagation(); // 阻止事件冒泡，避免触发外层的 onClick
        this.close();
    }

    @bind
    close() {
        const onClose = this.get('onClose');
        if (onClose) {
            onClose();
        }
        const position = this.get('position') || 'topRight';
        const key = this.get('key')!;
        
        // 从 notificationIdMap 中移除对应的映射
        for (const [notificationId, info] of notificationIdMap.entries()) {
            if (info.position === position && info.key === key) {
                notificationIdMap.delete(notificationId);
                break;
            }
        }
        
        notificationsMap.get(position)!.delete(key);
    }
}