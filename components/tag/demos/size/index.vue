<template>
    <div>
        <Tag v-for="(value, key) in ['large', 'default', 'small', 'mini']"
            :size="value"
        >{{ value }}</Tag>
        <br /><br />
        <Tag v-for="(value, key) in [['large', 'primary'], ['default', 'warning'], ['small', 'success'], ['mini', 'danger']]"
            :size="value[0]"
            :type="value[1]"
        >{{ value[0] }}</Tag>
        <br /><br />
        <Tag v-for="(value, key) in ['large', 'default', 'small', 'mini']"
            type="primary"
            :size="value"
            closable
        >{{ value }}</Tag>
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