import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {request} from './ajaxUploader';
import {isFunction, _$} from '../utils';

let index = 0;

export default class Upload extends Intact {
    @Intact.template()
    static template = template;

    static request = request;

    defaults() {
        return {
            accept: undefined,
            multiple: false,
            type: 'select', // select | drag | gallery
            files: [],
            autoUpload: true,
            disabled: false,
            action: '',
            name: undefined,
            headers: undefined,
            data: undefined,
            withCredentials: false,
            limit: undefined,
            maxSize: undefined,
            defaultFiles: undefined,

            beforeUpload: () => true,
            beforeRemove: () => true,

            _dragOver: false,
            _showImage: false,
        };
    }

    _init() {
        this._counter = 0;

        const {files, defaultFiles} = this.get();
        if (defaultFiles) {
            defaultFiles.forEach(file => {
                const obj = {
                    status: 'done',
                    name: file.name,
                    percent: 100,
                    uid: index++,
                    raw: file,
                    url: file.url,
                };
                files.push(obj);
            });
        }
    }

    submit() {
        this.get('files').forEach(file => {
            if (file.status === 'notReady') {
                this._upload(file);
            }
        });
    }

    _selectFile() {
        if (!this.get('disabled')) {
            const input = this.refs.input;
            input.value = '';
            input.click();
        }
    }

    _onInputChange(e) {
        this._addFiles(e.target.files);
    }

    _addFiles(fileList) {
        const files = this.get('files').slice(0);
        const _files = Array.from(fileList);
        const {maxSize, limit, autoUpload} = this.get();

        if (limit && (files.length + _files.length > limit)) {
            const error =  new Error(_$('超出文件数量最大限制：{limit}', {limit}));
            return this.trigger('error', error, _files, files);
        }

        const status = autoUpload ? 'ready' : 'notReady';

       _files.forEach(file => {
            if (maxSize && file.size > maxSize * 1024) {
                const error = new Error(
                    _$('"{name}" 超出文件最大限制：{maxSize}kb', {name: file.name, maxSize})
                );
                return this.trigger('error', error, file, files);
            }
            const obj = {
                status: status, 
                name: file.name,
                type: file.type,
                size: file.size,
                percent: 0,
                uid: index++,
                raw: file,
            };
            if (URL && URL.createObjectURL) {
                obj.url = URL.createObjectURL(file);
            }
            files.push(obj);
            if (autoUpload) this._upload(obj);
        });

        this.set('files', files);
    }

    _onDrop(e) {
        this._preventDefault(e);
        this._counter = 0;
        if (!this.get('disabled')) {
            this.set('_dragOver', false);
            this._addFiles(e._rawEvent.dataTransfer.files);
        }
    }

    _onDragEnter(e) {
        e.preventDefault();
        this._counter++;
        if (this.get('_dragOver') || this.get('disabled')) return;

        this.set('_dragOver', true);
    }

    _onDragLeave(e) {
        this._counter--;
        if (!this._counter) {
            this.set('_dragOver', false);
        }
    }

    _preventDefault(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    async _upload(file) {
        const beforeUpload= this.get('beforeUpload');
        let ret;
        try { ret = await beforeUpload.call(this, file, this.get('files')); } catch (e) {}
        if (!ret) {
            const files = this.get('files').slice(0);
            const index = files.indexOf(file);
            files.splice(index, 1);
            return this.set({files});
        }

        const data = this.get('data');
        const options = {
            action: this.get('action'),
            headers: this.get('headers'),
            data: {
                [this.get('name') || file.name]: file.raw,
                ...(isFunction(data) ? data.call(this, file) : data || {})
            },
            onProgress: e => {
                this._onProgress(e, file);
            },
            onError: e => {
                this._onError(e, file); 
            },
            onSuccess: res => {
                this._onSuccess(res, file);
            },
            withCredentials: this.get('withCredentials'),
        };

        file.request = request(options);
    }

    _onProgress(e, file) {
        file.status = 'uploading';
        file.percent = e.percent;
        this.trigger('progress', e, file, this.get('files'))
        this.update();
    }

    _onError(e, file) {
        file.status = 'error';
        this.trigger('error', e, file, this.get('files'))
        this.update();
    }

    _onSuccess(res, file) {
        file.status = 'done';
        this.trigger('success', res, file, this.get('files'))
        this.update();
    }

    async _removeFile(file, index, e) {
        e.stopPropagation();
        const beforeRemove = this.get('beforeRemove');
        const files = this.get('files').slice(0);
        let ret;
        try { ret = await beforeRemove.call(this, file, files); } catch (e) {}
        if (ret) {
            files.splice(index, 1);
            if (file.status === 'uploading') {
                file.request.abort();
            }
            this.set('files', files);
        }
    }

    _showImage(file) {
        this.set({
            '_showImage': true,
            '_showedFile': file,
        });
    }
}

export {Upload};
