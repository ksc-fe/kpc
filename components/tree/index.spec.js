import BasicDemo from '~/components/tree/demos/basic';
import CheckboxDemo from '~/components/tree/demos/checkbox';
import LoadingDemo from '~/components/tree/demos/loading';
import CustomDemo from '~/components/tree/demos/custom';
import FilterableDemo from '~/components/tree/demos/filterable';
import SelectDemo from '~/components/tree/demos/select';
import DraggableDemo from '~/components/tree/demos/draggable';
import {mount, unmount, dispatchEvent} from 'test/utils';
import {RANGE} from './constants';

describe('Tree', () => {
    let instance;

    // afterEach(() => unmount(instance));

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

    it('select', () => {
        instance = mount(SelectDemo);

        expect(instance.refs.tree.getSelectedData().length).to.eql(1);
        const [, , text1, text2] = instance.element.querySelectorAll('.k-text');
        text1.click();
        expect(instance.refs.tree.getSelectedData().length).to.eql(2);
        text1.click();
        text2.click();
        expect(instance.refs.tree.getSelectedData().length).to.eql(0);
    });

    it('draggable', function() {
        this.enableTimeouts(false);

        const onDenyDrag = sinon.spy();
        const onDenyDrop = sinon.spy();
        const onDragEnd = sinon.spy();
        DraggableDemo.prototype._onDenyDrag = onDenyDrag;
        DraggableDemo.prototype._onDenyDrop = onDenyDrop;
        DraggableDemo.prototype._onDragEnd = onDragEnd;

        instance = mount(DraggableDemo);

        instance.set('expandedKeys', ['2', '2-1', '1', '1-1']);
        const element = instance.element;

        // can not drag disabled item
        const disabled = element.querySelector('.k-disabled .k-label');
        dispatchEvent(disabled, 'mousedown');
        dispatchEvent(disabled, 'dragstart');
        expect(onDenyDrag.callCount).to.eql(1);

        const labels = element.querySelectorAll('.k-label');

        // can not drag not-allowed item
        const notAllowed = labels[2];
        dispatchEvent(notAllowed, 'mousedown');
        dispatchEvent(notAllowed, 'dragstart');
        expect(onDenyDrag.callCount).to.eql(2);

        // drag insert
        return dragInsert(labels[6], labels[6]).then(() => {
            // drag to self will do nothing
            expect(element.innerHTML).to.matchSnapshot();
            expect(onDragEnd.callCount).to.eql(0);
            return dragInsert(labels[6], notAllowed);
        }).then(() => {
            // drag to not-allowed item will do nothing
            expect(element.innerHTML).to.matchSnapshot();
            expect(onDragEnd.callCount).to.eql(0);
            return dragInsert(labels[6], disabled);
        }).then(() => {
            // drag to disabled item will do nothing
            expect(element.innerHTML).to.matchSnapshot();
            expect(onDragEnd.callCount).to.eql(0);
            return dragInsert(labels[6], labels[5], 'before');
        }).then(() => {
            expect(element.innerHTML).to.matchSnapshot();
            expect(onDragEnd.callCount).to.eql(1);
            return dragInsert(labels[6], labels[5], 'after');
        }).then(() => {
            expect(element.innerHTML).to.matchSnapshot();
            return dragInsert(labels[6], labels[5]);
        }).then(() => {
            expect(element.innerHTML).to.matchSnapshot();
        });
    });
});

function dragInsert(srcElement, toElement, mode) {
    return new Promise(resolve => {
        dispatchEvent(srcElement, 'mousedown');
        dispatchEvent(srcElement, 'dragstart', {dataTransfer: new DataTransfer()});
        const {top, bottom, height} = toElement.getBoundingClientRect();
        const des = height * RANGE;
        if (mode === 'before') {
            dispatchEvent(toElement, 'dragover', {clientY: top + des - 1});
        } else if (mode === 'after') {
            dispatchEvent(toElement, 'dragover', {clientY: bottom - des + 1});
        } else {
            dispatchEvent(toElement, 'dragover', {clientY: top + des + 1});
        }

        setTimeout(() => {
            dispatchEvent(toElement, 'dragend');
            resolve();
        }, 400)
    });
}
