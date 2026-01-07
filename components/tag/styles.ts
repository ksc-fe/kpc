import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import '../../styles/global';
import { cache } from '../utils';

type ValueOf<T extends readonly any[]> = T[number]
type Types = ValueOf<typeof types>
type TypeStyles = {
    color: string
    bgColor: string
}
type Colors = ValueOf<typeof colors>
type ColorStyles = {
    color: string
    bgColor: string
}

const types = ['primary', 'warning', 'danger', 'success', 'disabled'] as const;
const colors = ['purple', 'teal', 'blue', 'yellow'] as const;

const defaults = deepDefaults(
    {
        get border() { return `1px solid ${theme.color.border}` },
        get borderRadius() { return theme.borderRadius },
        get fontSize() { return theme.default.fontSize },
        padding: `0 8px`,
        height: '20px',
        get bgColor() { return theme.color.bg },
        close: {
            fontSize: '20px',
            gap: '8px',
            /**
             * fix the width to calculate the width for nowrap tags,
             * otherwise the width will be decided by font font-icons loaded
             */
            width: '7px',
        },
        disabled: {
            get color() { return theme.color.disabled },
            get borderColor() { return theme.color.disabledBorder },
            get bgColor() { return theme.color.disabledBg },
        },
        large: {
            padding: `0px 8px`,
            height: '24px',
            get fontSize() { return theme.large.fontSize },
            close: {
                fontSize: '22px',
                gap: '6px',
            }
        },
        small: {
            padding: `0 4px`,
            height: '16px',
            get fontSize() { return theme.small.fontSize },
            close: {
                fontSize: '18px',
                gap: '4px'
            }
        },
        mini: {
            padding: `0 2px`,
            height: '14px',
            // get fontSize() { return theme.mini.fontSize },
            fontSize: '11px',
            close: {
                fontSize: '16px',
                gap: '2px'
            }
        },
        none: {
            get bgColor() { return theme.color.bg },
        },

        tags: {
            gap: '8px',
        }
    },
    types.reduce((memo, type) => {
        if (type === 'disabled') return memo;
        memo[type] = {
            get color() { return theme.color[type] },
            get bgColor() { return palette(theme.color[type], -4)}
        };
        return memo;
    }, {} as {[key in Exclude<Types, 'disabled'>]: TypeStyles}),
    colors.reduce((memo, color) => {
        memo[color] = {
            get color() { return theme.color[color] },
            get bgColor() { return palette(theme.color[color], -4)}
        };
        return memo;
    }, {} as {[key in Colors]: ColorStyles}),
);

let tag: typeof defaults;
setDefault(() => {
    tag = deepDefaults(theme, {tag: defaults}).tag;
    makeStyles?.clearCache();
    makeTagsStyles?.clearCache();
});

export { tag };

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        display: inline-flex;
        align-items: center;
        padding: ${tag.padding};
        border: ${tag.border};
        border-radius: ${tag.borderRadius};
        font-size: ${tag.fontSize};
        height: ${tag.height};
        .${k}-tag-close {
            font-size: ${tag.close.fontSize};
            margin-left: ${tag.close.gap};
            width: ${tag.close.width};
        }

        &.${k}-none {
            border: none;
            background: ${tag.none.bgColor};
        }

        ${colors.map(c => {
            return css`
                &.${k}-${c} {
                    color: ${tag[c].color};
                    border-color: ${tag[c].color};
                    background: ${tag[c].bgColor};
                }
            `;
        })}

        ${types.map(t => {
            const styles = tag[t];
            return css`
                &.${k}-${t} {
                    color: ${styles.color};
                    border-color: ${styles.color};
                    background: ${styles.bgColor};
                }
            `;
        })}

        ${sizes.map(s => {
            if (s === 'default') return;
            const styles = tag[s];
            return css `
                &.${k}-${s} {
                    padding: ${styles.padding};
                    height: ${styles.height};
                    font-size: ${styles.fontSize};
                    .${k}-tag-close {
                        font-size: ${styles.close.fontSize};
                        margin-left: ${styles.close.gap};
                    }
                }
            `;
        })}

        // border
        &.${k}-dashed {
            border-style: dashed;
        }

        // draggable
        &.${k}-dragging {
            opacity: 0;
        }
    `;
});

export const makeTagsStyles = cache(function makeTagsStyles(k: string) {
    return css`
        display: flex;
        flex-wrap: wrap;
        gap: ${defaults.tags.gap};
        position: relative;
        overflow: hidden;
        &.${k}-nowrap {
            flex-wrap: nowrap;
            .${k}-tag {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                flex-shrink: 0;
            }
        }
        .${k}-tags-more {
            cursor: default;
            font-family: monospace;
        }

        // draggable
        .${k}-tag.${k}-draggable {
            cursor: move;
        }
    `;
});
