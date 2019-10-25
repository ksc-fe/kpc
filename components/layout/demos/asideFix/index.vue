<template>
    <Layout class="layout">
        <Aside :collapse="collapse" fixed size="large">
            <div class="logo">LOGO</div>
            <Menu
                :expandedKeys.sync="expandedKeys" 
                :selectedKey.sync="selectedKey"
            >
                <MenuItem key="1">
                    <Icon class="ion-flag" />menu 1
                    <Menu>
                        <MenuItem key="1-1">sub menu 1</MenuItem>
                        <MenuItem key="1-2">sub menu 2</MenuItem>
                        <MenuItem key="1-3" disabled>sub menu 3</MenuItem>
                        <MenuItem key="1-4">sub menu 4</MenuItem>
                    </Menu>
                </MenuItem>
                <MenuItem key="2" disabled><Icon class="ion-star" />menu 2</MenuItem>
                <MenuItem key="3">
                    <i class="k-icon ion-heart"></i>menu 3
                    <Menu>
                        <MenuItem key="3-1">sub menu 1</MenuItem>
                        <MenuItem key="3-2">sub menu 2</MenuItem>
                        <MenuItem key="3-3" disabled>sub menu 3</MenuItem>
                        <MenuItem key="3-4">sub menu 4</MenuItem>
                    </Menu>
                </MenuItem>
                <MenuItem key="4"><Icon class="ion-gear-b" />menu 4</MenuItem>
            </Menu>
        </Aside>
        <Layout>
            <Header fixed>
                <Button type="none" size="large" style="height: 64px" @click="_toggle">
                    <Icon class="ion-navicon" size="30"/>
                </Button>
            </Header>
            <Body>
                <Breadcrumb>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Detail</BreadcrumbItem>
                </Breadcrumb>
                <div v-for="(value, key) in data">content</div>
            </Body>
        </Layout>
    </Layout>
</template>
<script>
import {Layout, Header, Aside, Body, Footer} from 'kpc/components/layout';
import {Menu, MenuItem} from 'kpc/components/menu';
import Icon from 'kpc/components/icon';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';
import {Button} from 'kpc/components/button';

export default {
    components: {
        Layout, Header, Aside, Body, Footer, Menu, MenuItem, Icon, Breadcrumb, BreadcrumbItem, Button
    },
    data() {
        return {
            expandedKeys: [],
            selectedKey: '3-1',
            collapse: false,
            data: Array.apply(null, {length: 100}),
        };
    },
    methods: {
        _toggle() {
            this.collapse = !this.collapse;
        },
    },
}
</script>
<style lang="stylus" src="./index.styl"></style>