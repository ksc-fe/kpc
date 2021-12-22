import {Component, TypeDefs} from 'intact';
import template from './index.vdt';

export interface BestPracticeProps {
    codeContent: string
    contentInput: string
    iconPosition: string
    buttonStatus: string
    buttonRadius: number
    buttonRadiusMax: number
    buttonRadiusMin: number
}

const typeDefs: Required<TypeDefs<BestPracticeProps>> = {
    codeContent: String,
    contentInput: String,
    iconPosition: String,
    buttonStatus: String,
    buttonRadius: Number,
    buttonRadiusMax: Number,
    buttonRadiusMin: Number
};


const defaults = (): Partial<BestPracticeProps> => ({
    codeContent: 'hello world',
    contentInput: 'Button',
    iconPosition: 'left',
    buttonStatus: 'primary',
    buttonRadius: 2,
    buttonRadiusMax: 24,
    buttonRadiusMin: 0
});

export class BestPractice extends Component {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        
    }
}
