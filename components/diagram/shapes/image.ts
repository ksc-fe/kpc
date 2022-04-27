import {TypeDefs} from 'intact';
import {DShape, DShapeProps} from './shape';

export interface DImageProps extends DShapeProps {
    src?: string
}

const typeDefs: Required<TypeDefs<DImageProps>> = {
    ...DShape.typeDefs,
    src: String,
}

export class DImage extends DShape<DImageProps> {
    static displayName = 'DImage';
    static typeDefs = typeDefs;
    static defaults() {
        return {
            ...DShape.defaults(),
            width: 80,
            height: 80,
            src: '',
        };
    }

    public getStylesheet() {
        const {src} = this.get();

        return `image;html=1;labelBackgroundColor=#ffffff;image=${src};`;
    }
}
