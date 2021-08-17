import {css} from '@emotion/css';
import {deepDefaults, sizes, palette} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const types = ['primary', 'warning', 'danger', 'success', 'disabled'] as const;

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
        primary: {
            get color() { return theme.color.primary },
            get bgColor() { return palette(theme.color.primary, -4)}
        },
        warning: {
            get color() { return theme.color.warning },
            get bgColor() { return palette(theme.color.warning, -4)}
        },
        danger: {
            get color() { return theme.color.danger },
            get bgColor() { return palette(theme.color.danger, -4)}
        },
        success: {
            get color() { return theme.color.success },
            get bgColor() { return palette(theme.color.success, -4)}
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

        &.k-closable {
            padding-right: ${tag.closablePaddingRight};
        }
        .k-tag-close {
            position: absolute;
            right: -7px;
            top: 0;
            bottom: 0;
            margin: auto;
        }
        .k-tag-icon {
            font-size: ${tag.closeIconFontSize};
        }

        ${types.map(t => {
            if (t === 'disabled') {
                return css`
                    &.k-${t} {
                        color: ${tag.disabledColor};
                        border-color: ${tag.disabledBorderColor};
                        background: ${tag.disabledBgColor};

                        .k-tag-close { color: ${tag.disabledColor}; }
                    }
                `;
            } else {
                return css`
                    &.k-${t} {
                        color: ${tag[t].color};
                        border-color: ${tag[t].color};
                        background: ${tag[t].bgColor};

                        .k-tag-close { color: ${tag[t].color}; }
                    }
                `;
            }
        })}

        ${sizes.map(s => {
            if (s !== 'default') {
                return css `
                    &.k-${s} {
                        font-size: ${tag[s].fontSize};
                        padding: ${tag[s].padding};
                        &.k-closable {
                            padding-right: ${tag[s].closablePaddingRight};
                        }
                    }
                `;
            }
        })}
    `;
}
