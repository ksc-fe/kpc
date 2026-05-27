import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, setAlpha} from '../../styles/utils';
import '../../styles/global';
import {cache} from '../utils';

const defaults = {
    gap: '12px',
    padding: '12px',
    avatarSize: '32px',
    avatarFontSize: '12px',
    avatarBg: '#dce6ee',
    avatarColor: theme.color.text,
    roundBorderRadius: '30px',
    borderRadius: '8px',
    border: `1px solid ${theme.color.border}`,
    filledBg: '#ECF4FF',
    filledColor: theme.color.text,
    filledBorder: '1px solid transparent',
    outlinedBg: '#fff',
    outlinedColor: theme.color.text,
    outlinedBorder: `1px solid #E5E8EE`,
    plainBg: 'transparent',
    plainColor: theme.color.text,
    plainBorder: '1px solid transparent',
    roleNameColor: theme.color.title,
    extraColor: theme.color.placeholder,
    loadingTextColor: theme.color.lightBlack,
    get loadingDotColor() { return theme.color.primary },
    loadingDotSize: '8px',
    markdownCodeBg: '#eef2f6',
    markdownCodeColor: '#2f4554',
    markdownPreBg: '#10161c',
    markdownPreColor: '#f5f7fa',
    markdownBorderColor: '#dde4ea',
    markdownTableHeadBg: '#f7f9fb',
    markdownHeadingColor: '#18212a',
    get markdownLinkColor() { return theme.color.primary },
    markdownBlockquoteBg: '#f6f8fa',
};

