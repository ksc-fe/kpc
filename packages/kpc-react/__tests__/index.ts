import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Component, createRef} from 'intact';
import {mount, unmount, testDemos, wait, nextFrame} from '../../../test/utils';
import {matchSnapshot} from 'chai-karma-snapshot';
import mx from '../components/diagram/mxgraph/mx';
import '../../../test/test.styl';

chai.use(matchSnapshot);

mx.mxClient.IS_POINTER = false;

const testsContext = require.context('./components/', true, /.*\.spec\.tsx?/);
testsContext.keys().forEach(testsContext);

// const reactReq = require.context('~/components/', true, /^((?!(affix|code|layout)).)*\/demos\/.*react\.tsx$/);
const reactReq = require.context('~/components/', true, /^((?!(affix|code)).)*\/demos\/.*react\.tsx$/);
// const reactReq = require.context('~/components/', true, /button\/demos\/.*react\.tsx$/);

describe('React Demos', () => {
    afterEach(() => unmount());

    function wrap(Demo: any) {
        return class extends Component {
            static template = '<div ref={this.elementRef}></div>';
            private elementRef = createRef<HTMLElement>();

            mounted() {
                ReactDOM.render(
                    React.createElement(Demo),
                    this.elementRef.value!
                );
            }

            beforeUnmount() {
                ReactDOM.unmountComponentAtNode(this.elementRef.value!);
            }
        }
    }

    testDemos(reactReq, async (Demo) => {
        const [instance, element] = mount(wrap(Demo as any));
        await wait(100);
        // FIXME: I don't why the width of `autoWidth` input is an unexpected value
        // while we run test on Github Actions.
        const innerHTML = element.innerHTML.replace(/(\<input.*?style="width: )(?:.*?)(px;")/g, '$1$2');
        expect(innerHTML).to.matchSnapshot();
    });
});
