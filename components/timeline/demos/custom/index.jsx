import React from 'react';
import {Timeline, TimelineItem} from 'kpc/components/timeline';

export default class extends React.Component {
    render() {
        return (
            <Timeline>
                <TimelineItem type="success"
                    b-dot={<><i className="ion-trophy"></i></>}
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