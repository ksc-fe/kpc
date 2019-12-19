<template>
    <div>
        <Tag v-for="(value, key) in ['default', 'primary', 'success', 'warning', 'danger']"
            :type="value"
        >{{ value }}</Tag>
        <Tag disabled>disabled</Tag>
    </div>
</template>
<script>
import Tag from 'kpc-vue/components/tag';

export default {
    components: {
        Tag
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>