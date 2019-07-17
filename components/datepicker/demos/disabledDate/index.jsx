import React from 'react';
import Datepicker from 'kpc/components/datepicker';

export default class Demo extends React.Component {
    render() {
        return (
            <Datepicker disabledDate={(date) => {
                // 禁用掉2018-02-05和2018-03-05
                return ~['2018-02-05', '2018-03-05'].indexOf(date);
            }} />
        )
    }
}