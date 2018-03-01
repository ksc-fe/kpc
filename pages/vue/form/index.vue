<template>
    <div>
        <AA />
    </div>
</template>

<script>
import {Form, FormItem} from 'components/form';
import Radio from 'components/radio';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import {Row, Col} from 'components/grid';
import Input from 'components/input';
import AA from './a.vue';

Form.addMethod('isEqual', function(value, item) {
    return this.optional(item) || value == 3;
}, '请输入3');

Form.addMethod('checkName', function(value, item) {
    return this.optional(item) || new Promise((resolve, reject) => {
        setTimeout(reject, 1000, {message: `用户名 ${value} 已被占用`});
    });
});

export default {
    components: {
        Form, FormItem, Radio, Button, Checkbox,
        Row, Col, Input, AA,
    },

    data() {
        window.__page = this;
        return {
            model: {
                userName: '',
                realUserName: {
                    firstName: '',
                    lastName: '',
                },
                sex: '',
                hobbies: [],
                descriptions: [''],
            },
            hide: false,
        }
    },

    methods: {
        submit() {
            console.log('submit');
        },
        reset() {
            this.$refs.form.reset();
        },
        add() {
            this.model.descriptions.push('');
        }
    }
}
</script>
