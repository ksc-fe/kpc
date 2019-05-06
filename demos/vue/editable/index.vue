<template>
    <div>
        <Editable v-model='text'>
            <i class="ion ion-ios-location c-middle" style="margin-right: 10px;"></i>
            <a>{{ text }}</a>
        </Editable>
        <br />
        <Editable value="aaa" disabled>
            <a>aaaa</a>
        </Editable>
        <br />
        <Editable v-model="text1" :validate="/\d+/">
            <a>{{ text1 }}</a>
        </Editable>
    </div>
</template>

<script>
import Editable from 'components/editable';

export default {
    data() {
        return {
            text: '可编辑文本',
            text1: '',
        }
    },

    components: {
        Editable
    }
}
</script>
