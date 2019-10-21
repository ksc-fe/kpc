import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import ResizeObserver from 'resize-observer-polyfill'; 

export default class Code extends Intact {
    @Intact.template()
    static template = template;

    static events = {
        ready: true,
    };

    static propTypes = {
        value: String,
        language: String,
        width: String,
        height: String,
        loading: Boolean,
        theme: ['vs', 'vs-dark', 'hc-black'],
        options: Object,
        readonly: Boolean,
    }

    defaults() {
        return {
            value: '',
            language: 'javascript',
            width: undefined,
            height: undefined,
            loading: true,
            theme: 'vs',
            readonly: false,
            options: {},
        }
    }

    _init() {
        this.on('$receive:value', (c, v) => {
            if (v == null) {
                this.set('value', '', {silent: true});
            }
        });
    }

    _mount() {
        import('monaco-editor').then(monaco => {
            if (this.destroyed) return;

            this._crossDomainWorker();

            if (monaco.default) {
                monaco = monaco.default;
            }

            const {value, language, theme, options, readonly} = this.get();
            this.Editor = monaco.editor;
            this.editor = monaco.editor.create(this.element, {
                value,
                language,
                theme,
                readOnly: readonly,
                ...options,
            });

            this.set('loading', false);
            this._watch();

            this.trigger('ready', this);
        });
    }

    _crossDomainWorker() {
        if (!window.MonacoEnvironment) return;

        const oldGetWorkerUrl = window.MonacoEnvironment.getWorkerUrl;

        if (oldGetWorkerUrl.$) return;
        oldGetWorkerUrl.$ = true;

        const isSameOrigin = (url) => {
            const loc = window.location;
            const a = document.createElement('a');
            a.href = url;

            return {
                isSame: a.hostname === loc.hostname && a.port === loc.port && a.protocol === loc.protocol,
                // maybe the protocol is relative
                url: a.href,
            };
        };

        window.MonacoEnvironment.getWorkerUrl = function(moduleId, label) {
            const workerUrl = oldGetWorkerUrl(moduleId, label);
            const {isSame, url} = isSameOrigin(workerUrl);

            if (isSame) return workerUrl;

            let blob;
            try {
                blob = new Blob([`importScripts('${url}');`], { type: 'application/javascript' });
            } catch (e) {
                const blobBuilder = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
                blobBuilder.append(`importScripts('${url}');`);
                blob = blobBuilder.getBlob('application/javascript');
            }
            const URL = window.URL || window.webkitURL;
            const blobUrl = URL.createObjectURL(blob);
            return blobUrl;
        }
    }

    _watch() {
        this.on('$change:language', (c, v) => {
            this.Editor.setModelLanguage(this.editor.getModel(), v);
        });
        this.on('$change:theme', (c, v) => {
            this.Editor.setTheme(v);
        });
        this.on('$change:options', (c, v) => {
            this.editor.updateOptions(v);
        });
        this.on('$receive:value', () => {
            this.editor.setValue(this.get('value'));
        });
        this.editor.onDidChangeModelContent(e => {
            this.set('value', this.editor.getValue());
        });

        const ro = this.ro = new ResizeObserver(() => {
            this.editor.layout();
        });
        ro.observe(this.element);
    }

    _destroy() {
        if (this.editor) {
            this.editor.dispose();
            this.ro.disconnect();
        }
    }
}

export {Code};
