import React from 'react';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import Message from 'kpc/components/message';

export default class extends React.Component {
    // *********
    // 注入_context上下文
    static childContextTypes = {
        _context: () => {}
    }

    getChildContext() {
        return {
            _context: this
        }
    }
    // *********

    constructor(props) {
        super(props);
        this.state = {model: {}};

        this.submit = this.submit.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    submit() {
        Message.success('验证通过，开始提交');
        console.log(this.state.model);
    }

    onChangeInput(c, v) {
        this.setState({
            model: {
                ...this.state.model,
                input: v
            }
        });
    }

    render() {
        return (
            <Form onSubmit={this.submit} ref={i => this.form = i} labelWidth="200">
                <FormItem label="Input" model="model.input" rules={{required: true}}>
                    <Input value={this.state.model.input} on$change-value={this.onChangeInput} />
                </FormItem>
            </Form>
        );
    }
}