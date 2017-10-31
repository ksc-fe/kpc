import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import position from '../moveWrapper/position';

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

    _init() {
        this.on('$changed:show', (c, isShow) => {
            if (isShow) this._position();
        });
    }

    onClick(data){
        if(data.disabled){
            return 
        }
        this.set('value',data);
        this.trigger('click',data);
    }

    _position() {
        this._dropdown.style.width = getComputedStyle(this.element).width;
        position(this._dropdown, {my: 'left top', at: 'left bottom', of: this.element});
    }
}
