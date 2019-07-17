export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            users: [
                {name: '刘一', id: 1, room: null},
                {name: '陈二', id: 2, room: null},
                {name: '张三', id: 3, room: null},
                {name: '李四', id: 4, room: null},
                {name: '王五', id: 5, room: null},
                {name: '赵六', id: 6, room: null},
                {name: '孙七', id: 7, room: null},
            ],
            rooms: [
                {name: '标准双人间1', id: 1, users: []},
                {name: '标准双人间2', id: 2, users: []},
                {name: '标准双人间3', id: 3, users: []},
                {name: '标准双人间4', id: 4, users: []},
                {name: '标准双人间5', id: 5, users: []},
            ],
            checkedUsers: [],
            checkedRooms: [],
        }
    }

    enableAdd() {
        return this.get('checkedUsers').length && this.get('checkedRooms').length === 1;
    }

    enableRemove() {
        return this.get('checkedRooms').length;
    }

    onAdd() {
        const users = this.get('checkedUsers');
        const room = this.get('checkedRooms')[0];

        if (users.length > 2) {
            return Message.error('当前房间最多容纳两人');
        }

        users.forEach(user => {
            user.room = room;
            room.users.push(user);
        });

        this.set({'checkedUsers': [], 'checkedRooms': []});
    }

    onRemove() {
        const rooms = this.get('checkedRooms');

        rooms.forEach(room => {
            room.users.forEach(user => {
                user.room = null; 
            });
            room.users = [];
        });

        this.set('checkedRooms', []);
    }
}