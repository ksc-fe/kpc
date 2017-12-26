import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import position from '../moveWrapper/position';

export default class extends Intact{
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            data: [
                { text:'北京',value: 'beijing' },
                { text:'上海',value: 'shanghai' },
                { text:'东京', value: 'dongjing',disabled:true }
            ],
            value: '',
            values: [],
            disabled: false,
            clearable: false, //删除按钮
            multiple: false, //支持多选li
            size:{'width':'','height':''},  //自定大小
            group:[], //分类
            filterable: false, // 搜索筛选
            inputValue:'',
            show: false,
            class:'',
            keywords:''
        }
    }

    _init() {
        if(this.get('value')){
            var result = this.get('data').find( item => {
                return item.value == this.get('value')
            });
            if(result){
                this.set('value',result.value);
                if(this.get('filterable'))
                    this.set('keywords', result.text);
            }
        }

        this.on('$changed:keywords',function(){ 
            this.onInput()
        })
        this.on('$changed:show', (c, isShow) => {
            if (isShow) this._position();
        });
        // this.on('$change:value',function(){ 
        //     // if(this.get('filterable')) this.set('show', true);
        // })
    }

    onBlur(){
        // this.set('show',false)
    }
    onInput(e){
        var result = this.get('data').find( item => {
            return item.text  === this.get('keywords') 
        })
        if(result){
            // this.set('value', result.value) 
        }else{
            this.set('value','');
        }
    }

    onFocusin(e) {
        if (this.get('disabled')) return;
        this.element.classList.add('tagFocusin')
        this.set('show', true);
    }

    onFocusout() {
        
        this.element.classList.remove('tagFocusin')
        if (this.get('multiple')) {
            this.timer = setTimeout(() => {
                this.set('show', false);            
            }, 100);
        } else {
            this.set('show', false);
        }       
    }

    onClick(data){
        if(data.disabled) return 
        if(this.get('multiple')){
            let index = this.get('values').indexOf(data.value);
            if(index != -1){
                this.deleTag(index)
            }else{
                clearTimeout(this.timer);
                this.get('values').push(data.value);
                this.update();
                this._position();
                this.trigger('click',this.get('values'));
                this.element.focus();
            }
        }else{
            this.set({
                'value': data.value,        
            });
            this.get('filterable')? this.set({'keywords': data.text}):undefined;
            this.trigger('click',data);
        } 
        
    }

    deleTag(index){
        this.get('values').splice(index,1);
        this.trigger('click',this.get('values'));
        this.update();
        this._position();
    }

    _position() {
        this._dropdown.element.style.width = getComputedStyle(this.element).width;
        position(this._dropdown.element, {my: 'left top', at: 'left bottom', of: this.element});
    }
}
