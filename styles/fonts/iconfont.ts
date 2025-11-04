import {injectGlobal} from '@emotion/css';
import eot from './iconfont.eot';
import woff from './iconfont.woff';
import ttf from './iconfont.ttf';
import svg from './iconfont.svg';
import woff2 from './iconfont.woff2';
import { cache } from '../../components/utils';

export const makeIconStyles = cache(function _makeIconStyles(k: string) {
    injectGlobal`
        @font-face {
          font-family: "kd-font";
          src: url('${eot}'); /* IE9 */
          src: url('${eot}#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('${woff2}') format('woff2'),
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

        .${k}-icon-history:before {
          content: "\\e9cb";
        }

        .${k}-icon-correlation:before {
          content: "\\e9c3";
        }

        .${k}-icon-webui:before {
          content: "\\e9c4";
        }

        .${k}-icon-log:before {
          content: "\\e9c5";
        }

        .${k}-icon-save:before {
          content: "\\e9c6";
        }

        .${k}-icon-memory:before {
          content: "\\e9c7";
        }

        .${k}-icon-Physicalport:before {
          content: "\\e9c8";
        }

        .${k}-icon-queue:before {
          content: "\\e9c9";
        }

        .${k}-icon-channel:before {
          content: "\\e9ca";
        }

        .${k}-icon-cpu:before {
          content: "\\e9be";
        }

        .${k}-icon-change:before {
          content: "\\e9bf";
        }

        .${k}-icon-subnet:before {
          content: "\\e9c0";
        }

        .${k}-icon-batchsearch1:before {
          content: "\\e9c1";
        }

        .${k}-icon-listener:before {
          content: "\\e9c2";
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
