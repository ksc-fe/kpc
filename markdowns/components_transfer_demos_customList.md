---
title: 完全自定义
order: 4
---

本例展示如何利用`Transfer`自定义更复杂的应用场景，本例中我们通过`list`扩展点定义整个列表，并且根据扩展点参数
区别左右列表，定义不同的内容；然后通过`enableAdd`和`enableRemove`定义箭头按钮的可用状态；最后通过`add`和`remove`
事件定义左右穿梭的逻辑

```vdt
import {Transfer, Checkbox} from 'kpc';

<div>
    <Transfer 
        enableAdd={this.enableAdd}
        enableRemove={this.enableRemove}
        ev-add={this.onAdd}
        ev-remove={this.onRemove}
    >
        <b:header args="type">
            <div v-if={type === 'left'}>未分配</div>
            <div v-else>标准双人间</div>
        </b:header>
        <b:list args="type">
            <template v-if={type === 'left'}>
                <div class="k-transfer-item" v-for={this.get('users')}>
                    <Checkbox v-model="checkedUsers" 
                        trueValue={$value} 
                        disabled={!!$value.room}
                    >
                        {$value.name}
                        <span v-if={$value.room}>（{$value.room.name}）</span>
                    </Checkbox>
                </div>
            </template>
            <template v-else>
                <div class="k-transfer-item" v-for={this.get('rooms')}>
                    <Checkbox v-model="checkedRooms" 
                        trueValue={$value}
                    >
                        {$value.name}
                        <span>（当前人数：{$value.users.length}）</span>
                    </Checkbox>
                </div>
            </template>
        </b:list>
    </Transfer>
</div>
```

```ts
import {Message, bind} from 'kpc';

interface Props {
    users: User[]
    rooms: Room[]
    checkedUsers?: User[]
    checkedRooms?: Room[]
}

type User = {
    name: string
    id: number
    room: Room | null
}

type Room = {
    name: string
    id: number
    users: User[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
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
        } as Props;
    }

    @bind
    enableAdd() {
        return !!this.get('checkedUsers')!.length && this.get('checkedRooms')!.length === 1;
    }

    @bind
    enableRemove() {
        return !!this.get('checkedRooms')!.length;
    }

    @bind
    onAdd() {
        const users = this.get('checkedUsers')!;
        const room = this.get('checkedRooms')![0];

        if (users.length > 2) {
            return Message.error('当前房间最多容纳两人');
        }

        users.forEach(user => {
            user.room = room;
            room.users.push(user);
        });

        this.set({'checkedUsers': [], 'checkedRooms': []});
    }

    @bind
    onRemove() {
        const rooms = this.get('checkedRooms')!;
        
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
    const users = this.checkedUsers!;
    const room = this.checkedRooms![0];

    if (users.length > 2) {
        return Message.error('当前房间最多容纳两人');
    }

    users.forEach(user => {
        user.room = room;
        room.users.push(user);
    });

    this.checkedUsers = [];
    this.checkedRooms = [];
}
```
