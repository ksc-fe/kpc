import BasicDemo from '~/components/code/demos/basic';
import {mount, unmount, dispatchEvent, wait} from 'test/utils';
import {Code, CodeProps} from './';

describe('Code', () => {
    afterEach(() => unmount());

    it('should update status', async function() {
        this.timeout(0);
        const [instance, element] = mount(BasicDemo);

        const code = instance.$lastInput!.children as Code; 
        await new Promise(resolve => {
            code.on('ready', resolve);
        }); 

        const set = <T extends keyof CodeProps>(name: T, value: CodeProps[T]) => {
            code.set(name, value);
            code.trigger<any>(`$receive:${name}`, value);
        };

        // change language
        set('language', 'php');
        expect(element.dataset.modeId).to.eql('php');
        // change theme
        set('theme', 'vs-dark');
        expect(element.querySelector<HTMLElement>('.monaco-editor')!.classList.contains('vs-dark')).to.be.true;
        // change options
        set('options', {minimap: {enabled: false}});
        expect(element.querySelector<HTMLElement>('.minimap')!.style.width).to.eql('0px');
        // change size
        set('height', '300px');
        await wait(0);
        expect(element.querySelector<HTMLElement>('.monaco-editor')!.style.height).to.eql('300px');
        // change value
        const editor = code.getEditor()!;
        editor.setValue('test');
        expect(instance.get('value')).to.eql('test');
        instance.set('value', 'hello');
        await wait();
        expect(editor.getValue()).to.eql('hello');

        // change readonly
        set('readOnly', true);
    });
});
