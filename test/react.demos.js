import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from './utils';
import {matchSnapshot} from 'chai-karma-snapshot';

chai.use(matchSnapshot);

const reactReq = require.context('~/components/', true, /demos\/.*index\.jsx$/);

describe('React Demos', () => {
    let demo;

    function wrap(Demo) {
        return class extends Intact {
            @Intact.template()
            static template = '<div></div>';

            _mount() {
                ReactDOM.render(
                    React.createElement(Demo),
                    this.element
                );
            }

            _destroy() {
                ReactDOM.unmountComponentAtNode(this.element);
            }
        }
    }
    reactReq.keys().forEach(item => {
        const paths = item.split('/');
        const name = paths[1];
        const type = paths[3];
        const Demo = reactReq(item);


        it(`${name[0].toUpperCase()}${name.substring(1)} ${type}`, () => {
            demo = mount(wrap(Demo));
            console.log(demo.element.innerHTML);
            expect(demo.element.innerHTML).to.matchSnapshot();
        });
    });
});
