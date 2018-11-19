import BasicDemo from '~/components/upload/demos/basic';
import DragDemo from '~/components/upload/demos/drag';
import GalleryDemo from '~/components/upload/demos/gallery';
import ManuallyDemo from '~/components/upload/demos/manually';
import {mount, unmount, dispatchEvent, getElement} from 'test/utils';
import Upload from 'kpc/components/upload';
import Intact from 'intact';

function getDataTransfer(names, options = {}) {
    const data = names.map(item => {
        const file = new File([item], `${options.name || item}.${options.type || 'png'}`);
        return file;
    });
    const dt = new DataTransfer();
    for (let file of data) {
        dt.items.add(file);
    }

    return dt;
}

describe('Upload', () => {
    let instance;

    afterEach((done) => {
        unmount(instance);
        setTimeout(done, 400);
    });

    it('basic', function(done) {
        this.enableTimeouts(false);
        instance = mount(BasicDemo);

        const upload = instance.vdt.vNode.children;
        upload.on('success', () => {
            setTimeout(() => {
                expect(instance.element.innerHTML).to.matchSnapshot();

                // beforeRemove
                const remove = instance.element.querySelector('.k-close');
                remove.click();
                let dialog = getElement('.k-dialog');
                const [cancel] = dialog.querySelectorAll('.k-footer .k-btn');
                cancel.click();
                setTimeout(() => {
                    expect(instance.element.innerHTML).to.matchSnapshot();

                    remove.click();
                    dialog = getElement('.k-dialog');
                    const [, ok] = dialog.querySelectorAll('.k-footer .k-btn');
                    ok.click();
                    setTimeout(() => {
                        expect(instance.element.innerHTML).to.matchSnapshot();

                        done();
                    }, 500);
                }, 500);

            }, 500);
        });
        const input = instance.element.querySelector('input');
        input.files = getDataTransfer(['a']).files;
        expect(instance.element.innerHTML).to.matchSnapshot();
    });

    it('drag', function(done) {
        this.enableTimeouts(false);
        instance = mount(DragDemo);

        const upload = instance.vdt.vNode.children;
        upload.on('success', () => {
            setTimeout(() => {
                expect(instance.element.innerHTML).to.matchSnapshot();

                done();
            }, 500);
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
        upload.one('success', () => {
            setTimeout(() => {
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
            }, 500);
        });
        const input = instance.element.querySelector('input');
        input.files = getDataTransfer(['a']).files;
        expect(instance.element.innerHTML.replace(/blob:[^"]*/g, '')).to.matchSnapshot();
    });

    it('manually', function(done) {
        this.enableTimeouts(false);
        instance = mount(ManuallyDemo);

        const upload = instance.vdt.vNode.children;
        upload.one('success', () => {
            setTimeout(() => {
                expect(instance.element.innerHTML).to.matchSnapshot();
                done();
            }, 500);
        });

        const input = instance.element.querySelector('input');
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
        input.files = getDataTransfer(['a'.repeat(1024 * 2)], {name: 'a'}).files;
    });

    it('should handle error on uploading correctly', function(done) {
        this.enableTimeouts(false);
         class Demo extends Intact {
            @Intact.template()
            static template = `
                <Upload
                    action="//no.typicode.com/posts/"
                    ev-error={{ self._onError }}
                />
            `;
            _init() {
                this.Upload = Upload;
            }
            _onError(e) {
                setTimeout(() => {
                    expect(instance.element.innerHTML).to.matchSnapshot();
                    done();
                }, 600);
            }
        }
        instance = mount(Demo);
        const input = instance.element.querySelector('input');
        input.files = getDataTransfer(['a'], {name: 'a'}).files;
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
        input.files = getDataTransfer(['a'.repeat(1024 * 512)], {name: 'a'}).files;
        instance.refs.upload.one('progress', () => {
            instance.element.querySelector('.k-close').click();
            setTimeout(() => {
                expect(instance.element.innerHTML).to.matchSnapshot();
                done();
            }, 500);
        });
    });
});
