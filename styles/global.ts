import {injectGlobal} from '@emotion/css';
import {theme} from './theme';

injectGlobal`
    html {
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,SF Pro SC,SF Pro Text,Helvetica Neue,Helvetica,PingFang SC,Segoe UI,Roboto,Hiragino Sans GB,arial,microsoft yahei ui,Microsoft YaHei,SimSun,sans-serif;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    // animation
    .k-slidedown-enter-from,
    .k-slidedown-leave-to {
        transform-origin: center top 0;
        opacity: 0;
        transform: scaleY(.8);
    }
    .k-slidedown-enter-active,
    .k-slidedown-leave-active {
        transform-origin: center top 0;
        transition: opacity ${theme.transition}, transform ${theme.transition};
        pointer-events: none;
    }
`;
