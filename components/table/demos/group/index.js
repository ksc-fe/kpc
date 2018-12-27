export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [], 
            group: {status: ''},
            multipleData: [],
            multipleGroup: {status: []},
        }
    }

    _init() {
        this.oData = [
            {name: '主机1', status: 'active'},
            {name: '主机2', status: 'stopped'},
            {name: '主机3', status: 'active'},
        ];
        this.set({
            data: this.oData,
            multipleData: this.oData,
        });
    }

    _onChangeGroup(c, group) {
        console.log(group);
        const data = this.oData.filter(item => {
            let matched = true;
            for (let key in group) {
                const value = group[key];
                if (value && item[key] !== value) {
                    matched = false;
                    break;
                }
            }
            return matched;
        });

        this.set('data', data);
    }

    _onChangeMultipleGroup(c, group) {
        console.log(group);
        const data = this.oData.filter(item => {
            let matched = true;
            for (let key in group) {
                const value = group[key];
                if (value.length && value.indexOf(item[key]) === -1) {
                    matched = false;
                    break;
                }
            }
            return matched;
        });

        this.set('multipleData', data);
    }
}