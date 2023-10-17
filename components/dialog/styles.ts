import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    width: '800px',
    bgColor: '#fff',
    get borderRadius() { return theme.borderRadius },
    get transition() { return theme.transition.large },
    padding: '0',
    margin: '0 24px',
    get color() { return theme.color.text },
    get fontSize() { return theme.fontSize },
    get boxShadow() { return theme.largeBoxShadow },

    // header
    header: {
        fontSize: '14px',
        fontWeight: '500',
        get color() { return theme.color.title },
        height: '52px',
        border: `1px solid #e2e5e8`,
        closeTop: '9px',
        closeRight: '-9px',
        closeIconFontSize: '22px',
    },

    // body
    body: {
        padding: `24px`,
    },

    // footer
    footer: {
        padding: `16px 0`,
        btnGap: `8px`,
        border: `1px solid #e2e5e8`,
    },

    // transition
    transform: 'translateY(-10px) scale(1.05)',

    // size
    largeWidth: '1000px',
    smallWidth: '600px',
    miniWidth: '400px',

    // alert dialog
    alert: {
        padding: `0 24px`,
        bodyMarginTop: `-25px`,
        tipIconMarginBottom: '10px',
        tipIconFontSize: '37px',
        tipIconLineHeight: '37px',

        // with title
        titleFontWeight: '500',
        titleTipIconFontSize: '37px',
        titleFontSize: '14px',
        wrapperPaddingLeft: '8px',
        titleBodyMarginTop: '-36px',
    },
};

let dialog: typeof defaults;
setDefault(() => {
    dialog = deepDefaults(theme, {dialog: defaults}).dialog;
});

export function makeDialogStyles() {
    return css`
        position: absolute;
        width: ${dialog.width};
        border-radius: ${dialog.borderRadius};
        background: ${dialog.bgColor};
        font-size: ${dialog.fontSize};
        color: ${dialog.color};
        box-shadow: ${dialog.boxShadow};
        max-width: 100%;
        z-index: ${theme.maxZIndex};

        // drag
        &.k-dragging {
            cursor: move;
            user-select: none;
        }

        // transition
        &.transition-enter-active,
        &.transition-leave-active,
        &.transition-appear-active {
            // transition: transform ${dialog.transition}, opacity ${dialog.transition};
            transition: all ${dialog.transition};
        }
        &.transition-enter-from,
        &.transition-leave-to,
        &.transition-appear-from {
            transform: ${dialog.transform};
            opacity: 0;
        }

        // size
        ${(['large', 'small', 'mini'] as const).map(size => {
            return css`
                &.k-${size} {
                    width: ${dialog[`${size}Width` as const]}
                }
            `
        })}

        // header
        .k-dialog-header {
            padding: 0 ${dialog.padding};
            margin: ${dialog.margin};
            border-bottom: ${dialog.header.border} ;
            height: ${dialog.header.height};
            line-height: ${dialog.header.height};
            font-size: ${dialog.header.fontSize};
            color: ${dialog.header.color};
            position: relative;
            font-weight: ${dialog.header.fontWeight};
        }
        .k-dialog-title {
            display: inline-block;
        }
        .k-dialog-close {
            position: absolute;
            right: ${dialog.header.closeRight};
            top: ${dialog.header.closeTop};
            .k-icon {
                font-size: ${dialog.header.closeIconFontSize};
            }

        }

        // body
        .k-dialog-body {
            padding: ${dialog.body.padding};
        }

        // footer
        .k-dialog-footer {
            text-align: right;
            padding: ${dialog.footer.padding};
            margin: ${dialog.margin};
            border-top: ${dialog.footer.border};
            .k-btn {
                margin-left: ${dialog.footer.btnGap};
            }
        }
    `;
}

export function makeWrapperStyles() {
    // k-fade-leave-active will add position absolute to the styles
    // so we must set fixed with important to .k-dialog-overlay
    return css`
        position: absolute;
        z-index: ${theme.maxZIndex};
        top: 0;
        left: 0;
        width: 100%;
        .k-dialog-overlay {
            position: fixed !important;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .5);
        }
    `;
}

export function makeAlertStyles() {
    return css`
        &.k-alert-dialog {
            .k-dialog-body {
                margin-top: ${dialog.alert.bodyMarginTop};
                padding: ${dialog.alert.padding};
                text-align: center;
                position: relative;
                z-index: 1;
            }
            .k-dialog-header,
            .k-dialog-footer {
                border: none;
            }
            .k-dialog-tip-icon {
                margin-bottom: ${dialog.alert.tipIconMarginBottom};
                .k-icon {
                    font-size: ${dialog.alert.tipIconFontSize};
                    line-height: ${dialog.alert.tipIconLineHeight};
                }
            }
            ${(['success', 'warning', 'error', 'confirm'] as const).map(type => {
                const color = type === 'error' ?
                    theme.color.danger :
                        type === 'confirm' ?
                            theme.color.primary :
                            theme.color[type];
                return css`
                    &.k-${type} {
                        .k-dialog-tip-icon {
                            color: ${color};
                        }
                    }
                `
            })}
            &:not(.k-confirm) {
                .k-dialog-cancel {
                    display: none;
                }
            }

            // with title
            &.k-with-title {
                .k-dialog-body {
                    margin-top: ${dialog.alert.titleBodyMarginTop};
                    text-align: left;
                }
                .k-dialog-tip-icon {
                    float: left;
                    .k-icon {
                        font-size: ${dialog.alert.titleTipIconFontSize};
                    }
                }
                .k-alert-dialog-wrapper {
                    overflow: hidden;
                    padding-left: ${dialog.alert.wrapperPaddingLeft};
                }
                .k-alert-dialog-title {
                    line-height: ${dialog.alert.tipIconLineHeight};
                    font-size: ${dialog.alert.titleFontSize};
                    font-weight: ${dialog.alert.titleFontWeight};
                }    
            }
        }
    ` 
}
