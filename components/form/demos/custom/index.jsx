import React from 'react';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Button} from 'kpc/components/button';
import './index.styl';

// 添加全局规则
Form.addMethod('letter', (value, item, param) => {
    return /^[a-z|A-Z]+$/.test(value);
}, '只能输入字母');

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "descriptions": [
                "",
                ""
            ]
        };
        this._onChangeValue = this._onChangeValue.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    _onChangeValue(index, c, v) {
        const descriptions = this.state.descriptions.slice(0);
        descriptions[index] = v;
        this.setState({descriptions});
    }
    
    add() {
        this.setState({descriptions: this.state.descriptions.concat('')});
    }
    
    remove(index) {
        const descriptions = this.state.descriptions.slice(0);
        descriptions.splice(index, 1);
        this.setState({descriptions: descriptions});
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
            <Form>
                <FormItem label="描述">
                    {this.state.descriptions.map((value, key) => {
                        return (
                            <FormItem
                                b-append={<React.Fragment><Button onClick={this.remove.bind(this, key)}>删除</Button></React.Fragment>}
                                model={`descriptions[${key}]`}
                                hideLabel
                                rules={{
                                    required: true, 
                                    // 自定义全局规则
                                    letter: true,
                                    // 自定义局部规则，所有描述必须不重复
                                    unique: (value) => {
                                        let count = 0;
                                        this.state.descriptions.find(item => {
                                            if (item === value) count++;
                                            return count > 1;
                                        });
                    
                                        // 直接返回错误文案，或者也可以单独定义messages为{unique: '不能相同'}
                                        return count === 1 || '不能相同';
                                    }
                                }}
                            >
                                <Input value={this.state.descriptions[key]} on$change-value={this._onChangeValue.bind(this, key)} />    
                            </FormItem>
                        )
                    })}
                    <Button onClick={this.add}>添加</Button>
                </FormItem>
            </Form>
        )
    }
}