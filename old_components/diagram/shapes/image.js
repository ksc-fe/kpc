import {DShape} from './shape';

export class DImage extends DShape {
    static displayName = 'DImage';

    static propTypes = {
        ...DShape.propTypes,
        src: String,
    };

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
