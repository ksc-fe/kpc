export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        const weekdays = ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday'];
        const classes = ['English', 'Mathematics', 'Chinese', 'History', 'Geopraghy'];
        let index = 0;
        const randomClasses = () => {
            const ret = {};
            for (let i = 0; i < 7; i++) {
                // ret[`class${i + 1}`] = classes[Math.floor(Math.random() * classes.length)];
                ret[`class${i + 1}`] = classes[(i + index) % classes.length];
            }
            index++;
            return ret;
        };
        return {
            data: weekdays.map(weekday => {
                return {
                    weekday, 
                    ...randomClasses(), 
                    forenoonTime: '08:00 ~ 12:00',
                    afternoonTime: '14:00 ~ 17:00',
                };
            })
        };
    }
}