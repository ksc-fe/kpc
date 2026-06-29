import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, setAlpha} from '../../styles/utils';
import '../../styles/global';
import {cache} from '../utils';

const defaults = {
    color: theme.color.text,
    headingColor: theme.color.title,
    mutedColor: theme.color.lightBlack,
    borderColor: theme.color.border,
    inlineCodeBg: '#f7f7f7',
    inlineCodeColor: '#666',
    codeBlockBg: '#ffffff',
    inlineCodeBorder: '#eee',
    codeBlockBorder: '#ebeef3',
    codeToolbarBg: '#f5f5f5',
    codeToolbarColor: '#161616',
    codeActionHoverBg: '#f3f4f6',
    codeActionColor: '#161616',
    codeTextColor: '#4b5563',
    codeCommentColor: '#9aa4b2',
    codeKeywordColor: '#ef6c00',
    codeStringColor: '#39b873',
    codeNumberColor: '#38a7ff',
    codeFunctionColor: '#4f566b',
    get loadingDotColor() { return theme.color.primary },
    loadingDotSize: '6px',
    blockquoteBg: '#f7fafc',
    blockquoteBorder: theme.color.primary,
    tableHeadBg: '#f7f9fb',
    hrColor: '#e8edf2',
    scrollbarThumb: '#c7d2e3',
    scrollbarThumbHover: '#afbdd3',
    mermaidBg: '#fff',
    mermaidCanvasBg: '#fff',
    mermaidErrorBg: '#fff3f3',
    mermaidErrorColor: theme.color.danger,
};

