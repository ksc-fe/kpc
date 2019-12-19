<template>
    <Timeline>
        <TimelineItem>August</TimelineItem>
        <TimelineItem type="success" size="small">July</TimelineItem>
        <TimelineItem type="danger" size="large">June</TimelineItem>
        <TimelineItem type="warning" size="mini">May</TimelineItem>
    </Timeline>
</template>
<script>
import {Timeline, TimelineItem} from 'kpc-vue/components/timeline';

export default {
    components: {
        Timeline, TimelineItem
    },
}
</script>