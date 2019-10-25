import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-cascader [data]="data" trigger="hover"></k-cascader>
    `,
})
export class AppDemoComponent {
    private data = [
        {
            "value": "beijing",
            "label": "北京",
            "children": [
                {
                    "value": "haidian",
                    "label": "海淀区"
                },
                {
                    "value": "chaoyang",
                    "label": "朝阳区"
                },
                {
                    "value": "fengtai",
                    "label": "丰台区"
                }
            ]
        },
        {
            "value": "hunan",
            "label": "湖南",
            "children": [
                {
                    "value": "changsha",
                    "label": "长沙市",
                    "children": [
                        {
                            "value": "yuelu",
                            "label": "岳麓区"
                        }
                    ]
                },
                {
                    "value": "yueyang",
                    "label": "岳阳市",
                    "children": [
                        {
                            "value": "yueyanglou",
                            "label": "岳阳楼区"
                        },
                        {
                            "value": "yueyangxian",
                            "label": "岳阳县"
                        }
                    ]
                }
            ]
        }
    ];
}