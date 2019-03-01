import React from 'react';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';
import {ButtonGroup, Button} from 'kpc/components/button';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "model": {
                "checkbox": []
            },
            "layout": "horizontal"
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange(key, c, value) {
        this.setState({
            model:{
                ...this.state.model,
                [key]: value
            }
        })
    }
    
    // inject the context by _context
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
            <Form layout={this.state.layout}>
                <FormItem label="Layout">
                    <ButtonGroup checkType="radio" value={this.state.layout} on$change-value={(c, layout) => this.setState({layout})}>
                        <Button value="horizontal">horizontal</Button>
                        <Button value="vertical">vertical</Button>
                        <Button value="inline">inline</Button>
                    </ButtonGroup>
                </FormItem>
                <FormItem label="Input" model="model.input" rules={{required: true}}>
                    <Input value={this.state.model.input} on$change-value={this._onChange.bind(this, 'input')} />
                </FormItem>
                <FormItem label="Select" model="model.select" 
                    rules={{required: true}} 
                >
                    <Select value={this.state.model.select} on$change-value={this._onChange.bind(this, 'select')}>
                        <Option value="Javascript">Javascript</Option>
                        <Option value="PHP">PHP</Option>
                        <Option value="C++">C++</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        )
    }
}