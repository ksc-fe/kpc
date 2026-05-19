import {Component, TypeDefs} from 'intact';
import template from './group.vdt';
import {useConfigContext} from '../config';
import {useMediaGroup} from './useMediaGroup';
import type {Container} from '../portal';

export interface MediaGroupProps {
    container?: Container
}

const typeDefs: Required<TypeDefs<MediaGroupProps>> = {
    container: [String, Function],
};

const defaults = (): Partial<MediaGroupProps> => ({
    container: undefined,
});

export class MediaGroup extends Component<MediaGroupProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();
    private group = useMediaGroup();
}
