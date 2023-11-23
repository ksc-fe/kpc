import {Component, TypeDefs} from 'intact';
import template from './col.vdt';
import {PrimitiveValue, Value, BreakpointValues, breakpoints, Breakpoint} from './constants';
import {useBreakpoints} from './useBreakpoints';
import { useConfigContext } from '../config';

export type BaseColProps = {
    span?: PrimitiveValue, 
    offset?: PrimitiveValue, 
    order?: PrimitiveValue,
    pull?: PrimitiveValue,
    push?: PrimitiveValue,
}
export type BreakpointProps = BreakpointValues<keyof BaseColProps>;
export type ColProps = BaseColProps & BreakpointProps;

export const baseTypeDefs: Required<TypeDefs<BaseColProps>> = {
    span: PrimitiveValue,
    offset: PrimitiveValue,
    order: PrimitiveValue,
    pull: PrimitiveValue,
    push: PrimitiveValue,
}
const typeDefs: Required<TypeDefs<ColProps>> = {
    ...baseTypeDefs,
    ...breakpoints.reduce((memo, key) => {
        memo[key] = Value;
        return memo;
    }, {} as Record<Breakpoint, typeof Value>),
};

export class Col extends Component<ColProps> {
    static template = template;
    static typeDefs = typeDefs;

    private breakpoints = useBreakpoints();
    private config = useConfigContext();
}
