import {Component, render, createVNode as h} from 'intact';
import template from './index.vdt';
import axios from 'axios';
import stylusCompile from '../../libs/stylus';
import React from 'react';
import {Blockquote} from '../blockquote';
import {BlockquoteSlot} from '../blockquote/slot';

const version = process.version;

export interface Demo {
    data: Data 
    example: boolean
    default: Component<any>
}

export interface Data {
    setting: Setting
    contents: string
    index: string
    highlighted: Highlighted[]
}

export interface Setting {
    title: string
    order: number
    demo: boolean
}

export interface Highlighted {
    language: string
    content: string
    file?: string
}

export interface ArticleProps {
    demos: Demo[],
    examples: Demo[],
    contents: string | string[],
}

export default class Article extends Component<ArticleProps> {
    static template = template;

    private blockquote: HTMLElement | null = null;
    private blockquoteSlot: HTMLElement | null = null;

    init() {
        const {demos, contents} = this.get();

        const _demos: Demo[] = [];
        const examples: Demo[] = [];
        demos.forEach(item => {
            if (item.example) {
                examples.push(item);
            } else {
                _demos.push(item);
                // sort highlighted code
                const orderMap: Record<string, number> = {vue: 1, jsx: 2, ts: 3, styl: 4};
                item.data.highlighted.sort((a, b) => {
                    a.file = a.file || `index.${a.language}`;
                    b.file = b.file || `index.${b.language}`;
                    const order1 = orderMap[a.language] || 0;
                    const order2 = orderMap[b.language] || 0;

                    return order1 - order2;
                });
            }
        });

        const _contents = contents ? (contents as string).split('<!-- example -->') : [];

        this.set({
            demos: _demos.sort((a, b) => {
                return a.data.setting.order - b.data.setting.order;
            }),
            examples: examples,
            contents: _contents,
        });
    }

    mounted() {
        const eventDom = document.getElementById(encodeURIComponent('事件'));
        if (eventDom) {
            const blockquote = this.blockquote = document.createElement('div');
            eventDom.parentNode!.insertBefore(blockquote, eventDom.nextElementSibling);
            render(h(Blockquote), blockquote);
        }

        const slotDom = document.getElementById(encodeURIComponent('扩展点'));
        if (slotDom) {
            const blockquote = this.blockquoteSlot = document.createElement('div');
            slotDom.parentNode!.insertBefore(blockquote, slotDom.nextElementSibling);
            // find the first slot name from table
            const table = siblings(slotDom, 'k-table');
            let name: string | null = null;
            if (table) {
                name = table.querySelector<HTMLElement>('tbody td')!.textContent;
            }
            render(h(BlockquoteSlot, {name: name || 'name'}), blockquote);
        }
    }

    beforeUnmount() {
        removeBlockquote(this.blockquote);
        removeBlockquote(this.blockquoteSlot);
    }
}

function removeBlockquote(blockquote: HTMLElement | null) {
    if (blockquote) {
        render(null, blockquote);
        blockquote.parentNode!.removeChild(blockquote);
    }
}

function siblings(dom: HTMLElement, className: string) {
    let nextElementSibling: Element | null = dom;
    while (nextElementSibling = nextElementSibling.nextElementSibling) {
        if (nextElementSibling.classList.contains(className)) {
            return nextElementSibling;
        }
    }

    return null;
}
