import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <h5>居左 start</h5>
            <k-row justify="start"> 
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
            </k-row>
            <h5>居右 end</h5>
            <k-row justify="end"> 
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
            </k-row>
            <h5>居中 center</h5>
            <k-row justify="center"> 
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
            </k-row>
            <h5>平均分布，顶边 between</h5>
            <k-row justify="between"> 
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
            </k-row>
            <h5>平均分布，与边界的距离是两个子元素的一半 around</h5>
            <k-row justify="around"> 
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
            </k-row>
            <h5>平均分布，间距（包括边界）相等 evenly</h5>
            <k-row justify="evenly"> 
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
                <k-col span="4">col-4</k-col>
            </k-row>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }