import {injectGlobal, css} from '@emotion/css';
import {theme} from './theme';

const slideDirections = {
    down: 'center top 0',
    up: 'center bottom 0',
    left: 'right center 0',
    right: 'left center 0',
};

// TODO: update global when theme changed
injectGlobal`
    html {
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,SF Pro SC,SF Pro Text,Helvetica Neue,Helvetica,PingFang SC,Segoe UI,Roboto,Hiragino Sans GB,arial,microsoft yahei ui,Microsoft YaHei,SimSun,sans-serif;
    }
    body {
        font-size: ${theme.fontSize};
        line-height: ${theme.lineHeight};
        margin: 0;
        padding: 0;
        color: ${theme.color.text};
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
    .k-fade-enter-from,
    .k-fade-leave-to {
        opacity: 0 !important;
    }
    .k-fade-enter-active,
    .k-fade-leave-active {
        transition: opacity ${theme.transition};
    }
    .k-fade-leave-active {
        position: absolute;
    }
    .k-fade-move {
        transition: transform ${theme.transition};
    }

    .k-scale-enter-from,
    .k-scale-leave-to {
        transform: scale(0);
    }
    .k-scale-enter-active,
    .k-scale-leave-active {
        transition: transform ${theme.transition};
    }

    .k-expand-enter-from,
    .k-expand-leave-to {
        opacity: 0;
        overflow: hidden;
    }
    .k-expand-enter-active,
    .k-expand-leave-active {
        transition: all ${theme.transition};
        overflow: hidden;
    }
    .k-expand-move {
        transition: transform ${theme.transition};
    }

    .c-ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
