import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette}  from '../../styles/utils';
import '../../styles/global';

const defaults = {
    width: '8px',
    get height() { return badge.width },
    bgColor: '#ff4133',

    // has-text
    textHeight: '16px',
    textPadding: '5px',
    textColor: '#fff',
};

let badge: typeof defaults;
setDefault(() => {
    badge = deepDefaults(theme, {badge: defaults}).badge;
});

export default function makeStyles() {
    return css`
        display: inline-block;
        position: relative;
        vertical-align: middle;
        > .k-badge-text {
            display: inline-block;
            position: absolute;
            width: ${badge.width};
            height: ${badge.height};
            border-radius: 50%;
            top: 0;
            right: 0;
            transform: translate(50%, -50%);
            background: ${badge.bgColor};
            font-size: 85%;
            vertical-align: baseline;
        }
            
        // has-text
        &.k-has-text
            > .k-badge-text {
                width: auto;
                height: ${badge.textHeight};
                line-height: ${badge.textHeight};
                border-radius: calc(${badge.textHeight} / 2);
                padding: 0 ${badge.textPadding};
                color: ${badge.textColor};
            }
                
        // alone
        &.k-alone
            > .k-badge-text {
                position: static;
                transform: none;
            }            
    `;
}

