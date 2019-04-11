<template>
    <div>
        <Transfer :data="data" 
            filterable
            keyName="name"
            v-model="value"
            ref="__test"
        >
            <template slot="filter" slot-scope="type">
                <Input v-if="type === 'left'" size="small"
                    placeholder="请输入"
                    clearable
                    v-model="keywords"
                >
                    <template slot="prepend">
                        <Select v-model="policy" width="100" size="small">
                            <Option value="all">全部策略</Option>
                            <Option value="system">系统策略</Option>
                            <Option value="common">通用策略</Option>
                        </Select>
                    </template>
                </Input>
            </template>
            <template slot="label" slot-scope="data, index, type">
                <div>
                    <div>
                        {{ data.name }}
                        <Tag type="warning" size="mini" v-if="data.policy === 'system'">系统策略</Tag>
                    </div>
                    <p>{{ data.members }}人 / {{ data.desc }}</p>
                </div>
            </template>
        </Transfer>
        <p>You selected: {{ stringify(value) }}</p>
    </div>
</template>
<script>
import Transfer from 'kpc/components/transfer';
import Input from 'kpc/components/input';
import {Select, Option} from 'kpc/components/select';
import Tag from 'kpc/components/tag';

function mockApi(policy) {
    const data = [
        {name: 'AdministratorAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'OSSFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'SupportFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'BSSFullSupportAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限', disabled: true},
        {name: 'SystemFullAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'CommonAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
    ];

    return new Promise(resolve => {
        setTimeout(() => {
            if (policy === 'all') resolve(data);
            else resolve(data.filter(item => item.policy === policy));
        }, 500);
    });
}

export default {
    components: {
        Transfer, Input, Select, Option, Tag
    },
    data() {
        return {
            "data": [],
            "value": null,
            "keywords": null,
            "policy": "all"
        }
    },
    methods: {
        stringify(data) { return JSON.stringify(data); },
        _fetch() {
            mockApi(this.policy).then(data => {
                this.originData = data;
                this._filter();
            });
        },
        _filter() {
            const keywords = this.keywords;
            const data = keywords ? 
                this.originData.filter(data => {
                    return data.name.includes(keywords);
                }) :
                this.originData;
            this.data = data;
        },
    },
    created() {
        this._fetch();
    },
    watch: {
        policy: function() {
            this._fetch();
        },
        keywords: function() {
            this._filter();
        },
    },
}
</script>