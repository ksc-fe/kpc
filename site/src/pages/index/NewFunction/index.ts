import {Component, TypeDefs, createRef, nextTick} from 'intact';
import template from './index.vdt';
import {bind} from 'components/utils';
import {Coordinates} from '../../../components/BezierBox';
import {Message} from 'kpc';

export interface NewFunctionProps {
    cardLeft: number
    totalCards: number
    curCardNum: number
    cardsPerPage: number
    animationType: string
    bezierValue: number[]
    curTabIndex: string
    textTop: string
    transition: string
    curComponentsGroup: number
    editableText: string
    scrollSelectData: any[]
    curTreeValue: string[]
    selectedMenu: string
}

const typeDefs: Required<TypeDefs<NewFunctionProps>> = {
    cardLeft: Number,
    totalCards: Number,
    curCardNum: Number,
    cardsPerPage: Number,
    animationType: String,
    bezierValue: Array,
    curTabIndex: String,
    textTop: String,
    transition: String,
    curComponentsGroup: Number,
    editableText: String,
    scrollSelectData: Array,
    curTreeValue: Array,
    selectedMenu: String
};

const createMonthVal = () => {
    return Array.from({length: 12}).map((v, i) => ({label: i + 1 + '月', value: i}));
}

const defaults = (): Partial<NewFunctionProps> => ({
    cardLeft: 0,
    totalCards: 3,
    curCardNum: 2,
    cardsPerPage: 2,
    animationType: '',
    bezierValue: [.42, 0, .58, 1],
    curTabIndex: '1',
    textTop: '40',
    transition: 'all 0s ease',
    curComponentsGroup: 0,
    editableText: 'Editable text',
    scrollSelectData: createMonthVal(),
    curTreeValue: ['设计师小蓝'],
    selectedMenu: '1'
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
                this.showTransition();
            }
        });

        this.watch('curTabIndex', (value: string) => {
            if(value == '2') {
                this.showTransition();
            }
        })
    }

    setCardBoxPosition() {
        const {curCardNum, cardsPerPage, totalCards} = this.get();
        const cardWidthWithMargin = this.cardBoxRef.value!.offsetWidth / totalCards;
        this.set('cardLeft', (curCardNum - cardsPerPage) * cardWidthWithMargin);
    }

    showTransition() {
        this.set('transition', 'all 0s ease');
        this.set('textTop', '40');
        setTimeout(() => {
            const bezierValue = this.get('bezierValue').join();
            this.set('transition', `all .3s cubic-bezier(${bezierValue})`);
            this.set('textTop', '0');
        });
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

        // Show tarnsition when bezier value change
        this.showTransition();
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

    @bind
    changeComponentsGroup(): void {
        const cur = this.get('curComponentsGroup');
        this.set('curComponentsGroup', (cur + 1) % 3);
    }

    @bind
    handleGlobalInfo(): void {
        Message.success('成功');
    }
}