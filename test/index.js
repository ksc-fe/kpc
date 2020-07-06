import Intact from 'intact';
import {matchSnapshot} from 'chai-karma-snapshot';
// import 'babel-polyfill';
import '../styles/kpc.styl';
import './test.styl';
import mx from '../components/diagram/mxgraph/mx';

chai.use(matchSnapshot);

// disable POINTER because it is always false on Mac
mx.mxClient.IS_POINTER = false;

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../components/', true, /index\.spec\.js/);
// const testsContext = require.context('../components/tooltip/', true, /index\.spec\.js/);
testsContext.keys().forEach(testsContext);

Intact.Vdt.configure('delimiters', ['{{', '}}']);

// test demos
require('./demos');
