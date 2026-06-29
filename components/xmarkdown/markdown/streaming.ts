/**
 * 流式渲染
 */

import {createElementNode, createKeyGenerator, createTextNode, renderTreeNodes} from './renderTree';
import type {XMarkdownRenderOptions, XMarkdownStreamingRenderResult} from './types';

/**
 * 判断源码中是否包含公式语法
 */
export function containsFormulaSyntax(
    source: string,
    delimiters?: string | string[]
): boolean {
    if (!source) return false;

    const activeDelimiters = Array.isArray(delimiters)
        ? delimiters
        : delimiters ? [delimiters] : ['dollars', 'beg_end'];

    if (activeDelimiters.includes('dollars') && /(^|[^\\])\${1,2}[\s\S]+?(^|[^\\])\${1,2}/.test(source)) {
        return true;
    }

    if (activeDelimiters.includes('beg_end') && /\\begin\{[\s\S]+?\\end\{/.test(source)) {
        return true;
    }

    if (activeDelimiters.includes('brackets') && /\\\[[\s\S]+?\\\]/.test(source)) {
        return true;
    }

    return false;
}

/**
 * 获取流式渲染源码。
 *
 * fenced code 和 Mermaid 在 Markdown 语义上从起始围栏开始就是完整块级结构，
 * 因此保留在主渲染链路里持续增量更新。这里只对未闭合块级公式做兜底，
 * 避免 texmath 在流式过程中提前吞掉尚未结束的公式内容。
 */
export function resolveStreamingRenderResult(
    source: string,
    options: XMarkdownRenderOptions = {}
): XMarkdownStreamingRenderResult {
    const normalized = (source || '').replace(/\r\n?/g, '\n');
    if (!normalized) {
        return {
            source: '',
            trailingNodes: [],
        };
    }

    const openMathBlock = findOpenMathBlock(normalized);
    if (!openMathBlock || options.enableFormula === false) {
        return {
            source: normalized,
            trailingNodes: [],
        };
    }

    return {
        source: normalized.slice(0, openMathBlock.start),
        trailingNodes: renderStreamingText(normalized.slice(openMathBlock.start), options),
    };
}

function renderStreamingText(
    source: string,
    options: XMarkdownRenderOptions
) {
    if (!source) return [];

    const nextKey = createKeyGenerator('xmarkdown-streaming-tail');
    const children: any[] = [];
    const lines = source.split('\n');

    lines.forEach((line, index) => {
        children.push(createTextNode(line));
        if (index < lines.length - 1) {
            children.push(createElementNode('br', {}, [], nextKey('br')));
        }
    });

    return renderTreeNodes([createElementNode('span', {
        'data-kpc-xmarkdown-streaming-text': 'true',
    }, children, nextKey('text'))], options);
}

/**
 * 查找未闭合的块级公式。
 */
function findOpenMathBlock(source: string): {start: number} | null {
    const lines = source.split('\n');
    let inMathBlock = false;
    let mathBlockStart = -1;
    let currentPos = 0;

    for (const line of lines) {
        const lineTrimmed = line.trim();

        if (lineTrimmed === '$$') {
            if (!inMathBlock) {
                inMathBlock = true;
                mathBlockStart = currentPos + line.indexOf('$$');
            } else {
                inMathBlock = false;
                mathBlockStart = -1;
            }
        }

        currentPos += line.length + 1;
    }

    if (!inMathBlock || mathBlockStart < 0) return null;

    return {start: mathBlockStart};
}
