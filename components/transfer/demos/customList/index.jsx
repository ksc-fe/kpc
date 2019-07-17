import React from 'react';
import Transfer from 'kpc/components/transfer';
import Checkbox from 'kpc/components/checkbox';

import Message from 'kpc/components/message';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
        this.enableAdd = this.enableAdd.bind(this);
        this.enableRemove = this.enableRemove.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    enableAdd() {
        return this.state.checkedUsers.length && this.state.checkedRooms.length === 1;
    }
    
    enableRemove() {
        return this.state.checkedRooms.length;
    }
    
    onAdd() {
        const users = this.state.checkedUsers;
        const room = this.state.checkedRooms[0];
    
        if (users.length > 2) {
            return Message.error('当前房间最多容纳两人');
        }
    
        users.forEach(user => {
            user.room = room;
            room.users.push(user);
        });
    
        this.setState({'checkedUsers': [], 'checkedRooms': []});
    }
    
    onRemove() {
        const rooms = this.state.checkedRooms;
    
        rooms.forEach(room => {
            room.users.forEach(user => {
                user.room = null; 
            });
            room.users = [];
        });
    
        this.setState({checkedRooms: []});
    }
    
    render() {
        return (
            <div>
                <Transfer
                    b-header={(type) => {
                        return <React.Fragment>
                            {type === 'left' ?
                                <div>未分配</div> :
                                <div>标准双人间</div>
                            }
                        </React.Fragment>
                    }}
                    b-list={(type) => {
                        return <React.Fragment>
                            {type === 'left' ?
                                <React.Fragment>
                                    {this.state.users.map((value, key) => {
                                        return (
                                            <div className="k-item">
                                                <Checkbox value={this.state.checkedUsers}
                                                    on$change-value={(c, checkedUsers) => this.setState({checkedUsers})} 
                                                    trueValue={value} 
                                                    disabled={!!value.room}
                                                >
                                                    {value.name}
                                                    {value.room ?
                                                        <span>（{value.room.name}）</span> :
                                                        undefined
                                                    }
                                                </Checkbox>
                                            </div>
                                        )
                                    })}
                                </React.Fragment> :
                                <React.Fragment>
                                    {this.state.rooms.map((value, key) => {
                                        return (
                                            <div className="k-item">
                                                <Checkbox value={this.state.checkedRooms}
                                                    on$change-value={(c, checkedRooms) => this.setState({checkedRooms})} 
                                                    trueValue={value}
                                                >
                                                    {value.name}
                                                    <span>（当前人数：{value.users.length}）</span>
                                                </Checkbox>
                                            </div>
                                        )
                                    })}
                                </React.Fragment>
                            }
                        </React.Fragment>
                    }}
                    enableAdd={this.enableAdd}
                    enableRemove={this.enableRemove}
                    onAdd={this.onAdd}
                    onRemove={this.onRemove}
                >
                </Transfer>
            </div>
        )
    }
}