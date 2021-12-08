import BasicDemo from '~/components/upload/demos/basic';
import DragDemo from '~/components/upload/demos/drag';
import GalleryDemo from '~/components/upload/demos/gallery';
import ManuallyDemo from '~/components/upload/demos/manually';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';
import {Upload} from './';

type Options = {
    name?: string,
    type?: string
}

function getDataTransfer(names: string[], options: Options = {}, type = '') {
    const data = names.map(item => {
        const file = new File([item], `${options.name || item}.${options.type || 'png'}`, {type});
        return file;
    });
    const dt = new DataTransfer();
    for (let file of data) {
        dt.items.add(file);
    }

    return dt;
}

let respond = (xhr: any) => { xhr.respond(200) };

// we should trigger change event manually in the newest ChromeHeadless
function fixInputChange(input: HTMLInputElement) {
    let files: File[];
    Object.defineProperty(input, 'files', {
        set(v) { files = v; dispatchEvent(input, 'change'); },
        get() { return files }
    });
}

describe('Upload', () => {
    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();
        const requests = this.requests = [];
        this.xhr.onCreate = (xhr: any) => {
            setTimeout(() => {
                respond(xhr);
            });
        };
    });

    afterEach(function(done) {
        // unmount(instance);
        respond = xhr => { xhr.respond(200) };
        this.xhr.restore();
        setTimeout(done, 400);
    });

    it('basic', function(done) {
        this.timeout(0);
        const [instance, element] = mount(BasicDemo);

        const upload = instance.$lastInput!.children as Upload;
        upload.on('success', async () => {
            await wait(500);
            expect(element.innerHTML).to.matchSnapshot();

            // beforeRemove
            const remove = element.querySelector('.k-upload-close') as HTMLDivElement;
            remove.click();
            await wait();
            let dialog = getElement('.k-dialog')!;
            const [, cancel] = dialog.querySelectorAll('.k-dialog-footer .k-btn');
            (cancel as HTMLDivElement).click();
            await wait(500);
            expect(element.innerHTML).to.matchSnapshot();

            remove.click();
            await wait();
            dialog = getElement('.k-dialog')!;
            const [ok] = dialog.querySelectorAll('.k-dialog-footer .k-btn');
            (ok as HTMLDivElement).click();
            await wait(500);
            expect(element.innerHTML).to.matchSnapshot();

            done();
        });
        const input = element.querySelector('input') as HTMLInputElement;
        fixInputChange(input);
        input.files = getDataTransfer(['a']).files;
        expect(element.innerHTML).to.matchSnapshot();
    });

    it('drag', async function() {
        this.timeout(0);
        const [instance, element] = mount(DragDemo);

        const handle = element.querySelector('.k-upload-handle') as HTMLDivElement;
        dispatchEvent(handle, 'dragenter');
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        dispatchEvent(handle, 'dragleave');
        await wait();
        expect(element.outerHTML).to.matchSnapshot();

        const upload = instance.$lastInput!.children as Upload;
        const p = new Promise<void>(resolve => {
            upload.on('success', () => {
                setTimeout(() => {
                    expect(element.innerHTML).to.matchSnapshot();

                    resolve();
                }, 1000)
            });
        });
        dispatchEvent(handle, 'drop', {
            dataTransfer: getDataTransfer(['a'])
        });
        await wait();
        expect(element.innerHTML).to.matchSnapshot();

        await p;
    });

    it('gallery', function(done) {
        this.timeout(0);
        const [instance, element] = mount(GalleryDemo);

        const input = element.querySelector('input') as HTMLInputElement;
        const upload = instance.$lastInput!.children as Upload;
        upload.on('success', async () => {
            await wait(1000);
            expect(element.innerHTML.replace(/blob:[^"]*/g, '')).to.matchSnapshot();

            const view = element.querySelector('.k-upload-overlap') as HTMLElement;
            view.click();
            await wait();
            const dialog = getElement('.k-dialog')!;
            expect(dialog.innerHTML.replace(/blob:[^"]*/g, '')).to.matchSnapshot();

            upload.on('error', (err) => {
                expect(err.message).to.matchSnapshot();
                expect(element.innerHTML.replace(/blob:[^"]*/g, '')).to.matchSnapshot();

                done();
            });
            input.files = getDataTransfer(['b', 'c', 'd']).files;
        });
        fixInputChange(input);
        input.files = getDataTransfer(['a']).files;
        wait().then(() => {
            expect(element.innerHTML.replace(/blob:[^"]*/g, '')).to.matchSnapshot();
        });
    });

    // it('manually', function(done) {
        // this.enableTimeouts(false);
        // instance = mount(ManuallyDemo);

        // const upload = instance.vdt.vNode.children;
        // upload.one('success', async () => {
            // await wait(500);
            // expect(instance.element.innerHTML).to.matchSnapshot();
            // done();
        // });

        // const input = instance.element.querySelector('input');
        // fixInputChange(input);
        // input.files = getDataTransfer(['a']).files;
        // expect(instance.element.innerHTML).to.matchSnapshot();
        // instance.upload();
    // });

    // it('should trigger error event when exceed the maxSize', (done) => {
        // class Demo extends Intact {
            // @Intact.template()
            // static template = `<Upload maxSize={{ 1 }} ev-error={{ self._onError }}/>`;
            // _init() {
                // this.Upload = Upload;
            // }
            // _onError(e) {
                // expect(e.message).to.matchSnapshot();
                // done();
            // }
        // }
        // instance = mount(Demo);
        // const input = instance.element.querySelector('input');
        // fixInputChange(input);
        // input.files = getDataTransfer(['a'.repeat(1025 * 1)], {name: 'a'}).files;
    // });

    // it('should handle error on uploading correctly', function(done) {
        // this.enableTimeouts(false);
         // class Demo extends Intact {
            // @Intact.template()
            // static template = `
                // <Upload
                    // action="//localhost"
                    // ev-error={{ self._onError }}
                // />
            // `;
            // _init() {
                // this.Upload = Upload;
            // }
            // async _onError(e) {
                // await wait(500);
                // // FIXME: the innerHTML has string: `height: 44px;` when we run test in travis-ci
                // expect(instance.element.innerHTML.replace(/height: \d+px;/, '')).to.matchSnapshot();
                // done();
            // }
        // }
        // instance = mount(Demo);
        // const input = instance.element.querySelector('input');
        // fixInputChange(input);
        // input.files = getDataTransfer(['a'.repeat(1024 * 100)], {name: 'a'}).files;

        // respond = xhr => xhr.respond(500)
    // });

    // it('should abort request when remove file in progress', function(done) {
        // this.enableTimeouts(false);
        // class Demo extends Intact {
            // @Intact.template()
            // static template = `
                // <Upload
                    // action="//jsonplaceholder.typicode.com/posts/"
                    // ref="upload"
                // />
            // `;
            // _init() {
                // this.Upload = Upload;
            // }
        // }
        // instance = mount(Demo);
        // const input = instance.element.querySelector('input');
        // fixInputChange(input);
        // input.files = getDataTransfer(['a'.repeat(1024 * 512)], {name: 'a'}).files;
        // instance.refs.upload.one('progress', async () => {
            // instance.element.querySelector('.k-close').click();
            // await wait(500);
            // expect(instance.element.innerHTML).to.matchSnapshot();
            // done();
        // });
    // });

    // it('should check file type', (done) => {
        // const i = new Upload({accept: '.jpg, image/png, video/*, .tar'});
        // expect(!!i._isValidType('image/gif', '')).to.be.false;
        // expect(!!i._isValidType('image/jpg', 'a.jpg')).to.be.true;
        // expect(!!i._isValidType('image/jpg', 'a.JPG')).to.be.true;
        // expect(!!i._isValidType('image/png', '')).to.be.true;
        // expect(!!i._isValidType('video/avi', '')).to.be.true;
        // expect(!!i._isValidType('application/x-tar', 'a.tar')).to.be.true;
        
        // instance = mount(BasicDemo);

        // const upload = instance.vdt.vNode.children;
        // upload.on('error', (e) => {
            // expect(e.message).to.matchSnapshot();
            // done();
        // });

        // const input = instance.element.querySelector('input');
        // fixInputChange(input);
        // input.files = getDataTransfer(['a'], {type: 'avi'}, 'video/avi').files;
    // });

    // it('should not add file if beforeUpload returns false', (done) => {
        // class Demo extends Intact {
            // @Intact.template()
            // static template = `
                // <Upload
                    // action="//jsonplaceholder.typicode.com/posts/"
                    // ref="upload"
                    // beforeUpload={{ self.beforeUpload }}
                    // type="gallery"
                    // limit={{ 1 }}
                // />
            // `;
            // _init() {
                // this.Upload = Upload;
            // }
            // beforeUpload(file) {
                // return new Promise((resolve, reject) => {
                    // setTimeout(() => {
                        // const files = this.refs.upload.get('files');
                        // expect(files.length).to.eql(0);
                        // reject();
                        // done();
                    // }, 100);
                // });
            // }
        // }
        // instance = mount(Demo);
        // const input = instance.element.querySelector('input');
        // fixInputChange(input);
        // input.files = getDataTransfer(['a'.repeat(1024 * 512)], {name: 'a'}).files;
    // });
});
