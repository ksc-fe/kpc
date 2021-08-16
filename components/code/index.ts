import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import type {editor} from 'monaco-editor';
import {useEditor} from './useEditor';

export interface CodeProps {
    value?: string
    language?: string
    theme?: 'vs' | 'vs-dark' | 'hc-black'
    readOnly?: boolean 
    width?: string
    height?: string
    options?: editor.IStandaloneEditorConstructionOptions 
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

export class Code extends Component<CodeProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private editor = useEditor();
}
