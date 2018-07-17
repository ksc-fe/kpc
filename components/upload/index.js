import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {request} from './ajaxUploader';
import {isFunction} from '../utils';

let index = 0;

export default class Upload extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            accept: undefined,
            multiple: false,
            type: 'select', // select | drag
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

            onProgress: undefined,
            onError: undefined,
            onSuccess: undefined,
            onRemove: undefined,
            onUpload: undefined,

            _dragOver: false,
        };
    }

    _init() {
        this._counter = 0;
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
        const autoUpload = this.get('autoUpload');
        const files = this.get('files').slice(0);
        const _files = Array.from(fileList);
        const {maxSize, limit, onError} = this.get();

        if (limit && (files.length + _files.length > limit)) {
            const error =  new Error(`超出文件数量最大限制：${limit}`);
            return onError && onError.call(this, err, _files, files);
        }

       _files.forEach(file => {
            if (maxSize && file.size > maxSize * 1024) {
                const error = new Error(`"${file.name}"超出文件最大限制：${maxSize}kb`);
                return onError && onError.call(this, error, file);
            }
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

    _onDrop(e) {
        this._preventDefault(e);
        this.set('_dragOver', false);
        this._counter = 0;
        this._addFiles(e._rawEvent.dataTransfer.files);
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

    _upload(file) {
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

        request(options);
    }

    _onProgress(e, file) {
        const onProgress = this.get('onProgress');

        file.status = 'uploading';
        file.percent = e.percent;
        onProgress && onProgress.call(this, e, file);
        this.update();
    }

    _onError(e, file) {
        const onError = this.get('onError');

        file.status = 'error';
        onError && onError.call(this, e, file);
        this.update();
    }

    _onSuccess(res, file) {
        const onSuccess = this.get('onSuccess');

        file.status = 'done';
        onSuccess && onSuccess.call(this, res, file);
        this.update();
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
