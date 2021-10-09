export * from './diagram';
export * from './shapes/callout';
export * from './shapes/circle';
export * from './shapes/document';
export * from './shapes/ellipse';
export * from './shapes/hexagon';
export * from './shapes/image';
export * from './shapes/parallelogram';
export * from './shapes/rectangle';
export * from './shapes/square';
export * from './shapes/text';
import shapes from './shapes/generateShapes';

const {
    Diamond: DDiamond,
    Triangle: DTriangle,
    Cylinder: DCylinder,
    Cloud: DCloud,
} = shapes;

export {DDiamond, DTriangle, DCylinder, DCloud};
