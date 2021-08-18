import {useInstance} from 'intact';
import {Breakpoint, breakpoints, BreakpointPropsValues} from './constants';
import type {Col, BreakpointProps, BaseColProps} from './col';
import {isStringOrNumber, isNullOrUndefined} from 'intact-shared';
import {baseTypeDefs} from './col';

type BaseProps = Extract<keyof typeof baseTypeDefs, string>;

export function useBreakpoints() {
    const instance = useInstance() as Col;
    const breakpointsValue: Partial<Record<Breakpoint, BreakpointPropsValues<keyof BaseColProps> | null>> = {}

    breakpoints.forEach((breakpoint) => {
        instance.on(`$receive:${breakpoint}`, (v: BreakpointProps['xxl']) => {
            if (!v) {
                breakpointsValue[breakpoint] = null;
            } else if (isStringOrNumber(v)) {
                breakpointsValue[breakpoint] = {
                    span: Number(v)
                }
            } else {
                breakpointsValue[breakpoint] = v;
            } 
        });
    });

    function getBreakpointsClassName() {
        const classNameObj: Record<string, true> = {};
        breakpoints.forEach(breakpoint => {
            const value = breakpointsValue[breakpoint];
            if (isNullOrUndefined(value)) return;

            const prefix = breakpoint === 'xs' ? 'k-' : `k-${breakpoint}-`;
            if (!isNullOrUndefined(value.span)) {
                classNameObj[`${prefix}${value.span}`]  = true;
            }
            (Object.keys(baseTypeDefs) as BaseProps[]).forEach((prop) => {
                // ignore span prop
                if (prop === 'span') return;
                if (!isNullOrUndefined(value[prop])) {
                    classNameObj[`${prefix}${prop}-${value[prop]}`] = true;
                }
            });
        });

        return classNameObj;
    }

    return {getBreakpointsClassName};
}
