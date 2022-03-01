export function crossDomainWorker() {
    if (!(window as any).MonacoEnvironment) return;

    const oldGetWorkerUrl = (window as any).MonacoEnvironment.getWorkerUrl;

    if (oldGetWorkerUrl.$) return;
    oldGetWorkerUrl.$ = true;

    (window as any).MonacoEnvironment.getWorkerUrl = (moduleId: string, label: string) => {
        const workerUrl = oldGetWorkerUrl(moduleId, label);
        const {isSame, url} = isSameOrigin(workerUrl);

        /* istanbul ignore else */
        if (isSame) return workerUrl;
        else {
            let blob;
            try {
                blob = new Blob([`importScripts('${url}');`], { type: 'application/javascript' });
            } catch (e) {
                const blobBuilder = new (
                    (window as any).BlobBuilder ||
                    (window as any).WebKitBlobBuilder ||
                    (window as any).MozBlobBuilder
                )();
                blobBuilder.append(`importScripts('${url}');`);
                blob = blobBuilder.getBlob('application/javascript');
            }
            const URL = window.URL || window.webkitURL;
            const blobUrl = URL.createObjectURL(blob);
            return blobUrl;
        }
    }
}

function isSameOrigin(url: string) {
    const loc = window.location;
    const a = document.createElement('a');
    a.href = url;

    return {
        isSame: a.hostname === loc.hostname && a.port === loc.port && a.protocol === loc.protocol,
        // maybe the protocol is relative
        url: a.href,
    };
}

