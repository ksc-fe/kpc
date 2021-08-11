import {css} from '@emotion/css';
import {deepDefaults, darken} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const types = ['primary', 'warning', 'danger', 'success', 'disabled'] as const;

const {tag} = deepDefaults(theme, {
    tag: {
        tagColor: 'inherit',
        tagBorderColor: '#cad0dd',
        tagFontSize: '14px',
        tagPadding: '7px 20px',
        tagClosablePaddingRight: '32px',
        tagCloseIconFontSize: '26px',
        tagTypeColor: {
            primary: '#0a5eee',
            warning: '#ff8a00',
            danger: '#db2828',
            success: '#4db500'
        },
        tagTypeBgColor: {
            primary: '#e5f1ff',
            warning: '#fff2e5',
            danger: '#ffe5e7',
            success: '#f2ffe5'
        },
        get tagDisabledColor() {
            return theme.color.disabled;
        },
        get tagDisabledBorderColor() {
            return theme.color.disabledBorder;
        },
        get tagDisabledBgColor() {
            return theme.color.disabledBg;
        },
        tagLargePadding: '7px 25px',
        tagLargeFontSize: '16px',
        tagLargeClosablePaddingRight: '36px',
        tagSmallPadding: '5px 15px',
        tagSmallFontSize: '12px',
        tagSmallClosablePaddingRight: '26px',
        tagMiniPadding: '3px 10px',
        tagMiniFontSize: '12px',
        tagMiniClosablePaddingRight: '22px',
    }
});

export default function makeStyles() {
    return css`
        display: inline-block;
        padding: ${tag.tagPadding};
        border: 1px solid ${tag.tagBorderColor};
        border-radius: 2px;
        position: relative;
        font-size: ${tag.tagFontSize};
        color: ${tag.tagColor};

        &.k-closable {
            padding-right: ${tag.tagClosablePaddingRight};
        }
        .close {
            position: absolute;
            right: -7px;
            top: 0;
            bottom: 0;
            margin: auto;
            .icon {
                font-size: ${tag.tagCloseIconFontSize};
            }
        }

        ${types.map(type => {
            if (type == 'disabled') {
                return css`
                    &.k-${type} {
                        color: ${tag.tagDisabledColor};
                        border-color: ${tag.tagDisabledBorderColor};
                        background: ${tag.tagDisabledBgColor};

                        .close { color: ${tag.tagDisabledColor}; }
                    }
                `;
            }
            else {
                return css`
                    &.k-${type} {
                        color: ${tag.tagTypeColor[type]};
                        border-color: ${tag.tagTypeColor[type]};
                        background: ${tag.tagTypeBgColor[type]};

                        .close { color: ${tag.tagTypeColor[type]}; }
                    }
                `;
            }
        })}

        &.k-large {
            font-size: ${tag.tagLargeFontSize};
            padding: ${tag.tagLargePadding};
            &.k-closable {
                padding-right: ${tag.tagLargeClosablePaddingRight};
            }
        }
        &.k-small {
            font-size: ${tag.tagSmallFontSize};
            padding: ${tag.tagSmallPadding};
            &.k-closable {
                padding-right: ${tag.tagSmallClosablePaddingRight};
            }
        }
        &.k-mini {
            font-size: ${tag.tagMiniFontSize};
            padding: ${tag.tagMiniPadding};
            &.k-closable {
                padding-right: ${tag.tagMiniClosablePaddingRight};
            }
        }`;
}
