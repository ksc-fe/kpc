import {Component, TypeDefs, VNode, Children} from 'intact';
import template from './step.vdt';
import { useConfigContext } from '../config';
import type {Events} from '../types';

export interface TourStepProps {
    title?: string | VNode;
    content?: Children;
    target?: string | HTMLElement;
    position?: string | any;
}

export interface TourStepEvents { }

export interface TourStepBlocks {
    header: null;
    content: null;
    footer: null;
}

const typeDefs: Required<TypeDefs<TourStepProps>> = {
    title: [String, VNode],
    content: [String, VNode, Array],
    target: [String, Object],
    position: [String, Object],
};

const defaults = (): Partial<TourStepProps> => ({
    position: 'bottom',
});

export class TourStep extends Component<TourStepProps, TourStepEvents, TourStepBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();

    getTarget(): HTMLElement | null {
        const target = this.get('target');
        if (!target) return null;
        
        if (typeof target === 'string') {
            return document.querySelector(target);
        }
    
        return target as HTMLElement;
    }
}