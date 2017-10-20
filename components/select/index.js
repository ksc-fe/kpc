import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact{
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            data:[
                { text:'北京',value:"beijing" },
                { text:'上海',value:'shanghai' }
            ],
            show: false,
            value:''
        }
    }

    _init() {
    }

    onClick(data){
        this.set('value',data.text)
        this.trigger('click',data)

    }
}