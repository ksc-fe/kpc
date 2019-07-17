import React from 'react';
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Row, Col} from 'kpc/components/grid';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                <FormItem label="姓名">
                    <Row gutter="16">
                        <Col span="12">
                            <FormItem hideLabel model="firstName" rules={{
                                // 该规则取值，随着lastName的存在与否而改变
                                required: this.state.lastName
                            }}> 
                                <Input value={this.state.firstName} on$change-value={(c, firstName) => this.setState({firstName})} />
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem hideLabel model="lastName" rules={{
                                // 该规则取值，随着firstName的存在与否而改变
                                required: this.state.firstName
                            }}> 
                                <Input value={this.state.lastName} on$change-value={(c, lastName) => this.setState({lastName})} />
                            </FormItem>
                        </Col>
                    </Row>
                </FormItem>
            </Form>
        )
    }
}