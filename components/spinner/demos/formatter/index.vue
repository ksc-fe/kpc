<template>
    <div>
        <Spinner vertical 
            v-model="money"
            :formatter="value => ('￥' + value).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
            :parser="value => value.replace(/￥|,/g, '')"
        />
        <Spinner vertical 
            prefix="增长率 "
            suffix="%"
            v-model="percent"
        />
    </div>
</template>
<script>
import Spinner from 'kpc/components/spinner';

export default {
    components: {
        Spinner
    },
    data() {
        return {
            "money": 1000,
            "percent": 78
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>