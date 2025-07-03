import {useInstance} from 'intact';
import type {Datepicker} from './';
import { useState } from '../../hooks/useState';
import {last} from '../utils';

export function usePosition() {
    const instance = useInstance() as Datepicker;
    const position = useState<'start' | 'end'>('start');
    
    // 根据类型获取默认字符长度
    function getDefaultCharLength() {
        const {type} = instance.get();
        switch (type) {
            case 'datetime':
                return 16 ; // "2025-07-10 00:00:00" 
            case 'date':
                return 10; // "2025-07-09" 
            default:
                return 10;
        }
    }
    
    const charLength = useState<number>(getDefaultCharLength()); // 当前活动部分的字符长度
    const startTextLength = useState<number>(getDefaultCharLength()); // 开始文本的长度，用于计算结束文本位置
    
    // 监听类型变化，更新默认字符长度
    instance.watch('type', () => {
        const defaultLength = getDefaultCharLength();
        charLength.set(defaultLength);
        startTextLength.set(defaultLength);
    }); 

    function handleInputClick(e: MouseEvent) {  
        const { range, type } = instance.get();
     

        if (!range) {
            return; 
        } 
        // 对于日期时间范围选择器，如果当前没有值或值不完整，总是设置为开始时间
        if (type === 'datetime') {
            const currentValue = instance.value.value.value;
            const lastValue = last(currentValue);
            // 如果没有值或者当前范围值不完整（只有开始时间没有结束时间），强制设置为开始时间
            if (!lastValue || !Array.isArray(lastValue) || lastValue.length < 2 || !lastValue[1]) {
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
        const { width: totalVisualWidth } = target.getBoundingClientRect();  
        let midPoint;
        if (hiddenInput && hiddenInput.value && hiddenInput.value.includes(',')) {
            // 分割字符串获取开始和结束日期的文本
            const [startText, endText] = hiddenInput.value.split(',');
            // 确保两部分都存在，避免计算错误
            if (startText && endText) {
                const totalCharLength = startText.length + endText.length;
                // 计算开始日期文本长度所占的比例
                const startRatio = startText.length / totalCharLength;
                   
                // 估算每个字符的宽度（与样式中保持一致）
                const charWidthPx = 8;
                
                // 计算实际文本占用的宽度
                const startTextWidth = startText.length * charWidthPx;
                const endTextWidth = endText.length * charWidthPx;
                const separatorWidth = 3 * charWidthPx; // " ~ " 大约3个字符宽度
                const totalTextWidth = startTextWidth + separatorWidth + endTextWidth;
                
                // 如果文本宽度超过input宽度，使用比例分割
                if (totalTextWidth >= totalVisualWidth) {
                    midPoint = totalVisualWidth * startRatio;
                } else {
                    // 如果文本宽度小于input宽度，使用实际文本宽度计算分割点
                    midPoint = startTextWidth + separatorWidth / 2;
                }
                
                // 更新开始文本长度状态，限制为默认长度以保证结束时间高亮位置正确
                startTextLength.set(Math.min(startText.length, getDefaultCharLength()));
                
            } else {
                // 如果值格式不正确（例如 "2025-07-09,"），则退回使用几何中心点
                const defaultLength = getDefaultCharLength();
                charLength.set(defaultLength);
                startTextLength.set(defaultLength);
                midPoint = totalVisualWidth / 2;
            }
        } else {
            // 如果没有找到 hiddenInput 或其值不是范围，则退回原始的几何中心点
            const defaultLength = getDefaultCharLength();
            charLength.set(defaultLength);
            startTextLength.set(defaultLength);
            midPoint = totalVisualWidth / 2;
        }  
          
        // 计算相对于 target 的 offsetX  
        const rect = target.getBoundingClientRect();  
        const offsetX = e.clientX - rect.left;  
        // 根据点击位置判断是点击了左半边（开始）还是右半边（结束）
        if (offsetX < midPoint) {
            position.set('start');
            // 更新为开始部分的字符长度，限制为默认长度
            if (hiddenInput && hiddenInput.value && hiddenInput.value.includes(',')) {
                const [startText] = hiddenInput.value.split(',');
                charLength.set(Math.min(startText.length, getDefaultCharLength()));
            }
        } else {
            position.set('end');
            // 更新为结束部分的字符长度，限制为默认长度
            if (hiddenInput && hiddenInput.value && hiddenInput.value.includes(',')) {
                const [, endText] = hiddenInput.value.split(',');
                charLength.set(Math.min(endText.length, getDefaultCharLength()));
            }
        }  
    }

    // 重置位置到指定值
    function resetPosition(pos: 'start' | 'end' = 'start') {
        if (position.value === pos) {
            return;
        }
        position.set(pos);
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

    // 在组件初始化时设置事件监听
    function setupEventListeners() {
        // instance.on('resetPosition', resetPosition);
        instance.on('togglePosition', togglePosition);
    
    }

    function resetToStart() {
        const {range, type} = instance.get();
        if (range && type === 'date') {
            position.set('start');
        }
    }

    return {
        position,
        charLength,
        startTextLength,
        handleInputClick,
        resetPosition,
        togglePosition,
        setupEventListeners,
        resetToStart
    };
}