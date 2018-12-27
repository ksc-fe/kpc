<template>
    <div>
        <Tag v-for="(value, key) in ['default', 'primary', 'success', 'warning', 'danger']"
            :key="value"
            :type="value"
            closable
        >{{ value }}</Tag>
        <Tag disabled closable>disabled</Tag>
    </div>
</template>
<script>
import Tag from 'kpc/components/tag';

export default {
    components: {
        Tag
    },
}
</script>