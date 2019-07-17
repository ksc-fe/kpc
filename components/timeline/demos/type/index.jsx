import React from 'react';
import {Timeline, TimelineItem} from 'kpc/components/timeline';

export default class Demo extends React.Component {
    render() {
        return (
            <Timeline>
                <TimelineItem>August</TimelineItem>
                <TimelineItem type="success" size="small">July</TimelineItem>
                <TimelineItem type="danger" size="large">June</TimelineItem>
                <TimelineItem type="warning" size="mini">May</TimelineItem>
            </Timeline>
        )
    }
}