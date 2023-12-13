import {createApp, render, h} from 'vue';
import {Component, createRef} from 'intact';
import {mount, unmount, testDemos, wait, nextFrame} from '@/test/utils';
import {matchSnapshot} from 'chai-karma-snapshot';
import mx from '../components/diagram/mxgraph/mx';
import '../../../test/test.styl';

chai.use(matchSnapshot);

mx.mxClient.IS_POINTER = false;

const testsContext = require.context('./components/', true, /.*\.spec\.ts/);
testsContext.keys().forEach(testsContext);

const vueReq = require.context('~/components/', true, /^((?!(affix|code)).)*\/demos\/.*next\.vue$/);
// const vueReq = require.context('~/components/', true, /select\/demos\/.*next\.vue$/);

describe('Vue Next Demos', () => {
    afterEach(() => unmount());

    function wrap(Demo: any) {
        return class extends Component {
            static template = '<div ref={this.elementRef}></div>';
            private elementRef = createRef<HTMLElement>();

            mounted() {
                createApp({
                    render: () => h(Demo)
                }).mount(this.elementRef.value!);
            }

            beforeUnmount() {
                render(null, this.elementRef.value!);
            }
        }
    }

    testDemos(vueReq, async (Demo: any) => {
        const [instance, element] = mount(wrap(Demo));
        await wait();
        // FIXME: I don't why the width of `autoWidth` input is an unexpected value
        // while we run test on Github Actions.
        const innerHTML = element.innerHTML.replace(/(\<input.*?style="width: )(?:.*?)(px;")/g, '$1$2');
        expect(innerHTML).to.matchSnapshot();
    });
});
