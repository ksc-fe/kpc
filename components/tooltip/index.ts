import {Props, createVNode as h, Children, Component} from 'intact';
import {
    Tooltip as BaseTooltip,
    TooltipProps as BaseTooltipProps
} from './tooltip';
import {TooltipContent} from './content';
import {noop} from 'intact-shared';

export interface TooltipProps extends BaseTooltipProps {
    content?: Children 
}

export type Tooltip = typeof BaseTooltip

function _Tooltip(props: Props<TooltipProps, BaseTooltip>) {
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
export const Tooltip = functionalWrapper ? functionalWrapper(_Tooltip) : _Tooltip;
