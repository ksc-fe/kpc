import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import type {editor, default as monaco} from 'monaco-editor';
import {useEditor} from './useEditor';
import type {Events} from '../types';
import { useConfigContext } from '../config';

export interface CodeProps {
    value?: string
    language?: string
    theme?: 'vs' | 'vs-dark' | 'hc-black'
    readOnly?: boolean 
    width?: string
    height?: string
    options?: editor.IStandaloneEditorConstructionOptions 
}

export interface CodeEvents {
    ready: [editor.IStandaloneCodeEditor, typeof editor, typeof monaco]
}

const typeDefs: Required<TypeDefs<CodeProps>> = {
    value: String,
    language: String,
    theme: ['vs', 'vs-dark', 'hc-black'],
    readOnly: Boolean,
    width: String,
    height: String,
    options: Object,
};

const defaults = (): Partial<CodeProps> => ({
    value: '', 
    language: 'javascript',
    theme: 'vs',
    options: {},
});

const events: Events<CodeEvents> = {
    ready: true,
}

export class Code extends Component<CodeProps, CodeEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private editor = useEditor();
    private config = useConfigContext();

    public getEditor() {
        return this.editor.getEditor();
    }
}