let xmarkdown: typeof defaults;
setDefault(() => {
    xmarkdown = deepDefaults(theme, {xmarkdown: defaults}).xmarkdown;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        display: block;
        color: ${xmarkdown.color};
        line-height: 1.7;
        font-size: 14px;
        min-width: 0;
        max-width: 100%;
        width: 100%;
        box-sizing: border-box;

        .${k}-xmarkdown-loading,
        .${k}-xmarkdown-empty {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${xmarkdown.mutedColor};
            min-height: 24px;
        }

        .${k}-xmarkdown-loading-dots {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            margin-right: 4px;
        }

        .${k}-xmarkdown-loading-dot {
            width: ${xmarkdown.loadingDotSize};
            height: ${xmarkdown.loadingDotSize};
            border-radius: 50%;
            background: ${xmarkdown.loadingDotColor};
            display: inline-block;
            animation: ${k}-xmarkdown-loading-bounce 1s ease-in-out infinite;
            opacity: 0.45;
        }

        .${k}-xmarkdown-loading-dot:nth-of-type(2) {
            animation-delay: 0.14s;
        }

        .${k}-xmarkdown-loading-dot:nth-of-type(3) {
            animation-delay: 0.28s;
        }

        @keyframes ${k}-xmarkdown-loading-bounce {
            0%, 80%, 100% {
                transform: translateY(0) scale(0.9);
                opacity: 0.45;
            }

            40% {
                transform: translateY(-4px) scale(1);
                opacity: 1;
            }
        }

        .${k}-xmarkdown-content {
            color: inherit;
            min-width: 0;
            max-width: 100%;
            overflow-wrap: anywhere;
            word-break: break-word;
        }

        .${k}-xmarkdown-content p {
            font-size: 12px;
        }

        .${k}-xmarkdown-content .${k}-xmarkdown-typing-suffix {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            width: 26px;
            height: 6px;
            margin-top: 8px;
            line-height: 0;
        }

        .${k}-xmarkdown-content .${k}-xmarkdown-typing-suffix span {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: radial-gradient(circle at center, #F8F9FA 0%, #D0D5D9 100%);
            animation: ${k}-xmarkdown-typing-suffix-pulse 1.2s ease-in-out infinite;
        }

        .${k}-xmarkdown-content .${k}-xmarkdown-typing-suffix span:nth-child(2) {
            animation-delay: 0.16s;
        }

        .${k}-xmarkdown-content .${k}-xmarkdown-typing-suffix span:nth-child(3) {
            animation-delay: 0.32s;
        }

        @keyframes ${k}-xmarkdown-typing-suffix-pulse {
            0%, 80%, 100% {
                background: radial-gradient(circle at center, #F8F9FA 0%, #D0D5D9 100%);
                transform: translateY(0);
            }

            40% {
                background: radial-gradient(circle at center, ${setAlpha(theme.color.primary, 0.45)} 0%, ${theme.color.primary} 100%);
                transform: translateY(-1px);
            }
        }

        .${k}-xmarkdown-body > :first-child {
            margin-top: 0;
        }

        .${k}-xmarkdown-body > :last-child {
            margin-bottom: 0;
        }

        .${k}-xmarkdown-content [data-kpc-xmarkdown-streaming-text="true"] {
            display: inline;
            white-space: pre-wrap;
            word-break: break-word;
        }

        .${k}-xmarkdown-body > p,
        .${k}-xmarkdown-body > ul,
        .${k}-xmarkdown-body > ol,
        .${k}-xmarkdown-body > blockquote,
        .${k}-xmarkdown-body > pre,
        .${k}-xmarkdown-body > table,
        .${k}-xmarkdown-body > hr,
        .${k}-xmarkdown-body > h1,
        .${k}-xmarkdown-body > h2,
        .${k}-xmarkdown-body > h3,
        .${k}-xmarkdown-body > h4,
        .${k}-xmarkdown-body > h5,
        .${k}-xmarkdown-body > h6 {
            margin: 0 0 12px;
        }

        .${k}-xmarkdown-content blockquote > :first-child {
            margin-top: 0;
        }

        .${k}-xmarkdown-content blockquote > :last-child {
            margin-bottom: 0;
        }

        .${k}-xmarkdown-content ul,
        .${k}-xmarkdown-content ol {
            padding-left: 20px;
        }

        .${k}-xmarkdown-content li {
            margin: 6px 0;
        }

        /* 收紧列表项内段落间距，避免浏览器默认 1em（14px）导致列表过松 */
        .${k}-xmarkdown-content li > p {
            margin: 6px 0;
        }

        .${k}-xmarkdown-content li > p:first-child {
            margin-top: 0;
        }

        .${k}-xmarkdown-content li > p:last-child {
            margin-bottom: 0;
        }

        .${k}-xmarkdown-content h1,
        .${k}-xmarkdown-content h2,
        .${k}-xmarkdown-content h3,
        .${k}-xmarkdown-content h4,
        .${k}-xmarkdown-content h5,
        .${k}-xmarkdown-content h6 {
            color: ${xmarkdown.headingColor};
            font-weight: 600;
            line-height: 1.35;
        }

        .${k}-xmarkdown-content h1 {
            font-size: 24px;
        }

        .${k}-xmarkdown-content h2 {
            font-size: 20px;
        }

        .${k}-xmarkdown-content h3 {
            font-size: 18px;
        }

        .${k}-xmarkdown-content h4,
        .${k}-xmarkdown-content h5,
        .${k}-xmarkdown-content h6 {
            font-size: 16px;
        }

        .${k}-xmarkdown-content a {
            color: ${theme.color.primary};
            text-decoration: none;
        }

        .${k}-xmarkdown-content a:hover {
            text-decoration: underline;
        }

        .${k}-xmarkdown-content img {
            display: block;
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .${k}-xmarkdown-content hr {
            border: 0;
            border-top: 1px solid ${xmarkdown.hrColor};
        }

        .${k}-xmarkdown-inline-code {
            display: inline-block;
            padding: 0 6px;
            border-radius: 6px;
            font-size: 12px;
            line-height: 1.7;
            vertical-align: baseline;
            background: ${xmarkdown.inlineCodeBg};
            color: ${xmarkdown.inlineCodeColor};
            border: 1px solid ${xmarkdown.inlineCodeBorder};
        }

        .${k}-xmarkdown-content pre {
            margin: 0;
            overflow: auto;
        }

        .${k}-xmarkdown-code-block,
        .${k}-xmarkdown-mermaid-block {
            margin: 0 0 12px;
            min-width: 0;
            max-width: 100%;
            overflow: hidden;
            border: 1px solid ${xmarkdown.codeBlockBorder};
            border-radius: 18px;
            background: ${xmarkdown.codeBlockBg};
            box-sizing: border-box;
        }

        .${k}-xmarkdown-code-toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: wrap;
            padding: 8px 12px;
            border-bottom: 1px solid ${xmarkdown.codeBlockBorder};
            background: ${xmarkdown.codeToolbarBg};
            color: ${xmarkdown.codeToolbarColor};
        }

        .${k}-xmarkdown-code-language {
            min-width: 0;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: inherit;
            flex: 1 1 auto;
        }

        .${k}-xmarkdown-code-actions {
            display: flex;
            align-items: center;
            gap: 6px;
            flex-wrap: wrap;
            justify-content: flex-end;
            max-width: 100%;
            margin-left: auto;
        }

        .${k}-xmarkdown-toolbar-toggle-group,
        .${k}-xmarkdown-toolbar-action-group {
            display: flex;
            align-items: center;
            gap: 4px;
            flex-wrap: wrap;
            max-width: 100%;
        }

        .${k}-xmarkdown-toolbar-toggle-group {
            margin-right: 2px;
        }

        .${k}-xmarkdown-toolbar-toggle {
            border: 0;
            padding: 0 6px;
            background: transparent;
            color: ${xmarkdown.mutedColor};
            font-size: 12px;
            line-height: 20px;
            cursor: pointer;
            transition: color ${theme.transition.small};
        }

        .${k}-xmarkdown-toolbar-toggle[data-kpc-selected="true"] {
            color: ${xmarkdown.codeToolbarColor};
            font-weight: 600;
        }

        .${k}-xmarkdown-toolbar-toggle:hover {
            color: ${xmarkdown.codeToolbarColor};
        }

        .${k}-xmarkdown-toolbar-icon-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            padding: 0;
            border: 0;
            background: transparent;
            color: ${xmarkdown.codeActionColor};
            cursor: pointer;
            transition: color ${theme.transition.small}, background ${theme.transition.small};
        }

        .${k}-xmarkdown-toolbar-icon-button:hover:not(:disabled) {
            background: ${xmarkdown.codeActionHoverBg};
            color: ${theme.color.primary};
        }

        .${k}-xmarkdown-toolbar-icon-button:disabled {
            opacity: 0.4;
            cursor: not-allowed;
            background: transparent;
            color: ${xmarkdown.codeActionColor};
        }

        .${k}-xmarkdown-toolbar-icon {
            font-size: 14px;
            line-height: 1;
        }

        .${k}-xmarkdown-code-body,
        .${k}-xmarkdown-mermaid-body {
            min-width: 0;
            max-width: 100%;
            overflow: auto;
            background: ${xmarkdown.codeBlockBg};
        }

        .${k}-xmarkdown-code-block pre,
        .${k}-xmarkdown-mermaid-source {
            padding: 0px;
            background: transparent;
            color: ${xmarkdown.codeTextColor};
        }

        .${k}-xmarkdown-code-block pre,
        .${k}-xmarkdown-mermaid-source {
            font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            font-size: 12px;
            line-height: 1.7;
        }

        .${k}-xmarkdown-code-block pre code,
        .${k}-xmarkdown-mermaid-source code {
            display: block;
            min-width: fit-content;
            color: inherit;
            white-space: pre;
            word-break: normal;
            overflow-wrap: normal;
            padding: 12px;
        }

        .${k}-xmarkdown-code-block .hljs,
        .${k}-xmarkdown-mermaid-source .hljs {
            background: transparent;
            color: ${xmarkdown.codeTextColor};
            border: 0;
        }

        .${k}-xmarkdown-code-block .hljs-comment,
        .${k}-xmarkdown-code-block .hljs-quote,
        .${k}-xmarkdown-mermaid-source .hljs-comment,
        .${k}-xmarkdown-mermaid-source .hljs-quote {
            color: ${xmarkdown.codeCommentColor};
        }

        .${k}-xmarkdown-code-block .hljs-keyword,
        .${k}-xmarkdown-code-block .hljs-selector-tag,
        .${k}-xmarkdown-code-block .hljs-literal,
        .${k}-xmarkdown-code-block .hljs-link,
        .${k}-xmarkdown-mermaid-source .hljs-keyword,
        .${k}-xmarkdown-mermaid-source .hljs-selector-tag,
        .${k}-xmarkdown-mermaid-source .hljs-literal,
        .${k}-xmarkdown-mermaid-source .hljs-link {
            color: ${xmarkdown.codeKeywordColor};
        }

        .${k}-xmarkdown-code-block .hljs-string,
        .${k}-xmarkdown-code-block .hljs-title,
        .${k}-xmarkdown-code-block .hljs-type,
        .${k}-xmarkdown-code-block .hljs-attribute,
        .${k}-xmarkdown-code-block .hljs-symbol,
        .${k}-xmarkdown-code-block .hljs-bullet,
        .${k}-xmarkdown-code-block .hljs-addition,
        .${k}-xmarkdown-mermaid-source .hljs-string,
        .${k}-xmarkdown-mermaid-source .hljs-title,
        .${k}-xmarkdown-mermaid-source .hljs-type,
        .${k}-xmarkdown-mermaid-source .hljs-attribute,
        .${k}-xmarkdown-mermaid-source .hljs-symbol,
        .${k}-xmarkdown-mermaid-source .hljs-bullet,
        .${k}-xmarkdown-mermaid-source .hljs-addition {
            color: ${xmarkdown.codeStringColor};
        }

        .${k}-xmarkdown-code-block .hljs-number,
        .${k}-xmarkdown-code-block .hljs-built_in,
        .${k}-xmarkdown-code-block .hljs-builtin-name,
        .${k}-xmarkdown-code-block .hljs-variable,
        .${k}-xmarkdown-code-block .hljs-template-variable,
        .${k}-xmarkdown-code-block .hljs-params,
        .${k}-xmarkdown-mermaid-source .hljs-number,
        .${k}-xmarkdown-mermaid-source .hljs-built_in,
        .${k}-xmarkdown-mermaid-source .hljs-builtin-name,
        .${k}-xmarkdown-mermaid-source .hljs-variable,
        .${k}-xmarkdown-mermaid-source .hljs-template-variable,
        .${k}-xmarkdown-mermaid-source .hljs-params {
            color: ${xmarkdown.codeNumberColor};
        }

        .${k}-xmarkdown-code-block .hljs-function,
        .${k}-xmarkdown-code-block .hljs-title.function_,
        .${k}-xmarkdown-code-block .hljs-title.class_,
        .${k}-xmarkdown-code-block .hljs-property,
        .${k}-xmarkdown-mermaid-source .hljs-function,
        .${k}-xmarkdown-mermaid-source .hljs-title.function_,
        .${k}-xmarkdown-mermaid-source .hljs-title.class_,
        .${k}-xmarkdown-mermaid-source .hljs-property {
            color: ${xmarkdown.codeFunctionColor};
        }

        .${k}-xmarkdown-code-block .hljs-deletion,
        .${k}-xmarkdown-mermaid-source .hljs-deletion {
            color: ${xmarkdown.mermaidErrorColor};
        }

        .${k}-xmarkdown-mermaid-block {
            background: ${xmarkdown.mermaidBg};
        }

        .${k}-xmarkdown-mermaid-block .${k}-xmarkdown-code-toolbar {
            border-bottom-color: ${xmarkdown.borderColor};
            background: ${xmarkdown.codeToolbarBg};
            color: ${xmarkdown.codeToolbarColor};
        }

        .${k}-xmarkdown-mermaid-canvas {
            position: relative;
            min-height: 0;
            min-width: 0;
            max-width: 100%;
            padding: 8px;
            box-sizing: border-box;
            overflow: hidden;
            background: ${xmarkdown.mermaidCanvasBg};
        }

        .${k}-xmarkdown-mermaid-viewport {
            overflow: hidden;
            height: 320px;
            min-width: 0;
            max-width: 100%;
            width: 100%;
            box-sizing: border-box;
            border-radius: 12px;
            background: #fff;
            cursor: default;
            user-select: none;
            scrollbar-width: thin;
            scrollbar-color: ${xmarkdown.scrollbarThumb} transparent;
        }

        .${k}-xmarkdown-mermaid-viewport[data-kpc-scroll-x="true"] {
            overflow-x: auto;
        }

        .${k}-xmarkdown-mermaid-viewport[data-kpc-scroll-y="true"] {
            overflow-y: auto;
        }

        .${k}-xmarkdown-mermaid-viewport[data-kpc-can-drag="true"] {
            cursor: grab;
        }

        .${k}-xmarkdown-mermaid-viewport[data-kpc-dragging="true"] {
            cursor: grabbing;
        }

        .${k}-xmarkdown-mermaid-viewport::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }

        .${k}-xmarkdown-mermaid-viewport::-webkit-scrollbar-track {
            background: transparent;
        }

        .${k}-xmarkdown-mermaid-viewport::-webkit-scrollbar-thumb {
            background: ${xmarkdown.scrollbarThumb};
            border: 2px solid transparent;
            border-radius: 999px;
            background-clip: padding-box;
        }

        .${k}-xmarkdown-mermaid-viewport::-webkit-scrollbar-thumb:hover {
            background: ${xmarkdown.scrollbarThumbHover};
            background-clip: padding-box;
        }

        .${k}-xmarkdown-mermaid-viewport::-webkit-scrollbar-corner {
            background: transparent;
        }

        .${k}-xmarkdown-mermaid-stage {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 100%;
            min-height: 100%;
            padding: 8px;
            box-sizing: border-box;
        }

        .${k}-xmarkdown-mermaid-stage svg {
            display: block;
            margin: 0 auto;
        }

        .${k}-xmarkdown-mermaid-source {
            display: none;
            margin: 0;
            background: ${xmarkdown.codeBlockBg};
        }

        .${k}-xmarkdown-mermaid-block[data-kpc-view="source"] .${k}-xmarkdown-mermaid-source {
            display: block;
        }

        .${k}-xmarkdown-mermaid-block[data-kpc-view="source"] .${k}-xmarkdown-mermaid-canvas {
            display: none;
        }

        .${k}-xmarkdown-mermaid-error {
            padding: 14px 16px;
            border-radius: 8px;
            background: ${xmarkdown.mermaidErrorBg};
            color: ${xmarkdown.mermaidErrorColor};
            white-space: pre-wrap;
        }

        .${k}-xmarkdown-content blockquote {
            padding: 12px 16px;
            border-left: 4px solid ${xmarkdown.blockquoteBorder};
            border-radius: 0 10px 10px 0;
            background: ${xmarkdown.blockquoteBg};
            color: ${xmarkdown.mutedColor};
        }

        .${k}-xmarkdown-table-wrap > table {
            width: max-content;
            min-width: 100%;
            font-size: 12px;
            border-collapse: collapse;
            border: 1px solid ${xmarkdown.borderColor};
            border-radius: 10px;
        }

        .${k}-xmarkdown-table-wrap {
            max-width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            margin: 0 0 12px;
        }

        .${k}-xmarkdown-table-wrap > table {
            margin: 0;
        }

        .${k}-xmarkdown-table-wrap > table > thead {
            background: ${xmarkdown.tableHeadBg};
        }

        .${k}-xmarkdown-table-wrap > table th,
        .${k}-xmarkdown-table-wrap > table td {
            padding: 10px 12px;
            border: 1px solid ${xmarkdown.borderColor};
            text-align: left;
            vertical-align: top;
        }
    `;
});
