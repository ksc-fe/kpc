/**
 * 代码块渲染
 */

import {_$} from '../../../i18n';
import {highlightCode, normalizeLanguage} from './highlight';
import {renderCustomCodeBlock} from './codeBlockRenderer';
import {
    createElementNode,
    createKeyGenerator,
    parseHtmlFragment,
} from './renderTree';
import type {
    XMarkdownRenderOptions,
    XMarkdownRenderedBlockType,
} from './types';

const COPY_LABEL = _$('复制代码');

/**
 * 渲染代码块
 */
export function renderCodeBlock(source: string, info: string, options: XMarkdownRenderOptions, env?: any) {
    const customBlock = renderCustomCodeBlock(source, info, 'code', options);
    if (customBlock) return customBlock;

    const rawLanguage = info ? info.split(/\s+/, 1)[0].trim().toLowerCase() : '';
    const normalizedLanguage = normalizeLanguage(rawLanguage);
    const label = rawLanguage || _$('纯文本');
    const shouldShowToolbar = options.showCodeHeader !== false;
    const prefixCls = options.prefixCls || 'k';
    const blockId = registerRenderedBlock(env, 'code', source, label);
    const nextKey = createKeyGenerator(`xmarkdown-code-${blockId || 'tail'}`);

    const bodyChildren = parseHtmlFragment(highlightCode(source, normalizedLanguage), nextKey);

    const children = shouldShowToolbar
        ? [
            createElementNode('div', {
                className: `${prefixCls}-xmarkdown-code-toolbar`,
            }, [
                createElementNode('span', {
                    className: `${prefixCls}-xmarkdown-code-language`,
                }, [], nextKey('code-language')),
                createElementNode('div', {
                    className: `${prefixCls}-xmarkdown-code-actions`,
                }, [
                    createElementNode('button', {
                        className: `${prefixCls}-xmarkdown-toolbar-icon-button`,
                        type: 'button',
                        title: COPY_LABEL,
                        'aria-label': COPY_LABEL,
                        'data-kpc-action': 'copy-code',
                        'data-kpc-feedback-mode': 'icon',
                        'data-kpc-default-title': COPY_LABEL,
                        'data-kpc-default-icon': `${prefixCls}-icon-clone`,
                        'data-kpc-feedback-icon': `${prefixCls}-icon-check-outline`,
                    }, [
                        createElementNode('i', {
                            className: `${prefixCls}-xmarkdown-toolbar-icon ${prefixCls}-icon ${prefixCls}-icon-clone`,
                            'data-kpc-icon': 'true',
                        }, [], nextKey('copy-icon')),
                    ], nextKey('copy-button')),
                ], nextKey('code-actions')),
            ], nextKey('code-toolbar')),
            createElementNode('div', {
                className: `${prefixCls}-xmarkdown-code-body`,
            }, bodyChildren, nextKey('code-body')),
        ]
        : bodyChildren;

    if (shouldShowToolbar) {
        (children[0] as any).children[0].children.push(createTextNode(label));
    }

    return createElementNode('div', {
        className: `${prefixCls}-xmarkdown-code-block`,
        'data-kpc-code-block': 'true',
        'data-kpc-language': label,
        'data-kpc-block-id': blockId,
    }, children, nextKey('code-block'));
}

/**
 * 注册渲染后的代码块信息
 */
function registerRenderedBlock(
    env: any,
    type: XMarkdownRenderedBlockType,
    source: string,
    language: string
) {
    if (env && typeof env.registerBlock === 'function') {
        return env.registerBlock(type, source, language);
    }
    return '';
}

/**
 * 创建文本节点
 */
function createTextNode(content: string) {
    return {
        type: 'text' as const,
        content,
    };
}
