import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    fontSize: '12px',
    searchGap: '16px',
    listHeight: '251px',

    panel: {
        width: '250px',
        height: '350px',
        get border() { return `1px solid ${theme.color.border}` }, 
        get borderRadius() { return theme.borderRadius }
    },

    title: {
        lineHeight: '40px',
        fontSize: '14px',
        padding: '0 16px',
        get color() { return theme.color.title },
        get bgColor() { return theme.color.bg },
        countGap: '8px'
    },

    item: {
        get color() { return theme.color.text },
        get hoverColor() { return theme.color.primary },
        bgColor: '#fff',
        hoverBgColor: 'transparent',
        padding: '7px 16px',
        get descColor() { return theme.color.lightBlack },
    },

    arrow: {
        gap: '16px 10px',
    },

    pagination: {
        padding: '6px 0',
    }
};

let transfer: typeof defaults;
setDefault(() => {
    transfer = deepDefaults(theme, {transfer: defaults}).transfer;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        font-size: ${transfer.fontSize};
        .${k}-transfer-panel,
        .${k}-transfer-arrows {
            display: inline-block;
            vertical-align: middle;
        }
        .${k}-transfer-panel {
            width: ${transfer.panel.width};
            border: ${transfer.panel.border};
            border-radius: ${transfer.panel.borderRadius}; 
            height: ${transfer.panel.height};
            display: inline-flex;
            flex-direction: column;
            overflow: hidden;
        }

        .${k}-transfer-title {
            line-height: ${transfer.title.lineHeight};
            background: ${transfer.title.bgColor};
            padding: ${transfer.title.padding};
            .${k}-checkbox {
                color: ${transfer.title.color}; 
                font-size: ${transfer.title.fontSize};
            }
        }
        .${k}-transfer-count {
            float: right;
            margin-left: ${transfer.title.countGap};
        }
        .${k}-transfer-list {
            overflow: auto;
            position: relative;
            flex: 1;
        }
        .${k}-transfer-item {
            color: ${transfer.item.color};
            background: ${transfer.item.bgColor};
            user-select: none;
            width: 100%;
            &:not(.${k}-disabled):hover {
                background: ${transfer.item.hoverBgColor};
                color: ${transfer.item.hoverColor};
                p {
                    color: ${transfer.item.hoverColor};
                }
            }
            .${k}-checkbox {
                padding: ${transfer.item.padding};
                display: flex;
            }
            p {
                margin: 0;
                color: ${transfer.item.descColor};
            }
            &.${k}-disabled {
                p {
                    color: ${theme.color.disabled};
                }
            }
        }
        .${k}-input {
            width: auto;
            margin: ${transfer.searchGap};
        }

        .${k}-transfer-arrows {
            .${k}-btn {
                display: flex;
                margin: ${transfer.arrow.gap};
            }
        }
        .${k}-transfer-pagination-wrapper {
            padding: ${transfer.pagination.padding};
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;
});
