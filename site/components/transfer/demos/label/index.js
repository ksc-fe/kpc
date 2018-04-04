export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {name: '主机名0', desc: '前端服务器0', ip: '192.168.1.0'},
                {name: '主机名1', desc: '前端服务器1', ip: '192.168.1.1'},
                {name: '主机名2', desc: '前端服务器2', ip: '192.168.1.2'},
                {name: '主机名3', desc: '前端服务器3', ip: '192.168.1.3', disabled: true},
                {name: '主机名4', desc: '前端服务器4', ip: '192.168.1.4'},
            ]
        }
    }
}