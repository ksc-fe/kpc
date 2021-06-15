import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const {dialog} = deepDefaults(theme, {
    dialog: {
        width: '800px',
        bgColor: '#fff',
        get borderRadius() { return theme.borderRadius },
        padding: '0',
        margin: '0 20px',
        get color() { return theme.color.text },
        get fontSize() { return theme.fontSize },
        get boxShadow() { return theme.boxShadow },

        // header
        header: {
            fontSize: '16px',
            get color() { return theme.color.title },
            height: '61px',
            border: `1px solid #eaeaea`,
            closeTop: '16px',
            closeRight: '-9px',
            closeIconFontSize: '44px',
        },

        // body
        body: {
            padding: `20px`,
        },

        // footer
        footer: {
            padding: `20px 0`,
            btnGap: `12px`,
        },

        // transition
        transform: 'translateY(-10px) scale(1.05)',

        // size
        largeWidth: '1000px',
        smallWidth: '600px',
        miniWidth: '400px',

        // alert dialog
        alert: {
            padding: `0 20px`,
            bodyMarginTop: `-25px`,
            tipIconMarginBottom: '10px',
            tipIconFontSize: '37px',
            tipIconLineHeight: '37px',

            // with title
            titleTipIconFontSize: '37px',
            titleFontSize: '14px',
            wrapperPaddingLeft: '8px',
            titleBodyMarginTop: '-36px',
        },
    } 
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

        // drag
        &.k-dragging {
            cursor: move;
            user-select: none;
        }

        // transition
        &.transition-enter-active,
        &.transition-leave-active,
        &.transition-appear-active {
            transition: all ${theme.transition}
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
            position: relative;
        }
        .k-dialog-title {
            height: ${dialog.header.height};
            line-height: ${dialog.header.height};
            font-size: ${dialog.header.fontSize};
            color: ${dialog.header.color};
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
            .k-btn {
                margin-left: ${dialog.footer.btnGap};
            }
        }
    `;
}

export function makeWrapperStyles() {
    return css`
        position: fixed;
        z-index: ${theme.maxZIndex};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        display: none;
        background: rgba(0, 0, 0, .5);
    `;
}
