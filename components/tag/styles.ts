import {css} from '@emotion/css';
import {deepDefaults, darken} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const types = ['primary', 'warning', 'danger', 'success', 'disabled'] as const;
const sizes = ['large', 'small', 'mini'] as const;

const {tag} = deepDefaults(theme, {
    tag: {
        color: 'inherit',
        borderColor: '#cad0dd',
        get fontSize() { 
            return theme.large.fontSize;
        },
        padding: '7px 20px',
        closablePaddingRight: '32px',
        closeIconFontSize: '26px',
        typeColor: {
            get primary() { 
                return theme.color.primary;
            },
            get warning() { 
                return theme.color.warning;
            },
            get danger() { 
                return theme.color.danger;
            },
            get success() { 
                return theme.color.success;
            }
        },
        typeBgColor: {
            primary: '#e5f1ff',
            warning: '#fff2e5',
            danger: '#ffe5e7',
            success: '#f2ffe5'
        },
        get disabledColor() {
            return theme.color.disabled;
        },
        get disabledBorderColor() {
            return theme.color.disabledBorder;
        },
        get disabledBgColor() {
            return theme.color.disabledBg;
        },
        size: {
            large: {
                padding: '7px 25px',
                fontSize: '16px',
                closablePaddingRight: '36px'
            },
            small: {
                padding: '5px 15px',
                fontSize: '12px',
                closablePaddingRight: '26px',
            },
            mini: {
                padding: '3px 10px',
                fontSize: '12px',
                closablePaddingRight: '22px',
            }
        }
    }
});

export default function makeStyles() {
    return css`
        display: inline-block;
        padding: ${tag.padding};
        border: 1px solid ${tag.borderColor};
        border-radius: 2px;
        position: relative;
        font-size: ${tag.fontSize};
        color: ${tag.color};

        &.k-tag-closable {
            padding-right: ${tag.closablePaddingRight};
        }
        .k-tag-close {
            position: absolute;
            right: -7px;
            top: 0;
            bottom: 0;
            margin: auto;
            .k-tag-icon {
                font-size: ${tag.closeIconFontSize};
            }
        }

        ${types.map(type => {
            if (type == 'disabled') {
                return css`
                    &.k-${type} {
                        color: ${tag.disabledColor};
                        border-color: ${tag.disabledBorderColor};
                        background: ${tag.disabledBgColor};

                        .k-tag-close { color: ${tag.disabledColor}; }
                    }
                `;
            }
            else {
                return css`
                    &.k-${type} {
                        color: ${tag.typeColor[type]};
                        border-color: ${tag.typeColor[type]};
                        background: ${tag.typeBgColor[type]};

                        .k-tag-close { color: ${tag.typeColor[type]}; }
                    }
                `;
            }
        })}

        ${sizes.map(s => {
            return css `
            &.k-${s} {
                font-size: ${tag.size[s].fontSize};
                padding: ${tag.size[s].padding};
                &.k-tag-closable {
                    padding-right: ${tag.size[s].closablePaddingRight};
                }
            }
            `;
        })}
    `;
}