let bubble: typeof defaults;
setDefault(() => {
    bubble = deepDefaults(theme, {bubble: defaults}).bubble;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;

        .${k}-bubble-main {
            display: flex;
            flex-direction: column;
            gap: 8px;
            min-width: 0;
            align-items: flex-start;
        }

        .${k}-bubble-meta {
            display: flex;
            align-items: center;
            gap: 8px;
            min-width: 0;
        }

        .${k}-bubble-header {
            color: ${bubble.roleNameColor};
            font-size: 14px;
            font-weight: 500;
            min-width: 0;
            text-align: left;
        }

        .${k}-bubble-content {
            display: flex;
            flex-direction: column;
            gap: 8px;
            min-width: 0;
            max-width: 100%;
            padding: ${bubble.padding};
            box-sizing: border-box;
            line-height: 1.6;
            word-break: break-word;
            overflow-wrap: anywhere;
            transition: background ${theme.transition.small}, border-color ${theme.transition.small};
        }

        .${k}-bubble-content > * {
            min-width: 0;
            max-width: 100%;
        }

        .${k}-bubble-attachments {
            display: flex;
            flex-direction: column;
            gap: 12px;
            min-width: 0;
            max-width: 100%;
        }

        .${k}-bubble-before-content {
            min-width: 0;
            width: 100%;
        }

        .${k}-bubble-text {
            white-space: pre-wrap;
        }

        .${k}-bubble-loading {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: ${bubble.loadingTextColor};
            min-height: 20px;
        }

        .${k}-bubble-loading-dot {
            width: ${bubble.loadingDotSize};
            height: ${bubble.loadingDotSize};
            border-radius: 50%;
            background: ${bubble.loadingDotColor};
            display: inline-block;
            animation: ${k}-bubble-loading-bounce 1s ease-in-out infinite;
            box-shadow: 0 0 0 1px ${setAlpha(theme.color.primary, 0.04)};
        }

        .${k}-bubble-loading-dot:nth-of-type(2) {
            animation-delay: 0.14s;
        }

        .${k}-bubble-loading-dot:nth-of-type(3) {
            animation-delay: 0.28s;
        }

        .${k}-bubble-footer {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .${k}-bubble-extra {
            color: ${bubble.extraColor};
            font-size: 12px;
            line-height: 1.5;
        }

        .${k}-bubble-avatar {
            width: ${bubble.avatarSize};
            height: ${bubble.avatarSize};
            flex: 0 0 ${bubble.avatarSize};
            border-radius: 50%;
            overflow: hidden;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: ${bubble.avatarBg};
            color: ${bubble.avatarColor};
            font-size: ${bubble.avatarFontSize};
            font-weight: 600;
        }

        .${k}-bubble-avatar-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .${k}-bubble-markdown {
            color: inherit;
            overflow-x: auto;
        }

        .${k}-bubble-markdown > :first-child {
            margin-top: 0;
        }

        .${k}-bubble-markdown > :last-child {
            margin-bottom: 0;
        }

        .${k}-bubble-markdown [data-kpc-bubble-markdown-tail] {
            display: inline;
            white-space: pre-wrap;
            word-break: break-word;
            overflow-wrap: anywhere;
        }

        .${k}-bubble-markdown p,
        .${k}-bubble-markdown ul,
        .${k}-bubble-markdown ol,
        .${k}-bubble-markdown blockquote,
        .${k}-bubble-markdown pre,
        .${k}-bubble-markdown table,
        .${k}-bubble-markdown hr,
        .${k}-bubble-markdown h1,
        .${k}-bubble-markdown h2,
        .${k}-bubble-markdown h3,
        .${k}-bubble-markdown h4,
        .${k}-bubble-markdown h5,
        .${k}-bubble-markdown h6 {
            margin: 0 0 10px;
        }

        .${k}-bubble-markdown ul,
        .${k}-bubble-markdown ol {
            padding-left: 20px;
            list-style-position: outside;
        }

        .${k}-bubble-markdown ul {
            list-style-type: disc;
        }

        .${k}-bubble-markdown ul ul {
            list-style-type: circle;
        }

        .${k}-bubble-markdown ul ul ul {
            list-style-type: square;
        }

        .${k}-bubble-markdown ol {
            list-style-type: decimal;
        }

        .${k}-bubble-markdown ol ol {
            list-style-type: lower-alpha;
        }

        .${k}-bubble-markdown li {
            margin: 6px 0;
        }

        .${k}-bubble-markdown li > p {
            margin: 6px 0 0;
        }

        .${k}-bubble-markdown h1,
        .${k}-bubble-markdown h2,
        .${k}-bubble-markdown h3,
        .${k}-bubble-markdown h4,
        .${k}-bubble-markdown h5,
        .${k}-bubble-markdown h6 {
            color: ${bubble.markdownHeadingColor};
            font-weight: 600;
            line-height: 1.35;
        }

        .${k}-bubble-markdown h1 {
            font-size: 22px;
        }

        .${k}-bubble-markdown h2 {
            font-size: 18px;
        }

        .${k}-bubble-markdown h3 {
            font-size: 16px;
        }

        .${k}-bubble-markdown h4 {
            font-size: 14px;
        }

        .${k}-bubble-markdown h5,
        .${k}-bubble-markdown h6 {
            font-size: 13px;
        }

        .${k}-bubble-markdown a {
            color: ${bubble.markdownLinkColor};
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 2px;
        }

        .${k}-bubble-markdown a:hover {
            opacity: 0.88;
        }

        .${k}-bubble-markdown code {
            display: inline-block;
            padding: 0 6px;
            border-radius: 4px;
            background: ${bubble.markdownCodeBg};
            color: ${bubble.markdownCodeColor};
            font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
            font-size: 12px;
            white-space: break-spaces;
        }

        .${k}-bubble-markdown strong,
        .${k}-bubble-markdown b {
            font-weight: 600;
        }

        .${k}-bubble-markdown img {
            display: block;
            max-width: 100%;
            height: auto;
            margin: 12px 0;
            border-radius: 12px;
        }

        .${k}-bubble-markdown hr {
            height: 1px;
            border: 0;
            background: ${bubble.markdownBorderColor};
        }

        .${k}-bubble-markdown pre {
            padding: 0px;
            overflow: auto;
            background: ${bubble.markdownPreBg};
            color: ${bubble.markdownPreColor};
            border: 1px solid ${setAlpha('#ffffff', 0.06)};
        }

        .${k}-bubble-markdown pre code {
            display: block;
            padding: 4px;
            background: transparent;
            color: inherit;
            white-space: pre;
            word-break: normal;
            overflow-wrap: normal;
        }

        .${k}-bubble-markdown .hljs {
            background: transparent;
            color: inherit;
        }

        .${k}-bubble-markdown .hljs-comment,
        .${k}-bubble-markdown .hljs-quote {
            color: #8fa1b3;
        }

        .${k}-bubble-markdown .hljs-keyword,
        .${k}-bubble-markdown .hljs-selector-tag,
        .${k}-bubble-markdown .hljs-literal,
        .${k}-bubble-markdown .hljs-section,
        .${k}-bubble-markdown .hljs-link {
            color: #ffb86c;
        }

        .${k}-bubble-markdown .hljs-string,
        .${k}-bubble-markdown .hljs-title,
        .${k}-bubble-markdown .hljs-name,
        .${k}-bubble-markdown .hljs-type,
        .${k}-bubble-markdown .hljs-attribute,
        .${k}-bubble-markdown .hljs-symbol,
        .${k}-bubble-markdown .hljs-bullet,
        .${k}-bubble-markdown .hljs-addition {
            color: #7ee787;
        }

        .${k}-bubble-markdown .hljs-number,
        .${k}-bubble-markdown .hljs-built_in,
        .${k}-bubble-markdown .hljs-builtin-name,
        .${k}-bubble-markdown .hljs-variable,
        .${k}-bubble-markdown .hljs-template-variable {
            color: #79c0ff;
        }

        .${k}-bubble-markdown .hljs-deletion {
            color: #ff7b72;
        }

        .${k}-bubble-markdown table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid ${bubble.markdownBorderColor};
            border-radius: 10px;
            overflow: hidden;
            font-size: 12px;
            background: transparent;
        }

        .${k}-bubble-markdown th,
        .${k}-bubble-markdown td {
            padding: 8px 12px;
            border: 1px solid ${bubble.markdownBorderColor};
            text-align: left;
            vertical-align: top;
        }

        .${k}-bubble-markdown th {
            font-weight: 600;
            background: ${bubble.markdownTableHeadBg};
        }

        .${k}-bubble-markdown blockquote {
            padding-left: 12px;
            border-left: 3px solid ${setAlpha(theme.color.text, 0.16)};
            background: ${bubble.markdownBlockquoteBg};
            border-radius: 0 10px 10px 0;
            padding: 8px 12px;
            opacity: 0.96;
        }

        .${k}-bubble-markdown blockquote > :last-child {
            margin-bottom: 0;
        }

        &.${k}-bubble-start {
            align-items: flex-start;
        }

        &.${k}-bubble-start .${k}-bubble-main {
            align-items: flex-start;
        }

        &.${k}-bubble-end {
            align-items: flex-end;
        }

        &.${k}-bubble-end .${k}-bubble-main {
            align-items: flex-end;
        }

        &.${k}-bubble-end .${k}-bubble-meta {
            flex-direction: row-reverse;
            justify-content: flex-end;
        }

        &.${k}-bubble-end .${k}-bubble-header {
            text-align: right;
        }

        &.${k}-bubble-middle {
            align-items: center;
        }

        &.${k}-bubble-middle .${k}-bubble-main {
            align-items: center;
        }

        &.${k}-bubble-middle .${k}-bubble-meta {
            justify-content: center;
        }

        &.${k}-bubble-middle .${k}-bubble-header {
            text-align: center;
        }

        &.${k}-bubble-filled .${k}-bubble-content {
            background: ${bubble.filledBg};
            color: ${bubble.filledColor};
            border: ${bubble.filledBorder};
        }

        &.${k}-bubble-outlined .${k}-bubble-content {
            background: ${bubble.outlinedBg};
            color: ${bubble.outlinedColor};
            border: ${bubble.outlinedBorder};
        }

        &.${k}-bubble-plain .${k}-bubble-content {
            background: ${bubble.plainBg};
            color: ${bubble.plainColor};
            border: ${bubble.plainBorder};
            padding: 0;
        }

        &.${k}-bubble-round .${k}-bubble-content {
            border-radius: ${bubble.roundBorderRadius};
        }

        &.${k}-bubble-corner.${k}-bubble-start .${k}-bubble-content {
            border-radius: 0 ${bubble.borderRadius} ${bubble.borderRadius} ${bubble.borderRadius};
        }

        &.${k}-bubble-corner.${k}-bubble-end .${k}-bubble-content {
            border-radius: ${bubble.borderRadius} 0 ${bubble.borderRadius} ${bubble.borderRadius};
        }

        &.${k}-bubble-corner.${k}-bubble-middle .${k}-bubble-content {
            border-radius: 0 0 ${bubble.borderRadius} ${bubble.borderRadius};
        }

        &.${k}-bubble-square .${k}-bubble-content {
            border-radius: ${bubble.borderRadius};
        }

        @keyframes ${k}-bubble-loading-bounce {
            0%, 80%, 100% {
                transform: translateY(0) scale(0.9);
                opacity: 0.45;
            }

            40% {
                transform: translateY(-5px) scale(1);
                opacity: 1;
            }
        }

    `;
});
