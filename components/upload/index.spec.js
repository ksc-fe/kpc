import BasicDemo from '~/components/upload/demos/basic';
import DragDemo from '~/components/upload/demos/drag';
import GalleryDemo from '~/components/upload/demos/gallery';
import ManuallyDemo from '~/components/upload/demos/manually';
import {mount, unmount, dispatchEvent, getElement, wait} from 'test/utils';
import Upload from 'kpc/components/upload';
import Intact from 'intact';

function getDataTransfer(names, options = {}, type = '') {
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

let respond = xhr => { xhr.respond(200) };

// we should trigger change event manually in the newest ChromeHeadless
function fixInputChange(input) {
    let files;
    Object.defineProperty(input, 'files', {
        set(v) { files = v; dispatchEvent(input, 'change'); },
        get(v) { return files }
    });
}

describe('Upload', () => {
    let instance;

    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();
        const requests = this.requests = [];
        this.xhr.onCreate = (xhr) => {
            setTimeout(() => {
                respond(xhr);
            });
        };
    });

    afterEach(function(done) {
        unmount(instance);
        respond = xhr => { xhr.respond(200) };
        this.xhr.restore();
        setTimeout(done, 400);
    });

    it('basic', function(done) {
        this.enableTimeouts(false);
        instance = mount(BasicDemo);

        const upload = instance.vdt.vNode.children;
        upload.on('success', async () => {
            await wait(500);
            expect(instance.element.innerHTML).to.matchSnapshot();

            // beforeRemove
            const remove = instance.element.querySelector('.k-close');
            remove.click();
            let dialog = getElement('.k-dialog');
            const [cancel] = dialog.querySelectorAll('.k-footer .k-btn');
            cancel.click();
            await wait(500);
            expect(instance.element.innerHTML).to.matchSnapshot();

            remove.click();
            dialog = getElement('.k-dialog');
            const [, ok] = dialog.querySelectorAll('.k-footer .k-btn');
            ok.click();
            await wait(500);
            expect(instance.element.innerHTML).to.matchSnapshot();

            done();
        });
        const input = instance.element.querySelector('input');
        fixInputChange(input);
        input.files = getDataTransfer(['a']).files;
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('drag', function(done) {
        this.enableTimeouts(false);
        instance = mount(DragDemo);

        const upload = instance.vdt.vNode.children;
        upload.on('success', async () => {
            await wait(500);
            expect(instance.element.innerHTML).to.matchSnapshot();

            done();
        });
        const handle = instance.element.querySelector('.k-handle');
        dispatchEvent(handle, 'dragenter');
        expect(instance.element.outerHTML).to.matchSnapshot();
        dispatchEvent(handle, 'dragleave');
        expect(instance.element.outerHTML).to.matchSnapshot();
        dispatchEvent(handle, 'drop', {
            dataTransfer: getDataTransfer(['a'])
        });
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('gallery', function(done) {
        this.enableTimeouts(false);
        instance = mount(GalleryDemo);

        const upload = instance.vdt.vNode.children;
        upload.one('success', async () => {
            await wait(600);
            expect(instance.element.innerHTML.replace(/blob:[^"]*/g, '')).to.matchSnapshot();

            const view = instance.element.querySelector('.k-overlap');
            view.click();
            const dialog = getElement('.k-dialog');
            expect(dialog.innerHTML.replace(/blob:[^"]*/g, '')).to.matchSnapshot();

            upload.one('error', () => {
                expect(instance.element.innerHTML.replace(/blob:[^"]*/g, '')).to.matchSnapshot();

                done();
            });
            input.files = getDataTransfer(['b', 'c', 'd']).files;
        });
        const input = instance.element.querySelector('input');
        fixInputChange(input);
        input.files = getDataTransfer(['a']).files;
        expect(instance.element.innerHTML.replace(/blob:[^"]*/g, '')).to.matchSnapshot();
    });

    it('manually', function(done) {
        this.enableTimeouts(false);
        instance = mount(ManuallyDemo);

        const upload = instance.vdt.vNode.children;
        upload.one('success', async () => {
            await wait(500);
            expect(instance.element.innerHTML).to.matchSnapshot();
            done();
        });

        const input = instance.element.querySelector('input');
        fixInputChange(input);
        input.files = getDataTransfer(['a']).files;
        expect(instance.element.innerHTML).to.matchSnapshot();
        instance.upload();
    });

    it('should trigger error event when exceed the maxSize', (done) => {
        class Demo extends Intact {
            @Intact.template()
            static template = `<Upload maxSize={{ 1 }} ev-error={{ self._onError }}/>`;
            _init() {
                this.Upload = Upload;
            }
            _onError(e) {
                expect(e.message).to.matchSnapshot();
                done();
            }
        }
        instance = mount(Demo);
        const input = instance.element.querySelector('input');
        fixInputChange(input);
        input.files = getDataTransfer(['a'.repeat(1025 * 1)], {name: 'a'}).files;
    });

    it('should handle error on uploading correctly', function(done) {
        this.enableTimeouts(false);
         class Demo extends Intact {
            @Intact.template()
            static template = `
                <Upload
                    action="//localhost"
                    ev-error={{ self._onError }}
                />
            `;
            _init() {
                this.Upload = Upload;
            }
            async _onError(e) {
                await wait(500);
                // FIXME: the innerHTML has string: `height: 44px;` when we run test in travis-ci
                expect(instance.element.innerHTML.replace(/height: \d+px;/, '')).to.matchSnapshot();
                done();
            }
        }
        instance = mount(Demo);
        const input = instance.element.querySelector('input');
        fixInputChange(input);
        input.files = getDataTransfer(['a'.repeat(1024 * 100)], {name: 'a'}).files;

        respond = xhr => xhr.respond(500)
    });

    it('should abort request when remove file in progress', function(done) {
        this.enableTimeouts(false);
        class Demo extends Intact {
            @Intact.template()
            static template = `
                <Upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    ref="upload"
                />
            `;
            _init() {
                this.Upload = Upload;
            }
        }
        instance = mount(Demo);
        const input = instance.element.querySelector('input');
        fixInputChange(input);
        input.files = getDataTransfer(['a'.repeat(1024 * 512)], {name: 'a'}).files;
        instance.refs.upload.one('progress', async () => {
            instance.element.querySelector('.k-close').click();
            await wait(500);
            expect(instance.element.innerHTML).to.matchSnapshot();
            done();
        });
    });

    it('should check file type', (done) => {
        const i = new Upload({accept: '.jpg, image/png, video/*, .tar'});
        expect(!!i._isValidType('image/gif', '')).to.be.false;
        expect(!!i._isValidType('image/jpg', 'a.jpg')).to.be.true;
        expect(!!i._isValidType('image/png', '')).to.be.true;
        expect(!!i._isValidType('video/avi', '')).to.be.true;
        expect(!!i._isValidType('application/x-tar', 'a.tar')).to.be.true;
        
        instance = mount(BasicDemo);

        const upload = instance.vdt.vNode.children;
        upload.on('error', (e) => {
            expect(e.message).to.matchSnapshot();
            done();
        });

        const input = instance.element.querySelector('input');
        fixInputChange(input);
        input.files = getDataTransfer(['a'], {type: 'avi'}, 'video/avi').files;
    });
});
