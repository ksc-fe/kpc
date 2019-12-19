import React from 'react';
import {Select, Option} from 'kpc-react/components/select';

export default class Demo extends React.Component {
    render() {
        return (
            <Select inline>
                <Option value="default">默认主题</Option>
                <Option value="ksyun">金山云主题</Option>
            </Select>
        )
    }
}