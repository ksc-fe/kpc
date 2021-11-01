import {Component, TypeDefs, VNode, createRef, Key} from 'intact';
import template from './index.vdt';
import {_$} from '../../i18n';
import {useTransfer} from './useTransfer';
import {useFilter, Model} from './useFilter';
import {useCheck} from './useCheck';

export interface TransferProps {
    data?: any[],
    keyName?: string,
    labelName?: string,
    value?: Key[],
    leftCheckedKeys: Key[],
    rightCheckedKeys: Key[],
    filterable?: boolean,
    filter?: (data: any, keywords: string) => boolean
    placeholder?: string,
    leftKeywords?: string,
    rightKeywords?: string,
    leftTitle?: string | VNode,
    rightTitle?: string | VNode,
    enableAdd?: () => boolean,
    enableRemove?: () => boolean,
}

const typeDefs: Required<TypeDefs<TransferProps>> = {
    data: Array,
    keyName: String,
    labelName: String,
    value: Array,
    leftCheckedKeys: Array,
    rightCheckedKeys: Array,
    filterable: Boolean,
    filter: Function,
    placeholder: String,
    leftKeywords: String,
    rightKeywords: String,
    // TODO: VNode
    leftTitle: [String/* , VNode */],
    rightTitle: [String/* , VNode */],
    enableAdd: Function,
    enableRemove: Function,
};

const defaults = (): Partial<TransferProps> => ({
    data: [],
    keyName: 'key',
    labelName: 'label',
    value: [],
    leftCheckedKeys: [],
    rightCheckedKeys: [],
    filter(data, keywords) {
        return data.label.includes(keywords);
    },
    placeholder: _$('请输入'),
    leftTitle: _$('请选择'),
    rightTitle: _$('已选择'),
})

export class Transfer<T extends TransferProps = TransferProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private transfer = useTransfer();
    private filter = useFilter(this.transfer.rightData);
    private check = useCheck(this.filter);

    public getData() {
        return this.transfer.rightData.value;
    }

    public getCheckedData(model: Model) {
        const data = this.filter.getFilterData(model);
        const {keyName} = this.get();
        return data.filter(item => {
            return ~this.get(`${model}CheckedKeys`).indexOf(item[keyName!]);
        })
    }
}
