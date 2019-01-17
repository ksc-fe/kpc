import React from 'react';
import Datepicker from 'kpc/components/datepicker';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Datepicker value={this.state.date} on$change-value={(c, date) => this.setState({date})} shortcuts={[
                    Datepicker.yesterday,
                    Datepicker.today,
                    Datepicker.tomorrow,
                    Datepicker.afterOneWeek,
                    Datepicker.afterOneMonth,
                    Datepicker.afterThreeMonths,
                    Datepicker.beforeOneWeek,
                    Datepicker.beforeOneMonth,
                    Datepicker.beforeThreeMonths,
                ]}/>
                <Datepicker range type="datetime" 
                    shortcuts={[
                        Datepicker.lastWeek,
                        Datepicker.lastMonth,
                        Datepicker.lastThreeMonths,
                        Datepicker.nextWeek,
                        Datepicker.nextMonth,
                        Datepicker.nextThreeMonths,
                    ]}
                />
            </div>
        )
    }
}