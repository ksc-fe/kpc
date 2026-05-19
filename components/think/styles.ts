import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import {cache} from '../utils';

const defaults = {
    color: theme.color.text,
    titleColor: theme.color.lightBlack,
    titleFontSize: '12px',
    extraColor: theme.color.placeholder,
    lineColor: '#D0D9D9',
    contentColor: theme.color.lightBlack,
    contentBorderRadius: '10px',
    iconColor: theme.color.primary,
};

let think: typeof defaults;
setDefault(() => {
    think = deepDefaults(theme, {think: defaults}).think;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        /* 与 CollapseItem 一致；min-height:0 便于外层（如文档示例 flex 布局）下整体高度随内容收起 */
        display: block;
        width: 100%;
        min-height: 0;
        color: ${think.color};

        /*
         * 与 k-expand 对齐：仅对 wrapper 限制只过渡 height，
         * 同时确保 leave-active 阶段 opacity 始终为 1，
         * 避免全局 k-expand 的 opacity 过渡与 JS 改 height 不同步造成顿挫。
         */
        & .${k}-think-wrapper.k-expand-enter-from,
        & .${k}-think-wrapper.k-expand-leave-to,
        & .${k}-think-wrapper.k-expand-enter-active,
        & .${k}-think-wrapper.k-expand-leave-active {
            opacity: 1 !important;
            transition: height ${theme.transition.large} !important;
        }

        .${k}-think-status {
            display: flex;
            align-items: center;
            gap: 8px;
            width: 100%;
            padding: 0;
            border: 0;
            background: transparent;
            color: inherit;
            cursor: pointer;
            text-align: left;
        }

        .${k}-think-status-main,
        .${k}-think-status-side {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            min-width: 0;
        }

        .${k}-think-icon {
            color: ${think.iconColor};
            line-height: 1;
            flex: 0 0 auto;
        }

        .${k}-think-title {
            color: ${think.titleColor};
            font-size: ${think.titleFontSize};
            font-weight: 400;
            min-width: 0;
            line-height: 1.5;
        }

        .${k}-think-extra {
            color: ${think.extraColor};
            font-size: 12px;
            line-height: 1.5;
        }

        .${k}-think-arrow {
            transition: transform ${theme.transition.small};
            color: ${think.extraColor};
            flex: 0 0 auto;
        }

        .${k}-think-wrapper {
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        .${k}-think-content {
            position: relative;
            margin-top: 8px;
            margin-left: 7px;
            padding-left: 16px;
            /*
             * 左侧引导线：上/下三角 + 中间分段竖线
             * 视觉规格对齐设计稿（原始稿为 16x108 的引导线）
             */
            background-image: repeating-linear-gradient(
                to bottom,
                ${think.lineColor} 0 3.86px,
                transparent 3.86px 7.72px
            );
            background-repeat: no-repeat;
            background-size: 1px calc(100% - 12px);
            /* 1px 竖线宽度需要计入：左边界 0px 时，中心线在 0.5px */
            background-position: 0 6px;
            color: ${think.contentColor};
            font-size: 13px;
            line-height: 1.7;
            white-space: pre-wrap;
            word-break: break-word;
            overflow-wrap: anywhere;

            &::before,
            &::after {
                content: '';
                position: absolute;
                /* 几何对齐：端点图形中心与 1px 竖线中心（0.5px）重合 */
                left: 0.5px;
                width: 6px;
                height: 5px;
                background: ${think.lineColor};
                transform: translateX(-50%);
            }

            /* 顶部梯形（底边 1px，与竖线无缝连接） */
            &::before {
                top: 0;
                clip-path: polygon(0 0, 100% 0, 58.333% 100%, 41.667% 100%);
            }

            /* 底部梯形（顶边 1px，与竖线无缝连接） */
            &::after {
                bottom: 0;
                clip-path: polygon(41.667% 0, 58.333% 0, 100% 100%, 0 100%);
            }
        }

        .${k}-think-text {
            border-radius: ${think.contentBorderRadius};
        }

        &.${k}-think-expanded .${k}-think-arrow {
            transform: rotate(90deg);
        }

        &.${k}-think-blink .${k}-think-title {
            animation: ${k}-think-blink 1.2s ease-in-out infinite;
        }

        @keyframes ${k}-think-blink {
            0%, 100% {
                opacity: 1;
            }

            50% {
                opacity: 0.56;
            }
        }
    `;
});
