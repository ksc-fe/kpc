import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-cascader [data]="data" [disabled]="true"></k-cascader>
            <k-cascader [data]="data"></k-cascader>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private data = [
        {
            "value": "beijing",
            "label": "北京",
            "disabled": true,
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
                            "label": "岳阳楼区",
                            "disabled": true
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