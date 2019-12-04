// export {default as Diagram, default} from './diagram';

// export {DRectangle} from './shapes/rectangle';
// export {DSquare} from './shapes/square';
// export {DCircle} from './shapes/circle';
// export {DEllipse} from './shapes/ellipse';
// export {DLine} from './shapes/line';
// export {DImage} from './shapes/image';
// export {DText} from './shapes/text';

// import shapes from './shapes/generateShapes';
// const {Diamond, Parallelogram, Hexagon, Triangle, Cylinder, Cloud, Document, Callout} = shapes;
// export {
    // Diamond as DDiamond,
    // Parallelogram as DParallelogram,
    // Hexagon as DHexagon, 
    // Triangle as DTriangle,
    // Cylinder as DCylinder, 
    // Cloud as DCloud,
    // Document as DDocument,
    // Callout as DCallout
// };

// export {DFlowLayout} from './layouts/flow';
// export {DTreeLayout} from './layouts/tree';
// export {DOrganicLayout} from './layouts/organic';
// export {DCircleLayout} from './layouts/circle';

/**
 * use import and export so that we can generate index.js by gulp
 */
import Diagram from './diagram';
import {DRectangle} from './shapes/rectangle';
import {DSquare} from './shapes/square';
import {DCircle} from './shapes/circle';
import {DEllipse} from './shapes/ellipse';
import {DLine} from './shapes/line';
import {DImage} from './shapes/image';
import {DText} from './shapes/text';
import shapes from './shapes/generateShapes';
import {DFlowLayout} from './layouts/flow';
import {DTreeLayout} from './layouts/tree';
import {DOrganicLayout} from './layouts/organic';
import {DCircleLayout} from './layouts/circle';

const {
    Diamond: DDiamond,
    Parallelogram: DParallelogram,
    Hexagon: DHexagon,
    Triangle: DTriangle,
    Cylinder: DCylinder,
    Cloud: DCloud,
    Document: DDocument,
    Callout: DCallout,
} = shapes;

export default Diagram;

export {Diagram, DRectangle, DSquare, DCircle, DEllipse, DLine, DImage, DText, DDiamond, DParallelogram, DHexagon, DTriangle, DCylinder, DCloud, DDocument, DCallout, DFlowLayout, DTreeLayout, DOrganicLayout, DCircleLayout};
