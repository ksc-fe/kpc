import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    get transition() { return theme.transition.large },
    // transition: '15000s',
    border: `1px solid #e2e5e8`,
    get borderRadius() { return theme.borderRadius },
    fontSize: `12px`,
    bgColor: `#fff`,
    get color() { return theme.color.text },
    fixLeftShadow: `inset 5px 0px 6px -6px rgb(0 0 0 / 30%)`,
    fixRightShadow: `inset -5px 0px 6px -6px rgb(0 0 0 / 30%)`,

    // head
    thead: {
        get bgColor() { return theme.color.bg },
        get color() { return theme.color.lightBlack },
        padding: `0 8px 0 12px`,
        fontSize: `12px`,
        fontWeight: `bold`,
        textAlign: 'left',
        height: `40px`,
        delimiterHeight: '12px',
        delimiterColor: '#bfbfbf',
    },

    // tbody 
    tbody: {
        get hoverBgcolor() { return theme.color.bg },
        padding: `11px 8px 11px 12px`,
    },

    // stripe
    stripeBgColor: '#f9f9fc',

    // group
    group: {
        gap: `8px`,
        menuMaxHeight: '200px',
        menuMinWidth: '200px',
        get activeColor() { return theme.color.primary },
        headerPadding: `8px`,
        get headerBorder() { return `1px solid ${theme.color.bg}` },
    },

    // sort
    sort: {
        iconHeight: `7px`,
        gap: `8px`,
        // color: `#d0d5d9`,
        get enabledColor() { return theme.color.primary },
    },

    expandBgColor: '#fdfcff',
    get selectedBgColor() { return palette(theme.color.primary, -4) },

    // tree
    arrow: {
        gap: `4px`,
        width: `16px`,
    },

    resizeWidth: `5px`,
    draggingOpacity: `.4`,
};

const aligns = ['left', 'right', 'center'];

let table: typeof defaults;
setDefault(() => {
    table = deepDefaults(theme, {table: defaults}).table;
    makeStyles?.clearCache();
    makeGroupMenuStyles?.clearCache();
});

