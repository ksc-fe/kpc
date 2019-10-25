import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-card>
                <k-row>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                    <k-col span="8">登录账号：test</k-col>
                </k-row>
            </k-card>
            <k-card type="border">
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