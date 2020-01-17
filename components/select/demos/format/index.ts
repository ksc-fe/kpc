import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <div>
                <span class="label">border:</span>
                <k-select [(value)]="type">
                    <k-option *ngFor="let value of ['solid', 'dashed', 'dotted']; index as key"
                        [value]="value"
                    >
                        <div [style]="{borderBottom: this['1px ' + value + ' #666']}" class="line"></div>
                    </k-option>
                    <ng-template #value let-value="args[0]" let-label="args[1]">
                        <div [style]="{borderBottom: this['1px ' + value + ' #666']}" class="line"></div>
                    </ng-template>
                </k-select>
                <div [style]="{border: this['1px ' + type + ' #b2b2b2']}" class="rect">
                    Rectangle
                </div>
            </div>
            <div>
                <span class="label">multiple:</span>
                <k-select [(value)]="icons" [multiple]="true">
                    <k-option *ngFor="let value of ['ion-chatbubble', 'ion-person-stalker', 'ion-beer', 'ion-camera']; index as key"
                        [value]="value"
                    >
                        <k-icon [ngClass]="value"></k-icon>
                    </k-option>
                    <ng-template #value let-value="args[0]" let-label="args[1]">
                        <k-icon [ngClass]="value"></k-icon>
                        <span class="c-middle">{{ value }}</span>
                    </ng-template>
                </k-select>
            </div>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private type = "dashed";
    private icons = [
        "ion-camera"
    ];
}