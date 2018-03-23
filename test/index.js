import Intact from 'intact';
import {matchSnapshot} from 'chai-karma-snapshot';
import 'babel-polyfill';
import '../styles/kpc.styl';

chai.use(matchSnapshot);

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../components/', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

Intact.Vdt.configure('delimiters', ['{{', '}}']);

// test demos
require('./demos');
