import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template; }
    
    defaults(){
        return {
            value: 'Monday',
            values: ['Monday', 'Tuesday'],
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
