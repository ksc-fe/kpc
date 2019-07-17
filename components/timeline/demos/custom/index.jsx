import React from 'react';
import {Timeline, TimelineItem} from 'kpc/components/timeline';

export default class Demo extends React.Component {
    render() {
        return (
            <Timeline>
                <TimelineItem type="success"
                    b-dot={<React.Fragment><i className="ion-trophy"></i></React.Fragment>}
                >
                    August
                </TimelineItem>
                <TimelineItem>July</TimelineItem>
                <TimelineItem>June</TimelineItem>
                <TimelineItem>May</TimelineItem>
            </Timeline>
        )
    }
}