import {Component, render, createVNode as h} from 'intact';
import template from './index.vdt';
import axios from 'axios';
import stylusCompile from '../../libs/stylus';
import './index.styl';
import React from 'react';
import {Blockquote} from '../blockquote';

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
    }

    beforeUnmount() {
        if (this.blockquote) {
            render(null, this.blockquote);
        }
    }
}
