import {css, cx} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults}  from '../../styles/utils';
import '../../styles/global';

const {step} = deepDefaults(theme, {
    step: {
        // head
        head: {
            innerWidth: '16px',
            get innerBorder() { return `1px solid ${theme.color.placeholder}` },
            iconFontSize: '24px',
            paddingRight: '10px',
        },

        main: {
            get color() { return theme.color.text }, 
            get titlePaddingRight() { return step.head.paddingRight },
            contentFontSize: '12px',
        },
    },
});

export {step};

export default function makeStyles() {
    return css`
        position: relative; 
        flex: 1;
        .k-step-icon:before {
            font-size: ${step.head.iconFontSize};
        }
        .k-step-title {
            display: inline-block;
            padding-right: ${step.main.titlePaddingRight};
            white-space: nowrap;
        }
        .k-step-content {
            font-size: ${step.main.contentFontSize};
            white-space: nowrap;
        }
        .k-step-inner,
        .k-step-main {
            transition: all ${theme.transition};
        }
    `;
}