import { RefObject, VNode, Children } from 'intact';
import { createContext } from '../context';
import { State } from '../../hooks/useState';


export interface VirtualContextValue {
    containerRef: RefObject<HTMLElement>;
    contentRef: RefObject<HTMLElement>;
    virtualChildren: State<VNode[] | Children[]>;
    translateY: State<number>;
    totalHeight: State<number>;
    startIndex: State<number>;
    endIndex: State<number>;
    updateHeights: () => void;
    scrollToIndex: (index: number, options?: ScrollOptions) => void;
    setGetChildrenFn: (fn: () => (VNode | Children)[]) => void;
    onChildrenChange: () => void;
}

export const VirtualContext = createContext<VirtualContextValue>();

export const useVirtualContext = () => {
    const context = VirtualContext.useContext();
    if (!context) {
        throw new Error('VirtualContext must be used within a VirtualProvider');
    }
    return context;
};