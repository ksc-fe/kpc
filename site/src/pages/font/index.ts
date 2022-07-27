import template from './index.vdt';
import {Component} from 'intact';
import Layout from '../layout';
import Chroma from 'chroma-js';
import {Message, Dialog} from 'kpc';
// interface ColorProcessProps {
//     inputColor: string,
//     theme: string,
//     colorType: string,
//     pickerColor: string,
//     contrastMenu: boolean,
//     preColor: string,
//     bacColor: string
// }

export default class Index extends Layout {
    static template = template;

    static defaults = () => {
        return {
            ...Layout.defaults()
        }
    };
}
