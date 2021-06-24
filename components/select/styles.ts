import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, sizes, Sizes, getRight} from '../../styles/utils';
import '../../styles/global';

type SizeStyles = {
    padding?: string,
    height: string,
    fontSize: string,
    multipleGap: string,
    multipleMargin: string,
}

const {select} = deepDefaults(theme, {
    select: deepDefaults(
        {
            width: `300px`,
            get height() { return theme.default.height },
            bgColor: '#fff',
            get fontSize() { return theme.default.fontSize },
            get border() { return `1px solid ${theme.color.border}` },
            get focusBorder() { return `1px solid ${theme.color.primary}` },
            get hoverBorder() { return `1px solid ${theme.color.darkBorder}` },
            get iconColor() { return theme.color.placeholder },
            get activeColor() { return theme.color.primary },
            get borderRadius() { return theme.borderRadius },
            suffixGap: '10px',

            clearGap: `8px`,
            get placeholderColor() { return theme.color.placeholder },

            // disabled
            disabled: {
                get color() { return theme.color.disabled },
                get bgColor() { return theme.color.disabledBg },
                get borderColor() { return theme.color.disabledBorder },
            },

            // group
            group: {
                get labelColor() { return theme.color.disabled },
                labelPadding: `8px`,
            },
            // card
            card: {
                height: `160px`,
                get itemHoverColor() { return theme.color.primary },
                itemHoverBgColor: `transparent`,
                tabPadding: `0 16px`,
            },

            // multiple
            multiple: {
                checkmark: {
                    fontSize: '32px',
                },
            },
            tag: {
                margin: `3px 8px 3px 0`,
                padding: `4px 8px`,
                get borderRadius() { return theme.borderRadius },
                get bgColor() { return theme.color.bg },
                disabledBgColor: '#eee',

                delete: {
                    gap: `8px`,
                    fontSize: '14px',
                    get color() { return theme.color.placeholder },
                }
            },

            menuMaxHeight: `200px`,

            // empty
            empty: {
                padding: `16px`,
                get color() { return theme.color.placeholder },
            },

            // searchable
            searchable: {
                padding: `16px 16px 8px 16px`,
                headerGap: `8px`,
                get border() { return `1px solid ${theme.color.border}` },
                header: {
                    padding: `0 0 16px 0`,
                    gap: `8px`,
                    btnPadding: `0`,
                    btnGap: `16px`,
                },
                optionPadding: `0 8px`,
                footer: {
                    padding: `8px 0 0`,
                    gap: `8px`,
                    btnGap: `8px`,
                },
            },
        },
        sizes.reduce((memo, size) => {
            const styles = theme[size];
            memo[size] = {
                get padding() { return `0 ${styles.padding}` },
                get height() { return styles.height },
                get fontSize() { return styles.fontSize },
                multipleGap: `1px`,
                multipleMargin: `0 2px 1px 0`,
            }

            if (size === 'large') {
                // use default padding for large size
                Object.defineProperty(memo.large, 'padding', {
                    get() {
                        return `0 ${theme.default.padding}`;
                    }
                });
                Object.defineProperty(memo.large, 'fontSize', {
                    get() {
                        return theme.default.fontSize;
                    }
                });
            }

            return memo;
        }, {} as Record<Sizes, SizeStyles>)
    )
});

