import template from './index.vdt';

export default class extends Intact {
    get template() { return template; }
    
    defaults(){
        return {
            value1: '星期一',
            value_multiple:''
        }
    }  

    _init() {
        this.on('$change:value1', () => {
            console.log('sdfds')
        });
    }

    onClick(name, data){
        // this.update()
        // this.set('value_multiple',data.text)
        this.set(name, data.text)
    }
}
