import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';
import {select} from '../select/styles';

const {table} = deepDefaults(theme, {
    table: {
        border: `1px solid #e5e5e5`,
        fontSize: `12px`,
        bgColor: `#fff`,
        get color() { return theme.color.text },
        fixLeftShadow: `inset 5px 0px 6px -6px rgb(0 0 0 / 30%)`,
        fixRightShadow: `inset -5px 0px 6px -6px rgb(0 0 0 / 30%)`,

        // head
        thead: {
            get bgColor() { return theme.color.bg },
            padding: `0 5px 0 12px`,
            fontSize: `12px`,
            fontWeight: `bold`,
            textAlign: 'left',
            height: `30px`,
        },

        // tbody 
        tbody: {
            get hoverBgcolor() { return theme.color.bg },
            padding: `11px 5px 11px 12px`,
        },

        // stripe
        stripeBgColor: '#f9f9fc',

        // group
        group: {
            width: `14px`,
            gap: `10px`,
            color: `#a6a6a6`,
            get menuMaxHeight() { return select.menuMaxHeight },
            get activeColor() { return theme.color.primary },
        },

        // sort
        sort: {
            iconHeight: `7px`,
            gap: `10px`,
            color: `#a6a6a6`,
            disabledColor: `#ddd`,
        },

        expandBgColor: '#fdfcff',
        get selectedBgColor() { return palette(theme.color.primary, -4) },

        // tree
        arrow: {
            gap: `4px`,
        },
    }
});

export function makeStyles() {
    return css`
        font-size: ${table.fontSize};
        color: ${table.color};
        border-top: ${table.border};
        position: relative;
        .k-table-wrapper {
            border-bottom: ${table.border};
            overflow: auto;
        }
        table {
            width: 100%;
            // border-collapse: collapse;
            border-spacing: 0;
            table-layout: fixed;
        }

        // thead
        thead {
            text-align: ${table.thead.textAlign};
            font-size: ${table.thead.fontSize};
            font-weight: ${table.thead.fontWeight};
            position: sticky;
            top: 0;
            z-index: 2;
            tr {
                height: ${table.thead.height};
            }
        }
        th {
            padding: ${table.thead.padding};
            position: relative;
            background: ${table.thead.bgColor};
            &:before {
                content: '';
                height: 12px;
                position: absolute;
                background-color: #bfbfbf;
                width: 1px;
                left: 1px;
                top: 9px;
            }
            &:first-of-type:before {
                display: none;
            }
            border-bottom: ${table.border};
        }
        .k-table-title {
            display: inline-flex;
            align-items: center;
            max-width: 100%;
        }
        .k-table-title-text {
            flex: 1;
        }

        // tbody
        tbody {
            tr {
                &:hover td {
                    background: ${table.tbody.hoverBgcolor};
                }
                &:last-of-type td {
                    border-bottom: none;
                }
            }
        }
        td {
            padding: ${table.tbody.padding};
            border-bottom: ${table.border};
            background: ${table.bgColor};
            word-wrap: break-word;
            // overflow: hidden;
            // text-overflow: ellipsis;
        }

        // fixed
        .k-fixed-left,
        .k-fixed-right {
            position: sticky;
            z-index: 1;
            &:after {
                content: '';
                display: block;
                transition: box-shadow ${theme.transition};
                position: absolute;
                top: 0;
                bottom: 0px;
                width: 10px;
                pointer-events: none;
            }
        }
        .k-fixed-left:after {
            right: -11px;
        }
        .k-fixed-right:after {
            left: -11px;
        }
        &.k-scroll-left .k-fixed-right:after {
            box-shadow: ${table.fixRightShadow};
        }
        &.k-scroll-right .k-fixed-left:after {
            box-shadow: ${table.fixLeftShadow};
        }
        &.k-scroll-middle {
            .k-fixed-left:after {
                box-shadow: ${table.fixLeftShadow};
            }
            .k-fixed-right:after {
                box-shadow: ${table.fixRightShadow};
            }
        }
        .k-fixed-right + .k-fixed-right:after {
            display: none;
        }

        // sticky header
        .k-table-affix-header {
            position: sticky;
            top: 0;
            left: 0;
            .k-affix-wrapper {
                overflow: hidden;
            }
        }

        // type
        &.k-border,
        &.k-grid {
            .k-table-wrapper {
                border-left: ${table.border};
                border-right: ${table.border};
            }
        }
        &.k-grid {
            td:not(:last-of-type),
            th:not(:last-of-type) {
                border-right: ${table.border};
            }
            th:before {
                display: none;
            }
        }

        // stripe
        &.k-stripe {
            tr:nth-child(even):not(:hover) td {
                background: ${table.stripeBgColor};
            }
        }

        // group
        .k-table-group {
            width: ${table.group.width} !important;
            height: ${table.group.width} !important;
            margin-left: ${table.group.gap};
            position: relative;
            color: ${table.group.color};
            &:hover {
                color: ${theme.color.primary};
            }
            .k-icon {
                position: absolute;
                top: -1px;
                left: 2px;
                transition: transform ${theme.transition};
            }
            &.k-dropdown-open .k-icon {
                transform: rotate(180deg);
            }
        } 

        // force checkbox / radio vertical align middle
        .k-table-check {
            .k-checkbox,
            .k-radio {
                position: relative;
                top: -1px;
            }
        }

        // sortable
        .k-column-sortable {
            cursor: pointer;
        }
        .k-column-sort {
            .k-icon {
                display: block;
                height: ${table.sort.iconHeight};
                line-height: ${table.sort.iconHeight};
                margin-left: ${table.sort.gap};
                color: ${table.sort.color};
            }
            &.k-asc .k-icon.k-desc,
            &.k-desc .k-icon.k-asc {
                color: ${table.sort.disabledColor};
            }
        }

        // loading
        .k-table-spin.k-overlay {
            z-index: 2;
        }

        // empty
        .k-table-empty {
            text-align: center;
        }

        // expand
        tr.k-expand {
            td {
                padding: 0;
                background: #fdfcff;
            }
        }
        &.k-with-expand {
            tr:not(.k-expand) {
                td {
                    border-bottom: none;
                }
            }
        }
        .k-table-expand {
            border-top: ${table.border};
        }

        // select
        tbody tr.k-selected td {
            background: ${table.selectedBgColor};
        }

        // tree
        tr.k-hidden {
            display: none;
        }
        .k-table-arrow {
            margin-right: ${table.arrow.gap};
            transition: transform ${theme.transition};
            position: relative;
            top: -1px;
        }
        tr.k-spreaded {
            .k-table-arrow {
                transform: rotate(90deg);
            }
        }
    `;
}

export function makeGroupMenuStyles() {
    return css`
        max-height: ${table.group.menuMaxHeight};
        overflow: auto;
        .k-dropdown-item.k-active {
            color: ${table.group.activeColor};
        }
    `
}
