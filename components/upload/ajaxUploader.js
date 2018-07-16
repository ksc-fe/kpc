export function request(options) {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    const data = options.data;
    if (data) {
        for (let key in data) {
            if (data[key] != null) {
                formData.append(key, data[key]);
            }
        }
    }

    const upload = xhr.upload;
    if (upload && options.onProgress) {
        upload.onprogress = (e) => {
            if (e.total > 0) {
                e.percent = Math.floor(e.loaded / e.total * 100);
            }
            options.onProgress(e);
        };
    }

    xhr.onerror = (e) => options.onError(e);
    if (options.onSuccess) {
        xhr.onload = () => {
            if (xhr.status < 200 || xhr.status >= 300) {
                return options.onError(getError(options, xhr), getBody(xhr));
            }
            options.onSuccess(getBody(xhr));
        }
    }

    xhr.open('post', options.action, true);

    if (options.withCredentials && 'withCredentials' in xhr) {
        xhr.withCredentials = true;
    }

    const headers = options.headers;
    if (headers) {
        for (let key in headers) {
            if (headers[key] != null) {
                xhr.setRequestHeader(key, headers[key]);
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

function getError(options, xhr) {
    const msg = `cannot post ${options.action} ${xhr.status}'`;
    const err = new Error(msg);
    err.status = xhr.status;
    err.method = 'post';
    err.url = options.action;

    return err;
}

function getBody(xhr) {
    const text = xhr.responseText || xhr.response;
    if (!text) return text;

    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}
