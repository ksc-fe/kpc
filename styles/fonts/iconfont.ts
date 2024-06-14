import {injectGlobal} from '@emotion/css';
import eot from './iconfont.eot';
import woff from './iconfont.woff';
import ttf from './iconfont.ttf';
import svg from './iconfont.svg';
import { cache } from '../../components/utils';

export const makeIconStyles = cache(function _makeIconStyles(k: string) {
    injectGlobal`
        @font-face {
          font-family: "kd-font";
          src: url('${eot}'); /* IE9 */
          src: url('${eot}#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
          url('${woff}') format('woff'),
          url('${ttf}') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
          url('${svg}#kpc-font') format('svg'); /* iOS 4.1- */
        }

        .${k}-icon {
          font-family: "kd-font" !important;
          // font-size: 16px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .${k}-icon-heart-fill:before {
          content: "\\e9ba";
        }

        .${k}-icon-notification-fill:before {
          content: "\\e9b9";
        }

        .${k}-icon-share:before {
          content: "\\e9b8";
        }

        .${k}-icon-tag:before {
          content: "\\e9b7";
        }

        .${k}-icon-clone:before {
          content: "\\e9b6";
        }

        .${k}-icon-information-fill:before {
          content: "\\e9b1";
        }

        .${k}-icon-warning-fill:before {
          content: "\\e9b2";
        }

        .${k}-icon-success-fill:before {
          content: "\\e9b3";
        }

        .${k}-icon-error-fill:before {
          content: "\\e9b4";
        }

        .${k}-icon-question-fill:before {
          content: "\\e9b5";
        }

        .${k}-icon-information:before {
          content: "\\e9b0";
        }

        .${k}-icon-cloud:before {
          content: "\\e9ac";
        }

        .${k}-icon-pin:before {
          content: "\\e9ad";
        }

        .${k}-icon-home:before {
          content: "\\e9ae";
        }

        .${k}-icon-cut:before {
          content: "\\e9af";
        }

        .${k}-icon-server:before {
          content: "\\e99a";
        }

        .${k}-icon-internet:before {
          content: "\\e99b";
        }

        .${k}-icon-mail:before {
          content: "\\e99c";
        }

        .${k}-icon-paper:before {
          content: "\\e99d";
        }

        .${k}-icon-phone:before {
          content: "\\e99e";
        }

        .${k}-icon-panel:before {
          content: "\\e99f";
        }

        .${k}-icon-alarm:before {
          content: "\\e9a0";
        }

        .${k}-icon-notification:before {
          content: "\\e9a1";
        }

        .${k}-icon-earphone:before {
          content: "\\e9a2";
        }

        .${k}-icon-settings-horizontal:before {
          content: "\\e9a3";
        }

        .${k}-icon-message:before {
          content: "\\e9a4";
        }

        .${k}-icon-heart:before {
          content: "\\e9a5";
        }

        .${k}-icon-return-right:before {
          content: "\\e9a6";
        }

        .${k}-icon-picture:before {
          content: "\\e9a7";
        }

        .${k}-icon-logout:before {
          content: "\\e9a8";
        }

        .${k}-icon-all:before {
          content: "\\e9a9";
        }

        .${k}-icon-drag:before {
          content: "\\e9aa";
        }

        .${k}-icon-settings-vertical:before {
          content: "\\e9ab";
        }

        .${k}-icon-more:before {
          content: "\\e97d";
        }

        .${k}-icon-more-circled:before {
          content: "\\e988";
        }

        .${k}-icon-folder:before {
          content: "\\e994";
        }

        .${k}-icon-unlock:before {
          content: "\\e995";
        }

        .${k}-icon-user:before {
          content: "\\e996";
        }

        .${k}-icon-folder-open:before {
          content: "\\e997";
        }

        .${k}-icon-lock:before {
          content: "\\e998";
        }

        .${k}-icon-users:before {
          content: "\\e999";
        }

        .${k}-icon-edit:before {
          content: "\\e98e";
        }

        .${k}-icon-location:before {
          content: "\\e98f";
        }

        .${k}-icon-delete:before {
          content: "\\e990";
        }

        .${k}-icon-settings:before {
          content: "\\e992";
        }

        .${k}-icon-calendar:before {
          content: "\\e993";
        }

        .${k}-icon-search:before {
          content: "\\e97e";
        }

        .${k}-icon-alert:before {
          content: "\\e97f";
        }

        .${k}-icon-question:before {
          content: "\\e980";
        }

        .${k}-icon-zoom-in:before {
          content: "\\e981";
        }

        .${k}-icon-zoom-out:before {
          content: "\\e982";
        }

        .${k}-icon-close-outline:before {
          content: "\\e983";
        }

        .${k}-icon-check-outline:before {
          content: "\\e984";
        }

        .${k}-icon-hidden:before {
          content: "\\e985";
        }

        .${k}-icon-visible:before {
          content: "\\e986";
        }

        .${k}-icon-time:before {
          content: "\\e987";
        }

        .${k}-icon-refresh:before {
          content: "\\e989";
        }

        .${k}-icon-batchsearch:before {
          content: "\\e98a";
        }

        .${k}-icon-upload:before {
          content: "\\e98c";
        }

        .${k}-icon-download:before {
          content: "\\e98d";
        }

        .${k}-icon-left-squared:before {
          content: "\\e975";
        }

        .${k}-icon-right-squared:before {
          content: "\\e976";
        }

        .${k}-icon-down-squared:before {
          content: "\\e977";
        }

        .${k}-icon-up-squared:before {
          content: "\\e978";
        }

        .${k}-icon-right-circled:before {
          content: "\\e979";
        }

        .${k}-icon-down-circled:before {
          content: "\\e97a";
        }

        .${k}-icon-left-circled:before {
          content: "\\e97b";
        }

        .${k}-icon-up-circled:before {
          content: "\\e97c";
        }

        .${k}-icon-up-bold:before {
          content: "\\e962";
        }

        .${k}-icon-left-bold:before {
          content: "\\e963";
        }

        .${k}-icon-down:before {
          content: "\\e964";
        }

        .${k}-icon-right-bold:before {
          content: "\\e965";
        }

        .${k}-icon-right:before {
          content: "\\e966";
        }

        .${k}-icon-left:before {
          content: "\\e968";
        }

        .${k}-icon-up:before {
          content: "\\e969";
        }

        .${k}-icon-down-bold:before {
          content: "\\e96a";
        }

        .${k}-icon-sort:before {
          content: "\\e96b";
        }

        .${k}-icon-sort-bold:before {
          content: "\\e96c";
        }

        .${k}-icon-check:before {
          content: "\\e96d";
        }

        .${k}-icon-check-bold:before {
          content: "\\e96e";
        }

        .${k}-icon-close-bold:before {
          content: "\\e96f";
        }

        .${k}-icon-add:before {
          content: "\\e970";
        }

        .${k}-icon-minus-bold:before {
          content: "\\e971";
        }

        .${k}-icon-close:before {
          content: "\\e972";
        }

        .${k}-icon-minus:before {
          content: "\\e973";
        }

        .${k}-icon-add-bold:before {
          content: "\\e974";
        }

        .${k}-icon-start:before {
          content: "\\e9bb";
        }

        .${k}-icon-stop:before {
          content: "\\e9bd";
        }

        .${k}-icon-sortorder:before {
          content: "\\e9bc";
        }
    `;
});
