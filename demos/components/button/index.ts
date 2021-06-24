import {Component} from 'intact';
import template from './index.vdt';
import {bind} from '../../../components/utils';
import {theme} from '../../../styles/theme';
import {css} from '@emotion/css';

export default class extends Component {
    static template = template;

    @bind
    changeTheme() {
        theme.color.primary = 'orange';
        this.forceUpdate();
    }

    benchmarks() {
        class A {
            hello() {
                // let sum = 0;
                // for (let i = 0; i < 1000; i++) {
                    // sum += i;
                // }
            }
        }

        class B {
            hello: Function;
            constructor() {
                this.hello = () => {
                    // let sum = 0;
                    // for (let i = 0; i < 1000; i++) {
                        // sum += i;
                    // }
                }
            }
        }
        console.time('a');
        // for (let i = 0; i < 10; i++) {
            // makeStyles1(i);
        // } 
        for (let i = 0; i < 1000000; i++) {
            const a = new A();
            a.hello();
        }
        console.timeEnd('a');

        console.time('b');
        // for (let i = 0; i < 10; i++) {
            // makeStyles2(i);
        // } 
        for (let i = 0; i < 1000000; i++) {
            const b = new B();
            b.hello();
        }
        console.timeEnd('b');

    }
}

const makeStyles1 = (count: number) => {
    return css`
        cursor: pointer;
        display: inline-block;
        height: '10px';
        padding: '10px';
        outline: none;
        vertical-align: middle;
        color: 'red';
        white-space: nowrap;
        transition: all .25s ease-in-out;
        button& > span {
            vertical-align: middle;
            line-height: calc(10px - 2px);
        }

        ${css`
            display: block;
            content: ${count};
        `}
    `;
}

const makeStyles2 = (count: number) => {
    return css`
        ${makeRootStyles()};
        ${css`
            display: block;
            content: ${count};
        `}
    `
}

const makeRootStyles = () => css`
    cursor: pointer;
    display: inline-block;
    height: '10px';
    padding: '10px';
    outline: none;
    vertical-align: middle;
    color: 'red';
    white-space: nowrap;
    transition: all .25s ease-in-out;
    button& > span {
        vertical-align: middle;
        line-height: calc(10px - 2px);
    }
`;
