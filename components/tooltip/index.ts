import {Props, createVNode as h, Children, Component} from 'intact';
import {
    Tooltip as BaseTooltip,
    TooltipProps as BaseTooltipProps,
    TooltipEvents,
    TooltipBlocks as BaseTooltipBlocks,
} from './tooltip';
import {TooltipContent, TooltipContentBlocks} from './content';
import {noop} from 'intact-shared';

export type {
    TooltipEvents,
}

export interface TooltipProps extends BaseTooltipProps {
    content?: Children
}

export interface TooltipBlocks extends BaseTooltipBlocks, TooltipContentBlocks {
    content: null
}

declare class _Tooltip extends BaseTooltip<TooltipProps, TooltipEvents, TooltipBlocks> { }

function Wrapper(props: Props<TooltipProps, BaseTooltip>) {
    let {children, content, $blocks, ...rest} = props;

    if ($blocks && $blocks.content) {
        content = $blocks.content(noop as any);
    }

    const contentVNode = h(TooltipContent, {
        children: content
    });

    return h(BaseTooltip, {
        children: [children, contentVNode],
        ...rest,
    });
}


const functionalWrapper = (Component as any).functionalWrapper;
export const Tooltip: typeof _Tooltip = functionalWrapper ?
    functionalWrapper(Wrapper) : Wrapper;
