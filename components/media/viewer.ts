import {Component, TypeDefs} from 'intact';
import template from './viewer.vdt';
import {useConfigContext} from '../config';
import {useMediaViewer} from './useMediaViewer';
import type {Container} from '../portal';
import type {MediaViewerItem} from './types';

export interface MediaViewerProps {
    className?: string
    value?: boolean
    item?: MediaViewerItem | null
    index?: number
    total?: number
    hasPrev?: boolean
    hasNext?: boolean
    container?: Container
    onClose?: () => void
    onAfterClose?: () => void
    onPrev?: () => void
    onNext?: () => void
}

const typeDefs: Required<TypeDefs<MediaViewerProps>> = {
    className: String,
    value: Boolean,
    item: Object,
    index: Number,
    total: Number,
    hasPrev: Boolean,
    hasNext: Boolean,
    container: [String, Function],
    onClose: Function,
    onAfterClose: Function,
    onPrev: Function,
    onNext: Function,
};

const defaults = (): Partial<MediaViewerProps> => ({
    className: undefined,
    value: false,
    item: null,
    index: 0,
    total: 0,
    hasPrev: false,
    hasNext: false,
    container: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onPrev: undefined,
    onNext: undefined,
});

export class MediaViewer extends Component<MediaViewerProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
    private viewer = useMediaViewer();
}
