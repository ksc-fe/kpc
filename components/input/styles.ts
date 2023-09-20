import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes} from '../../styles/utils';
import '../../styles/global';
import {Input} from './';

const defaults = deepDefaults(
    {
        get transition() { return theme.transition.middle },
        get fontSize() { return theme.default.fontSize },
        get height() { return theme.default.height },
        width: '300px',
        get border() { return `1px solid ${theme.color.border}` },
        get paddingGap() { return theme.default.padding },
        bgColor: '#fff',
        get color() { return theme.color.text },
        get focusBorder() { return `1px solid ${theme.color.primary}` },
        // get hoverBorder() { return `1px solid ${theme.color.darkBorder}` },
        get hoverBorder() { return `1px solid ${theme.color.primary}` },
        get borderRadius() { return theme.borderRadius },
        get placeholderColor() { return theme.color.placeholder },

        // clearable
        get clearIconColor() { return theme.color.placeholder },
        clearIconGap: '3px',
        
        // textarea
        get textareaPadding() { return `6px ${input.paddingGap}` },

        // group
        get groupBgColor() { return theme.color.bg },
        groupPaddingGap: '16px',

        // disabled
        get disabledBorderColor() { return theme.color.disabledBorder },
        get disabledColor() { return theme.color.disabled },
        get disabledBgColor() { return theme.color.disabledBg },

        // search input
        search: {
            suffixMarginRight: '15px' 
        },

        // flat
        flat: {
            get color() { return theme.color.lightBlack },
            get bgColor() { return theme.color.bg },
        }
    },
    sizes.reduce((memo, size) => {
        const styles = theme[size];
        memo[size] = {
            get fontSize() { return styles.fontSize },
            get height() { return styles.height },
            get paddingGap() { return styles.padding },
        }

        return memo;
    }, {} as Record<Sizes, {fontSize: string, height: string, paddingGap: string}>),
)

let input: typeof defaults;
setDefault(() => {
    input = deepDefaults(theme, {input: defaults}).input;
})

