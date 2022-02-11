import Vue from 'vue';
import {Component, createRef} from 'intact';
import {mount, unmount, testDemos, wait, nextFrame} from '../../../test/utils';
import {matchSnapshot} from 'chai-karma-snapshot';
import mx from '../components/diagram/mxgraph/mx';
import '../../../test/test.styl';

chai.use(matchSnapshot);

mx.mxClient.IS_POINTER = false;

// const testsContext = require.context('../components/', true, /index\.react\.spec\.ts/);
// testsContext.keys().forEach(testsContext);

const reactReq = require.context('~/components/', true, /^((?!(affix|code)).)*\/demos\/.*index\.vue$/);
// const reactReq = require.context('~/components/', true, /slider\/demos\/.*index\.vue$/);
// const reactReq = require.context('~/components/', true, /slider\/demos\/step\/index\.vue$/);

describe('Vue Legacy Demos', () => {
    afterEach(() => unmount());

    function wrap(Demo: any) {
        return class extends Component {
            static template = '<div><div ref={this.elementRef}></div></div>';
            private elementRef = createRef<HTMLElement>();
            private vue!: Vue;

            mounted() {
                this.vue = new Vue({
                    el: this.elementRef.value!,
                    render: (h) => h(Demo)
                });
            }

            beforeUnmount() {
                this.vue.$destroy();
            }
        }
    }

    testDemos(reactReq, async (Demo) => {
        const [instance, element] = mount(wrap(Demo as any));
        await wait();
        expect(element.innerHTML).to.matchSnapshot();
    });
});