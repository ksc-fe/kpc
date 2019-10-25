import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-button-group>
                <k-button>开机</k-button>
                <k-button>关机</k-button>
                <k-button>重启</k-button>
            </k-button-group>
            <k-button-group>
                <k-button type="danger">开机</k-button>
                <k-button type="danger">关机</k-button>
                <k-button type="danger">重启</k-button>
            </k-button-group>
            <k-button-group>
                <k-button type="primary">
                    <i class="k-icon ion-ios-arrow-left"></i>上一页
                </k-button>
                <k-button type="primary">
                    下一页<i class="k-icon ion-ios-arrow-right"></i>
                </k-button>
            </k-button-group>
            <br /><br />
            <p>纵向按钮组</p>
            <k-button-group [vertical]="true">
                <k-button type="primary">开机</k-button>
                <k-button type="primary">关机</k-button>
                <k-button type="primary">重启</k-button>
            </k-button-group>
            <br /><br />
            <p>radio按钮组</p>
            <k-button-group checkType="radio" [(value)]="city">
                <k-button value="beijing">北京</k-button>
                <k-button value="shanghai" #__radioShanghai>上海</k-button>
                <k-button value="guangzhou">广州</k-button>
                <k-button value="shenzhen">深圳</k-button>
            </k-button-group>
            <p>checkbox按钮组</p>
            <k-button-group checkType="checkbox" [(value)]="cities">
                <k-button value="beijing" size="small">北京</k-button>
                <k-button value="shanghai" size="small" #__checkboxShanghai>上海</k-button>
                <k-button value="guangzhou" size="small">广州</k-button>
                <k-button value="shenzhen" size="small">深圳</k-button>
            </k-button-group>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    @ViewChild('__radioShanghai', {static: false}) __radioShanghai;
    @ViewChild('__checkboxShanghai', {static: false}) __checkboxShanghai;

    private city = "beijing";
    private cities = [];
}