import {Component, TypeDefs, VNode, createRef, Key} from 'intact';
import template from './index.vdt';
import {_$} from '../../i18n';
import {useButtons} from './useButtons';
import {usePanel} from './usePanel';

export interface TransferProps {
    data?: any[],
    value?: any[],
    leftChecked?: any[],
    rightChecked?: any[],
    filterable?: boolean,
    filter?: (data: any, keywords: string) => boolean
    label?: (data: any, index: number) => string | number
    placeholder?: string,
    leftTitle?: string | VNode,
    rightTitle?: string | VNode,
    keyName?: string,
    enableAdd?: (this: Transfer) => boolean,
    enableRemove?: Function,
    tree: boolean,
    leftExpandedKeys: Key[],
    rightExpandedKeys: Key[],

    _leftCheckedKeys: Key[],
    _rightCheckedKeys: Key[],
    _leftKeywords?: string,
    _rightKeywords?: string,
}

const typeDefs: Required<TypeDefs<TransferProps>> = {
    data: Array,
    value: Array,
    leftChecked: Array,
    rightChecked: Array,
    filterable: Boolean,
    filter: Function,
    label: Function,
    placeholder: String,
    // TODO: VNode
    leftTitle: [String/* , VNode */],
    rightTitle: [String/* , VNode */],
    keyName: String,
    enableAdd: Function,
    enableRemove: Function,
    tree: Boolean,
    leftExpandedKeys: Array,
    rightExpandedKeys: Array,

    _leftCheckedKeys: Array,
    _rightCheckedKeys: Array,
    _leftKeywords: String,
    _rightKeywords: String,
};

const defaults = (): Partial<TransferProps> => ({
    data: [],
    value: [],
    leftChecked: [],
    rightChecked: [],
    filter(data, keywords) {
        return data.label.includes(keywords);
    },
    label(data, index) {
        return data.label;
    },
    placeholder: _$('请输入'),
    leftTitle: _$('请选择'),
    rightTitle: _$('已选择'),
    keyName: 'key',
    enableAdd: function() { return (this as any).get('leftChecked').length } ,
    enableRemove: function() { return (this as any).get('rightChecked').length },
    leftExpandedKeys: [],
    rightExpandedKeys: [],

    _leftCheckedKeys: [],
    _rightCheckedKeys: [],
    _leftKeywords: '',
    _rightKeywords: '',
})

type CheckedKeysType = '_leftCheckedKeys' | '_rightCheckedKeys';
type CheckedDataType = 'leftChecked' | 'rightChecked';

export class Transfer<T extends TransferProps = TransferProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public leftTreeRef = createRef<HTMLElement>();
    public rightTreeRef = createRef<HTMLElement>();

    private panel = usePanel();
    private buttons = useButtons(this.panel);

    init() {
        [
            ['_leftCheckedKeys', 'leftChecked', 'data'],
            ['_rightCheckedKeys', 'rightChecked', 'value']
        ].forEach(([key, value, list]) => {
            // keep the keys consistence with the conresponding value
            this.on(`$receive:${value}`, (v: any[]) => {
                this.set(key as CheckedKeysType, this.panel.getLeafKeys(v));
            });
            this.watch(key as CheckedKeysType, (v: any[]) => {
                this.set(value as CheckedDataType, this.panel.filterData(this.get(list), v))
            });
        });
    }
}