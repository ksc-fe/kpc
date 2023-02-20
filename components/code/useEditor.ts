import {useInstance, createRef, onMounted, onBeforeUnmount} from 'intact';
import type {Code} from './';
import {useState} from '../../hooks/useState';
import type {editor} from 'monaco-editor';
import {isNullOrUndefined} from 'intact-shared';
import {useResizeObserver} from '../../hooks/useResizeObserver';
import {crossDomainWorker} from './crossDomain';

export function useEditor() {
    const instance = useInstance() as Code;
    const elementRef = createRef<HTMLElement>();
    const loading = useState<boolean>(true);

    let codeEditor: editor.IStandaloneCodeEditor | null = null;

    onMounted(() => {
        import('monaco-editor').then(monaco => {
            if (instance.$unmounted) return;

            crossDomainWorker();

            const {value, language, theme, readOnly, options} = instance.get();
            const Editor = monaco.editor;

            codeEditor = Editor.create(elementRef.value!, {
                value,
                language,
                theme, 
                readOnly,
                ...options,
            });
            watch(Editor, codeEditor);

            loading.set(false);

            instance.trigger('ready', codeEditor, Editor, monaco);
        });
    });

    onBeforeUnmount(() => {
        if (codeEditor) {
            codeEditor.dispose();
            codeEditor = null;
        }
    });

    useResizeObserver(elementRef, () => {
        if (codeEditor) {
            codeEditor.layout();
        }
    });

    function watch(Editor: typeof editor, codeEditor: editor.IStandaloneCodeEditor) {
        instance.on('$receive:language', v => {
            Editor.setModelLanguage(codeEditor.getModel()!, v!);
        });

        instance.on('$receive:theme', v => {
            Editor.setTheme(v!);
        });

        instance.on('$receive:options', v => {
            codeEditor.updateOptions(v!);
        });

        instance.on('$receive:value', v => {
            codeEditor.setValue(v!);
        });

        instance.on('$receive:readOnly', v => {
            codeEditor.updateOptions({readOnly: v});
        });

        codeEditor.onDidChangeModelContent(e => {
            instance.set('value', codeEditor.getValue());
        });
    }

    function getEditor() {
        return codeEditor;
    }

    return {elementRef, loading, getEditor};
}
