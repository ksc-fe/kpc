import {Component, createRef} from 'intact';
import template from './index.vdt';
import Layout from '../layout';
import {BestPractice} from './BestPractice';

export default class Index extends Layout {
    static template = template;

    private bestPrac = createRef<BestPractice>();

    private bannerVideo = createRef<HTMLElement>();

    handleColorChange(color: string) {
        super.handleColorChange(color);
        this.bestPrac!.value?.setFrameValue(color);
    }

    mounted() {
        const video = <HTMLVideoElement>this.bannerVideo.value;
        video.oncanplay = () => {
            this.set('videoLevel', 5);
        }
    }
}
