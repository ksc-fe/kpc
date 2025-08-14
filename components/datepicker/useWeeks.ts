import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {isEqual, clearTime} from './helpers';
import type {DatepickerCalendar} from './calendar';
import {State} from '../../hooks/useState';
import {_$} from '../../i18n';
import type {useStatus} from './useStatus';

export function useWeeks(  
    showDate: State<Dayjs>,  
    status: ReturnType<typeof useStatus>,  
    focusDate: State<Dayjs | null>  
) {  
    const instance = useInstance() as DatepickerCalendar;  
  
    function getWeeks(now: Dayjs) {  
        const weeks = [];  
        // 从当前显示月份的月初开始，并调整到该周的开始  
        const startOfMonth = showDate.value.startOf('month');  
        const start = startOfMonth.startOf('week');   
        let current = start;  
        const currentMonth = showDate.value.month();  
  
        // 遍历6周，以覆盖整个月份  
        for (let weekIndex = 0; weekIndex < 6; weekIndex++)  {  
            const weekNumber = current.week(); // 获取当前周的周数  
            const days = [];  
  
            // 遍历一周的7天  
            for (let i = 0; i < 7; i++) {  
                const day = current.add(i, 'day');  
                const isFirstOrLastDay = i === 0 || i === 6;
                days.push({  
                    isExceed: day.month() !== currentMonth,
                    label: day.date(),
                    value: day,
                    isActive:isFirstOrLastDay && status.isActive(day, 'week'),
                    isToday: day.isSame(now, 'week'),
                    isDisabled: status.isDisabled(day),
                    isHover: day.isSame(focusDate.value, 'week'),
                    isInRange: !isFirstOrLastDay && status.isActive(day, 'week') 
                });
            }  
            // 每周的数据，包括周数和7天的信息  
            weeks.push({week: weekNumber, days});   
            current = current.add(1, 'week'); // 移动到下一周的开始  
        }  
        return weeks;  
    }  
  
    function onClick(day: Dayjs) {  
        const weekStart = day.startOf('week');  
        showDate.set(weekStart); // 设置显示日期为周的开始  
        instance.triggerChange(weekStart); // 触发日期改变事件  
    }  
  
    return { getWeeks, onClick };  
}
