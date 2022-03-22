import BasicDemo from '~/components/tree/demos/basic';
import CheckboxDemo from '~/components/tree/demos/checkbox';
import LoadingDemo from '~/components/tree/demos/loading';
import CustomDemo from '~/components/tree/demos/custom';
import FilterableDemo from '~/components/tree/demos/filterable';
import SelectDemo from '~/components/tree/demos/select';
import DraggableDemo from '~/components/tree/demos/draggable';
import {mount, unmount, dispatchEvent, wait} from '../../test/utils';
import {Tree} from './';
import {RANGE} from './useDraggable';

describe('Tree', () => {
    afterEach(() => unmount());

    it('expand and shrink', async () => {
        const [instance, element] = mount(BasicDemo);

        const [, icon1, icon2] = element.querySelectorAll('.k-icon') as NodeListOf<HTMLElement>;

        icon2.click();
        await wait(400);
        expect(element.outerHTML).to.matchSnapshot();

        icon1.click();
        await wait(400);
        expect(element.outerHTML).to.matchSnapshot();

        icon1.click();
        await wait(400);
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('checkbox', async () => {
        const [instance, element] = mount(CheckboxDemo);

        const tree = instance.refs.tree as Tree;
        expect(JSON.stringify(tree.getCheckedData())).to.matchSnapshot();

        const [checkbox1, checkbox2] = element.querySelectorAll('.k-checkbox') as NodeListOf<HTMLElement>;
        checkbox2.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        const data1 = tree.getCheckedData();
        expect(data1.length).to.eql(4);
        expect(JSON.stringify(data1)).to.matchSnapshot();

        const [firstIcon, icon] = element.querySelectorAll('.k-icon') as NodeListOf<HTMLElement>;
        // expand
        icon.click();
        await wait();
        const [, , icon1] = element.querySelectorAll('.k-icon') as NodeListOf<HTMLElement>;
        // expand
        icon1.click();
        await wait(400);
        expect(element.outerHTML).to.matchSnapshot();
        const data2 = tree.getCheckedData(true);
        expect(data2.length).to.eql(2);
        expect(JSON.stringify(data2)).to.matchSnapshot();

        // uncheck a leaf checkbox
        const [, , checkbox3, checkbox4] = element.querySelectorAll('.k-checkbox') as NodeListOf<HTMLElement>;
        checkbox4.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        checkbox4.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
        checkbox3.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('async load', async function() {
        this.timeout(0);
        const [instance, element] = mount(LoadingDemo);

        const icon = element.querySelector('.k-icon') as HTMLElement;
        icon.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        await wait(500);
        const [, icon1] = element.querySelectorAll('.k-icon') as NodeListOf<HTMLElement>;
        icon1.click();
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        // loaded
        await wait(1500);
        expect(element.outerHTML).to.matchSnapshot();

        // check
        const checkbox = element.querySelector('.k-checkbox') as HTMLElement;
        checkbox.click();
        await wait();
        const [, , icon2] = element.querySelectorAll('.k-icon') as NodeListOf<HTMLElement>;
        icon2.click();
        await wait(1500);
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('append and remove node', async function() {
        this.timeout(0);
        const [instance, element] = mount(CustomDemo);

        const [btn1, btn2] = element.querySelectorAll('.k-btn') as NodeListOf<HTMLElement>;
        btn1.click();
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('data')).to.have.length(3);
        expect(instance.get('data')).to.matchSnapshot();

        btn2.click();
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();
        const [, checkbox] = element.querySelectorAll('.k-checkbox') as NodeListOf<HTMLElement>;
        checkbox.click();
        await wait();
        const [,,, btn3] = element.querySelectorAll('.k-btn') as NodeListOf<HTMLElement>;
        btn3.click();
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();

        // uncheck and remove
        const [, , checkbox1] = element.querySelectorAll('.k-checkbox') as NodeListOf<HTMLElement>;
        checkbox1.click();
        await wait();
        (checkbox1.parentNode!.querySelector('.k-btn:nth-child(2)') as HTMLElement).click();
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();
        expect(instance.get('data')).to.matchSnapshot();
    });

    it('filterable', async () => {
        const [instance, element] = mount(FilterableDemo);

        instance.set('keywords', 'First');
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();

        instance.set('keywords', '2.1.1');
        await wait(500);
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('select', async () => {
        const [instance, element] = mount(SelectDemo);

        const tree = instance.refs.tree as Tree;
        expect(tree.getSelectedData().length).to.eql(1);
        const [, , text1, text2, , disabledText] = element.querySelectorAll('.k-tree-text') as NodeListOf<HTMLElement>;
        text1.click();
        await wait();
        expect(tree.getSelectedData().length).to.eql(2);
        text1.click();
        text2.click();
        await wait();
        expect(tree.getSelectedData().length).to.eql(0);
        disabledText.click();
        await wait();
        expect(tree.getSelectedData().length).to.eql(0);

        // disable select and click on disabled selectable text should expand the tree
        tree.set('selectable', false);
        text1.click();
        await wait(400);
        expect(tree.getSelectedData().length).to.eql(0);
        expect(element.outerHTML).to.matchSnapshot();
    });

    it('draggable', async function() {
        this.timeout(0);

        const onDenyDrag = sinon.spy();
        const onDenyDrop = sinon.spy();
        const onDragEnd = sinon.spy();
        DraggableDemo.prototype.onDenyDrag = onDenyDrag;
        DraggableDemo.prototype.onDenyDrop = onDenyDrop;
        DraggableDemo.prototype.onDragEnd = onDragEnd;

        const [instance, element] = mount(DraggableDemo);

        instance.set('expandedKeys', ['2', '2-1', '1', '1-1']);
        await wait(400);

        // can not drag disabled item
        const disabled = element.querySelector('.k-disabled') as HTMLElement;
        // dispatchEvent(disabled, 'mousedown');
        dispatchEvent(disabled, 'dragstart');
        expect(onDenyDrag.callCount).to.eql(1);

        let nodes = element.querySelectorAll('.k-tree-label') as NodeListOf<HTMLElement>;

        // can not drag not-allowed item
        const notAllowed = nodes[2];
        // dispatchEvent(notAllowed, 'mousedown');
        dispatchEvent(notAllowed, 'dragstart');
        expect(onDenyDrag.callCount).to.eql(2);

        // drag insert
        return dragInsert(nodes[6], nodes[6]).then(() => {
            // drag to self will do nothing
            expect(element.innerHTML).to.matchSnapshot();
            expect(onDragEnd.callCount).to.eql(0);

            return dragInsert(nodes[6], notAllowed);
        }).then(() => {
            // drag to not-allowed item will do nothing
            expect(element.innerHTML).to.matchSnapshot();
            expect(onDragEnd.callCount).to.eql(0);

            return dragInsert(nodes[6], disabled);
        }).then(() => {
            // drag to disabled item will do nothing
            expect(element.innerHTML).to.matchSnapshot();
            expect(onDragEnd.callCount).to.eql(0);

            return dragInsert(nodes[6], nodes[5], 'before');
        }).then(() => {
            expect(element.innerHTML).to.matchSnapshot();
            expect(onDragEnd.callCount).to.eql(1);
            expect(instance.get('data')).to.matchSnapshot();

            return dragInsert(nodes[6], nodes[5], 'after');
        }).then(() => {
            expect(element.innerHTML).to.matchSnapshot();
            expect(instance.get('data')).to.matchSnapshot();

            return dragInsert(nodes[6], nodes[5]);
        }).then(() => {
            expect(element.innerHTML).to.matchSnapshot();
            expect(instance.get('data')).to.matchSnapshot();
        });
    });
});

async function dragInsert(srcElement: HTMLElement, toElement: HTMLElement, mode?: 'before' | 'after') {
    // dispatchEvent(srcElement, 'mousedown');
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

    await wait(700);
    dispatchEvent(toElement, 'dragend');
    await wait(400);
}
