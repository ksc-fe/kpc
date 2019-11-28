import {DShape} from './shape';

export class DText extends DShape {
    defaults() {
        return {
            ...super.defaults(),
            width: 40,
            height: 20,
        };
    }

    _getStylesheet() {
        return `text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;`;
    }
}
