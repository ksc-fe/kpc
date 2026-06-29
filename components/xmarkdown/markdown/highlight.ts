/**
 * 代码高亮
 *
 * 基于 highlight.js 实现代码块语法高亮。
 */

import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import diff from 'highlight.js/lib/languages/diff';
import go from 'highlight.js/lib/languages/go';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdown from 'highlight.js/lib/languages/markdown';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

/** 语言别名映射 */
const LANGUAGE_ALIAS_MAP: Record<string, string> = {
    html: 'xml',
    js: 'javascript',
    md: 'markdown',
    py: 'python',
    shell: 'bash',
    sh: 'bash',
    ts: 'typescript',
    yml: 'yaml',
    zsh: 'bash',
};

/**
 * 注册支持的语法高亮语言
 */
export function registerHighlightLanguages() {
    hljs.registerLanguage('bash', bash);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('diff', diff);
    hljs.registerLanguage('go', go);
    hljs.registerLanguage('java', java);
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('markdown', markdown);
    hljs.registerLanguage('python', python);
    hljs.registerLanguage('sql', sql);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('yaml', yaml);
}

/**
 * 标准化语言名称（处理别名）
 */
export function normalizeLanguage(info: string) {
    const language = info ? info.split(/\s+/, 1)[0].trim().toLowerCase() : '';
    return LANGUAGE_ALIAS_MAP[language] || language;
}

/**
 * 代码高亮
 */
export function highlightCode(code: string, language: string) {
    const normalizedLanguage = language && hljs.getLanguage(language) ? language : '';

    try {
        if (!normalizedLanguage) {
            return `<pre class="hljs"><code class="hljs">${escapeHtml(code)}</code></pre>`;
        }

        const highlighted = hljs.highlight(code, {language: normalizedLanguage, ignoreIllegals: true});
        const languageClass = highlighted.language ? ` language-${highlighted.language}` : '';

        return `<pre class="hljs"><code class="hljs${languageClass}">${highlighted.value}</code></pre>`;
    } catch (e) {
        return `<pre class="hljs"><code class="hljs">${escapeHtml(code)}</code></pre>`;
    }
}

/**
 * 转义 HTML 特殊字符
 */
function escapeHtml(text: string) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}