import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-row gutter="16">
                <k-col span="6">
                    <k-card>
                        <k-card-column width="60px" [center]="true">
                            <k-icon class="ion-person" size="large"></k-icon>
                        </k-card-column>
                        <k-card-column>用户名：test</k-card-column>
                    </k-card>
                </k-col>
                <k-col span="6">
                    <k-card>
                        <k-card-column width="60px" [center]="true">
                            <k-icon class="ion-person" size="large"></k-icon>
                        </k-card-column>
                        <k-card-column>用户名：test</k-card-column>
                    </k-card>
                </k-col>
                <k-col span="6">
                    <k-card>
                        <k-card-column width="60px" [center]="true">
                            <k-icon class="ion-person" size="large"></k-icon>
                        </k-card-column>
                        <k-card-column>用户名：test</k-card-column>
                    </k-card>
                </k-col>
                <k-col span="6">
                    <k-card>
                        <k-card-column width="60px" [center]="true">
                            <k-icon class="ion-person" size="large"></k-icon>
                        </k-card-column>
                        <k-card-column>用户名：test</k-card-column>
                    </k-card>
                </k-col>
            </k-row>
            <k-row gutter="16">
                <k-col span="6">
                    <k-card type="border">
                        <k-card-column width="60px" [center]="true">
                            <k-icon class="ion-person" size="large"></k-icon>
                        </k-card-column>
                        <k-card-column>用户名：test</k-card-column>
                    </k-card>
                </k-col>
                <k-col span="6">
                    <k-card type="border">
                        <k-card-column width="60px" [center]="true">
                            <k-icon class="ion-person" size="large"></k-icon>
                        </k-card-column>
                        <k-card-column>用户名：test</k-card-column>
                    </k-card>
                </k-col>
                <k-col span="6">
                    <k-card type="border">
                        <k-card-column width="60px" [center]="true">
                            <k-icon class="ion-person" size="large"></k-icon>
                        </k-card-column>
                        <k-card-column>用户名：test</k-card-column>
                    </k-card>
                </k-col>
                <k-col span="6">
                    <k-card type="border">
                        <k-card-column width="60px" [center]="true">
                            <k-icon class="ion-person" size="large"></k-icon>
                        </k-card-column>
                        <k-card-column>用户名：test</k-card-column>
                    </k-card>
                </k-col>
        
            </k-row>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }