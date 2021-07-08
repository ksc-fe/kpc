import {useInstance, RefObject} from 'intact';
import {DatepickerCalendar} from './calendar';
import {State} from '../../hooks/useState';
import {Dayjs} from 'dayjs';
import {useKeyboard} from '../../hooks/useKeyboard';

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

export function useKeyboards(
    panelRef: RefObject<DatepickerCalendar>,
    focusDate: State<Dayjs | null> 
) {
    const instance = useInstance() as DatepickerCalendar; 
    
    const [add, remove] = useKeyboard({
        down(e: KeyboardEvent) {
            focus(e, Direction.Down);
        },

        up(e: KeyboardEvent) {
            focus(e, Direction.Up);
        },

        right(e: KeyboardEvent) {
            focus(e, Direction.Right);
        },

        left(e: KeyboardEvent) {
            focus(e, Direction.Left);
        },

        enter() {
            select(focusDate.value);
        },
    });

    instance.on('show', add);
    instance.on('hide', remove);

    function select(date: Dayjs | null) {
        if (!date) return;

        const calendar = panelRef.value;
        if (!calendar) return; // maybe select time

        switch (calendar.type.value) {
            case 'date':
                calendar.days.onClick(date);
                break;
            case 'month':
                calendar.months.onClick(date);
                break;
            case 'year':
                calendar.years.onClick(date);
                break;
        }
    }

    function focus(e: KeyboardEvent, direction: Direction) {
        const calendar = panelRef.value;
        if (!calendar) return;

        e.preventDefault();

        if (!focusDate.value) {
            focusDate.set(calendar.showDate.date.value);
            return;
        }

        const type = calendar.type.value;
        const upAndDownOffset = type === 'date' ? 7 : 4;
        let offset: number
        switch (direction) {
            case Direction.Up:
                offset = -upAndDownOffset; 
                break;
            case Direction.Down:
                offset = upAndDownOffset;
                break;
            case Direction.Left:
                offset = -1;
                break;
            case Direction.Right:
                offset = 1;
                break;
        }

        let _focusDate = focusDate.value;
        _focusDate = _focusDate.add(offset, type === 'date' ? 'day' : type);
        focusDate.set(_focusDate);

        // change panel show date
        calendar.showDate.date.set(_focusDate);
    }
}
