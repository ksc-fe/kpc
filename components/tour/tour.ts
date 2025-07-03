import {
    Component,
    TypeDefs,
    VNode,
    createRef,
    onMounted,
    onUpdated,
    nextTick
} from "intact";
import template from "./tour.vdt";
import { useConfigContext } from '../config';
import { TourStepProps } from './step';
import type {Events} from '../types';
import { createContext } from '../context';
import { usePosition } from './usePosition';
import { Feedback } from '../position';
import { useSteps } from './useSteps';
import { useArrow } from './useArrow';
import { useHighlight } from './useHighlight';
import { useNavigation } from './useNavigation';
import { useFixBody } from './useFixBody';
import { useMaskClosable } from './useMaskClosable';
import {Theme, themes} from './styles';

export interface TourProps {
    value?: number;
    theme?: Theme
    data?: TourStepProps[];
    beforeChange?: (current: number) => boolean | Promise<boolean>;
    maskClosable?: boolean;
    closable?: boolean;
    doneText?: string;
    showArrow?: boolean;
    visible?: boolean;
}

export interface TourEvents {
    finish: [];
    prev: [number];
    next: [number];
    positioned: [Feedback];
}

export interface TourBlocks {
    default: null;
}

export interface TourContextValue {
    value: number;
    total: number;
    doneText: string;
    closable: boolean;
    onPrev: () => void;
    onNext: () => void;
    onFinish: () => void;
}

export const TourContext = createContext<TourContextValue>();

const typeDefs: Required<TypeDefs<TourProps>> = {
    value: Number,
    theme: themes,
    data: Array,
    beforeChange: Function,
    maskClosable: Boolean,
    closable: Boolean,
    doneText: String,
    showArrow: Boolean,
    visible: Boolean,
};

const defaults = (): Partial<TourProps> => ({
    value: 0,
    theme: 'light',
    data: [],
    maskClosable: true,
    closable: true,
    doneText: '完成',
    showArrow: true,
    visible: true,
});

const events: Events<TourEvents> = {
    finish: true,
    prev: true,
    next: true,
    positioned: true,
};

export class Tour extends Component<TourProps, TourEvents, TourBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    public config = useConfigContext();
    public tourRef = createRef<HTMLDivElement>();
    
    public steps = useSteps();
    public arrow = useArrow();
    public highlight = useHighlight(this.steps.getTargetElement);
    private position = usePosition(this.tourRef, this.steps.getTargetElement);
    public navigation = useNavigation(this.steps.getTotalSteps);
    private fixBody = useFixBody();
    private useMaskClosable = useMaskClosable();
    
} 