export function makeStyles() {
    return css`
        display: inline-block;
        width: ${input.width};
        vertical-align: middle;
        .k-input-wrapper {
            display: inline-block;
            width: 100%;
            position: relative;
        }
        .k-input-inner {
            display: inline-block;
            width: 100%;
            border: ${input.border};
            background-color: ${input.bgColor};
            transition: border ${input.transition}, background ${input.transition}, box-shadow ${input.transition};
            border-radius: ${input.borderRadius};
            outline: none;
            position: relative;
            color: ${input.color};
            &:hover {
                border: ${input.hoverBorder};
                z-index: 1;
            }
            &:focus {
                border: ${input.focusBorder};
                z-index: 1;
            }
            &::placeholder {
                color: ${input.placeholderColor};
            }
        }

        // fluid
        &.k-fluid {
            width: 100%;
        }

        // prefix & suffix
        .k-input-prefix,
        .k-input-suffix {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
            color: ${theme.color.lightBlack};
            line-height: 1;
        }

        // clearable
        .k-input-clear {
            opacity: 0;
            transition: opacity ${input.transition};
            pointer-events: none;
            color: ${input.clearIconColor};
            + * {
                margin-left: ${input.clearIconGap};
            }
        }
        &:hover .k-input-clear.k-input-show {
            opacity: 1;
            pointer-events: all;
        }

        // show password
        .k-input-show-password {
            color: ${input.clearIconColor};
        }

        // stack clear icon
        &.k-stack-clear {
            .k-input-clear {
                position: absolute;
                z-index: 1;
                right: 0;
                &.k-input-show + i {
                    transition: opacity ${input.transition};
                }
            }
            &:hover {
                .k-input-clear.k-input-show + i {
                    opacity: 0;
                }
            }
        }

        // group
        &.k-group {
            display: table;
            .k-input-inner {
                border-radius: 0;
            }
            .k-input-wrapper:first-child {
                .k-input-inner {
                    border-radius: ${input.borderRadius} 0 0 ${input.borderRadius};
                }
            }
            .k-input-wrapper:last-child {
                .k-input-inner {
                    border-radius: 0 ${input.borderRadius} ${input.borderRadius} 0;
                }
            }
        }
        .k-input-prepend,
        .k-input-append {
            display: table-cell;
            width: 1px;
            vertical-align: middle;
            background-color: ${input.groupBgColor};
            border: ${input.border};
            text-align: center;
            white-space: nowrap;
            .k-btn {
                margin: -1px;
                border: none;
                &.k-none:hover {
                    background: transparent;
                }
            }
            .k-select {
                margin: -1px;
                text-align: left;
            }
        }
        .k-input-prepend {
            &,
            .k-btn,
            .k-select {
                z-index: 1;
                border-radius: ${input.borderRadius} 0 0 ${input.borderRadius};
            }
        }
        .k-input-append {
            &,
            .k-btn,
            .k-select {
                z-index: 1;
                border-radius: 0 ${input.borderRadius} ${input.borderRadius} 0;
            }
        }
        .k-input-padding {
            padding: 0 ${input.groupPaddingGap};
        }
        .k-input-prepend {
            border-right: none;
        }
        .k-input-append  {
            border-left: none;
        }

        // flat
        &.k-flat {
            .k-input-inner {
                border: none;
                background: ${input.flat.bgColor};
                color: ${input.flat.color};
            }
        }

        // disabled
        &.k-disabled {
            color: ${input.disabledColor};
            cursor: not-allowed;
            .k-input-inner {
                color: ${input.disabledColor};
                border-color: ${input.disabledBorderColor};
                background: ${input.disabledBgColor};
                cursor: not-allowed;
            }
        }

        // size
        ${sizes.map(size => {
            const styles = input[size];
            const sizeClassName = css`
                font-size: ${styles.fontSize};
                .k-input-inner {
                    height: ${styles.height};
                    line-height: ${styles.height};
                    font-size: ${styles.fontSize};
                    padding: 0 ${styles.paddingGap};
                }
                .k-input-prefix {
                    left: ${styles.paddingGap};
                }
                .k-input-suffix {
                    right: ${styles.paddingGap};
                }
                &.k-with-prefix {
                    .k-input-inner {
                        padding-left: calc(${styles.paddingGap} + 1rem + ${input.clearIconGap});
                    }
                }
                &.k-with-suffix,
                &.k-clearable {
                    .k-input-inner {
                        padding-right: calc(${styles.paddingGap} + 1rem + ${input.clearIconGap});
                    }
                }
                &:not(.k-stack-clear).k-with-suffix.k-clearable {
                    .k-input-inner {
                        padding-right: calc(${styles.paddingGap} + 2rem + ${input.clearIconGap} * 2);
                    }
                }
            `;
            
            if (size === 'default') return sizeClassName;
            return css`
                &.k-${size} {
                    ${sizeClassName};
                }
            `
        })}

        // inline
        &.k-inline {
            .k-input-inner {
                height: auto;
                line-height: inherit;
                border: none;
                border-radius: 0;
                padding: 0;
            }
        }

        // textarea
        .k-textarea {
            padding: ${input.textareaPadding};
            height: auto;
            line-height: 1.5;
            vertical-align: top;
        }
        ${(Input.typeDefs.resize as string[]).map(type => {
            return css`
                &.k-resize-${type} {
                    .k-textarea {
                        resize: ${type};
                    }
                }
            `
        })}

        // fake dom for get value's width
        .k-input-fake {
            position: absolute;
            visibility: hidden;
            top: 0;
            white-space: nowrap;
        }
        &.k-auto-width {
            width: auto;
            max-width: 100%;
            .k-input-inner {
                max-width: 100%;
                box-sizing: content-box;
            }
        }
    `
}

export function makeSearchStyles() {
    return css`
        position: relative;
        display: inline-block;
        .k-input {
            transition: width ${input.transition};
        }
        .k-btn {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
        }
        .k-input-suffix {
            margin-right: ${input.search.suffixMarginRight};
        }

        // hide
        &.k-hide {
            .k-input {
                width: ${input.default.height};
            }
            .k-input-inner {
                padding: 0 !important;
            }
            ${sizes.map(size => {
                if (size == 'default') return;
                return css`
                    .k-input.k-${size} {
                        width: ${input[size].height};
                    }
                `
            })}
        }

        // line
        &.k-line {
            .k-input-inner {
                border-width: 0;
            }
            &.k-open {
                .k-input-inner {
                    border-bottom-width: 1px;
                }
            }
        }
    `
}
