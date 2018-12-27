<template>
    <Timeline>
        <TimelineItem>
            August
            <p>some descriptions</p>
        </TimelineItem>
        <TimelineItem>July</TimelineItem>
        <TimelineItem>June</TimelineItem>
        <TimelineItem>May</TimelineItem>
    </Timeline>
</template>
<script>
import {Timeline, TimelineItem} from 'kpc/components/timeline';

export default {
    components: {
        Timeline, TimelineItem
    },
}
</script>