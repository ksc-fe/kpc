import React from 'react';
import {Timeline, TimelineItem} from 'kpc/components/timeline';

export default class Demo extends React.Component {
    render() {
        return (
            <Timeline>
                <TimelineItem>
                    August
                    <p>some descriptions</p>
                </TimelineItem>
                <TimelineItem>July</TimelineItem>
                <TimelineItem>June</TimelineItem>
                <TimelineItem>May</TimelineItem>
            </Timeline>
        )
    }
}