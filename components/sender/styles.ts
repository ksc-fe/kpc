import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import {cache} from '../utils';

// 用于复用的渐变色：默认态半透明，hover/active 实色，与设计稿一致。
const SENDER_GRADIENT_DEFAULT =
    'linear-gradient(101.07deg, rgba(0, 221, 221, 0.5) -7.07%, rgba(83, 112, 255, 0.5) 48.92%, rgba(113, 47, 255, 0.5) 104.92%)';
const SENDER_GRADIENT_ACTIVE =
    'linear-gradient(101.07deg, #00DDDD -7.07%, #5370FF 48.92%, #712FFF 104.92%)';

const defaults = {
    radius: '12px',
    // 输入框外框（k-sender-shell）统一 12，区块间距在下方用 margin 控制
    padding: '12px',
    // 与 useAutoResize 中 SHELL_MAX_FALLBACK 一致
    shellMaxH: '300px',
    gapHeaderToShell: '4px',
    gapShellToFooter: '4px',
    // 区块间距：附件↔上插槽 8；附件/上插槽↔文字区 16；文字区↔工具条 8
    gapAttachToTop: '8px',
    gapTopToInput: '16px',
    gapInputToToolbar: '8px',
    bg: '#FFFFFF',
    color: theme.color.text,
    placeholderColor: theme.color.placeholder,
    disabledBg: theme.color.disabledBg,
    disabledColor: theme.color.disabled,
    fontSize: theme.fontSize,
    lineHeight: 1.5,
    gradientDefault: SENDER_GRADIENT_DEFAULT,
    gradientActive: SENDER_GRADIENT_ACTIVE,
    activeBackdropFilter: 'blur(4px)',
    activeShadow: [
        '0px 4px 6px -4px rgba(0, 0, 0, 0.102)',
        '3px -3px 16px -5px rgba(113, 47, 255, 0.102)',
        '-3px 3px 14px -4px rgba(83, 112, 255, 0.102)',
    ].join(', '),
    sendButtonSize: '32px',
    attachButtonSize: '16px',
    attachIconColor: '#868A9C',
    attachIconHoverColor: theme.color.primary,
    // type='image' 末尾的 + 框，尺寸和 FileCard image default 对齐
    imageAddSize: '64px',
    imageAddRadius: '6px',
    imageAddBg: '#FFFFFF',
    imageAddBorder: '1px dashed #E5E8EE',
    imageAddColor: '#868A9C',
    imageAddIconSize: '16px',
    imageAddTextFontSize: '12px',
    imageAddIconToTextGap: '8px',
    dragMaskBg: 'rgba(255, 255, 255, 0.72)',
    dragCardColor: '#5370FF',
    dragCardTextColor: theme.color.text,
    // 与 FileCardList 一致的滚动条样式
    scrollbarThumb: 'rgba(63, 68, 81, 0.26)',
    scrollbarThumbHover: 'rgba(63, 68, 81, 0.42)',
};

