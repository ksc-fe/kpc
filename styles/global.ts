import {injectGlobal} from '@emotion/css';

injectGlobal`
    html {
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,SF Pro SC,SF Pro Text,Helvetica Neue,Helvetica,PingFang SC,Segoe UI,Roboto,Hiragino Sans GB,arial,microsoft yahei ui,Microsoft YaHei,SimSun,sans-serif;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
`;
