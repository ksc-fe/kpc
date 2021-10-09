import {DShape} from './shape';

export class DText extends DShape {
    static displayName = 'DText';

    static defaults() {
        return {
            ...DShape.defaults(),
            width: 40,
            height: 20,
        };
    }

    public getStylesheet() {
        return `text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;`;
    }
}
