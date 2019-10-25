import {Component} from '@angular/core';

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
const data = weekdays.map(weekday => {
    return {
        weekday, 
        ...randomClasses(), 
        forenoonTime: '08:00 ~ 12:00',
        afternoonTime: '14:00 ~ 17:00',
    };
});


@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-table [data]="data" type="grid"
                [scheme]="{
                    weekday: {title: 'Weekday'},
                    forenoon: {
                        title: 'Forenoon',
                        scheme: {
                            forenoonTime: {title: 'Time'},
                            classes: {
                                title: 'Classes',
                                scheme: {
                                    class1: {title: 'Class 1'},
                                    class2: {title: 'Class 2'},
                                    class3: {title: 'Class 3'},
                                    class4: {title: 'Class 4'}
                                }
                            }
                        } 
                    },
                    afternoon: {
                        title: 'Afternoon',
                        scheme: {
                            afternoonTime: {title: 'Time'},
                            class5: {title: 'Class 5'},
                            class6: {title: 'Class 6'},
                            class7: {title: 'Class 7'}
                        } 
                    }
                }"
            ></k-table>
            <k-table [data]="data" checkType="none" type="grid" [resizable]="true" stickHeader="87">
                <k-table-column title="Weekday" key='weekday' fixed="left"></k-table-column>
                <k-table-column title="Forenoon" key="forenoon">
                    <k-table-column title="Time" key="forenoonTime" fixed="left"></k-table-column>
                    <k-table-column title="Classes" key="classes">
                        <k-table-column title="Class 1" key='class1'></k-table-column>
                        <k-table-column title="Class 2" key='class2'></k-table-column>
                        <k-table-column title="Class 3" key='class3'></k-table-column>
                        <k-table-column title="Class 4" key='class4'></k-table-column>
                    </k-table-column>
                </k-table-column>
                <k-table-column title="Afternoon" key="afternoon">
                    <k-table-column title="Time" key="afternoonTime"></k-table-column>
                    <k-table-column title="Class 5" key='class5'></k-table-column>
                    <k-table-column title="Class 6" key='class6'></k-table-column>
                    <k-table-column title="Class 7" key='class7' fixed="right"></k-table-column>
                </k-table-column>
            </k-table>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private data = data;
}