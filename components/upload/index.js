import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

let index = 0;
const noop = () => {};

export default class Upload extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            accept: undefined,
            multiple: false,
            files: [],
            autoUpload: true,
            disabled: false,

            onRemove: noop,
            onUpload: noop,
        };
    }

    _selectFile() {
        if (!this.get('disabled')) {
            const input = this.refs.input;
            input.value = '';
            input.click();
        }
    }

    _addFile(e) {
        // const file = e.target.files[0];
        // const reader = new FileReader();
        // reader.onloadend = () => {
            // if (reader.error) {
                // console.log(reader.error);
            // } else {
                // console.log(file.size);
            // }
        // }

        const autoUpload = this.get('autoUpload');
        const files = this.get('files').slice(0);

        Array.from(e.target.files).forEach(file => {
            const obj = {
                status: 'ready',
                name: file.name,
                type: file.type,
                size: file.size,
                percent: 0,
                uid: index++,
                raw: file,
            };
            files.push(obj);
            if (autoUpload) this._upload(obj);
        });

        this.set('files', files);
    }

    _upload(file) {
        const timer = setInterval(() => {
            file.percent += Math.floor((Math.random() * 40));
            if (file.percent >= 100) {
                // setTimeout(() => {
                    file.status = 'done';
                    // this.update();
                // }, 500);
                clearInterval(timer);
            }
            this.update();
        }, 500);
    }

    async _removeFile(file, index) {
        const onRemove = this.get('onRemove');
        const files = this.get('files').slice(0);
        let ret;
        try { ret = await onRemove.call(this, file, files); } catch (e) {}
        if (ret) {
            files.splice(index, 1);
            this.set('files', files);
        }
    }
}

export {Upload};
