import template from './index.vdt';

export default class extends Intact {
    get template() { return template; }
    
    defaults(){
        return {
            value:{ text:'1' },
            value_multiple:''
        }
    }  
    onClick(data){
        this.update()
        this.set('value_multiple',data.text)
        this.set('value',data.text)
    }
}

if (module.hot) {
    module.hot.accept();
}
