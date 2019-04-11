import React from 'react';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.validateUserName = this.validateUserName.bind(this);
    }

    validateUserName(value) {
        // mock api
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    reject({message: `用户名 ${value} 已被占用`});
                } else {
                    resolve(true);
                }
            });
        });
    }
    
    // 注入_context上下文
    static childContextTypes = {
        _context: () => {}
    }
    
    getChildContext() {
        return {
            _context: this
        }
    }
    
    render() {
        return (
            <Form ref={i => this.form = i}>
                <FormItem label="用户名" model="userName"
                    rules={{required: true, userName: this.validateUserName}}
                >
                    <Input value={this.state.userName} on$change-value={(c, userName) => this.setState({userName})} />
                </FormItem>
            </Form>
        )
    }
}