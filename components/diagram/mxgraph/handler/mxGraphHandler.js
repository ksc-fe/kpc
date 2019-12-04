import mx from '../mx';

const {mxGraphHandler} = mx;

mxGraphHandler.prototype.maxLivePreview = 16;

// Enables guides
mxGraphHandler.prototype.guidesEnabled = true;

// Removes parents where all child cells are moved out
mxGraphHandler.prototype.removeEmptyParents = true;
