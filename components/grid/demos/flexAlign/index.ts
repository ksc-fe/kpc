import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <h5>顶端对齐 top</h5>
            <k-row align="top" justify="center"> 
                <k-col span="4" style="height: 100px">col-4</k-col>
                <k-col span="4" style="height: 60px">col-4</k-col>
                <k-col span="4" style="height: 80px">col-4</k-col>
                <k-col span="4" style="height: 40px">col-4</k-col>
            </k-row>
            <h5>底部对齐 bottom</h5>
            <k-row align="bottom" justify="center"> 
                <k-col span="4" style="height: 100px">col-4</k-col>
                <k-col span="4" style="height: 60px">col-4</k-col>
                <k-col span="4" style="height: 80px">col-4</k-col>
                <k-col span="4" style="height: 40px">col-4</k-col>
            </k-row>
            <h5>居中对齐 middle</h5>
            <k-row align="middle" justify="center"> 
                <k-col span="4" style="height: 100px">col-4</k-col>
                <k-col span="4" style="height: 60px">col-4</k-col>
                <k-col span="4" style="height: 80px">col-4</k-col>
                <k-col span="4" style="height: 40px">col-4</k-col>
            </k-row>
            <h5>撑开成容器高度 stretch</h5>
            <k-row align="stretch" justify="center" style="height: 100px;"> 
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
            </k-row>
            <h5>基线对齐 baseline</h5>
            <k-row align="baseline" justify="center"> 
                <k-col span="4" style="height: 100px; font-size: 20px">col-4</k-col>
                <k-col span="4" style="height: 60px; font-size: 16px">col-4</k-col>
                <k-col span="4" style="height: 80px; font-size: 28px">col-4</k-col>
                <k-col span="4" style="height: 40px; font-size: 12px">col-4</k-col>
            </k-row>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }