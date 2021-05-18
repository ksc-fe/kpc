import mx from './mx';
import {hasWindow} from '../../utils';

import mxConstantsSetup from './util/mxConstants';
import mxGuideSetup from './util/mxGuide';
import mxShapeSetup from './shape/mxShape';
import mxRectangleShapeSetup from './shape/mxRectangleShape';
import mxEllipseSetup from './shape/mxEllipse';
import mxRhombusSetup from './shape/mxRhombus';
import mxHexagonSetup from './shape/mxHexagon';
import mxTriangleSetup from './shape/mxTriangle';
import mxCloudSetup from './shape/mxCloud';
import mxLineSetup from './shape/mxLine';
import mxCylinderSetup from './shape/mxCylinder';
import mxGraphSetup from './view/mxGraph';
import mxCellEditorSetup from './view/mxCellEditor';
import mxCellRendererSetup from './view/mxCellRenderer';
import mxConnectionHandlerSetup from './handler/mxConnectionHandler';
import mxVertexHandlerSetup from './handler/mxVertexHandler';
import mxConstraintHandlerSetup from './handler/mxConstraintHandler';
import mxEdgeHandlerSetup from './handler/mxEdgeHandler';
import mxGraphHandlerSetup from './handler/mxGraphHandler';
import mxRubberbandSetup from './handler/mxRubberband';

if (hasWindow) {
    mxConstantsSetup();
    mxGuideSetup();
    mxShapeSetup();
    mxRectangleShapeSetup();
    mxEllipseSetup();
    mxRhombusSetup();
    mxHexagonSetup();
    mxTriangleSetup();
    mxCloudSetup();
    mxLineSetup();
    mxCylinderSetup();
    mxGraphSetup();
    mxCellEditorSetup();
    mxCellRendererSetup();
    mxConnectionHandlerSetup();
    mxVertexHandlerSetup();
    mxConstraintHandlerSetup();
    mxEdgeHandlerSetup();
    mxGraphHandlerSetup();
    mxRubberbandSetup();
}

export default mx;
