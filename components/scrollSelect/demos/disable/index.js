export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: 2018
        };
    }

    generateData(value) {
        const start = value - 5;
        return Array.apply(null, {length: 10})
            .map((v, i) => {
                const year = start + i; 
                return {
                    label: `${year}年`,
                    value: year
                };
            });
    }

    disable(value) {
        // 排除闰年
        return value % 4 === 0 && (value % 100 !== 0 || value % 400 === 0);
    }
}