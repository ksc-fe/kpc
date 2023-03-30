import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    item: {
        gap: `24px`,
        labelWidth: `80px`,
        get labelLineHeight() { return theme.default.height },
        labelTextAlign: 'right',
        labelGap: '10px',
        get starColor() { return theme.color.danger },
        starGap: '3px',

        // invalid
        errorFontSize: '12px',
        get errorColor() { return theme.color.danger },
        get invalidBorder() { return `1px solid ${theme.color.danger}` },

        // append
        appendPadding: `0 10px`,

        // layout
        inlineGap: '16px',
        verticalLabelGap: '8px',

        // size
        smallGap: '16px',
        smallInlineGap: '12px',
        miniGap: '8px',
        miniInlineGap: '8px',
    },
};

let form: typeof defaults;
setDefault(() => {
    form = deepDefaults(theme, {form: defaults}).form;
});

export function makeItemStyles() {
    return css`
        display: table;
        position: relative;
        table-layout: fixed;
        &:not(:last-of-type) {
            margin-bottom: ${form.item.gap};
        }
        &.k-fluid {
            width: 100%;
        }
        .k-form-label {
            display: table-cell;
            width: ${form.item.labelWidth};
            text-align: ${form.item.labelTextAlign};
            padding-right: ${form.item.labelGap};
            line-height: ${form.item.labelLineHeight};
        }
        .k-form-star {
            color: ${form.item.starColor};
            margin-right: ${form.item.starGap};
        }
        .k-form-content {
            display: table-cell;
            vertical-align: middle;
            position: relative;
        }

        // invalid
        .k-form-error {
            position: absolute;
            color: ${form.item.errorColor};
            font-size: ${form.item.errorFontSize};
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            &.k-ellipsis {
                .k-form-error-more {
                    display: inline-block;
                }
            }
        }
        .k-form-error-more {
            line-height: ${form.item.errorFontSize};
            display: none;
        }
        &.k-invalid {
            // input
            .k-input {
                .k-input-inner {
                    border: ${form.item.invalidBorder};
                    position: relative;
                    z-index: 1
                }
            }
            // select / checkbox / radio
            .k-select,
            .k-checkbox-wrapper,
            .k-radio-wrapper {
                border: ${form.item.invalidBorder} !important;
            }
            .k-select .k-input .k-input-inner {
                border: none;
            }
        }

        // nested
        .k-form-item {
            &,
            .k-form-content {
                display: block;
                width: auto;
            }
        }

        // append
        .k-form-append {
            display: table-cell;
            padding: ${form.item.appendPadding};
            vertical-align: middle;
        }
    `
}

export function makeFormStyles() {
    return css`
        // layout
        &.k-inline {
            .k-form-item {
                display: inline-block;
                vertical-align: top;
                margin-right: ${form.item.inlineGap};
            }
            .k-form-label {
                width: auto;
            }
        }
        &.k-vertical {
            .k-form-item,
            .k-form-label,
            .k-form-content {
                display: block;
            }
            .k-form-label {
                width: auto;
                text-align: left;
                line-height: inherit;
                margin-bottom: ${form.item.verticalLabelGap};
            }
        }

        // size
        ${(['small', 'mini'] as const).map(size => {
            return css`
                &.k-${size} {
                    .k-form-item:not(:last-of-type) {
                        margin: ${form.item[`${size}Gap` as const]}
                    }
                    &.k-inline {
                        .k-form-item {
                            margin-right: ${form.item[`${size}InlineGap` as const]}
                        }
                    }
                }
            `
        })}
    `;
}
