import React from 'react';
import Datepicker from 'kpc/components/datepicker';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.disabledDate = this.disabledDate.bind(this);
    }

    disabledDate(date, dateObject) {
        // 禁用掉每月的5号和15号
        const d = dateObject.date();
        return d === 5 || d === 15;
    }
    
    render() {
        return (
            <Datepicker disabledDate={this.disabledDate} />
        )
    }
}