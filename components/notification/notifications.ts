import {Component, VNodeComponentClass, TypeDefs} from 'intact';
import template from './notifications.vdt';
import type {Notification} from './notification';
import { useConfigContext } from '../config';

export interface NotificationsProps {
    classNamePrefix?: string
    position?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | 'top' | 'bottom'
}

const typeDefs: Required<TypeDefs<NotificationsProps>> = {
    classNamePrefix: String,
    position: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'top', 'bottom'],
};

export class Notifications extends Component {
    static template = template;
    static typeDefs = typeDefs;

    private notifications: VNodeComponentClass<Notification>[] = [];
    private config = useConfigContext();
    __cleanup?: () => void;

    notice(notification: VNodeComponentClass<Notification>) {
        this.notifications.push(notification);
        this.forceUpdate();
    }

    delete(key: number | string) {
        const notifications = this.notifications;
        const index = notifications.findIndex(notification => notification.key === key);
        if (process.env.NODE_ENV !== 'production' && !~index) {
            throw new Error('You are removing a notification that does not exist.');
        }

        notifications.splice(index, 1);
        this.forceUpdate();
    }

    onAfterLeave() {
        // 当离开动画完成后，如果该位置 通知列表为空，则清理容器
        if (this.notifications.length === 0 && this.__cleanup) {
            this.__cleanup();
        }
    }
}