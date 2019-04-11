export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

function mockApi(policy) {
    const data = [
        {name: 'AdministratorAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'OSSFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'SupportFullAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'BSSFullSupportAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限', disabled: true},
        {name: 'SystemFullAccess', policy: 'system', 'members': 11, desc: '管理所有资源的权限'},
        {name: 'CommonAccess', policy: 'common', 'members': 11, desc: '管理所有资源的权限'},
    ];

    return new Promise(resolve => {
        setTimeout(() => {
            if (policy === 'all') resolve(data);
            else resolve(data.filter(item => item.policy === policy));
        }, 500);
    });
}

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            policy: 'all',
            data: []
        }
    }

    _init() {
        // when policy changed, fetch data
        this.on('$change:policy', this._fetch);
        this.on('$change:keywords', this._filter);
        this._fetch();
    }

    _fetch() {
        mockApi(this.get('policy')).then(data => {
            this.originData = data;
            this._filter();
        });
    }

    _filter() {
        const keywords = this.get('keywords');
        const data = keywords ? 
            this.originData.filter(data => {
                return data.name.includes(keywords);
            }) :
            this.originData;
        this.set('data', data);
    }
}