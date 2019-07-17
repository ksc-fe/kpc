<template>
    <div>
        <Transfer 
            :enableAdd="enableAdd"
            :enableRemove="enableRemove"
            @add="onAdd"
            @remove="onRemove"
        >
            <template slot="header" slot-scope="type">
                <div v-if="type === 'left'">未分配</div>
                <div v-else>标准双人间</div>
            </template>
            <template slot="list" slot-scope="type">
                <template v-if="type === 'left'">
                    <div class="k-item" v-for="(value, key) in users">
                        <Checkbox v-model="checkedUsers" 
                            :trueValue="value" 
                            :disabled="!!value.room"
                        >
                            {{ value.name }}
                            <span v-if="value.room">（{{ value.room.name }}）</span>
                        </Checkbox>
                    </div>
                </template>
                <template v-else>
                    <div class="k-item" v-for="(value, key) in rooms">
                        <Checkbox v-model="checkedRooms" 
                            :trueValue="value"
                        >
                            {{ value.name }}
                            <span>（当前人数：{{ value.users.length }}）</span>
                        </Checkbox>
                    </div>
                </template>
            </template>
        </Transfer>
    </div>
</template>
<script>
import Transfer from 'kpc/components/transfer';
import Checkbox from 'kpc/components/checkbox';

import Message from 'kpc/components/message';

export default {
    components: {
        Transfer, Checkbox
    },
    data() {
        return {
            "users": [
                {
                    "name": "刘一",
                    "id": 1,
                    "room": null
                },
                {
                    "name": "陈二",
                    "id": 2,
                    "room": null
                },
                {
                    "name": "张三",
                    "id": 3,
                    "room": null
                },
                {
                    "name": "李四",
                    "id": 4,
                    "room": null
                },
                {
                    "name": "王五",
                    "id": 5,
                    "room": null
                },
                {
                    "name": "赵六",
                    "id": 6,
                    "room": null
                },
                {
                    "name": "孙七",
                    "id": 7,
                    "room": null
                }
            ],
            "rooms": [
                {
                    "name": "标准双人间1",
                    "id": 1,
                    "users": []
                },
                {
                    "name": "标准双人间2",
                    "id": 2,
                    "users": []
                },
                {
                    "name": "标准双人间3",
                    "id": 3,
                    "users": []
                },
                {
                    "name": "标准双人间4",
                    "id": 4,
                    "users": []
                },
                {
                    "name": "标准双人间5",
                    "id": 5,
                    "users": []
                }
            ],
            "checkedUsers": [],
            "checkedRooms": []
        }
    },
    methods: {
        enableAdd() {
            return this.checkedUsers.length && this.checkedRooms.length === 1;
        },
        enableRemove() {
            return this.checkedRooms.length;
        },
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
        onRemove() {
            const rooms = this.checkedRooms;
        
            rooms.forEach(room => {
                room.users.forEach(user => {
                    user.room = null; 
                });
                room.users = [];
            });
        
            this.checkedRooms = [];
        },
    },
}
</script>