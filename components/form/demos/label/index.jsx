import React from 'react';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
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
            <Form starOnRequired>
                <FormItem rules={{required: true}} label="姓名">
                    <Input />
                </FormItem>
                <FormItem
                    b-label={<React.Fragment><i className="ion-person"/> 姓名</React.Fragment>}
                >
                    <Input />
                </FormItem>
            </Form>
        )
    }
}