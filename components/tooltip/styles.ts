import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const {tooltip} = deepDefaults(theme, {
    tooltip: {
        padding: '8px 12px',
        get color() { return theme.color.text },
        bgColor: '#fff',
        lineHeight: 1.4,
        maxWidth: '300px',

        // arrow
        arrow: {
            borderColor: 'rgba(191, 191, 191, .5)',
            width: '8px',
        },

        // confirm
        comfirm: {
            gaps: '8px',
        },

        // dark
        dark: {
            get bgColor() { return theme.color.text },
            color: '#fff',
            get arrowBorderColor() { return theme.color.text },
        },

        smallPadding: '4px',
    } 
});

export {tooltip};

export default function makeStyles() {
    // use &.k-tooltip-content to override css in dropdown menu
    return css`
        &.k-tooltip-content {
            max-width: ${tooltip.maxWidth};
            min-width: 0;
            padding: ${tooltip.padding};
            line-height: ${tooltip.lineHeight};
            word-wrap: break-word;

            // arrow
        }
    `
}
