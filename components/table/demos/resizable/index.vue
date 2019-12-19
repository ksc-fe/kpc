<template>
    <div class='no-data-template'>
        <Table 
            :scheme="{
                a: {
                    title: '通过minColWidth控制最小宽度100px',
                    width: '50%'
                },
                b: {
                    title: '单独设置最小宽度300px',
                    minWidth: 300,
                    width: '10%'
                },
                c: {
                    title: '标题',
                    width: '40%'
                }
            }" 
            :data="data"
            resizable
            :minColWidth="100"
            type="grid"
            storeWidth="resizableTable"
        />
        <Form style="margin-top: 20px;" labelWidth="140">
            <FormItem style="width: 100%">
                <template slot="label">table in table-cell</template>
                <Table 
                    fixHeader
                    :scheme="{
                        a: {
                            title: '通过minColWidth控制最小宽度100px',
                            width: '50%'
                        },
                        b: {
                            title: '单独设置最小宽度300px',
                            minWidth: 300,
                            width: '10%'
                        },
                        c: {
                            title: '标题',
                            width: '40%'
                        }
                    }" 
                    :data="data"
                    resizable
                    :minColWidth="100"
                />
            </FormItem>
        </Form>
    </div>
</template>
<script>
import Table from 'kpc-vue/components/table';
import {Form, FormItem} from 'kpc-vue/components/form';

export default {
    components: {
        Table, Form, FormItem
    },
    data() {
        return {
            "data": [
                {
                    "a": "A",
                    "b": "B",
                    "c": "C"
                },
                {
                    "a": "A",
                    "b": "B",
                    "c": "C"
                }
            ]
        }
    },
}
</script>