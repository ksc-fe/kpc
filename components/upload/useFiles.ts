import {useInstance} from 'intact';
import {Upload, UploadFile} from './';
import {_$} from '../../i18n';
import {UploadFileStatus} from './useUpload';

let uid = 0;

export function useFiles(
    isValidType: (type: string, name: string) => boolean,
    upload: (file: UploadFile) => Promise<boolean>,
) {
    const instance = useInstance() as Upload;

    initFiles();

    function initFiles() {
        const {files, defaultFiles} = instance.get();
        const _files = files!.slice(0);
        if (defaultFiles) {
            defaultFiles.forEach(file => {
                _files.push({
                    status: UploadFileStatus.Done,
                    name: file.name,
                    percent: 100,
                    uid: uid++,
                    raw: file,
                    url: file.url,
                });
            });

            instance.set('files', _files);
        }
    }

    async function addFiles(fileList: FileList) {
        const files = instance.get('files')!.slice(0);
        const newFiles = Array.from(fileList);
        const {maxSize, limit, autoUpload, accept} = instance.get();

        if (limit && (files.length + newFiles.length) > limit) {
            const error =  new Error(_$('超出文件数量最大限制：{limit}', {limit}));
            return instance.trigger('error', error, newFiles, files);
        }

        const status = autoUpload ? UploadFileStatus.Ready : UploadFileStatus.NotReady;

        for (let i = 0; i < newFiles.length; i++) {
            const file = newFiles[i];

            if (maxSize && file.size > maxSize * 1024) {
                const error = new Error(
                    _$('"{name}" 超出文件最大限制：{maxSize}kb', {name: file.name, maxSize})
                );
                instance.trigger('error', error, file, files);
                continue;
            }

            if (accept && file.type && !isValidType(file.type, file.name)) {
                const error = new Error(_$('"{name}" 文件类型不合法', {name: file.name}));
                instance.trigger('error', error, file, files);
                continue;
            }

            const obj: UploadFile = {
                status,
                name: file.name,
                type: file.type,
                size: file.size,
                percent: 0,
                uid: uid++,
                raw: file,
            };

            if (URL && URL.createObjectURL) {
                obj.url = URL.createObjectURL(file);
            }
            if (!autoUpload || (await upload(obj))) {
                files.push(obj);
            }
        }

        instance.set('files', files);
    }

    async function removeFile(file: UploadFile, index: number) {
        const beforeRemove = instance.get('beforeRemove');
        const files = instance.get('files')!.slice(0);
        let shouldRemove = true;
        if (beforeRemove) {
            shouldRemove = await beforeRemove(file, files);
        }
        if (shouldRemove) {
            files.splice(index, 1);
            if (file.status === UploadFileStatus.Uploading) {
                file.request.abort();
            }
            instance.set('files', files);
        }
    }

    return {addFiles, removeFile};
}
