import {renderVue, unmountVue, wait} from '../../test/utils';
import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';
import {createRouter, createWebHashHistory} from 'vue-router';

describe('Breadcrumb', () => {
    let vm;

    afterEach(() => unmountVue(vm));

    it('should handle url with vue-router correctly', async () => {
        const Test = {
            template: (`
                <Breadcrumb>
                    <BreadcrumbItem to="index">Home</BreadcrumbItem>
                    <BreadcrumbItem>Detail</BreadcrumbItem>
                </Breadcrumb>
            `),
            components: {
                Breadcrumb, BreadcrumbItem,
            }
        };
        vm = renderVue({
            template: '<router-view />'
        }, app => {
            app.use(createRouter({
                history: createWebHashHistory(),
                routes: [
                    {path: '/', component: Test},
                    {path: '/index', component: Test},
                ]
            }))
        });

        await wait(0);
        vm.$el.querySelector('a').click();

        await wait(0);
        expect(location.hash).to.eql('#/index');
        history.back();
    });
});
