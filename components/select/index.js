import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact{
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            value:[
                { text:'北京',value:"beijing" },
                { text:'上海',value:'shanghai' }
            ],
            show:false
        }
    }

    _init() {
        console.log(this.get('test'))
    }

    // toggleDrop(){
    //     this.set('show',!this.get('show'))
    // }

    onClick(data){
        console.log(data)
    }
}