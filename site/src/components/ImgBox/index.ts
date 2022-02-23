import {Component, TypeDefs} from 'intact';
import template from './index.vdt';

export interface ImgBoxProps {
    imgList: any[]
    show: boolean
    curImgIndex: number
    baseWidth: number
}

export interface ImgBoxEvents {
    closebox: [boolean]
}

const typeDefs: Required<TypeDefs<ImgBoxProps>> = {
    imgList: Array,
    show: Boolean,
    curImgIndex: Number,
    baseWidth: Number,
};


const defaults = (): Partial<ImgBoxProps> => ({
    imgList: [],
    show: false,
    curImgIndex: 0,
    baseWidth: 0
});

export class ImgBox extends Component<ImgBoxProps, ImgBoxEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    handleShadowClick() {
        this.trigger('closebox', false);
        this.set('curImgIndex', 0);
    }

    handleLeftArrowClick(e: MouseEvent) {
        e.stopPropagation();
        this.set('curImgIndex', this.get('curImgIndex') + 1);
    }

    handleRightArrowClick(e: MouseEvent) {
        e.stopPropagation();
        this.set('curImgIndex', this.get('curImgIndex') - 1);
    }

    init() {
        this.set('baseWidth', Math.round((document.body.clientWidth - 950) / 2));
    }
}
