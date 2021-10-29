import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

type ValueOf<T extends readonly any[]> = T[number]
type Types = ValueOf<typeof types>
type TypeStyles = {
    color: string
    bgColor: string
}

const types = ['primary', 'warning', 'danger', 'success', 'disabled'] as const;

const {tag} = deepDefaults(theme, {
    tag: deepDefaults(
        {
            get borderColor() {
                return theme.color.border;
            },
            get fontSize() { 
                return theme.default.fontSize;
            },
            get padding() {
                return `6px ${theme.default.padding}`;
            }, 
            gap: '30px',
            closeIconFontSize: '26px',
            disabled: {
                get color() { return theme.color.disabled },
                get borderColor() { return theme.color.disabledBorder },
                get bgColor() { return theme.color.disabledBg },
            },
            large: {
                get padding() {
                    return `9px ${theme.large.padding}`;
                }, 
                get fontSize() { 
                    return theme.large.fontSize;
                },
                gap: '36px',
            },
            small: {
                get padding() {
                    return `2px ${theme.small.padding}`;
                }, 
                get fontSize() { 
                    return theme.small.fontSize;
                },
                gap: '20px',
            },
            mini: {
                get padding() {
                    return `0px ${theme.mini.padding}`;
                }, 
                get fontSize() { 
                    return theme.mini.fontSize;
                },
                gap: '16px',
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
    )
});

export function makeStyles() {
    return css`
        display: inline-flex;
        align-items: center;
        // padding: ${tag.padding};
        padding: 0 8px;
        border: 1px solid ${tag.borderColor};
        border-radius: ${theme.borderRadius};
        position: relative;
        font-size: ${tag.fontSize};

        &.k-mini {
            line-height: 14px
        }
        
        .k-tag-close {
            margin-left: 8px;
        }

        // &.k-closable {
            // padding-right: ${tag.gap};
        // }
        // .k-tag-close {
            // position: absolute;
            // right: -9px;
            // top: 0;
            // bottom: 0;
            // margin: auto;
        // }
        // .k-tag-icon {
            // font-size: ${tag.closeIconFontSize};
        // }

        ${types.map(t => {
            const styles = tag[t];
            return css`
                &.k-${t} {
                    color: ${styles.color};
                    border-color: ${styles.color};
                    background: ${styles.bgColor};
                    .k-tag-close {
                        color: ${styles.color};
                    }
                }
            `;
        })}

        ${sizes.map(s => {
            if (s === 'default') return;
            const styles = tag[s];
            return css `
                &.k-${s} {
                    font-size: ${styles.fontSize};
                    // padding: ${styles.padding};
                    // &.k-closable {
                        // padding-right: ${styles.gap};
                    // }
                    // .k-tag-icon {
                        // margin-right: 0px;
                    // }
                }
            `;
        })}
    `;
}
