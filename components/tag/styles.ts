import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import '../../styles/global';

type ValueOf<T extends readonly any[]> = T[number]
type Types = ValueOf<typeof types>
type TypeStyles = {
    color: string
    bgColor: string
}

const types = ['primary', 'warning', 'danger', 'success', 'disabled'] as const;

const defaults = deepDefaults(
    {
        get borderColor() { return theme.color.border },
        get borderRadius() { return theme.radius.formRadius },
        get fontSize() { return theme.default.fontSize },
        padding: `0 8px`,
        height: '20px',
        background: '#f3f5f6',
        close: {
            fontSize: '20px',
            gap: '8px',
        },
        disabled: {
            get color() { return theme.color.disabled },
            get borderColor() { return theme.color.disabledBorder },
            get bgColor() { return theme.color.disabledBg },
        },
        large: {
            padding: `0px 8px`,
            height: '24px',
            close: {
                fontSize: '20px',
                gap: '12px',
            }
        },
        small: {
            padding: `0 4px`,
            height: '16px',
            close: {
                fontSize: '12px',
                gap: '4px'
            }
        },
        mini: {
            padding: `0 2px`,
            height: '14px',
            close: {
                fontSize: '12px',
                gap: '2px'
            }
        },
        none: {
            get bgColor() { return theme.color.bg },
        },

    },
    types.reduce((memo, type) => {
        if (type === 'disabled') return memo;
        memo[type] = {
            get color() { return theme.color[type] },
            get bgColor() { return palette(theme.color[type], -4)}
        };
        return memo;
    }, {} as {[key in Exclude<Types, 'disabled'>]: TypeStyles}),
);

let tag: typeof defaults;
setDefault(() => {
    tag = deepDefaults(theme, {tag: defaults}).tag;
});

export function makeStyles() {
    return css`
        display: inline-flex;
        align-items: center;
        padding: ${tag.padding};
        border-radius: ${tag.borderRadius};
        font-size: ${tag.fontSize};
        height: ${tag.height};
        color: rgb(204, 204, 204);
        &.k-solid {
            background:${tag.background};
        }
        .k-tag-close {
            font-size: ${tag.close.fontSize};
            margin-left: ${tag.close.gap};
            color: ${theme.color.desText} !important;
        }

        &.k-none {
            border: none;
            background: ${tag.none.bgColor};
        }

        ${types.map(t => {
            const styles = tag[t];
            return css`
                &.k-${t} {
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
                &.k-${s} {
                    padding: ${styles.padding};
                    height: ${styles.height};
                    .k-tag-close {
                        font-size: ${styles.close.fontSize};
                        margin-left: ${styles.close.gap};
                    }
                }
            `;
        })}

        // border
        &.k-dashed {
            border:1px dashed;
        }
    `;
}
