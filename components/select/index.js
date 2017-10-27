import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact{
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            data:[
                { text:'北京',value: 'beijing' },
                { text:'上海',value: 'shanghai' },
                { text:'东京', value: 'dongjing',disabled:true }
            ],
            show: false,
            value:'',
            disabled:false,
            clearable:false, //删除按钮
            multiple:false, //支持多选li
        }
    }

    onClick(data){
        if(data.disabled){
            return 
        }
        this.set('value',data);
        this.trigger('click',data);
    }
}