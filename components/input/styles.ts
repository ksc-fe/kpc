import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes} from '../../styles/utils';
import '../../styles/global';
import {Input} from './';
import { cache } from '../utils';
const textareaSize = {
    mini: '0',
    small: '1px',
    default: '5px',
    large: '7px'
}
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
        },

        // count
        count: {
            get color() { return theme.color.placeholder },
        }
    },
    sizes.reduce((memo, size) => {
        const styles = theme[size];
        const textareaStyles = textareaSize[size];
        memo[size] = {
            get fontSize() { return styles.fontSize },
            get height() { return styles.height },
            get paddingGap() { return styles.padding },
            get padding() {return textareaStyles }
        }

        return memo;
    }, {} as Record<Sizes, {fontSize: string, height: string, paddingGap: string, padding: string}>),
)

let input: typeof defaults;
setDefault(() => {
    input = deepDefaults(theme, {input: defaults}).input;
    makeStyles?.clearCache();
    makeSearchStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        display: inline-block;
        width: ${input.width};
        color: ${input.color};
        vertical-align: middle;
        .${k}-input-wrapper {
            display: inline-flex;
            align-items: center;
            width: 100%;
            position: relative;
            border: ${input.border};
            background-color: ${input.bgColor};
            transition: border ${input.transition}, background ${input.transition}, box-shadow ${input.transition};
            border-radius: ${input.borderRadius};
            &:hover {
                border: ${input.hoverBorder};
                z-index: 1;
            }
        }
        &.${k}-focus .${k}-input-wrapper {
            border: ${input.focusBorder};
            z-index: 1;
        }
        .${k}-input-inner {
            flex: 1;
            outline: none;
            color: inherit;
            font-size: inherit;
            border: none;
            background: transparent;
            padding: 0;
            width: 0; // must set width to 0, otherwise it has min width
            max-width: 100%;
            &::placeholder {
                color: ${input.placeholderColor};
            }
        }

        // fluid
        &.${k}-fluid {
            width: 100%;
        }

        // prefix & suffix
        .${k}-input-prefix,
        .${k}-input-suffix {
            display: flex;
            align-items: center;
            gap: ${input.clearIconGap};
            color: ${theme.color.lightBlack};
            position: relative;
        }
        .${k}-input-prefix {
            margin-right: ${input.clearIconGap};
        }
        .${k}-input-suffix {
            margin-left: ${input.clearIconGap};
        }

        // clearable
        .${k}-input-clear {
            opacity: 0;
            transition: opacity ${input.transition};
            pointer-events: none;
            color: ${input.clearIconColor};
        }
        &:hover .${k}-input-clear.${k}-input-show {
            opacity: 1;
            pointer-events: all;
        }

        // show password
        .${k}-input-show-password {
            color: ${input.clearIconColor};
        }

        // stack clear icon
        &.${k}-stack-clear {
            .${k}-input-clear {
                position: absolute;
                z-index: 1;
                right: 0;
                &.${k}-input-show + * {
                    transition: opacity ${input.transition};
                }
            }
            &:hover {
                .${k}-input-clear.${k}-input-show + * {
                    opacity: 0;
                }
            }
        }

        // group
        &.${k}-group {
            display: inline-flex;
            .${k}-input-wrapper {
                border-radius: 0;
                flex: 1;
            }
            .${k}-input-wrapper:first-child {
                border-radius: ${input.borderRadius} 0 0 ${input.borderRadius};
            }
            .${k}-input-wrapper:last-child {
                border-radius: 0 ${input.borderRadius} ${input.borderRadius} 0;
            }
        }
        .${k}-input-prepend,
        .${k}-input-append {
            display: inline-flex;
            align-items: center;
            background-color: ${input.groupBgColor};
            border: ${input.border};
            white-space: nowrap;
            .${k}-btn {
                margin: -1px;
                // border: none;
                &.${k}-none:hover {
                    background: transparent;
                }
            }
            .${k}-select {
                margin: -1px;
                text-align: left;
            }
        }
        .${k}-input-prepend {
            &,
            .${k}-btn,
            .${k}-select {
                z-index: 1;
                border-radius: ${input.borderRadius} 0 0 ${input.borderRadius};
            }
        }
        .${k}-input-append {
            &,
            .${k}-btn,
            .${k}-select {
                z-index: 1;
                border-radius: 0 ${input.borderRadius} ${input.borderRadius} 0;
            }
        }
        .${k}-input-padding {
            padding: 0 ${input.groupPaddingGap};
        }
        .${k}-input-prepend {
            border-right: none;
        }
        .${k}-input-append  {
            border-left: none;
        }

        // flat
        &.${k}-flat {
            color: ${input.flat.color};
            .${k}-input-wrapper {
                border: none;
                background: ${input.flat.bgColor};
            }
        }

        // disabled
        &.${k}-disabled {
            color: ${input.disabledColor};
            cursor: not-allowed;
            .${k}-input-wrapper {
                border-color: ${input.disabledBorderColor};
                background: ${input.disabledBgColor};
            }
            .${k}-input-inner {
                cursor: not-allowed;
            }
        }

        // size
        ${sizes.map(size => {
            const styles = input[size];
            const sizeClassName = css`
                font-size: ${styles.fontSize};
                .${k}-input-wrapper {
                    height: ${styles.height};
                    padding: 0 ${styles.paddingGap};
                    .${k}-textarea {
                        padding: ${styles.padding} ${styles.paddingGap};
                    }
                }
            `;
            
            if (size === 'default') return sizeClassName;
            return css`
                &.${k}-${size} {
                    ${sizeClassName};
                }
            `
        })}

        // inline
        &.${k}-inline {
            .${k}-input-wrapper {
                height: auto;
                border: none;
                border-radius: 0;
                padding: 0;
            }
        }

        // textarea
        &.${k}-type-textarea {
            .${k}-input-wrapper {
                display: inline-block;
                padding: 0;
                height: auto;
            }
            .${k}-textarea {
                width: 100%;
                padding: ${input.textareaPadding};
                line-height: 1.5;
                vertical-align: top;
            }
            .${k}-input-suffix {
                margin: 0;
                justify-content: flex-end;
            }
        }
        ${(Input.typeDefs.resize as string[]).map(type => {
            return css`
                &.${k}-resize-${type} {
                    .${k}-textarea {
                        resize: ${type};
                    }
                }
            `
        })}

        // fake dom for get value's width
        .${k}-input-fake {
            left: 0;
            top: 0;
            position: absolute;
            overflow: hidden;
            // should not specify width
            // right: 0;
            // width: 100%;
            visibility: hidden;
            white-space: nowrap;
        }
        &.${k}-auto-width {
            width: auto;
            max-width: 100%;
        }

        // count
        .${k}-input-count {
            color: ${input.count.color};
        }
    `
});

export const makeSearchStyles = cache(function makeSearchStyles(k: string) {
    return css`
        position: relative;
        display: inline-block;
        .${k}-input {
            transition: width ${input.transition};
        }
        .${k}-btn {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
        }
        &.${k}-default .${k}-btn:hover {
            background: transparent;
        }
        .${k}-input-suffix {
            margin-right: ${input.search.suffixMarginRight};
        }

        // hide
        &.${k}-hide {
            .${k}-input {
                width: ${input.default.height};
            }
            .${k}-input-inner {
                padding: 0 !important;
            }
            ${sizes.map(size => {
                if (size == 'default') return;
                return css`
                    .${k}-input.${k}-${size} {
                        width: ${input[size].height};
                    }
                `
            })}
        }

        // line
        &.${k}-line {
            .${k}-input-wrapper {
                border-width: 0;
            }
            &.${k}-open {
                .${k}-input-wrapper {
                    border-bottom-width: 1px;
                }
                .${k}-btn:hover {
                    background: transparent;
                }
            }
        }
    `
});
