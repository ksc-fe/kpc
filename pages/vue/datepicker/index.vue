<template>
    <Form class="datepicker-page">
        <FormItem label="basic">
            <Datepicker v-model="basicValue" />
            <template slot="append">{{ basicValue }}</template>
        </FormItem>
        <FormItem label="clearable">
            <Datepicker clearable v-model="clearableValue" />
            <template slot="append">{{ clearableValue }}</template>
        </FormItem>
        <FormItem label="maxDate & minDate">
            <Row gutter="10"> 
                <Col span="12">
                    <Datepicker clearable v-model="from" placeholder="开始日期" 
                        :maxDate="to"
                        :minDate="new Date()"
                    />
                </Col>
                <Col span="12">
                    <Datepicker clearable v-model="to" placeholder="结束日期"
                        :minDate="from"
                    />
                </Col>
            </Row>
        </FormItem>
        <FormItem label="disabled">
            <Datepicker disabled value="2018-01-01"/>
        </FormItem>
        <FormItem label="disabledDate">
            <Datepicker :disabledDate="(date) => ~['2018-01-14', '2018-02-14'].indexOf(date)" />
        </FormItem>
        <FormItem label="multiple">
            <Datepicker multiple v-model="multipleValue" />
            <template slot="append">{{ multipleValue }}</template>
        </FormItem>
        <FormItem label="datetime">
            <Datepicker type="datetime" v-model="datetime" />
            <template slot="append">{{ datetime }}</template>
        </FormItem>
    </Form>
</template>

<script>
import Datepicker from 'components/datepicker';
import {Form, FormItem} from 'components/form';
import {Col, Row} from 'components/grid';

export default {
    data() {
        return {
            basicValue: '',
            clearableValue: '',
            to: '',
            from: '',
            multipleValue: [],
            datetime: '',
        }
    },

    components: {
        Datepicker, Form, FormItem,
        Col, Row
    },

    methods: {
        a() {
            return this;
        }
    }
}
</script>
