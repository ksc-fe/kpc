import {TypeDefs} from 'intact';
import {DShape, DShapeProps} from './shape';

export interface DRectangleProps extends DShapeProps {
    rounded?: number | string
}

const typeDefs: Required<TypeDefs<DRectangleProps>> = {
    ...DShape.typeDefs,
    rounded: [Number, String],
}

export class DRectangle extends DShape<DRectangleProps> {
    static displayName = 'DRectangle';
    static typeDefs = typeDefs;

    static defaults() {
        return {
            ...DShape.defaults(),
            width: 120,
            height: 60,
            rounded: 0,
        };
    }

    public getStylesheet() {
        const {rounded} = this.get();

        return `rounded=${+rounded! ? 1 : 0};whiteSpace=wrap;html=1;arcSize=${rounded}`;
    }
}
