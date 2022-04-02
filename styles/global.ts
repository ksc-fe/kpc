import {injectGlobal, css} from '@emotion/css';
import {theme} from './theme';
import {palette}  from '../styles/utils';

const slideDirections = {
    down: 'center top 0',
    up: 'center bottom 0',
    left: 'right center 0',
    right: 'left center 0',
};

// TODO: update global when theme changed
injectGlobal`
    html {
        --var-wave-color: ${theme.color.primary};
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
                transition: opacity ${theme.transition.large}, transform ${theme.transition.large} !important;
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
        transition: opacity ${theme.transition.large};
    }
    .k-fade-leave-active:not(tr) {
        position: absolute;
    }
    .k-fade-move {
        transition: transform ${theme.transition.large};
    }

    .k-scale-enter-from,
    .k-scale-leave-to {
        transform: scale(0);
    }
    .k-scale-enter-active,
    .k-scale-leave-active {
        transition: transform ${theme.transition.large};
    }

    .k-expand-enter-from,
    .k-expand-leave-to {
        opacity: 0;
        overflow: hidden;
    }
    .k-expand-enter-active,
    .k-expand-leave-active {
        transition: all ${theme.transition.large} !important;
        overflow: hidden;
    }
    .k-expand-move {
        transition: transform ${theme.transition.large};
    }

    .k-dropdown-enter-from,
    .k-dropdown-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
    .k-dropdown-enter-active,
    .k-dropdown-leave-active,
    .k-dropdown-move {
        transition: all ${theme.transition.large};
    }
    .k-dropdown-leave-active {
        position: absolute !important;
    }
    .k-dropdown-move {
        transition: transform ${theme.transition.large};
    }

    .k-fade-in-left-enter-from,
    .k-fade-in-left-leave-to {
        opacity: 0;
        transform: translate3d(-15px, 0, 0);
    }
    .k-fade-in-left-enter-active,
    .k-fade-in-left-leave-active {
        transition: all ${theme.transition.large};
        td {
            background: ${palette(theme.color.primary, -4)} !important;
        }
    }
    .k-fade-in-left-move {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    .k-fade-expand-enter-from,
    .k-fade-expand-leave-to {
        opacity: 0;
    }
    .k-fade-expand-enter-active,
    .k-fade-expand-leave-active {
        transition: all ${theme.transition.large};  
        background: ${palette(theme.color.primary, -4)} !important;
    }
    .k-fade-expand-move {
        opacity: 1;
    }

    .c-ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .c-hidden {
        display: none;
    }
    .c-middle {
        display: inline-block;
        vertical-align: middle;
    }
`;
