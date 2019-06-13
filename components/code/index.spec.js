import BasicDemo from '~/components/code/demos/basic';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';

window.dispatchEvent = dispatchEvent;

describe('Code', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should toggle expand', async function() {
        this.enableTimeouts(false);
        instance = mount(BasicDemo);

        const code = instance.vdt.vNode.children; 
        await new Promise(resolve => {
            code.on('ready', resolve);
        }); 

        // change language
        code.set('language', 'php');
        expect(code.element.dataset.modeId).to.eql('php');
        // change theme
        code.set('theme', 'vs-dark');
        expect(code.element.querySelector('.monaco-editor').classList.contains('vs-dark')).to.be.true;
        // change options
        code.set('options', {minimap: {enabled: false}});
        expect(code.element.querySelector('.minimap').style.width).to.eql('0px');
        // change size
        code.set('height', '300px');
        await wait(0);
        expect(code.element.querySelector('.monaco-editor').style.height).to.eql('300px');
        // change value
        code.editor.setValue('test');
        expect(instance.get('value')).to.eql('test');
    });
});
