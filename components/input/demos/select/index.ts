import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-input width="500">
                <ng-template #prepend>
                    <k-select [(value)]="protocol" width="110">
                        <k-option value="http">http://</k-option>
                        <k-option value="https">https://</k-option>
                    </k-select>
                </ng-template>
                <ng-template #append>
                    <k-select [(value)]="domain" width="90">
                        <k-option value="com">.com</k-option>
                        <k-option value="cn">.cn</k-option>
                        <k-option value="org">.org</k-option>
                    </k-select>
                </ng-template>
            </k-input>
        </div>
    `,
})
export class AppDemoComponent {
    private protocol = "http";
    private domain = "com";
}