export default function makeStyles() {
    return css`
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        position: relative;
        width: ${select.width};
        cursor: pointer;
        outline: none;
        border: ${select.border};
        background: ${select.bgColor};
        transition: border ${theme.transition}, background ${theme.transition}, box-shadow ${theme.transition};
        border-radius: ${select.borderRadius};
        .k-select-main {
            flex: 1;
        }
        .k-select-prefix,
        .k-select-suffix {
            color: ${select.iconColor};
        }
        .k-select-suffix {
            margin-left: ${select.suffixGap};
        }

        .k-select-placeholder {
            color: ${select.placeholderColor};
        }

        &.k-fluid {
            width: 100%;
        }

        // clearable
        .k-select-clear {
            opacity: 0;
            transition: opacity ${theme.transition}, color ${theme.transition} !important;
            pointer-events: none;
            position: absolute;
            z-index: 1;
        }
        &:hover {
            border: ${select.hoverBorder};
            .k-select-clear.k-show {
                opacity: 1;
                pointer-events: all;
                + .k-select-suffix-icon {
                    opacity: 0;
                }
            }
        }
        .k-select-suffix-icon {
            display: inline-block;
            transition: opacity ${theme.transition};
        }

        // filterable
        .k-input-inner {
            border: none !important;
            padding: 0 !important;
            border-radius: 0 !important;
        }

        .k-select-arrow {
            display: inline-block;
            transition: transform ${theme.transition};
        }

        // show
        &.k-dropdown-open {
            border: ${select.focusBorder};
            .k-select-arrow {
                transform: rotate(180deg);
            }
        }
        &:focus {
            outline: none;
            border: ${select.focusBorder};
        }

        // disabled
        &.k-disabled {
            color: ${select.disabled.color};
            cursor: not-allowed;
            background: ${select.disabled.bgColor};
            border-color: ${select.disabled.borderColor};
            .k-select-tag {
                background: ${select.tag.disabledBgColor};
            }
        }

        // multiple
        .k-select-values {
            display: inline-block;
            margin-right: -${getRight(select.tag.margin)};
            &.k-with-values {
                margin: 0;
            }
        }
        .k-select-tag {
            display: inline-flex;
            align-items: center;
            padding: ${select.tag.padding};
            background: ${select.tag.bgColor};
            border-radius: ${select.tag.borderRadius};
            margin: ${select.tag.margin};
            line-height: 1;
        }
        .k-select-close {
            margin-left: ${select.tag.delete.gap};
            font-size: ${select.tag.delete.fontSize};
            color: ${select.tag.delete.color};
        }
        .k-select-input {
            margin-right: ${getRight(select.tag.margin)};
        }

        // size
        ${sizes.map(size => {
            const styles = select[size];
            const className = css`
                font-size: ${styles.fontSize};
                min-height: ${styles.height};
                padding: ${styles.padding};
            `;
            if (size === 'default') return className;
            return css`
                &.k-${size}  {
                    ${className}
                }
            `
        })}

        // inline
        &.k-inline {
            width: auto;
            border: none;
            min-height: 0;
            background: transparent;
            .k-select-placeholder,
            .k-select-value {
                line-height: inherit;
            }
        }
    `;
}

export function makeMenuStyles() {
    const searchable = select.searchable;
    
    return css`
        min-width: auto;
        max-height: ${select.menuMaxHeight};
        overflow: auto;
        .k-select-empty {
            padding: ${select.empty.padding};
            color: ${select.empty.color};
            text-align: center;
        }
        .k-select-option {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &.k-active {
                color: ${select.activeColor};
            }
        }

        // searchable
        &.k-searchable {
            max-height: none;
            padding: ${searchable.padding};
            .k-select-option {
                padding: ${searchable.optionPadding};
            }
        }
        .k-select-header {
            display: flex;
            padding: ${searchable.header.padding};
            border-bottom: ${searchable.border};
            margin-bottom: ${searchable.header.gap};
        }
        .k-select-op {
            white-space: nowrap;
            .k-btn {
                padding: ${searchable.header.btnPadding};
                margin-left: ${searchable.header.btnGap};
            }
        }
        .k-select-body {
            max-height: ${select.menuMaxHeight};
            overflow: auto;
        }
        .k-select-footer {
            border-top: ${searchable.border};
            padding: ${searchable.footer.padding};
            text-align: right;
            margin-top: ${searchable.footer.gap};
            .k-btn {
                margin-left: ${searchable.footer.btnGap};
            }
        }

        // multiple checkmark
        .k-select-checkmark {
            float: right;
            height: 100%;
            font-size: ${select.multiple.checkmark.fontSize};
        }
    `;
}

export function makeGroupStyles() {
    return css`
        .k-select-group-label {
            color: ${select.group.labelColor};
            padding: ${select.group.labelPadding};
        }
    `
}
