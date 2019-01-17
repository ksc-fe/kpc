<template>
    <Form>
        <FormItem label="描述">
            <FormItem v-for="(value, key) in descriptions"
                :model="`descriptions[${key}]`"
                hideLabel
                :rules="{
                    required: true, 
                    // 自定义全局规则
                    letter: true,
                    // 自定义局部规则，所有描述必须不重复
                    unique: (value) => {
                        let count = 0;
                        descriptions.find(item => {
                            if (item === value) count++;
                            return count > 1;
                        });
    
                        // 直接返回错误文案，或者也可以单独定义messages为{unique: '不能相同'}
                        return count === 1 || '不能相同';
                    }
                }"
            >
                <Input v-model="descriptions[key]" />    
                <template slot="append">
                    <Button @click="remove(key)">删除</Button>
                </template>
            </FormItem>
            <Button @click="add">添加</Button>
        </FormItem>
    </Form>
</template>
<script>
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Button} from 'kpc/components/button';

// 添加全局规则
Form.addMethod('letter', (value, item, param) => {
    return /^[a-z|A-Z]+$/.test(value);
}, '只能输入字母');

export default {
    components: {
        Form, FormItem, Input, Button
    },
    data() {
        return {
            "descriptions": [
                "",
                ""
            ],
            "descriptions[key]": null
        }
    },
    methods: {
        add() {
            this.descriptions.push('');
        },
        remove(index) {
            this.descriptions.splice(index, 1);
        },
    },
}
</script>