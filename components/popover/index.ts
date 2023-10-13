import { Props, createVNode as h, Component } from "intact";
import { Tooltip } from "../tooltip/tooltip";
import { TooltipProps, TooltipEvents, TooltipBlocks } from "../tooltip/tooltip";
import { PopoverContent, PopoverContentProps, PopoverContentBlocks } from './content';
import {noop} from 'intact-shared';

export interface PopoverProps extends TooltipProps, PopoverContentProps {
    confirm?: never;
    theme?: never;
    hoverable?: never;
    trigger?: never;
}

export interface PopoverEvents extends TooltipEvents { }

export interface PopoverBlocks extends TooltipBlocks, PopoverContentBlocks { }

export declare class _Popover extends Tooltip<PopoverProps, PopoverEvents, PopoverBlocks> { }

function Wrapper(props: Props<PopoverProps, Tooltip>) {
    let { children, type, title, content, $blocks, ...rest } = props;

    if ($blocks) {
        if ($blocks.title) {
            title = $blocks.title(noop as any);
        }
        if ($blocks.content) {
            content = $blocks.content(noop as any);
        }
    }

    const contentVNode = h(PopoverContent, {
        type,
        title,
        content,
        $blocks,
    });

    return h(Tooltip, {
        children: [children, contentVNode],
        ...rest,
        confirm: true,
        theme: 'light',
        hoverable: true,
        trigger: 'click',
    });
}

const functionalWrapper = (Component as any).functionalWrapper;
export const Popover: typeof _Popover = functionalWrapper
    ? functionalWrapper(Wrapper)
    : Wrapper;
