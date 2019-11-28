import {DShape} from './shape';

export class DImage extends DShape {
    defaults() {
        return {
            ...super.defaults(),
            width: 80,
            height: 80,
            src: '',
        };
    }

    _getStylesheet() {
        const {src} = this.get();

        return `image;html=1;labelBackgroundColor=#ffffff;image=${src};`;
    }
}
