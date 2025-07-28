import {useInstance} from 'intact';
import {
    useValueBase,
    StateValueItem,
    StateValueRange,
    DayjsValueItem,
    DayjsValueRange,
    DayjsValue,
} from './useValueBase';
import dayjs, {Dayjs} from 'dayjs';
import type {Datepicker} from './index';
import type {useFormats} from './useFormats';
import type {useDisabled} from './useDisabled';
import type {useHighlight} from './useHighlight';
import {last} from '../utils';
import { endTime } from './helpers';
import {PanelTypes, PanelFlags, usePanel} from './usePanel';

export function useValue(
    formats: ReturnType<typeof useFormats>,
    disabled: ReturnType<typeof useDisabled>,
    panel: ReturnType<typeof usePanel>,
    activePosition: ReturnType<typeof useHighlight>
) {
    const instance = useInstance() as Datepicker;

    const position = activePosition.position;

    const {setValue, value, ...rest} = useValueBase(
        formats,
        disabled,
        panel,
        function(v: StateValueItem) {
            const {type, range} = instance.get();
            return type !== 'datetime' && (!range || (v as StateValueRange).length === 2)
        },
        function(v: DayjsValueItem) {
            setValue(v, true); 
        },
        function() {
            const {type} = instance.get();
            return type === 'datetime' ? 'second' : type!;
        },
        function(dayjsValue, value) {
            if (
                instance.get('multiple') && 
                panel.getPanel(PanelFlags.Start).value === PanelTypes.Time
            ) {
                value.set(dayjsValue.concat([last(value.value)] as DayjsValue));
            } else {
                value.set(dayjsValue.slice(0));
            }
        }
    );

    function onChangeDate(v: Dayjs, flag: PanelFlags) {
        const {multiple, type, range} = instance.get();
        const activePosition = position.value;
        
        let _value: StateValueItem;
        
        if (range) {
            _value = handleRangeSelection(v, flag, type!, multiple, activePosition) as StateValueItem;
            instance.trigger('selecting', _value as StateValueRange, false);
        } else {
            _value = handleSingleSelection(v, type!);
        }
        setValue(_value, false);
        handlePanelTransition(type!, range, multiple, _value, flag, v);
    }

    function handleRangeSelection(
        v: Dayjs, 
        flag: PanelFlags, 
        type: string, 
        multiple: boolean | undefined, 
        activePosition: string
    ) {
        const oldValue = last(value.value as StateValueRange[]);
        
        // 首次选择或重新选择（已有完整范围）
        if (!oldValue || oldValue.length === 2) {
            return handleFirstOrReselection(v, flag, type, multiple, activePosition, oldValue);
        }

        // 选择第二个日期（已有一个日期）
        return handleSecondSelection(v, oldValue);
    }

    function handleFirstOrReselection(
        v: Dayjs,
        flag: PanelFlags,
        type: string,
        multiple: boolean | undefined,
        activePosition: string,
        oldValue: StateValueRange | undefined
    ) {
        flag = PanelFlags.Start; // 重置为开始面板 #877
        if(!oldValue) {
            return [fixDatetimeWithMinDate(v)];
        }
        if ((type === 'datetime' || type === 'date')) {
            if (activePosition === 'end') {
                return [oldValue[0], fixDatetimeWithMinDate(v)];
            } else if (multiple) {
                return [fixDatetimeWithMinDate(v)];
            } else {
                return [fixDatetimeWithMinDate(v), oldValue[1]];
            }
        } else {
            return [fixDatetimeWithMinDate(v)];
        }
        
    }

    function handleSecondSelection(
        v: Dayjs,
        oldValue: StateValueRange
    ) {
        let result = [oldValue[0], fixDatetimeWithMaxDate(v)];
        // 确保日期顺序正确
        result.sort((a, b) => a!.isAfter(b) ? 1 : -1);
        return result;
    }

    function handleSingleSelection(v: Dayjs, type: string) {
        if (type === 'week') {
            return v.startOf('week');
        } else if (type === 'quarter') {
            return v.startOf('quarter');
        }
        return fixDatetimeWithMinDate(v);
    }

    function handlePanelTransition(
        type: string,
        range: boolean | undefined,
        multiple: boolean | undefined,
        _value: StateValueItem,
        flag: PanelFlags,
        v: Dayjs
    ) {
        if (type === 'datetime') {
            if (range && (_value as StateValueRange).length === 2) {
                // 范围选择完成后切换到时间面板
                panel.changePanel(PanelTypes.Time, PanelFlags.Start);
                panel.changePanel(PanelTypes.Time, PanelFlags.End);
            } else if (!range) {
                panel.changePanel(PanelTypes.Time, flag);
            }
        } else if (type === 'week' || type === 'quarter') {
            // 周/季度选择后直接隐藏
            setValue(type === 'week' ? v.startOf('week') : v.startOf('quarter'), false);
            instance.hide();
        } else if (!multiple && (!range || (_value as StateValueRange).length === 2)) {
            // 非多选且选择完成时隐藏
            instance.hide();
        }
    }

    function fixDatetimeWithMinDate(v: Dayjs) {
        // the datetime must be greater than minDate, #406
        const minDate = disabled.minDate.value;
        if (minDate && v.isBefore(minDate)) {
            return minDate;
        }
        return v;
    }

    function fixDatetimeWithMaxDate(v: Dayjs) {
        // the tiem of end datetime should be set to 23:59:59, #878
        const maxDate = disabled.maxDate.value;
        const date = v.toDate();

        endTime(date);
        v = dayjs(date);
        if (maxDate && v.isAfter(maxDate)) {
            return maxDate;
        }
        return v;
    }

    return {value, setValue, onChangeDate, ...rest};
}
