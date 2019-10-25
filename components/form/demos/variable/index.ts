import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-form #form>
            <k-form-item label="姓名">
                <k-row gutter="16">
                    <k-col span="12">
                        <k-form-item [hideLabel]="true" model="firstName" [rules]="{
                            required: lastName
                        }"> 
                            <k-input [(value)]="firstName"></k-input>
                        </k-form-item>
                    </k-col>
                    <k-col span="12">
                        <k-form-item [hideLabel]="true" model="lastName" [rules]="{
                            required: firstName
                        }"> 
                            <k-input [(value)]="lastName"></k-input>
                        </k-form-item>
                    </k-col>
                </k-row>
            </k-form-item>
        </k-form>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('form', {static: false}) form;

    private lastName;
    private firstName;
}