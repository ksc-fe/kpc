import '../../../test/test.styl';

const testsContext = require.context('./components/', true, /.*\.spec\.tsx?$/);
testsContext.keys().forEach(testsContext);
