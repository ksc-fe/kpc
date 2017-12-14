<template>
    <div>
        <Button @click="click">default</Button>
        <Button type="primary">primary</Button>
        
        <br />
        <Button type="warning" size="small">small</Button>
        <Button icon size="mini">X</Button>

        <br />
        <Button circle>default</Button>
        <Button icon type="primary" circle size="mini">X</Button>

        <br />
        <Button disabled @click="click">default disabled</Button>

        <br />
        <Button><i class="k-icon icon-boot"></i>开机</Button>
        <Button icon circle size="mini"><i class="k-icon icon-boot"></i></Button>

        <br />
        <Button loading>loading</Button>
        <Button :loading="loading0"
            @click="loading('loading0')"
            type="primary"
        >开机</Button>
        <Button type="danger" size="small"
            :loading="loading1"
            @click="loading('loading1')"
        ><i class="k-icon icon-boot"></i>开机</Button>

        <br />
        <ButtonGroup>
            <Button size="small"><i class="k-icon icon-boot"></i>开机</Button>
            <Button size="small"><i class="k-icon icon-boot"></i>关机</Button>
            <Button size="small"><i class="k-icon icon-boot"></i>重启</Button>
        </ButtonGroup>
        <ButtonGroup radio v-model="city">
            <Button size="small" value="beijing">北京</Button>
            <Button size="small" value="shanghai" disabled>上海</Button>
            <Button size="small" value="guangzhou">广州</Button>
        </ButtonGroup>
    </div>
</template>

<script>
import Button from 'components/button';
import ButtonGroup from 'components/button/group';

export default {
    data() {
        return {
            loading0: false,
            loading1: false,
            city: 'beijing',
        };
    },

    components: {
        Button,
        ButtonGroup,
    },

    methods: {
        click() {
            console.log('click');
        },
        loading(name) {
            this[name] = true;
        }
    }
}
</script>
