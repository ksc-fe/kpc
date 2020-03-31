import template from './index.vdt';
import Intact from 'intact';
import './index.styl';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            city: 'beijing'
        };
    }

    _init() {
        console.log('aaaabb')
    }

    _mount() {
        const A = Intact.extend({                                                                                                                                                                                                     
            displayName: 'A',
            template: `<B ev-hide={self.proxy} />`,                                                                                                                                                                                   
            _init() {                                                                                                                                                                                                                 
                this.B = B;                                                                                                                                                                                                           
            },                                                                                                                                                                                                                        
            proxy() {                                                                                                                                                                                                                 
                this.trigger('hide');                                                                                                                                                                                                 
            }                                                                                                                                                                                                                         
        });                                                                                                                                                                                                                           
        const B = Intact.extend({                                                                                                                                                                                                     
            displayName: 'B',
            template:`                                                                                                                                                                                                                
                if (self.get('hide')) return;                                                                                                                                                                                         
                <div ev-click={self.hide}>show</div>                                                                                                                                                                                  
            `,                                                                                                                                                                                                                        
            hide() {                                                                                                                                                                                                                  
                this.set('hide', true);                                                                                                                                                                                               
                this.trigger('hide')                                                                                                                                                                                                  
            }                                                                                                                                                                                                                         
        });                                                                                                                                                                                                                           
        const C = Intact.extend({                                                                                                                                                                                                     
            displayName: 'C',
            template: `<div><A v-if={!self.get('hide')} ev-hide={self.hide}/></div>`,                                                                                                                                                 
            _init() {
                this.A = A;
            },
            hide() {                                                                                                                                                                                                                  
                this.set('hide', true);
            }
        });

        Intact.mount(C, document.body);
    }

    clickDisabled() {
        console.log('click disabled');
    }

    click() {
        console.log(this);
        console.log('click3');
    }

    loading(name) {
        this.set(name, true);
        // setTimeout(() => {
            // this.set(name, false);
        // }, 5000);
    }
}
