import React from 'react';
import Input from 'kpc-react/components/input';
import {Select, Option} from 'kpc-react/components/select';

export default class Demo extends React.Component {
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
                    b-prepend={<React.Fragment>
                        <Select value={this.state.protocol} on$change-value={(c, protocol) => this.setState({protocol})} width="110">
                            <Option value="http">http://</Option>
                            <Option value="https">https://</Option>
                        </Select>
                    </React.Fragment>}
                    b-append={<React.Fragment>
                        <Select value={this.state.domain} on$change-value={(c, domain) => this.setState({domain})} width="90">
                            <Option value="com">.com</Option>
                            <Option value="cn">.cn</Option>
                            <Option value="org">.org</Option>
                        </Select>
                    </React.Fragment>}
                >
                </Input>
            </div>
        )
    }
}