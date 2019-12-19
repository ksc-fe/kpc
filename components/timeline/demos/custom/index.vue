<template>
    <Timeline>
        <TimelineItem type="success">
            <template slot="dot"><i class="ion-trophy"></i></template>
            August
        </TimelineItem>
        <TimelineItem>July</TimelineItem>
        <TimelineItem>June</TimelineItem>
        <TimelineItem>May</TimelineItem>
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