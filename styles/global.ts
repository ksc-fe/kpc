import {injectGlobal, css} from '@emotion/css';
import {theme} from './theme';

const slideDirections = {
    down: 'center top 0',
    up: 'center bottom 0',
    left: 'right center 0',
    right: 'left center 0',
};

injectGlobal`
    html {
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,SF Pro SC,SF Pro Text,Helvetica Neue,Helvetica,PingFang SC,Segoe UI,Roboto,Hiragino Sans GB,arial,microsoft yahei ui,Microsoft YaHei,SimSun,sans-serif;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    // animation
    ${Object.keys(slideDirections).map(direction => {
        return `
            .k-slide${direction}-enter-from,
            .k-slide${direction}-leave-to {
                transform-origin: ${slideDirections[direction as keyof typeof slideDirections]};
                opacity: 0;
                transform: ${direction === 'down' || direction === 'up' ? `scaleY(.8)` : 'scaleX(.8)'};
            }
            .k-slide${direction}-enter-active,
            .k-slide${direction}-leave-active {
                transform-origin: ${slideDirections[direction as keyof typeof slideDirections]};
                transition: opacity ${theme.transition}, transform ${theme.transition};
                pointer-events: none;
            }
        `
    }).join('')}
`;
