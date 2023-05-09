import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes, getRight, getLeft, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    width: `300px`,
    padding: `16px 16px 4px`,
    border: `1px solid #e5e5e5`,

    item: {
        gutter: `7px`,
        height: `24px`,
        get hoverBgColor() { return theme.color.bg },
        get exceedColor() { return theme.color.disabled },
        get todayBorder() { return `1px solid ${theme.color.border}` },
        get borderRadius() { return theme.borderRadius },

        active: {
            get bgColor() { return theme.color.primary },
            color: `#fff`,
            todayBorderColor: `transparent` ,
        },

        disabled: {
            get color() {
                return theme.color.disabled
            },
            hoverBgColor: 'none',
        },

        range: {
            get bgColor() { return palette(datepicker.item.active.bgColor, -4) },
        }
    },

    weekday: {
        padding: `10px 0`
    },

    month: {
        padding: `0 6px 12px`,
        fontSize: `14px`,
        valueGap: `3px`,
    },

    footer: {
        padding: `8px 16px`,
    },

    shortcuts: {
        width: '100px',
        padding: '12px 0',
        shortcut: {
            get hoverBgcolor() { return theme.color.bg },
            height: '32px',
            padding: '0 16px',
        }
    }
};

let datepicker: typeof defaults;
setDefault(() => {
    datepicker = deepDefaults(theme, {datepicker: defaults}).datepicker;
});

export {datepicker};

export function makePanelStyles() {
    return css`
        display: flex;
        .k-datepicker-shortcuts {
            width: ${datepicker.shortcuts.width};
            padding: ${datepicker.shortcuts.padding};
            border-right: ${datepicker.border};
        }
        .k-datepicker-shortcut {
            height: ${datepicker.shortcuts.shortcut.height};
            line-height: ${datepicker.shortcuts.shortcut.height};
            padding: ${datepicker.shortcuts.shortcut.padding};
            cursor: pointer;
            &:hover {
                background: ${datepicker.shortcuts.shortcut.hoverBgcolor};
            }
        }
        .k-datepicker-calendars {
            display: flex;
        }
        .k-datepicker-calendar-wrapper {
            &:nth-child(2) {
                border-left: ${datepicker.border};
            }
            .k-tabs {
                border: none;
                .k-tabs-wrapper {
                    float: none;
                }
                .k-tab {
                    width: 50%;
                }
            }
        }
        .k-datepicker-footer {
            border-top: ${datepicker.border};
            padding: ${datepicker.footer.padding};
            text-align: right;
        }
    `
}

export function makeCalendarStyles() {
    return css`
        padding: ${datepicker.padding};
        width: ${datepicker.width};
        position: relative;
        .k-datepicker-month {
            display: flex;
            padding: ${datepicker.month.padding};
        }
        .k-month-values {
            flex: 1;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
            overflow: hidden;
            position: relative;
        }
        .k-month-value {
            margin: 0 ${datepicker.month.valueGap};
            line-height: ${theme.small.height};
            &:hover {
                color: ${theme.color.primary};
            }
        },
        .k-weekdays {
            display: flex;
            border-bottom: ${datepicker.border};
            padding: ${datepicker.weekday.padding};
        }
        .k-weekday {
            flex: 1;
            text-align: center;
        }
        .k-calendar-item {
            text-align: center;
            margin: ${datepicker.item.gutter};
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            cursor: pointer;
            position: relative;
            border-radius: ${datepicker.item.borderRadius};
            &.k-hover {
                background: ${datepicker.item.hoverBgColor};
            }
            &.k-exceed {
                color: ${datepicker.item.exceedColor};
            }
            &.k-today {
                border: ${datepicker.item.todayBorder};
            }
            &.k-active {
                background: ${datepicker.item.active.bgColor};
                color: ${datepicker.item.active.color};
                &.k-today {
                    border-color: ${datepicker.item.active.todayBorderColor};
                }
            }
            &.k-disabled {
                color: ${datepicker.item.disabled.color};
                cursor: not-allowed;
                background: ${datepicker.item.disabled.hoverBgColor};
            }
            &.k-in-range:after {
                content: '';
                display: block;
                position: absolute;
                box-sizing: content-box;
                background: ${datepicker.item.range.bgColor};
                width: 100%;
                height: 100%;
                left: -${datepicker.item.gutter};
                padding: 0 ${datepicker.item.gutter};
                z-index: -1;
            }
            .k-value {
                flex: 1;
            }
        }
        .k-days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
        }
        .k-years {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
    `
}

export function makeTimeStyles() {
    return css`
        display: flex;
        padding: ${datepicker.padding};
        width: ${datepicker.width};
        position: relative;
        .k-scroll-select {
            flex: 1;
            height: 305px;
        }
    `;
}
