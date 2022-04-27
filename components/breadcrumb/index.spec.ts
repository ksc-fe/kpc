import Demo from '~/components/breadcrumb/demos/basic';
import {mount, dispatchEvent, unmount} from '../../test/utils';
// import Vue from 'vue';
// import VueRouter from 'vue-router';
import {Breadcrumb, BreadcrumbItem} from './';

// Vue.use(VueRouter);

describe('Breadcrumb', () => {
    afterEach(() => {unmount()});

    it('should go to the url set by to', () => {
        const [instance, element] = mount(Demo);

        dispatchEvent(element.children[0].children[0], 'click');
        expect(location.hash).to.eql('#/');
    });

    // it('should go to the url when use vue-router', () => {
        // const Test = {
            // template: (`
                // <Breadcrumb>
                    // <BreadcrumbItem to="index">Home</BreadcrumbItem>
                    // <BreadcrumbItem>Detail</BreadcrumbItem>
                // </Breadcrumb>
            // `),
            // components: {
                // Breadcrumb, BreadcrumbItem,
            // }
        // };
        // const router = new VueRouter({
            // mode: 'history',
            // routes: [
                // {path: '*', component: Test}
            // ]
        // });

        // const container = document.createElement('div');
        // document.body.appendChild(container);

        // const app = new Vue({
            // router,
            // render: h => h('router-view')
        // }).$mount(container);

        // app.$el.querySelector('a').click();
        // expect(location.pathname).to.eql('/index');
        // history.back();
        // document.body.removeChild(app.$el);
    // });
});
