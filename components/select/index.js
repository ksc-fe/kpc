import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import position from '../moveWrapper/position';

export default class extends Intact{
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            values: [],
            multiple: false, //支持多选li
            size:{'width':'','height':''},  //自定大小
            group:[], //分类
            inputValue:'',
            show: false,

            data: [],
            value: '',
            disabled: false,
            clearable: false, // 是否可清空 
            filterable: false, // 搜索筛选
            keywords: undefined,
            placeholder: '请选择',

            _show: false,
        }
    }

    _init() {
        // if(this.get('value')){
            // var result = this.get('data').find( item => {
                // return item.value == this.get('value')
            // });
            // if(result){
                // this.set('value',result.value);
                // if(this.get('filterable'))
                    // this.set('keywords', result.text);
            // }
        // }

        // this.on('$changed:keywords',function(){ 
            // this.onInput()
        // })
        // this.on('$changed:show', (c, isShow) => {
            // if (isShow) this._position();
        // });
        // this.on('$change:value',function(){ 
        //     // if(this.get('filterable')) this.set('show', true);
        // })

        // for multiple mode, we re-position the menu when value has changed
        this.on('$changed:value', () => {
            if (this.get('multiple') && this.get('_show')) {
                this.refs.menu.position();
            }
        });
    }

    _onClear(e) {
        e.stopPropagation();
        this.set('value', '');
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

    _onSelect(value) {
        if (!this.get('multiple')) {
            this.set('value', value);
        } else {
            let values = this.get('value');
            if (!Array.isArray(values)) {
                values = [];
            } else {
                values = values.slice(0);
            }
            const index = values.indexOf(value);
            if (~index) {
                // if find, delete it
                values.splice(index, 1); 
            } else {
                values.push(value);
            }
            this.set('value', values);
        }
        this._resetSearch();
    }

    _onSearch(e) {
        this.set('keywords', e.target.value);
        // always show menu on searching
        this.refs.menu.show();
    }

    _resetSearch() {
        this.set('keywords', undefined);
    }

    _onChangeShow(c, value) {
        this.set('_show', value);
    }

    /**
     * @brief let the blur method called after select
     * if we selected the option, then the keywords has been to to undefind
     * in this case, we do nothing, otherwise we reset it
     */
    _onBlur() {
        setTimeout(() => {
            if (this.get('keywords') != null) {
                this.set('keywords', undefined);
            }
        }, 200);
    }

    _delete(value, e) {
        e.stopPropagation();
        const values = this.get('value').slice(0);
        const index = values.indexOf(value);
        values.splice(index, 1);
        this.set('value', values);
    }

    _onClick() {
        if (this.get('filterable')) {
            this.refs.input.focus();
        }
    }

    _position() {
        const menuElement = this.refs.menu.vdt.vNode.children.element;
        const width = this.element.offsetWidth;
        const menuWidth = menuElement.offsetWidth;
        if (width > menuWidth) {
            menuElement.style.width = `${width}px`;
        }
    }
}
