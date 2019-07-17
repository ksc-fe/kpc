export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {
                    "weekday": "Monday",
                    "class1": "English",
                    "class2": "Mathematics",
                    "class3": "History",
                    "class4": "English",
                    "class5": "History",
                    "class6": "English",
                    "class7": "History",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                },
                {
                    "weekday": "Tuesday",
                    "class1": "English",
                    "class2": "English",
                    "class3": "Geopraghy",
                    "class4": "History",
                    "class5": "English",
                    "class6": "History",
                    "class7": "Mathematics",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                },
                {
                    "weekday": "Wendesday",
                    "class1": "History",
                    "class2": "Chinese",
                    "class3": "History",
                    "class4": "English",
                    "class5": "English",
                    "class6": "Chinese",
                    "class7": "History",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                },
                {
                    "weekday": "Thursday",
                    "class1": "History",
                    "class2": "English",
                    "class3": "Geopraghy",
                    "class4": "Mathematics",
                    "class5": "Geopraghy",
                    "class6": "English",
                    "class7": "Mathematics",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                },
                {
                    "weekday": "Friday",
                    "class1": "Geopraghy",
                    "class2": "English",
                    "class3": "Geopraghy",
                    "class4": "Geopraghy",
                    "class5": "Geopraghy",
                    "class6": "Geopraghy",
                    "class7": "English",
                    "forenoonTime": "08:00 ~ 12:00",
                    "afternoonTime": "14:00 ~ 17:00"
                }
            ] 
        };
    }

    merge(row, column, rowIndex, columnIndex) {
        const data = this.get('data');
        if (column.key === 'forenoonTime' || column.key === 'afternoonTime') {
            return {
                rowspan: data.length,
                colspan: 1,
            };
        }

        // merge the same classes horizontally
        const columns = [];
        for (let i = 1; i <= 7; i++) columns.push(`class${i}`);

        let colspan = 1;
        const value = row[column.key];
        for (let i = columns.indexOf(column.key) + 1; i < 7; i++) {
            const nextValue = row[columns[i]];
            if (nextValue !== value) break;
            colspan++;
        }

        return {colspan};
    }
}