import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-table [data]="data" [rowKey]="rowKey">
            <k-table-column key="name" title="Name"></k-table-column>
            <k-table-column key="size" title="Size">
                <ng-template #template let-data="args[0]">
                    {{ data.size }}MB
                </ng-template>
            </k-table-column>
        </k-table>
    `,
})
export class AppDemoComponent {
    private data = [
        {
            "name": "Audios",
            "size": 12,
            "children": [
                {
                    "name": "Fly.mp3",
                    "size": 7
                },
                {
                    "name": "Fade.aac",
                    "size": 5
                }
            ]
        },
        {
            "name": "Images",
            "size": 14,
            "children": [
                {
                    "name": "Photos",
                    "size": 8,
                    "children": [
                        {
                            "name": "file.png",
                            "size": 8
                        }
                    ]
                },
                {
                    "name": "image.png",
                    "size": 6
                }
            ]
        },
        {
            "name": "doc.pdf",
            "size": 18
        }
    ];

    rowKey = data => data.name;
}