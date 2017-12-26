import template from './index.vdt';

export default class extends Intact {
    get template() { return template; }
    
    defaults(){
        return {
            value1: 'Monday',
            value_multiple:'',
            valueSearch:'beijing'
        }
    }  

    _init() {
        this.on('$change:value1', () => {
            console.log('changed :valu1', this.get('value1'))
        });
    }

    onClick(data){
        console.log(data)
    }
    multiple(data){
        console.log(data)
    }
}
