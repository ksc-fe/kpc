import React from 'react';
import Input from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "protocol": "http",
            "domain": "com"
        };
    }

    render() {
        return (
            <div>
                <Input width="500"
                    b-prepend={<>
                        <Select value={this.state.protocol} on$change-value={(c, protocol) => this.setState({protocol})} width="110">
                            <Option value="http">http://</Option>
                            <Option value="https">https://</Option>
                        </Select>
                    </>}
                    b-append={<>
                        <Select value={this.state.domain} on$change-value={(c, domain) => this.setState({domain})} width="90">
                            <Option value="com">.com</Option>
                            <Option value="cn">.cn</Option>
                            <Option value="org">.org</Option>
                        </Select>
                    </>}
                >
                </Input>
            </div>
        )
    }
}