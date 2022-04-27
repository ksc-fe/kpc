import {Component, TypeDefs} from 'intact';
import template from './index.vdt';

export interface ImgBoxProps {
    imgList: any[]
    show: boolean
    curImgIndex: number
    baseWidth: number,
    imgWidth: number
}

export interface ImgBoxEvents {
    closebox: [boolean]
}

const typeDefs: Required<TypeDefs<ImgBoxProps>> = {
    imgList: Array,
    show: Boolean,
    curImgIndex: Number,
    baseWidth: Number,
    imgWidth: Number
};


const defaults = (): Partial<ImgBoxProps> => ({
    imgList: [],
    show: false,
    curImgIndex: 0,
    baseWidth: 0,
    imgWidth: 950
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

    setBaseWidth() {
        this.set('baseWidth', Math.round((document.body.clientWidth - this.get('imgWidth')) / 2));
    }

    init() {
        const handleWindowResize = this.setBaseWidth.bind(this);

        this.watch('show', (v: boolean) => {
            if(v) {
                this.setBaseWidth();
                window.addEventListener('resize', handleWindowResize);
            } else {
                window.removeEventListener('resize', handleWindowResize);
            }
        });
    }
}
