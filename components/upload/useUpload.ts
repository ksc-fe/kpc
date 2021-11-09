import {useInstance} from 'intact';
import {Upload, UploadFile} from './';
import {_$} from '../../i18n';
import {request, RequestError} from './ajaxUploader';
import {isFunction} from 'intact-shared';

export enum UploadFileStatus {
    Done,
    Ready,
    NotReady,
    Uploading,
    Error,
}

export function useUpload() {
    const instance = useInstance() as Upload;

    async function upload(file: UploadFile): Promise<boolean> {
        const beforeUpload = instance.get('beforeUpload');
        const files = instance.get('files')!;
        let shouldUpload = true;
        if (beforeUpload) {
            shouldUpload = await beforeUpload(file, files);
        }
        if (!shouldUpload) {
            const newFiles = files.slice(0);
            const index = newFiles.indexOf(file);
            if (index > -1) {
                newFiles.splice(index, 1);
                instance.set({files: newFiles});
            }
            return false;
        }

        const {data, action, headers, name, withCredentials} = instance.get();
        file.request = request({
            action,
            headers,
            withCredentials,
            data: {
                [name || file.name]: file.raw,
                ...(isFunction(data) ? data(file) : data || {}),
            },
            onProgress: (e, percent, xhr) => {
                onProgress(e, percent, file, xhr);
            },
            onError: (e) => {
                onError(e, file);
            },
            onSuccess: (res, xhr) => {
                onSuccess(res, file, xhr);
            },
        });

        return true;
    }

    function onProgress(e: ProgressEvent, percent: number, file: UploadFile, xhr: XMLHttpRequest) {
        file.status = UploadFileStatus.Uploading;
        file.percent = percent;
        instance.forceUpdate();
        instance.trigger('progress', e, xhr, file, instance.get('files')!);
    }

    function onError(e: RequestError, file: UploadFile) {
        file.status = UploadFileStatus.Error;
        instance.forceUpdate();
        instance.trigger('error', e, file, instance.get('files')!);
    }

    function onSuccess(res: any, file: UploadFile, xhr: XMLHttpRequest) {
        file.status = UploadFileStatus.Done;
        instance.forceUpdate();
        instance.trigger('success', res, xhr, file, instance.get('files')!);
    }

    return upload;
}
