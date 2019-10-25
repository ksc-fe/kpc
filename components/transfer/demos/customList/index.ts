import {Component} from '@angular/core';

import Message from 'kpc-angular/components/message';


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-transfer 
                [enableAdd]="enableAdd"
                [enableRemove]="enableRemove"
                (add)="onAdd($event)"
                (remove)="onRemove($event)"
            >
                <ng-template #header let-type="args[0]">
                    <div *ngIf="type === 'left'">未分配</div>
                    <div *ngIf="!((type === 'left'))">标准双人间</div>
                </ng-template>
                <ng-template #list let-type="args[0]">
                    <ng-container *ngIf="type === 'left'">
                        <div class="k-item" *ngFor="let value of users; index as key">
                            <k-checkbox [(value)]="checkedUsers" 
                                [trueValue]="value" 
                                [disabled]="!!value.room"
                            >
                                {{ value.name }}
                                <span *ngIf="value.room">（{{ value.room.name }}）</span>
                            </k-checkbox>
                        </div>
                    </ng-container>
                    <ng-container *ngIf="!((type === 'left'))">
                        <div class="k-item" *ngFor="let value of rooms; index as key">
                            <k-checkbox [(value)]="checkedRooms" 
                                [trueValue]="value"
                            >
                                {{ value.name }}
                                <span>（当前人数：{{ value.users.length }}）</span>
                            </k-checkbox>
                        </div>
                    </ng-container>
                </ng-template>
            </k-transfer>
        </div>
    `,
})
export class AppDemoComponent {
    private users = [
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
    ];
    private rooms = [
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
    ];
    private checkedUsers = [];
    private checkedRooms = [];

    // helper function
    set(obj) { Object.keys(obj).forEach(key => this[key] = obj[key]); }
    
    enableAdd = () => {
        return this.checkedUsers.length && this.checkedRooms.length === 1;
    }
    
    enableRemove = () => {
        return this.checkedRooms.length;
    }
    
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
    
        this.set({'checkedUsers': [], 'checkedRooms': []});
    }
    
    onRemove() {
        const rooms = this.checkedRooms;
    
        rooms.forEach(room => {
            room.users.forEach(user => {
                user.room = null; 
            });
            room.users = [];
        });
    
        this.checkedRooms = [];
    }
}