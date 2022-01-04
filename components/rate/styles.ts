import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    color: '#ccc',
    get activeColor() { return theme.color.warning },
    iconFontSize: '24px',

    item: {
        gap: '8px',
        hoverTransform: 'scale(1.1)',
    },
};

let rate: any;
setDefault(() => {
    rate = deepDefaults(theme, {rate: defaults}).rate;
});

export function makeStyles() {
    return css`
        display: inline-block;
        .k-rate-item {
            display: inline-block;
            margin-right: ${rate.item.gap};
            cursor: pointer;
            position: relative;
            color: ${rate.color}; 
            transition: all ${theme.transition};
            &:hover {
                transform: ${rate.item.hoverTransform};
            }
            &.k-full {
                color: ${rate.activeColor};
            }
            &.k-half {
                .k-rate-first {
                    color: ${rate.activeColor};
                }
            }
        }
        .k-rate-first {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            overflow: hidden;
        }
        .k-icon {
            font-size: ${rate.iconFontSize};
        }
            
        // disabled
        &.k-disabled {
            .k-rate-item {
                cursor: default;
                &:hover {
                    transform: none;
                }
            }
        }
    `;
}
