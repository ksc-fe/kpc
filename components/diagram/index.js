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
import {DDocument} from './shapes/document';
import {DCallout} from './shapes/callout';
import {DParallelogram} from './shapes/parallelogram';
import {DHexagon} from './shapes/hexagon';
import shapes from './shapes/generateShapes';

import {DFlowLayout} from './layouts/flow';
import {DTreeLayout} from './layouts/tree';
import {DRadialLayout} from './layouts/radial';
import {DOrganicLayout} from './layouts/organic';
import {DCircleLayout} from './layouts/circle';
import {DStackLayout} from './layouts/stack';
import {DPartitionLayout} from './layouts/partition';

const {
    Diamond: DDiamond,
    Triangle: DTriangle,
    Cylinder: DCylinder,
    Cloud: DCloud,
} = shapes;

export default Diagram;

// don't break line
export {Diagram, DRectangle, DSquare, DCircle, DEllipse, DLine, DImage, DText, DDiamond, DParallelogram, DHexagon, DTriangle, DCylinder, DCloud, DDocument, DCallout, DFlowLayout, DTreeLayout, DRadialLayout, DOrganicLayout, DCircleLayout, DStackLayout, DPartitionLayout};
