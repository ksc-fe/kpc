import {injectGlobal} from '@emotion/css';
import eot from './iconfont.eot';
import woff from './iconfont.woff';
import ttf from './iconfont.ttf';
import svg from './iconfont.svg';

injectGlobal`
    @font-face {
      font-family: "kpc-font";
      src: url('${eot}'); /* IE9 */
      src: url('${eot}#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
      url('${woff}') format('woff'),
      url('${ttf}') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('${svg}#kpc-font') format('svg'); /* iOS 4.1- */
    }

    .k-icon {
      font-family: "kpc-font" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .k-icon-heart-fill:before {
      content: "\\e9ba";
    }

    .k-icon-notification-fill:before {
      content: "\\e9b9";
    }

    .k-icon-share:before {
      content: "\\e9b8";
    }

    .k-icon-tag:before {
      content: "\\e9b7";
    }

    .k-icon-clone:before {
      content: "\\e9b6";
    }

    .k-icon-information-fill:before {
      content: "\\e9b1";
    }

    .k-icon-warning-fill:before {
      content: "\\e9b2";
    }

    .k-icon-success-fill:before {
      content: "\\e9b3";
    }

    .k-icon-error-fill:before {
      content: "\\e9b4";
    }

    .k-icon-question-fill:before {
      content: "\\e9b5";
    }

    .k-icon-information:before {
      content: "\\e9b0";
    }

    .k-icon-cloud:before {
      content: "\\e9ac";
    }

    .k-icon-pin:before {
      content: "\\e9ad";
    }

    .k-icon-home:before {
      content: "\\e9ae";
    }

    .k-icon-cut:before {
      content: "\\e9af";
    }

    .k-icon-server:before {
      content: "\\e99a";
    }

    .k-icon-internet:before {
      content: "\\e99b";
    }

    .k-icon-mail:before {
      content: "\\e99c";
    }

    .k-icon-paper:before {
      content: "\\e99d";
    }

    .k-icon-phone:before {
      content: "\\e99e";
    }

    .k-icon-panel:before {
      content: "\\e99f";
    }

    .k-icon-alarm:before {
      content: "\\e9a0";
    }

    .k-icon-notification:before {
      content: "\\e9a1";
    }

    .k-icon-earphone:before {
      content: "\\e9a2";
    }

    .k-icon-settings-horizontal:before {
      content: "\\e9a3";
    }

    .k-icon-message:before {
      content: "\\e9a4";
    }

    .k-icon-heart:before {
      content: "\\e9a5";
    }

    .k-icon-return-right:before {
      content: "\\e9a6";
    }

    .k-icon-picture:before {
      content: "\\e9a7";
    }

    .k-icon-logout:before {
      content: "\\e9a8";
    }

    .k-icon-all:before {
      content: "\\e9a9";
    }

    .k-icon-drag:before {
      content: "\\e9aa";
    }

    .k-icon-settings-vertical:before {
      content: "\\e9ab";
    }

    .k-icon-more:before {
      content: "\\e97d";
    }

    .k-icon-more-circled:before {
      content: "\\e988";
    }

    .k-icon-folder:before {
      content: "\\e994";
    }

    .k-icon-unlock:before {
      content: "\\e995";
    }

    .k-icon-user:before {
      content: "\\e996";
    }

    .k-icon-folder-open:before {
      content: "\\e997";
    }

    .k-icon-lock:before {
      content: "\\e998";
    }

    .k-icon-users:before {
      content: "\\e999";
    }

    .k-icon-edit:before {
      content: "\\e98e";
    }

    .k-icon-location:before {
      content: "\\e98f";
    }

    .k-icon-delete:before {
      content: "\\e990";
    }

    .k-icon-settings:before {
      content: "\\e992";
    }

    .k-icon-calendar:before {
      content: "\\e993";
    }

    .k-icon-search:before {
      content: "\\e97e";
    }

    .k-icon-alert:before {
      content: "\\e97f";
    }

    .k-icon-question:before {
      content: "\\e980";
    }

    .k-icon-zoom-in:before {
      content: "\\e981";
    }

    .k-icon-zoom-out:before {
      content: "\\e982";
    }

    .k-icon-close-outline:before {
      content: "\\e983";
    }

    .k-icon-check-outline:before {
      content: "\\e984";
    }

    .k-icon-hidden:before {
      content: "\\e985";
    }

    .k-icon-visible:before {
      content: "\\e986";
    }

    .k-icon-time:before {
      content: "\\e987";
    }

    .k-icon-refresh:before {
      content: "\\e989";
    }

    .k-icon-batchsearch:before {
      content: "\\e98a";
    }

    .k-icon-upload:before {
      content: "\\e98c";
    }

    .k-icon-download:before {
      content: "\\e98d";
    }

    .k-icon-left-squared:before {
      content: "\\e975";
    }

    .k-icon-right-squared:before {
      content: "\\e976";
    }

    .k-icon-down-squared:before {
      content: "\\e977";
    }

    .k-icon-up-squared:before {
      content: "\\e978";
    }

    .k-icon-right-circled:before {
      content: "\\e979";
    }

    .k-icon-down-circled:before {
      content: "\\e97a";
    }

    .k-icon-left-circled:before {
      content: "\\e97b";
    }

    .k-icon-up-circled:before {
      content: "\\e97c";
    }

    .k-icon-up-bold:before {
      content: "\\e962";
    }

    .k-icon-left-bold:before {
      content: "\\e963";
    }

    .k-icon-down:before {
      content: "\\e964";
    }

    .k-icon-right-bold:before {
      content: "\\e965";
    }

    .k-icon-right:before {
      content: "\\e966";
    }

    .k-icon-left:before {
      content: "\\e968";
    }

    .k-icon-up:before {
      content: "\\e969";
    }

    .k-icon-down-bold:before {
      content: "\\e96a";
    }

    .k-icon-sort:before {
      content: "\\e96b";
    }

    .k-icon-sort-bold:before {
      content: "\\e96c";
    }

    .k-icon-check:before {
      content: "\\e96d";
    }

    .k-icon-check-bold:before {
      content: "\\e96e";
    }

    .k-icon-close-bold:before {
      content: "\\e96f";
    }

    .k-icon-add:before {
      content: "\\e970";
    }

    .k-icon-minus-bold:before {
      content: "\\e971";
    }

    .k-icon-close:before {
      content: "\\e972";
    }

    .k-icon-minus:before {
      content: "\\e973";
    }

    .k-icon-add-bold:before {
      content: "\\e974";
    }
`;

