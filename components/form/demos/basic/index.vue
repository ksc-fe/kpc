<template>
    <Form @submit="submit" ref="form" labelWidth="200">
        <FormItem label="Input" model="model.input" :rules="{required: true}">
            <Input v-model="model.input" />
        </FormItem>
        <FormItem label="Select" model="model.select" 
            :rules="{required: true}" 
            :messages="{required: '必须选择'}"
        >
            <Select v-model="model.select">
                <Option value="Javascript">Javascript</Option>
                <Option value="PHP">PHP</Option>
                <Option value="C++">C++</Option>
            </Select>
        </FormItem>
        <FormItem label="Checkbox" model="model.checkbox" 
            :rules="{required: true, maxLength: 2}"
            :messages="{required: '必须选择'}"
        >
            <Checkbox trueValue="Javascript" v-model="model.checkbox">Javascript</Checkbox>
            <Checkbox trueValue="PHP" v-model="model.checkbox">PHP</Checkbox>
            <Checkbox trueValue="C++" v-model="model.checkbox">C++</Checkbox>
        </FormItem>
        <FormItem label="Radio" model="model.radio"
            :rules="{required: true}" 
            :messages="{required: '必须选择'}"
        >
            <Radio trueValue="Javascript" v-model="model.radio">Javascript</Radio>
            <Radio trueValue="PHP" v-model="model.radio">PHP</Radio>
            <Radio trueValue="C++" v-model="model.radio">C++</Radio>
        </FormItem>
        <FormItem label="Radio ButtonGroup" model="model.buttonGroup"
            :rules="{required: true}" 
            :messages="{required: '必须选择'}"
        >
            <ButtonGroup checkType="radio" v-model="model.buttonGroup">
                <Button value="Javascript">Javascript</Button>
                <Button value="PHP">PHP</Button>
                <Button value="C++">C++</Button>
            </ButtonGroup>
        </FormItem>
        <FormItem label="Switch" model="model.switch">
            <KSwitch v-model="model.switch" />
        </FormItem>
        <FormItem model="model.slider" :rules="{required: true, min: 1}" label="Slider">
            <Slider v-model="model.slider" :isShowInput="false" />
        </FormItem>
        <FormItem model="model.date" :rules="{required: true}" label="Datepicker">
            <Datepicker v-model="model.date" />  
        </FormItem>
        <FormItem label="Textarea" model="model.textarea"
            :rules="{required: true}"
        >
            <Input type="textarea" v-model="model.textarea" />
        </FormItem>
        <FormItem label="Password" model="model.password"
            :rules="{required: true}"
        >
            <Input type="password" v-model="model.password" />
        </FormItem>
        <FormItem label="Confirm Password" model="model.confirmPassword"
            :rules="{required: true, equalTo: 'model.password'}"
        >
            <Input type="password" v-model="model.confirmPassword" />
        </FormItem>
        <FormItem>
            <Button type="primary" htmlType="submit" @click="handleSubmit">提交</Button>
            <Button style="margin-left: 20px" @click="reset">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
import {Form, FormItem} from 'kpc/components/form';
import {Input} from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';
import {Checkbox} from 'kpc/components/checkbox';
import {Radio} from 'kpc/components/radio';
import {ButtonGroup, Button} from 'kpc/components/button';
import {Switch as KSwitch} from 'kpc/components/switch';
import {Slider} from 'kpc/components/slider';
import {Datepicker} from 'kpc/components/datepicker';

import Message from 'kpc/components/message';

export default {
    components: {
        Form, FormItem, Input, Select, Option, Checkbox, Radio, ButtonGroup, Button, KSwitch, Slider, Datepicker
    },
    data() {
        return {
            model: {
                checkbox: [],
            }
        }
    },
    methods: {
        submit() {
            Message.success('验证通过，开始提交');
            console.log(this.model);
        },
        async handleSubmit() {
            if (await this.$refs.form.validate()) {
                console.log('验证通过，开始提交');
            } else {
                // 验证失败，我们可以获取第一条出错的FormItem
                console.log(this.$refs.form.getFirstInvalidFormItem());
            }
        },
        reset() {
            this.$refs.form.reset();
            console.log(this.model);
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>