import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <h5>指定每一个断点Col所占的栅格数</h5>
            <k-row> 
                <k-col xs="2" sm="4" md="6" lg="8" xl="10" xxl="11">col</k-col>
                <k-col xs="20" sm="16" md="12" lg="8" xl="4" xxl="2">col</k-col>
                <k-col xs="2" sm="4" md="6" lg="8" xl="10" xxl="11">col</k-col>
            </k-row>
            <h5>指定一个断点，当宽度小于该断点时，Col将以100%宽度纵向排列</h5>
            <k-row> 
                <k-col md="16">col-md-18</k-col>
                <k-col md="8">col-md-8</k-col>
            </k-row>
            <h5>同时指定多个属性</h5>
            <k-row>
                <k-col [md]="{span: 4, offset: 4, order: 1}" [lg]="{span: 8, offset: 8, order: 2}">1 col</k-col>
                <k-col [md]="{span: 8, offset: 8, order: 2}" [lg]="{span: 4, offset: 4, order: 1}">2 col</k-col>
            </k-row>
        </div>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent { }