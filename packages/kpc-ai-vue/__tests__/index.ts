import '../../../test/test.styl';

const testsContext = require.context('./components/', true, /.*\.spec\.ts$/);
testsContext.keys().forEach(testsContext);
