import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-card title="用户信息">
                <ng-template #extra>
                    <k-tabs value="1" size="small">
                        <k-tab value="1">数据集成</k-tab>
                        <k-tab value="2">数据采集</k-tab>
                    </k-tabs>
                </ng-template>
                <k-row>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                </k-row>
            </k-card>
            <k-card title="用户信息" type="border">
                <ng-template #extra>
                    <k-tabs value="1" size="small">
                        <k-tab value="1">数据集成</k-tab>
                        <k-tab value="2">数据采集</k-tab>
                    </k-tabs>
                </ng-template>
                <k-row>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                </k-row>
            </k-card>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }