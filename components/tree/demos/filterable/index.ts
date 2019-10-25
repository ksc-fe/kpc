import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-input [(value)]="keywords" placeholder="Please enter keywords to filter node."></k-input>
            <k-tree 
                [data]="[
                    {
                        label: 'First floor-1',
                        key: '1',
                        children: [
                            {
                                label: 'Second floor-1.1',
                                key: '1-1',
                                children: [
                                    {
                                        label: 'Third floor-1.1.1',
                                        key: '1-1-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'First floor-2',
                        key: '2',
                        children: [
                            {
                                label: 'Second floor-2.1',
                                key: '2-1',
                                children: [
                                    {
                                        label: 'Third floor-2.1.1',
                                        key: '2-1-1' 
                                    },
                                    {
                                        label: 'Third floor-2.1.2',
                                        key: '2-1-2'
                                    }
                                ]
                            },
                            {
                                label: 'Second floor-2.2',
                                disabled: true,
                                key: '2-2',
                                children: [
                                    {
                                        label: 'Third floor-2.2.1',
                                        key: '2-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]"
                [(expandedKeys)]="expandedKeys"
                [filter]="_filter"
            ></k-tree>
        </div>
    `,
})
export class AppDemoComponent {
    private keywords;
    private expandedKeys = [
        "2",
        "2-1"
    ];

    _filter = (data) => {
        const keywords = this.keywords;
        if (!keywords) return true;
        return data.label.includes(keywords);
    }
}