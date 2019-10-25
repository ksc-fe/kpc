import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-form [starOnRequired]="true">
            <k-form-item [rules]="{required: true}" label="姓名">
                <k-input></k-input>
            </k-form-item>
            <k-form-item>
                <ng-template #label><i class="ion-person"></i> 姓名</ng-template>
                <k-input></k-input>
            </k-form-item>
        </k-form>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }