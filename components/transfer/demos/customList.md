---
title: 完全自定义
order: 3
---

本例展示如何利用`Transfer`自定义更复杂的应用场景，本例中我们通过`list`扩展点定义整个列表，并且根据扩展点参数
区别左右列表，定义不同的内容；然后通过`enableAdd`和`enableRemove`定义箭头按钮的可用状态；最后通过`add`和`remove`
事件定义左右穿梭的逻辑

```vdt
import Transfer from 'kpc/components/transfer';
import Checkbox from 'kpc/components/checkbox';

<div>
    <Transfer 
        enableAdd={{ self.enableAdd }}
        enableRemove={{ self.enableRemove }}
        ev-add={{ self.onAdd }}
        ev-remove={{ self.onRemove }}
    >
        <b:header params="type">
            <div v-if={{ type === 'left' }}>未分配</div>
            <div v-else>标准双人间</div>
        </b:header>
        <b:list params="type">
            <template v-if={{ type === 'left' }}>
                <div class="k-item" v-for={{ self.get('users') }}>
                    <Checkbox v-model="checkedUsers" 
                        trueValue={{ value }} 
                        disabled={{ !!value.room }}
                    >
                        {{ value.name }}
                        <span v-if={{ value.room }}>（{{ value.room.name }}）</span>
                    </Checkbox>
                </div>
            </template>
            <template v-else>
                <div class="k-item" v-for={{ self.get('rooms') }}>
                    <Checkbox v-model="checkedRooms" 
                        trueValue={{ value }}
                    >
                        {{ value.name }}
                        <span>（当前人数：{{ value.users.length }}）</span>
                    </Checkbox>
                </div>
            </template>
        </b:list>
    </Transfer>
</div>
```

```js
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
```

```vue-methods
onAdd() {
    const users = this.checkedUsers;
    const room = this.checkedRooms[0];

    if (users.length > 2) {
        return Message.error('当前房间最多容纳两人');
    }

    users.forEach(user => {
        user.room = room;
        room.users.push(user);
    });

    this.checkedUsers = [];
    this.checkedRooms = [];
},
```
