<template>
    <div>
        <Menu><SlideMenu :slideMenus="menu" /></Menu>
    </div>
</template>

<script>
import {Menu, MenuItem} from 'components/menu';
import {Icon} from 'components/icon';
import Vue from 'vue';

Vue.component('SlideMenu', {
    functional: true,
    render(h, context) {
        const loop = (slideMenus) => {
            if (!slideMenus) return;

            return slideMenus.map(slideMenu => {
                return <MenuItem key={slideMenu.path}>
                    <Icon class={slideMenu.icon} />
                    {slideMenu.name}
                    {slideMenu.children && slideMenu.children.length ?
                        <Menu>{loop(slideMenu.children)}</Menu> :
                        undefined
                    }
                </MenuItem>;
            });
        }

        return loop(context.props.slideMenus)
    }
})

export default {
    components: {
        Menu, MenuItem
    },
    data() {
        return {
            menu: [
                {path: '/', name: 'home'},
                {path: '/a', name: 'a'},
                {path: '/b', name: 'b', children: [
                    {path: '/b1', name: 'b1'},
                    {path: '/b2', name: 'b2'}
                ]}
            ]
        };
    },
}
</script>
