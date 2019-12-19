<template>
    <Form ref="form">
        <FormItem label="姓名">
            <Row gutter="16">
                <Col span="12">
                    <FormItem hideLabel model="firstName" :rules="{
                        // 该规则取值，随着lastName的存在与否而改变
                        required: lastName
                    }"> 
                        <Input v-model="firstName" />
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem hideLabel model="lastName" :rules="{
                        // 该规则取值，随着firstName的存在与否而改变
                        required: firstName
                    }"> 
                        <Input v-model="lastName" />
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
    </Form>
</template>
<script>
import {Form, FormItem} from 'kpc-vue/components/form';
import {Input} from 'kpc-vue/components/input';
import {Row, Col} from 'kpc-vue/components/grid';

export default {
    components: {
        Form, FormItem, Input, Row, Col
    },
    data() {
        return {
            "lastName": null,
            "firstName": null
        }
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>