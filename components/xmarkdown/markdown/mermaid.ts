/**
 * Mermaid 图表渲染
 */

import {_$} from '../../../i18n';
import {normalizeLanguage} from './highlight';
import {renderCustomCodeBlock} from './codeBlockRenderer';
import {createElementNode, createKeyGenerator, createTextNode} from './renderTree';
import type {
    XMarkdownRenderOptions,
    XMarkdownRenderedBlockType,
} from './types';

const COPY_SOURCE_LABEL = _$('复制源码');
const VIEW_SOURCE_LABEL = _$('源码');
const VIEW_DIAGRAM_LABEL = _$('图表');
const ZOOM_OUT_LABEL = _$('缩小');
const ZOOM_IN_LABEL = _$('放大');
const RESET_ZOOM_LABEL = _$('重置缩放');
const DOWNLOAD_IMAGE_LABEL = _$('下载图片');
const MERMAID_CANVAS_LABEL = _$('Mermaid 图表');

/**
 * 渲染 Mermaid 代码块
 */
export function renderMermaidBlock(source: string, info: string, options: XMarkdownRenderOptions, env?: any) {
    const customBlock = renderCustomCodeBlock(source, info, 'mermaid', options);
    if (customBlock) return customBlock;

    const label = normalizeLanguage(info) || 'mermaid';
    const prefixCls = options.prefixCls || 'k';
    const blockId = registerRenderedBlock(env, 'mermaid', source, label);
    const nextKey = createKeyGenerator(`xmarkdown-mermaid-${blockId || 'tail'}`);

    return createElementNode('div', {
        className: `${prefixCls}-xmarkdown-mermaid-block`,
        'data-kpc-mermaid': 'true',
        'data-kpc-render-state': 'idle',
        'data-kpc-view': 'diagram',
        'data-kpc-language': label,
        'data-kpc-block-id': blockId,
        'data-kpc-scale': '1',
    }, [
        createElementNode('div', {
            className: `${prefixCls}-xmarkdown-code-toolbar`,
        }, [
            createElementNode('span', {
                className: `${prefixCls}-xmarkdown-code-language`,
            }, [createTextNode('Mermaid')], nextKey('language')),
            createElementNode('div', {
                className: `${prefixCls}-xmarkdown-code-actions`,
            }, [
                createElementNode('div', {
                    className: `${prefixCls}-xmarkdown-toolbar-toggle-group`,
                }, [
                    createToggleButton(prefixCls, 'set-mermaid-view-diagram', VIEW_DIAGRAM_LABEL, true, nextKey('toggle-diagram')),
                    createToggleButton(prefixCls, 'set-mermaid-view-source', VIEW_SOURCE_LABEL, false, nextKey('toggle-source')),
                ], nextKey('toggle-group')),
                createElementNode('div', {
                    className: `${prefixCls}-xmarkdown-toolbar-action-group`,
                }, [
                    createIconButton(prefixCls, 'zoom-mermaid-out', ZOOM_OUT_LABEL, 'zoom-out', undefined, nextKey('zoom-out')),
                    createIconButton(prefixCls, 'reset-mermaid-zoom', RESET_ZOOM_LABEL, 'refresh', undefined, nextKey('reset')),
                    createIconButton(prefixCls, 'zoom-mermaid-in', ZOOM_IN_LABEL, 'zoom-in', undefined, nextKey('zoom-in')),
                    createIconButton(prefixCls, 'download-mermaid', DOWNLOAD_IMAGE_LABEL, 'download', 'check-outline', nextKey('download')),
                    createIconButton(prefixCls, 'copy-mermaid', COPY_SOURCE_LABEL, 'clone', 'check-outline', nextKey('copy')),
                ], nextKey('action-group')),
            ], nextKey('actions')),
        ], nextKey('toolbar')),
        createElementNode('div', {
            className: `${prefixCls}-xmarkdown-mermaid-body`,
        }, [
            createElementNode('div', {
                className: `${prefixCls}-xmarkdown-mermaid-canvas`,
                'data-kpc-mermaid-canvas': 'true',
            }, [
                createElementNode('div', {
                    className: `${prefixCls}-xmarkdown-mermaid-viewport`,
                    'data-kpc-mermaid-viewport': 'true',
                    title: MERMAID_CANVAS_LABEL,
                }, [
                    createElementNode('div', {
                        className: `${prefixCls}-xmarkdown-mermaid-stage`,
                        'data-kpc-mermaid-stage': 'true',
                    }, [createTextNode(_$('Mermaid 渲染中...'))], nextKey('stage')),
                ], nextKey('viewport')),
            ], nextKey('canvas')),
            createElementNode('pre', {
                className: `${prefixCls}-xmarkdown-mermaid-source`,
            }, [
                createElementNode('code', {
                    className: 'hljs language-mermaid',
                }, [createTextNode(source)], nextKey('source-code')),
            ], nextKey('source')),
        ], nextKey('body')),
    ], nextKey('block'));
}

/**
 * 创建视图切换按钮
 */
function createToggleButton(prefixCls: string, action: string, label: string, selected: boolean, key: string) {
    return createElementNode('button', {
        className: `${prefixCls}-xmarkdown-toolbar-toggle`,
        type: 'button',
        'aria-label': label,
        'aria-pressed': String(selected),
        'data-kpc-action': action,
        'data-kpc-selected': String(selected),
    }, [createTextNode(label)], key);
}

/**
 * 创建工具栏图标按钮
 */
function createIconButton(
    prefixCls: string,
    action: string,
    label: string,
    icon: string,
    feedbackIcon: string | undefined,
    key: string
) {
    const defaultIconClass = `${prefixCls}-icon-${icon}`;
    const feedbackIconClass = feedbackIcon ? `${prefixCls}-icon-${feedbackIcon}` : defaultIconClass;

    return createElementNode('button', {
        className: `${prefixCls}-xmarkdown-toolbar-icon-button`,
        type: 'button',
        title: label,
        'aria-label': label,
        'data-kpc-action': action,
        'data-kpc-feedback-mode': 'icon',
        'data-kpc-default-title': label,
        'data-kpc-default-icon': defaultIconClass,
        'data-kpc-feedback-icon': feedbackIconClass,
    }, [
        createElementNode('i', {
            className: `${prefixCls}-xmarkdown-toolbar-icon ${prefixCls}-icon ${defaultIconClass}`,
            'data-kpc-icon': 'true',
        }, [], `${key}-icon`),
    ], key);
}

/**
 * 注册渲染后的 Mermaid 块信息
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
