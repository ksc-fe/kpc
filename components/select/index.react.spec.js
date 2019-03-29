import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount} from '../../test/utils';
import {Form, FormItem} from 'kpc/components/form';
import {Select, Option} from 'kpc/components/select';
import {Row, Col} from 'kpc/components/grid';
import {Datepicker} from 'kpc/components/datepicker';
import {Button} from 'kpc/components/button';

describe('Select', () => {
    it('should clear all value when validate FormItem error', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        class Test extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    model: {
                        date: [],
                        domain: [] 
                    }
                };
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
        
            onDomainChange(c, value) {
                let model = {...this.state.model};
                model.domain = value;
                this.setState({
                    model: model
                })
            }
        
            onDateTimeChange(c, value) {
                let model = this.state.model;
                model.date = value;
                this.setState({
                    model: model
                })
            }
        
            render() {
                return (
                    <Row className="pcdn-panel" style={{marginTop: 0}}>
                        <Form onSubmit={this.submit} ref={i => this.form = i} labelWidth="58">
                            <FormItem model="model.date" 
                                rules={{required: true}} 
                                messages={{required: '请选择时间范围'}}
                                label="选择时间">
                                <Datepicker range type="datetime" value={this.state.model.date}
                                    style={{width: "400px"}}
                                    clearable 
                                    on$change-value={this.onDateTimeChange.bind(this)}
                                    shortcuts={[
                                        Datepicker.lastWeek,
                                        Datepicker.lastMonth,
                                        Datepicker.lastThreeMonths,
                                        Datepicker.nextWeek,
                                        Datepicker.nextMonth,
                                        Datepicker.nextThreeMonths,
                                    ]}
                                />
                            </FormItem>
                            <FormItem label="加速域名" model="model.domain" 
                                rules={{required: true}} 
                                messages={{required: '请至少选择一个域名'}}
                            >
                                <Select value={this.state.model.domain}
                                        style={{width: "400px"}}
                                        placeholder="支持多选" 
                                        on$change-value={this.onDomainChange.bind(this)} 
                                        multiple clearable filterable>
                                    <Option value="Monday">星期一</Option>
                                    <Option value="Tuesday">星期二</Option>
                                    <Option value="Wednesday">星期三</Option>
                                    <Option value="Thursday">星期四</Option>
                                    <Option value="Friday">星期五</Option>
                                    <Option value="Saturday">星期六</Option>
                                    <Option value="Sunday">星期天</Option>
                                </Select>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>查询</Button>
                            </FormItem>
                        </Form>
                    </Row>
                )
            }
        }

        ReactDOM.render(<Test />, container);

        // document.body.removeChild(container);
    });
});
