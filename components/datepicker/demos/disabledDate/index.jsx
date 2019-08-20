import React from 'react';
import Datepicker from 'kpc/components/datepicker';

export default class Demo extends React.Component {
    render() {
        return (
            <Datepicker disabledDate={(date, dateObject) => {
                // 禁用掉每月的5号和15号
                const d = dateObject.date();
                return d === 5 || d === 15;
            }} />
        )
    }
}