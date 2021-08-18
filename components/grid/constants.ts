export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type PrimitiveValue = string | number
export type BreakpointValue = {
    [key in Breakpoint]: PrimitiveValue
};
export type Value = PrimitiveValue | BreakpointValue;
export type BreakpointPropsValues<T extends string> = {[key in T]?: PrimitiveValue}
export type BreakpointValues<T extends string> = Record<Breakpoint, PrimitiveValue | null | undefined | BreakpointPropsValues<T>>

export const Value = [String, Number, Object];
export const PrimitiveValue = [String, Number];

export const responsiveMap: Record<Breakpoint, string> = {
    xxl: `(min-width: 1400px)`,
    xl: `(min-width: 1200px)`,
    lg: `(min-width: 992px)`,
    md: `(min-width: 768px)`,
    sm: `(min-width: 576px)`,
    xs: `(max-width: 575px)`,
};

export const breakpoints = Object.keys(responsiveMap) as Breakpoint[];

