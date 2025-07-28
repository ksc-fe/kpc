import {useInstance} from 'intact';
import type {Datepicker} from '.';
import { useState } from '../../hooks/useState';
import {last} from '../utils';

export enum Position {
    Start,
    End
}

const NUMBER_WIDTH_PX = 6.69;
const TILDE_WIDTH_PX = 7.01;
const WHITESPACE_WIDTH_PX = 3.34;

export function useHighlight() {
    const instance = useInstance() as Datepicker;
    const position = useState<Position>(Position.Start);
    const highlightWidth = useState<number>(0);
    const highlightLeft = useState<number>(0);

    instance.on('selecting', (v, isConfirm) => {
        if (!isConfirm) return;
        togglePosition();
    });
    
    // 根据类型获取默认字符长度
    function getDefaultCharLength() {
        const {type} = instance.get();
        switch (type) {
            case 'datetime':
                return 16; // "2025-07-10 00:00:00" 
            case 'date':
                return 10; // "2025-07-09" 
            default:
                return 10;
        }
    }
    
    const charLength = useState<number>(getDefaultCharLength()); // 当前活动部分的字符长度
    
    function handleInputClick(e: MouseEvent) {
        const { range, type } = instance.get();
     
        if (!range) return;

        console.log((e.target as HTMLInputElement).selectionStart)


        const value = last(instance.value.value.value);
        if (!value) {
            // 如果没有值或者当前范围值不完整（只有开始时间没有结束时间），强制设置为开始时间
            position.set(Position.Start);
            return;
        }
          
        // 获取事件目标元素  
        let target = e.currentTarget as HTMLElement;  
        // 如果目标元素不是 .k-select-main，则查找父元素  
        if (!target.classList.contains(`.k-select-main`)) {
            target = target.closest(`.k-select-main`) as HTMLElement;  
            if (!target) return;
        }

        const hiddenInput = target.querySelector('input[type="hidden"]') as HTMLInputElement;
        let midPoint = charLength.value;
        if (hiddenInput && hiddenInput.value && hiddenInput.value.includes(',')) {
            // 分割字符串获取开始和结束日期的文本
            const [startText, endText] = hiddenInput.value.split(',');
            // 确保两部分都存在，避免计算错误
            if (startText && endText) {
                const totalCharLength = startText.length + endText.length;
              
                const charWidthPx = 8;
                
                const totalLength = 1 * charWidthPx + totalCharLength * charWidthPx ; // " ~ " 大约1个字符宽度
            
                midPoint = totalLength / 2
            }
        }
        // 计算相对于 target 的 offsetX  
        const rect = target.getBoundingClientRect();  
        const offsetX = e.clientX - rect.left;  
        // 根据点击位置判断是点击了左半边（开始）还是右半边（结束）
        if (offsetX < midPoint) {
            position.set(Position.Start);
        } else {
            position.set(Position.End);
        }  
    }

    // 切换位置
    function togglePosition() {
        position.set(position.value === Position.Start ? Position.End : Position.Start);
    }

    return {
        position,
        charLength,
        handleInputClick,
        togglePosition,
    };
}