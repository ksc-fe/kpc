import {useInstance} from 'intact';
import type {Datepicker} from './';
import { useState } from '../../hooks/useState';
import {last} from '../utils';
import {
    StateValueRange,
} from './basepicker';

export function usePosition() {
    const instance = useInstance() as Datepicker;
    const position = useState<'start' | 'end'>('start');
    setupEventListeners()
    
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
     
        if (!range) {
            return; 
        } 
        // 对于日期时间范围选择器，如果当前没有值，总是设置为开始时间
        if (type === 'datetime' || type === 'date') {
            const currentValue = instance.value.value.value;
            const lastValue = last(currentValue);
            // 如果没有值或者当前范围值不完整（只有开始时间没有结束时间），强制设置为开始时间
            if (!lastValue) {
                position.set('start');
                return;
            }
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
            position.set('start');
        } else {
            position.set('end');
        }  
    }

    // 切换位置
    function togglePosition() {
        const currentPosition = position.value;
        if (currentPosition === 'start') {
            position.set('end');
        } else {
            position.set('start');
        }
    }

    function selecting(v: StateValueRange, isConfirm: boolean) {
        if (!isConfirm) {
            return 
        }
        togglePosition()
    }

    // 在组件初始化时设置事件监听
    function setupEventListeners() {
        instance.on('selecting', selecting);
    }

    return {
        position,
        charLength,
        handleInputClick,
        togglePosition,
        setupEventListeners,
    };
}