import {isNullOrUndefined} from 'intact-shared';

export type Options = {
    action?: string
    headers?: Record<string | number, string>
    data: any
    withCredentials?: boolean
    onProgress: (e: ProgressEvent, percent: number, xhr: XMLHttpRequest) => void 
    onError: (err: RequestError, xhr: XMLHttpRequest) => void 
    onSuccess: (res: any, xhr: XMLHttpRequest) => void 
}

export interface RequestError extends Error {
    status: number
    method: string
    url: string
    response: any
}

export function request(options: Options) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    const data = options.data;
    if (data) {
        for (let key in data) {
            if (!isNullOrUndefined(data[key])) {
                formData.append(key, data[key]);
            }
        }
    }

    const upload = xhr.upload;
    if (upload) {
        upload.onprogress = (e: ProgressEvent) => {
            let percent = 0;
            if (e.total > 0) {
                percent = Math.floor(e.loaded / e.total * 100);
            }
            options.onProgress(e, percent, xhr);
        };
    }

    xhr.onerror = (e: ProgressEvent) => options.onError(getError(options, xhr), xhr);
    xhr.onload = () => {
        if (xhr.status < 200 || xhr.status >= 300) {
            return options.onError(getError(options, xhr), xhr);
        }
        options.onSuccess(getBody(xhr), xhr);
    }

    xhr.open('post', options.action || '', true);

    if (options.withCredentials && 'withCredentials' in xhr) {
        xhr.withCredentials = true;
    }

    const headers = options.headers;
    if (headers) {
        for (let key in headers) {
            const value = headers[key];
            if (!isNullOrUndefined(value)) {
                xhr.setRequestHeader(key, value);
            }
        }
    }

    xhr.send(formData);

    return {
        abort() {
            xhr.abort();
        }
    };
}

function getError(options: Options, xhr: XMLHttpRequest) {
    const msg = `cannot post ${options.action} ${xhr.status}'`;
    const err = new Error(msg) as RequestError;
    err.status = xhr.status;
    err.method = 'post';
    err.url = options.action || '';
    err.response = getBody(xhr);

    return err;
}

function getBody(xhr: XMLHttpRequest) {
    const text = xhr.responseText || xhr.response;
    if (!text) return text;

    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}
