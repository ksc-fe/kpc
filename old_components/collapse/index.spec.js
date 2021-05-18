import BasicDemo from '~/components/collapse/demos/basic';
import AccordionDemo from '~/components/collapse/demos/accordion';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';
import Intact from 'intact';
import {Collapse, CollapseItem} from 'kpc/components/collapse';

describe('Collapse', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should toggle expand', async function() {
        this.enableTimeouts(false);
        instance = mount(BasicDemo);

        const [title1, title2, title3] = instance.element.querySelectorAll('.k-title');
        title2.click();
        await wait(700);
        // the innerHTML is different on travis and local environment
        expect(instance.element.innerHTML.replace(/ style=""/g, '')).to.matchSnapshot();

        title1.click();
        await wait(700);
        expect(instance.element.innerHTML.replace(/ style=""/g, '')).to.matchSnapshot();

        title3.click();
        expect(instance.element.innerHTML.replace(/ style=""/g, '')).to.matchSnapshot();
    });

    it('should expand only one panel', async () => {
        instance = mount(AccordionDemo);

        const [title1, title2] = instance.element.querySelectorAll('.k-title');
        title2.click();
        await wait(700);
        expect(instance.element.innerHTML.replace(/ style=""/g, '')).to.matchSnapshot();

        title2.click();
        await wait(700);
        expect(instance.element.innerHTML.replace(/ style=""/g, '')).to.matchSnapshot();
    });

    it('should trigger end even if height is 0', () => {
        class Component extends Intact {
            @Intact.template({delimiters: ['{', '}']})
            static template = `
                <Collapse class="collapse-test">
                    <CollapseItem title="test" />
                </Collapse>
            `;

            _init() {
                this.Collapse = Collapse;
                this.CollapseItem = CollapseItem;
            }
        }
        // add style
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode('.collapse-test .k-wrapper { padding: 0 !important; }'));
        document.head.appendChild(style);

        instance = mount(Component);

        const title = instance.element.querySelector('.k-title');
        title.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
        title.click();
        expect(instance.element.innerHTML).to.matchSnapshot();

        document.head.removeChild(style);
    });
});
