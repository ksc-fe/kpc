import {Component} from '@angular/core';
import {Form} from 'kpc/components/form';

// 添加全局规则
Form.addMethod('letter', (value, item, param) => {
    return /^[a-z|A-Z]+$/.test(value);
}, '只能输入字母');

@Component({
    selector: 'app-demo',
    template: `
        <k-form>
            <k-form-item label="标签">
                <k-form-item
                    *ngFor="let value of descriptions; let i = index; trackBy: trackArray"
                    model="descriptions[{{ i }}]"
                    [hideLabel]="true"
                    [rules]="{
                        required: true, 
                        letter: true,
                        unique: unique
                    }"
                    [force]="true"
                >
                    <k-input [(value)]="descriptions[i]"></k-input>    
                    <ng-template #append>
                        <k-button (click)="remove(i)">删除</k-button>
                    </ng-template>
                </k-form-item>
                <k-button (click)="add()">添加</k-button>
            </k-form-item>
        </k-form>
    `,
    styleUrls: ['./index.styl'],
})
export class AppDemoComponent {
    private descriptions = ["", ""];

    add() {
        this.descriptions = this.descriptions.concat('');
    }

    remove(index) {
        this.descriptions.splice(index, 1);
    }

    trackArray(index) {
        return index;
    }

    // 局部验证规则
    unique = (value) => {
        let count = 0;
        this.descriptions.find(item => {
            if (item === value) count++;
            return count > 1;
        });

        // 直接返回错误文案，或者也可以单独定义messages为{unique: '不能相同'}
        return count === 1 || '不能相同';
    }
}