let sender: typeof defaults;
setDefault(() => {
    sender = deepDefaults(theme, {sender: defaults}).sender;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;

        .${k}-sender-header,
        .${k}-sender-footer {
            box-sizing: border-box;
            flex: 0 0 auto;
        }

        .${k}-sender-header {
            margin-bottom: ${sender.gapHeaderToShell};
        }

        .${k}-sender-footer {
            margin-top: ${sender.gapShellToFooter};
        }

        .${k}-sender-shell {
            position: relative;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            max-height: ${sender.shellMaxH};
            padding: ${sender.padding};
            background: ${sender.bg};
            border-radius: ${sender.radius};
            transition: background ${theme.transition.middle}, box-shadow ${theme.transition.middle};
            min-width: 0;
            overflow: hidden;
        }

        // 渐变 border：使用 ::before + mask-composite 抠出 1px 圈，与 border-radius 兼容
        .${k}-sender-shell::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            border-radius: inherit;
            background: ${sender.gradientDefault};
            -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            mask-composite: exclude;
            pointer-events: none;
            transition: background ${theme.transition.middle}, opacity ${theme.transition.middle};
        }

        .${k}-sender-shell:hover::before,
        .${k}-sender-shell.${k}-sender-active::before {
            background: ${sender.gradientActive};
        }

        .${k}-sender-shell.${k}-sender-active {
            backdrop-filter: ${sender.activeBackdropFilter};
            -webkit-backdrop-filter: ${sender.activeBackdropFilter};
            box-shadow: ${sender.activeShadow};
        }

        &.${k}-sender-disabled .${k}-sender-shell::before {
            opacity: 0.5;
        }

        &.${k}-sender-disabled .${k}-sender-shell {
            background: ${sender.disabledBg};
        }

        // 附件区本身不带默认下边距，按后续相邻块决定间距
        .${k}-sender-attachments {
            padding: 0;
            box-sizing: border-box;
            min-width: 0;
            flex: 0 0 auto;
        }

        // type='image' 模式下的横向附件区，把 FileCardList 强制成 nowrap 横向布局；
        // 视觉上不希望折行，缩略图溢出时由 FileCardList 自己滚动。
        .${k}-sender-attachments-image .${k}-file-card-list {
            min-width: 0;
        }

        // 上插槽与文字输入区间隔 16
        .${k}-sender-before-input {
            margin-bottom: ${sender.gapTopToInput};
            padding: 0;
            box-sizing: border-box;
            flex: 0 0 auto;
        }

        // 有上插槽时：附件 -> 上插槽 8，上插槽 -> 输入区 16
        .${k}-sender-attachments + .${k}-sender-before-input {
            margin-top: ${sender.gapAttachToTop};
        }

        // 无上插槽时：附件 -> 输入区 16
        .${k}-sender-attachments + .${k}-sender-input-area {
            margin-top: ${sender.gapTopToInput};
        }

        // 文字区与工具条间隔 8；高度只由内部 textarea 撑开
        .${k}-sender-input-area {
            position: relative;
            display: flex;
            flex: 0 0 auto;
            min-height: 0;
            margin-bottom: ${sender.gapInputToToolbar};
            padding: 0;
            box-sizing: border-box;
        }

        .${k}-sender-input {
            flex: 1 1 auto;
            width: 100%;
            min-width: 0;
            min-height: 0;
            border: none;
            outline: none;
            resize: none;
            background: transparent;
            color: ${sender.color};
            font-family: inherit;
            font-size: ${sender.fontSize};
            line-height: ${sender.lineHeight};
            padding: 0;
            // 与 FileCardList scrollbar 视觉一致：默认隐藏，hover 时浮现细滑动条
            scrollbar-width: thin;
            scrollbar-color: transparent transparent;
        }

        .${k}-sender-input::-webkit-scrollbar {
            width: 8px;
        }

        .${k}-sender-input::-webkit-scrollbar-track {
            background: transparent;
        }

        .${k}-sender-input::-webkit-scrollbar-thumb {
            border-radius: 999px;
            border: 2px solid transparent;
            background: transparent;
            background-clip: content-box;
        }

        .${k}-sender-input:hover {
            scrollbar-color: ${sender.scrollbarThumb} transparent;
        }

        .${k}-sender-input:hover::-webkit-scrollbar-thumb {
            background: ${sender.scrollbarThumb};
            background-clip: content-box;
        }

        .${k}-sender-input:hover::-webkit-scrollbar-thumb:hover {
            background: ${sender.scrollbarThumbHover};
            background-clip: content-box;
        }

        .${k}-sender-input::placeholder {
            color: ${sender.placeholderColor};
        }

        &.${k}-sender-disabled .${k}-sender-input {
            color: ${sender.disabledColor};
            cursor: not-allowed;
        }

        .${k}-sender-toolbar {
            display: flex;
            gap: 8px;
            padding: 0;
            box-sizing: border-box;
            flex: 0 0 auto;
        }

        .${k}-sender-toolbar-left {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 8px;
            flex: 0 0 auto;
        }

        // 无 configure 时中间列不存在，仅靠 flex 顺序会让发送与附件「挤在一起」；
        // 右列用 margin-left: auto 始终贴住工具栏右缘，有中间列时仍与 flex:1 的中间区正确配合。
        .${k}-sender-toolbar-right {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;
            margin-left: auto;
        }

        // 中间扩展区（configure）撑满剩余空间，业务自己控制内部排版
        .${k}-sender-toolbar-middle {
            flex: 1 1 auto;
            min-width: 0;
            display: flex;
            align-items: flex-end;
            gap: 8px;
        }

        // 附件按钮：默认灰色 stroke，hover 时变蓝
        .${k}-sender-attach-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: ${sender.attachButtonSize};
            height: ${sender.attachButtonSize};
            border-radius: 50%;
            background: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
            color: ${sender.attachIconColor};
            transition: color ${theme.transition.small}, background ${theme.transition.small};
        }

        .${k}-sender-attach-btn:hover {
            color: ${sender.attachIconHoverColor};
            // background: ${theme.color.hoverBg};
        }

        .${k}-sender-attach-btn:disabled,
        &.${k}-sender-disabled .${k}-sender-attach-btn {
            color: ${theme.color.disabled};
            cursor: not-allowed;
            background: transparent;
        }

        .${k}-sender-attach-btn svg {
            display: block;
        }

        // 发送 / 停止按钮：32×32 与 icons 中 viewBox 一致；阴影在 CSS，避免 48 画板 + 负 margin 缩放错位
        .${k}-sender-send-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: ${sender.sendButtonSize};
            height: ${sender.sendButtonSize};
            background: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: filter ${theme.transition.small};
        }

        .${k}-sender-send-btn:disabled {
            cursor: not-allowed;
            filter: opacity(0.5);
        }

        .${k}-sender-send-btn:not(:disabled):hover {
            filter: opacity(0.85);
        }

        .${k}-sender-send-icon {
            display: block;
            width: 32px;
            height: 32px;
            pointer-events: none;
            // 对应原 SVG feOffset+feGaussianBlur 的轻量投影，不撑大布局
            filter: drop-shadow(0 4px 8px rgba(83, 112, 255, 0.32));
        }

        // type='image' 末尾的虚线 + 框：加号与文案作为一组垂直居中
        .${k}-sender-image-add {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: ${sender.imageAddIconToTextGap};
            width: ${sender.imageAddSize};
            height: ${sender.imageAddSize};
            box-sizing: border-box;
            flex: 0 0 auto;
            padding: 0;
            border-radius: ${sender.imageAddRadius};
            border: ${sender.imageAddBorder};
            background: ${sender.imageAddBg};
            color: ${sender.imageAddColor};
            cursor: pointer;
            transition: border-color ${theme.transition.small}, color ${theme.transition.small};
        }

        .${k}-sender-image-add .${k}-icon {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: ${sender.imageAddIconSize};
            height: ${sender.imageAddIconSize};
            color: inherit;
            font-size: ${sender.imageAddIconSize};
            line-height: 1;
            transition: color ${theme.transition.small};
        }

        .${k}-sender-image-add-text {
            flex: 0 0 auto;
            font-size: ${sender.imageAddTextFontSize};
            line-height: 1;
            color: inherit;
            transition: color ${theme.transition.small};
        }

        .${k}-sender-image-add:hover {
            border-color: ${theme.color.primary};
            color: ${theme.color.primary};
        }

        .${k}-sender-image-add:hover .${k}-icon,
        .${k}-sender-image-add:hover .${k}-sender-image-add-text {
            color: inherit;
        }

        .${k}-sender-image-add-disabled,
        .${k}-sender-image-add-disabled:hover {
            cursor: not-allowed;
            border-color: ${theme.color.border};
            color: ${theme.color.disabled};
        }

        .${k}-sender-file-input {
            position: absolute;
            width: 1px;
            height: 1px;
            opacity: 0;
            pointer-events: none;
            top: -9999px;
            left: -9999px;
        }

        .${k}-sender-drag-mask {
            position: fixed;
            inset: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            box-sizing: border-box;
            background: ${sender.dragMaskBg};
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
        }

        .${k}-sender-drag-card {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 18px;
            color: ${sender.dragCardColor};
        }

        .${k}-sender-drag-card .${k}-icon {
            color: ${sender.dragCardColor};
            font-size: 32px;
            line-height: 1;
        }

        .${k}-sender-drag-text {
            color: ${sender.dragCardTextColor};
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
        }
    `;
});
