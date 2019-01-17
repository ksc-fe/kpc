import React from 'react';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';

export default class extends React.Component {
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
            <Form>
                <FormItem
                    b-label={<><i style={{"color":"red"}}>*</i> 姓名</>}
                >
                    <Input />
                </FormItem>
                <FormItem
                    b-label={<><i className="ion-person"/> 姓名</>}
                >
                    <Input />
                </FormItem>
            </Form>
        )
    }
}