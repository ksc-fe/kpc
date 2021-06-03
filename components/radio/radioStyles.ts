import {css} from '@emotion/css';
import {deepDefaults, darken} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const {radio} = deepDefaults(theme, {
    radio: {
        get radio_width() {
            return '14rem';
        },
        get radio_border_color() {
            return theme.color.darkBorder;
        },
        get radio_bg_color() {
            return '#fff';
        },
        get radio_text_margin_left() {
            return '8em';
        },
        get radio_inner_width() {
            return '8rem';
        },
        get radio_checked_color() {
            return theme.color.primary;
        },
        get radio_disabled_color() {
            return theme.color.disabled;
        },
        get radio_disabled_border_color() {
            return theme.color.disabledBorder;
        },
        get radio_disabled_bg_color() {
            return theme.color.disabledBg;
        },
        get radio_disabled_inner_color() {
            return theme.color.disabled;
        },
        get transition() {
            return theme.transition;
        }
    }
});

export default function makeStyles() {
    return css`
    .k-radio {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        vertical-align: middle;
        .k-wrapper {
            display: inline-block;
            width: ${radio.radio_width};
            height: ${radio.radio_width};
            vertical-align: middle;
            border: 1px solid ${radio.radio_border_color};
            border-radius: 50%;
            transition: all ${radio.transition} ;
            position: relative;
            background: ${radio.radio_bg_color};
            flex: 0 0 auto;
            // inner
            &:before {
                content: "";
                display: block;
                position: absolute;
                width: ${radio.radio_inner_width};
                height: ${radio.radio_inner_width};
                top: 50%;
                left: 50%;
                margin-left: s('-%s', ${radio.radio_inner_width} / 2);
                margin-top: @margin-left;
                border-radius: 50%;
                background-color: ${radio.radio_checked_color};
                transform: scale(0);
                transition: all ${radio.transition};
            }    
        }
        input {
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
            position: absolute;
        }    
        .k-text {
            vertical-align: middle;
            display: inline-block;
            margin-left: ${radio.radio_text_margin_left};
            flex: 0 1 auto;
        }
        // checked
        &.k-checked {
            .k-wrapper {
                border-color: ${radio.radio_checked_color};
                &:before {
                    transform: scale(1);
                }    
            }        
        }            
        // focus
        &:focus {
            outline: none;
            .k-wrapper {
                border-color: ${radio.radio_checked_color};
            }    
        }    
        // disabled
        &.k-disabled {
            color: ${radio.radio_disabled_color};
            cursor: not-allowed;
            .k-wrapper {
                border-color: ${radio.radio_disabled_border_color};
                background: ${radio.radio_disabled_bg_color};
                &:before {
                    background: ${radio.radio_disabled_inner_color};
                }    
            }        
        }            
    }`;
}
