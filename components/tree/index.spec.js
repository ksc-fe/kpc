import BasicDemo from '~/components/tree/demos/basic';
import CheckboxDemo from '~/components/tree/demos/checkbox';
import LoadingDemo from '~/components/tree/demos/loading';
import CustomDemo from '~/components/tree/demos/custom';
import FilterableDemo from '~/components/tree/demos/filterable';
import {mount, unmount} from 'test/utils';

describe('Tree', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('expand and shrink', (done) => {
        instance = mount(BasicDemo);

        const element = instance.element;
        const [, icon1, icon2] = element.querySelectorAll('.k-icon');

        icon2.click();
        expect(element.outerHTML).to.matchSnapshot();

        icon1.click();
        setTimeout(() => {
            expect(element.outerHTML).to.matchSnapshot();

            icon1.click();
            expect(element.outerHTML).to.matchSnapshot();

            done();
        }, 500);
    });

    it('checkbox', () => {
        instance = mount(CheckboxDemo);

        const tree = instance.refs.tree;
        expect(JSON.stringify(tree.getCheckedData())).to.matchSnapshot();

        const [checkbox1, checkbox2] = tree.element.querySelectorAll('.k-checkbox');
        checkbox2.click();
        expect(tree.element.outerHTML).to.matchSnapshot();
        expect(JSON.stringify(tree.getCheckedData())).to.matchSnapshot();

        const [firstIcon, icon] = tree.element.querySelectorAll('.k-icon');
        icon.click();
        const [, , icon1] = tree.element.querySelectorAll('.k-icon');
        icon1.click();
        expect(tree.element.outerHTML).to.matchSnapshot();

        expect(JSON.stringify(tree.getCheckedData(true))).to.matchSnapshot();

        // uncheck a leaf checkbox
        const [, , checkbox3, checkbox4] = tree.element.querySelectorAll('.k-checkbox');
        checkbox4.click();
        expect(tree.element.outerHTML).to.matchSnapshot();
        checkbox4.click();
        expect(tree.element.outerHTML).to.matchSnapshot();

        checkbox3.click();
        expect(tree.element.outerHTML).to.matchSnapshot();
    });

    it('async load', function(done) {
        this.enableTimeouts(false);
        instance = mount(LoadingDemo);

        const icon = instance.element.querySelector('.k-icon');
        icon.click();
        expect(instance.element.outerHTML).to.matchSnapshot();

        // loaded
        setTimeout(() => {
            expect(instance.element.outerHTML).to.matchSnapshot();

            // check
            const checkbox = instance.element.querySelector('.k-checkbox');
            checkbox.click();
            const [, icon1] = instance.element.querySelectorAll('.k-icon');
            icon1.click();
            setTimeout(() => {
                expect(instance.element.outerHTML).to.matchSnapshot();

                done();
            }, 1500);
        }, 1500);
    });

    it('append and remove node', () => {
        instance = mount(CustomDemo);         

        const element = instance.element;
        const [btn1, btn2] = element.querySelectorAll('.k-btn');
        btn1.click();
        expect(element.outerHTML).to.matchSnapshot();

        btn2.click();
        expect(element.outerHTML).to.matchSnapshot();
        const [, checkbox] = element.querySelectorAll('.k-checkbox');
        checkbox.click();
        const [,,, btn3] = element.querySelectorAll('.k-btn');
        btn3.click();
        expect(element.outerHTML).to.matchSnapshot();

        // uncheck and remove
        const [, , checkbox1] = element.querySelectorAll('.k-checkbox');
        checkbox1.click();
        checkbox1.parentNode.querySelector('.k-btn:nth-child(2)').click();
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('filterable', (done) => {
        instance = mount(FilterableDemo);

        instance.set('keywords', 'F');
        setTimeout(() => {
            expect(instance.element.outerHTML).to.matchSnapshot();

            instance.set('keywords', '2.1.1');
            setTimeout(() => {
                expect(instance.element.outerHTML).to.matchSnapshot();

                done();
            }, 500)
        }, 500);
    });
});
