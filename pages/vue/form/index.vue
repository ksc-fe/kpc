<template>
    <Form ref="form" style="margin: 20px; width: 400px;"
        @submit="submit"
    >
        <FormItem label="用户名" model="model.userName" :rules="{required: true, checkName: true}">
            <input class="c-input" v-model="model.userName" />
        </FormItem>
        <FormItem label="姓名" class="real-user-name">
            <Row gutter="16">
                <Col span="12">
                    <FormItem hideLabel model="model.realUserName.firstName" :rules="{required: model.realUserName.lastName}">
                        <input 
                            class="c-input" v-model="model.realUserName.firstName"
                        />
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem hideLabel model="model.realUserName.lastName" :rules="{required: model.realUserName.firstName}">
                        <input class="c-input" v-model="model.realUserName.lastName" />
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="性别" model="model.sex" :rules="{required: true}" :messages="{required: '必须选择'}">
            <Radio v-model="model.sex" trueValue="female" name="sex">女</Radio>
            <Radio v-model="model.sex" trueValue="male" name="sex" style="margin-left: 10px;">男</Radio>
        </FormItem>
        <FormItem label="爱好" for="sport" model="model.hobbies" :rules="{required: true, maxLength: 2}" :messages="{required: '必须选择'}">
            <Checkbox v-model="model.hobbies" trueValue="sport" name="hobbies" id="sport">运动</Checkbox>
            <Checkbox v-model="model.hobbies" trueValue="music" name="hobbies" style="margin-left: 10px;">音乐</Checkbox>
            <Checkbox v-model="model.hobbies" trueValue="coding" name="hobbies" style="margin-left: 10px;">写代码</Checkbox>
        </FormItem>
        <FormItem label="年龄" model="model.age" :rules="{required: true, digits: true, min: 1}">
            <input class="c-input" v-model="model.age" />
        </FormItem>
        <FormItem label="邮箱" model="model.email" :rules="{email: true}">
            <input class="c-input" v-model="model.email" />
        </FormItem>
        <FormItem label="密码" model="model.password" :rules="{required: true}">
            <input class="c-input" type="password" v-model="model.password" />
        </FormItem>
        <FormItem v-if="!hide" label="确认密码" model="model.confirmPassword" :rules="{required: true, equal(value) { return value === model.password || '两次密码输入不一致'; }}">
            <input class="c-input" type="password" v-model="model.confirmPassword" />
        </FormItem>
        <FormItem label="描述" class="descriptions">
            <FormItem v-for="(value, key) in model.descriptions" :model="'model.descriptions.' + key" hideLabel :rules="{required: true}" :key="key">
                <input class="c-input" v-model="model.descriptions[key]" />
            </FormItem>
            <Button @click="add" size="small">添加</Button>
        </FormItem>
        <FormItem label="验证码" model="model.captcha" :rules="{isEqual: true}">
            <template slot="label">验证码 (<span style="color: red;">3</span>)</template>
            <input class="c-input" v-model="model.captcha" />
        </FormItem>
        <FormItem>
            <Button htmlType="submit" type="primary">提交</Button>
            <Button style="margin-left: 10px;" @click="reset">重置</Button>
        </FormItem>
    </Form>
</template>

<script>
import {Form, FormItem} from 'components/form';
import Radio from 'components/radio';
import Button from 'components/button';
import Checkbox from 'components/checkbox';
import {Row, Col} from 'components/grid';

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
        Row, Col
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
