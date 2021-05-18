import {DShape} from './shape';

const shapes = {
    Diamond: {
        width: 80,
        height: 80,
        stylesheet: 'rhombus;whiteSpace=wrap;html=1;'
    },
    Triangle: {
        width: 60,
        height: 80,
        stylesheet: 'triangle;whiteSpace=wrap;html=1;'
    },
    Cylinder: {
        width: 60,
        height: 80,
        stylesheet: 'shape=cylinder;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;',
    },
    Cloud: {
        width: 120,
        height: 80,
        stylesheet: 'ellipse;shape=cloud;whiteSpace=wrap;html=1;'
    },
};

const components = {};
for (let key in shapes) {
    const value = shapes[key];
    components[key] = class extends DShape {
        static displayName = `D${key}`;

        defaults() {
            return {
                ...super.defaults(),
                width: value.width,
                height: value.height,
            };
        }

        _getStylesheet() {
            return value.stylesheet;
        }
    };
}

export default components;
