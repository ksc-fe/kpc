import template from './index.vdt';
import './index.styl';
import Message from 'components/message';

export default class extends Intact {
    get template() { return template; }
    
    defaults(){
        return {
            value: 'Monday',
            values: ['Monday', 'Tuesday'],
        }
    }  

    _init() {
        this.on('$change:value', () => {
            setTimeout(() => {
                Message.error('test', 0);
            }, 200)
        });
    }

    onClick(data){
        console.log(data)
    }

    multiple(data){
        console.log(data)
    }
}
