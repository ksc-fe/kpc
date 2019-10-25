import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-button-group>
            <k-tooltip content="hover">
                <k-button>hover</k-button>
            </k-tooltip>
            <k-tooltip trigger="click" content="click">
                <k-button>click</k-button>
            </k-tooltip>
            <k-tooltip [canHover]="true" content="the text can be hovered">
                <k-button>can hover</k-button>
            </k-tooltip>
        </k-button-group>
    `,
})
export class AppDemoComponent { }