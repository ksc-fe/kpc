export {default as Diagram, default} from './diagram';

export {DRectangle} from './shapes/rectangle';
export {DSquare} from './shapes/square';
export {DCircle} from './shapes/circle';
export {DEllipse} from './shapes/ellipse';
export {DLine} from './shapes/line';
export {DImage} from './shapes/image';
export {DText} from './shapes/text';

import shapes from './shapes/generateShapes';
const {Diamond, Parallelogram, Hexagon, Triangle, Cylinder, Cloud, Document, Callout} = shapes;
export {
    Diamond as DDiamond,
    Parallelogram as DParallelogram,
    Hexagon as DHexagon, 
    Triangle as DTriangle,
    Cylinder as DCylinder, 
    Cloud as DCloud,
    Document as DDocument,
    Callout as DCallout
};

export {DFlowLayout} from './layouts/flow';
export {DTreeLayout} from './layouts/tree';
export {DOrganicLayout} from './layouts/organic';
export {DCircleLayout} from './layouts/circle';
