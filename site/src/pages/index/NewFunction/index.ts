import {Component, TypeDefs, createRef, nextTick} from 'intact';
import template from './index.vdt';
import {bind} from 'components/utils';
import {Coordinates} from '../../../components/BezierBox';

export interface NewFunctionProps {
    cardLeft: number
    totalCards: number
    curCardNum: number
    cardsPerPage: number
    animationType: string
    bezierValue: number[]
    curTabIndex: string
    textTop: string
}

const typeDefs: Required<TypeDefs<NewFunctionProps>> = {
    cardLeft: Number,
    totalCards: Number,
    curCardNum: Number,
    cardsPerPage: Number,
    animationType: String,
    bezierValue: Array,
    curTabIndex: String,
    textTop: String
};

const defaults = (): Partial<NewFunctionProps> => ({
    cardLeft: 0,
    totalCards: 3,
    curCardNum: 2,
    cardsPerPage: 2,
    animationType: '',
    bezierValue: [.42, 0, .58, 1],
    curTabIndex: '1',
    textTop: '40'
});

const curveTypeMap: any = {
    '1': [.53, .01, .53, .98],
    '2': [.35, .27, .35, 1],
    '3': [.86, .03, 1, 1]
};

export class NewFunction extends Component<NewFunctionProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private cardBoxRef = createRef<HTMLElement>();

    init() {
        this.watch('animationType', (value: string) => {
            const target = curveTypeMap[value];
            if(target) {
                this.set('bezierValue', target);
            }
        });

        this.watch('curTabIndex', (value: string) => {
            setTimeout(() => {
                this.set('textTop', value == '2' ? '0' : '40');
            });
        })
    }

    setCardBoxPosition() {
        const {curCardNum, cardsPerPage, totalCards} = this.get();
        const cardWidthWithMargin = this.cardBoxRef.value!.offsetWidth / totalCards;
        this.set('cardLeft', (curCardNum - cardsPerPage) * cardWidthWithMargin);
    }

    showTransition() {
        
    }

    @bind
    handleBezierValChange(bezierValue: Coordinates) {
        let targetCurveType = '';
        Object.keys(curveTypeMap).forEach(key => {
            const isEqual = curveTypeMap[key].every((item: number, index: number) => item == bezierValue[index]);
            if(isEqual) {
                targetCurveType = key;
            }
        })
        this.set('animationType', targetCurveType);
        this.set('bezierValue', bezierValue);
    }

    @bind
    handlePrevClick(): void {
        this.set('curCardNum', this.get('curCardNum') - 1);
        this.setCardBoxPosition();
    }

    @bind
    handleNextClick(): void {
        this.set('curCardNum', this.get('curCardNum') + 1);
        this.setCardBoxPosition();
    }

    test() {
        
    }
}