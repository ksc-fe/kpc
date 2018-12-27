<template>
    <Select filterable :filter="() => true" @$change:keywords="search">
        <Option v-for="(value, key) in users" 
            :value="value.login.username"
        >{{ value.name.first }} {{ value.name.last }}</Option>
    </Select>
</template>
<script>
import {Select, Option} from 'kpc/components/select';

export default {
    components: {
        Select, Option
    },
    data() {
        return {
            "users": []
        }
    },
    methods: {
        search(select, keywords) {
            console.log(keywords);
        
            if (!keywords) return;
        
            const fetchId = ++this.lastFetchId
            fetch('https://randomuser.me/api/?results=10')
                .then(response => response.json())
                .then(body => {
                    if (fetchId !== this.lastFetchId) return;
                    this.users = body.results;
                });
        },
    },
    beforeCreate() {
        this.lastFetchId = 0;
    },
}
</script>