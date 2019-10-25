import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-cascader [data]="data" [filterable]="true"></k-cascader>
        </div>
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
                    "disabled": true,
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