export {table};

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        font-size: ${table.fontSize};
        color: ${table.color};
        position: relative;
        z-index: 0;
        .${k}-table-wrapper {
            border-bottom: ${table.border};
            overflow: auto;
            border-radius: ${table.borderRadius};
        }
        table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            table-layout: fixed;
            // td, 
            // th {
                // transition: all ${table.transition};  
            // }
        }

        // thead
        thead {
            text-align: ${table.thead.textAlign};
            font-size: ${table.thead.fontSize};
            font-weight: ${table.thead.fontWeight};
            z-index: 2;
            tr {
                height: ${table.thead.height};
                &:not(:last-of-type) th {
                    border-bottom: ${table.border};
                }
            }
        }
        tfoot {
            z-index: 2;
            tr {
                td {
                    border-top: ${table.border};
                    border-bottom-color: transparent;
                }
            }
        }
        th {
            padding: ${table.thead.padding};
            position: relative;
            background: ${table.thead.bgColor};
            line-height: normal;
            // hide all :before firstly, then show all :before except first th
            &:before {
                display: none;
                content: '';
                height: ${table.thead.delimiterHeight};
                position: absolute;
                background-color: ${table.thead.delimiterColor};
                width: 1px;
                left: 1px;
                top: 50%;
                transform: translateY(-50%);
            }
            &:not(.${k}-hidden) ~ th:not(.${k}-hidden):before {
                display: block;
            }
            &.${k}-fixed-right:before {
                left: -2px;
            }
        }
        .${k}-table-title {
            display: inline-flex;
            align-items: center;
            max-width: 100%;
            color: ${table.thead.color};
        }
        .${k}-table-title-text {
            flex: 1;
            display: inline-flex;
            line-height: 1.4;
        }

        // tbody
        tbody {
            tr {
                &:hover td {
                    background: ${table.tbody.hoverBgcolor};
                }
                &:last-of-type td {
                    // border-bottom: none;
                    border-bottom-color: transparent;
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
        .${k}-fixed-left,
        .${k}-fixed-right {
            position: sticky;
            z-index: 1;
            &:after {
                content: '';
                display: block;
                transition: box-shadow ${table.transition};
                position: absolute;
                top: 0;
                bottom: 0px;
                width: 10px;
                pointer-events: none;
            }
        }
        .${k}-fixed-left:after {
            right: -11px;
        }
        .${k}-fixed-right:after {
            left: -11px;
        }
        &.${k}-scroll-left .${k}-fixed-right:after {
            box-shadow: ${table.fixRightShadow};
        }
        &.${k}-scroll-right .${k}-fixed-left:after {
            box-shadow: ${table.fixLeftShadow};
        }
        &.${k}-scroll-middle {
            .${k}-fixed-left:after {
                box-shadow: ${table.fixLeftShadow};
            }
            .${k}-fixed-right:after {
                box-shadow: ${table.fixRightShadow};
            }
        }
        .${k}-fixed-right + .${k}-fixed-right:after {
            display: none;
        }

        // sticky header
        .${k}-table-affix-header {
            position: sticky;
            top: 0;
            left: 0;
            .${k}-affix-wrapper {
                overflow: hidden;
            }
            &.${k}-fixed {
                position: relative;
            }
        }

        // type
        &.${k}-border,
        &.${k}-grid {
            .${k}-table-wrapper {
                border-top: ${table.border};
                border-left: ${table.border};
                border-right: ${table.border};
            }
        }
        &.${k}-grid {
            td:not(:last-of-type),
            th:not(:last-of-type) {
                border-right: ${table.border};
            }
            th:before {
                display: none;
            }
        }

        // stripe
        &.${k}-stripe {
            tr:nth-child(even):not(:hover) td {
                background: ${table.stripeBgColor};
            }
        }

        // group
        .${k}-table-group {
            margin-left: ${table.group.gap};
        } 

        // force checkbox / radio vertical align middle
        .${k}-table-check {
            .${k}-checkbox,
            .${k}-radio {
                position: relative;
                top: -1px;
            }
        }

        // sortable
        .${k}-column-sortable {
            cursor: pointer;
        }
        .${k}-column-sort {
            .${k}-icon {
                display: block;
                height: ${table.sort.iconHeight};
                line-height: ${table.sort.iconHeight};
                margin: 0 0 1px ${table.sort.gap};
            }
            &.${k}-desc .${k}-icon.${k}-desc,
            &.${k}-asc .${k}-icon.${k}-asc {
                color: ${table.sort.enabledColor};
            }
        }

        // loading
        .${k}-table-spin.${k}-overlay {
            z-index: 2;
        }

        // empty
        .${k}-table-empty {
            text-align: center;
        }

        // expand
        tr.${k}-expand {
            td {
                padding: 0;
                background: #fdfcff;
            }
        }
        &.${k}-with-expand {
            tr:not(.${k}-expand) {
                td {
                    border-bottom: none;
                }
            }
        }
        .${k}-table-expand {
            border-top: ${table.border};
            box-sizing: content-box;
        }

        // select
        tbody tr.${k}-selected td {
            background: ${table.selectedBgColor};
        }

        // hidden cell
        // col.${k}-hidden, tr > .${k}-hidden {
        //     display: none;
        // }
        .${k}-hidden {
            display: none;
        }
        .${k}-table-arrow {
            width: ${table.arrow.width} !important;
            margin-right: ${table.arrow.gap};
            transition: transform ${table.transition};
            position: relative;
            top: -1px;
        }
        tr.${k}-spreaded {
            .${k}-table-arrow {
                transform: rotate(90deg);
            }
        }

        .${k}-table-resize {
            height: 100%;
            width: ${table.resizeWidth};
            position: absolute;
            top: 0;
            left: -1px;
            cursor: ew-resize;
        }

        // draggable
        tr.${k}-dragging {
            opacity: ${table.draggingOpacity};
        }

        // sticky scrollbar
        .${k}-table-scrollbar {
            overflow-x: auto;
            overflow-y: hidden;
        }
        .${k}-table-scrollbar-inner {
            height: 1px;
        }

        // align
        ${aligns.map(type => {
            return css`
                .${k}-align-${type} {
                    text-align: ${type};
                }
            `;
        })}

        // pagination
        > .${k}-pagination {
            margin: 16px 0;
        }

        // fixHeader
        &.${k}-fix-header {
            min-height: 0;
            .${k}-table-wrapper {
                height: 100%;
            }
            thead {
                position: sticky;
                top: 0;
            }
        }
        // fixFooter
        &.${k}-fix-footer {
            min-height: 0;
            .${k}-table-wrapper {
                height: 100%;
            }
            tfoot {
                position: sticky;
                bottom: 0;
            }
        }

        .${k}-table-phantom {
            position: static;
        }
    `;
});

export const makeGroupMenuStyles = cache(function makeGroupMenuStyles(k: string) {
    return css`
        min-width: ${table.group.menuMinWidth} !important;
        .${k}-dropdown-item.${k}-active {
            color: ${table.group.activeColor};
        }
        .${k}-table-group-header {
            padding: ${table.group.headerPadding};
            border-bottom: ${table.group.headerBorder};
        }
        .${k}-table-group-body {
            max-height: ${table.group.menuMaxHeight};
            overflow: auto;
        }
        .${k}-table-group-footer {
            text-align: right;
            border-top: ${table.group.headerBorder};
            padding: 8px;
            .${k}-btn {
                margin-left: 8px;
            }
        }
    `
});
