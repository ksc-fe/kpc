import { Props, createVNode as h, Children, Component } from "intact";
import { Tooltip as BasePopover } from "../tooltip/tooltip";
import {
    type TooltipProps as BasePopoverProps,
    type TooltipEvents as BasePopoverEvents,
    type TooltipBlocks as BasePopoverBlocks,
} from "../tooltip/tooltip";
import { TooltipContent as PopoverContentWrapper, TooltipContentBlocks as PopoverContentBlocks } from "../tooltip/content";
import { PopoverContent } from './content';

export interface PopoverProps extends BasePopoverProps {
    title?: string;
    content?: string;
    type?: 'success' | 'warning' | 'error' | 'info'
    confirm: never;
}

export interface PopoverEvents extends BasePopoverEvents {}

export interface PopoverBlocks extends BasePopoverBlocks, PopoverContentBlocks {
  title: null;
  content: null;
  buttons: null;
}

export declare class _Popover extends BasePopover<PopoverProps, PopoverEvents, PopoverBlocks> {}

function Wrapper(props: Props<PopoverProps, BasePopover>) {
  let { trigger, theme, children, type, title, content, $blocks, ...rest } = props;

  const blocks: any = {};
  if ($blocks) {
    if ($blocks.title) {
      blocks.title = $blocks.title;
    }

    if ($blocks.content) {
      blocks.content = $blocks.content;
    }
  }

  const popoverContentVNode = h(PopoverContent, {
      type,
      title,
      content,
      $blocks: blocks,
  });

  const buttons = $blocks && $blocks.buttons ? { buttons: $blocks.buttons } : undefined;
  const contentVNode = h(PopoverContentWrapper, {
      children: popoverContentVNode,
      $blocks: buttons,
  });

  return h(BasePopover, {
    children: [children, contentVNode],
    trigger: trigger || 'click',
    theme: theme || 'light',
    ...rest,
    confirm: true,
  });
}

const functionalWrapper = (Component as any).functionalWrapper;
export const Popover: typeof _Popover = functionalWrapper
  ? functionalWrapper(Wrapper)
  : Wrapper;
