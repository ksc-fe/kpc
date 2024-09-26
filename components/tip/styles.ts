import {theme, setDefault} from '../../styles/theme';
import {css} from '@emotion/css';
import '../../styles/global';
import {deepDefaults}  from '../../styles/utils';
import { cache } from '../utils';

const defaults = {
    title: {
        fontSize: '14px',
        gap: '8px',
        fontWeight: '500'
    },
    get color() { return theme.color.text },
    get padding() { return `${theme.default.padding}` },
    content: {
        padding: '7px 33px 8px 8px',
    },
    icon: {
        fontSize: `18px`,
        left: `16px`,
        top: `6px`,
    },
};

let tip: typeof defaults;
setDefault(() => {
    tip = deepDefaults(theme, {tip: defaults}).tip;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        // Tip extends Tag, so we add.${k}-tip to increase the priority of class
        &.${k}-tip {
            display: flex;
            height: auto;
            padding: 0;
            color: ${tip.color} !important;
            align-items: flex-start;
        }
        .${k}-tip-wrapper {
            flex: 1;
            padding: ${tip.padding};
        }

        .${k}-tip-title {
            font-size: ${tip.title.fontSize};
            margin-bottom: ${tip.title.gap};
            font-weight: ${tip.title.fontWeight}
            display: flex;
            align-items: center;
        }

        &.${k}-fade-leave-active {
            position: relative;
        }

        .${k}-tip-close {
            height: 42px;
            &:hover {
                background: none;
            }
        }

        .${k}-with-icon {
            display: flex;
            .${k}-tip-icon {
                font-size: 18px;
                vertical-align: middle;
            }
            .${k}-title-content {
                display: inline-block;
                padding-left: 8px;
            }
            .${k}-tip-content {
                display: inline-block;
                padding-left: 8px;
                vertical-align: middle;
                word-break: break-word;
                overflow-wrap: break-word;
            }
        }

        ${(['primary', 'danger', 'success', 'warning'] as const).map(type => {
            const color = theme.color[type];
            return css`
                &.${k}-${type} {
                    .${k}-tip-icon {
                        color: ${color};
                    }
                }
            `
        })}
    `;
});
