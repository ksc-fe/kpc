import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <k-transfer
            [enableAdd]="enableAdd"
            [enableRemove]="enableRemove"
            (add)="onAdd($event)"
            (remove)="onRemove($event)"
        >
            <ng-template #header let-type="args[0]">
                <div *ngIf="type === 'left'">请选择</div>
                <div *ngIf="!((type === 'left'))">已选择</div>
            </ng-template>
            <ng-template #list let-type="args[0]">
                <k-tree *ngIf="type === 'left'"
                    [data]="leftData"
                    [checkbox]="true"
                    [(checkedKeys)]="leftCheckedKeys"
                    [(expandedKeys)]="leftExpandedKeys"
                    #left
                ></k-tree>
                <k-tree *ngIf="!((type === 'left'))"
                    [data]="rightData"
                    [checkbox]="true"
                    [(checkedKeys)]="rightCheckedKeys"
                    [(expandedKeys)]="rightExpandedKeys"
                    #right
                ></k-tree>
            </ng-template>
        </k-transfer>
    `,
})
export class AppDemoComponent {
    @ViewChild('left', {static: false}) left;
    @ViewChild('right', {static: false}) right;

    private leftData = [];
    private rightData = [];
    private leftCheckedKeys = [];
    private leftExpandedKeys = [];
    private rightCheckedKeys = [];
    private rightExpandedKeys = [];
    private data = [
        {
            "label": "database",
            "key": "database",
            "children": [
                {
                    "label": "table1",
                    "key": "table1",
                    "children": [
                        {
                            "label": "class",
                            "key": "class"
                        },
                        {
                            "label": "student",
                            "key": "student"
                        }
                    ]
                },
                {
                    "label": "table2",
                    "key": "table2",
                    "children": [
                        {
                            "label": "id",
                            "key": "id"
                        },
                        {
                            "label": "name",
                            "key": "name"
                        }
                    ]
                }
            ]
        }
    ];

    // helper function
    set(obj) { Object.keys(obj).forEach(key => this[key] = obj[key]); }
    
    enableAdd = () => {
        return this.leftCheckedKeys.length > 0;
    }
    
    enableRemove = () => {
        return this.rightCheckedKeys.length > 0;
    }
    
    onAdd() {
        const {from, to} = this.moveData(this.left, this.leftData, this.rightData);
        this.set({leftData: from, rightData: to, leftCheckedKeys: []});
    }
    
    onRemove() {
        const {from, to} = this.moveData(this.right, this.rightData, this.leftData);
        this.set({leftData: to, rightData: from, rightCheckedKeys: []});
    }
    
    moveData(tree, from, to) {
        from = this.deepClone(from);
        to = this.deepClone(to);
        const loop = (children, from, to) => {
            let deleteCount = 0;
            children.forEach((node, index) => {
                const data = node.data;
                if (node.checked) {
                    // remove from `from` 
                    if (from) {
                        from.splice(index - deleteCount, 1);
                        deleteCount++;
                    }
                    // add to `to` 
                    let newData = to.find(item => item.key === data.key);
                    if (!newData) {
                        to.push(this.deepClone(data));
                    } else {
                        loop(node.children, null, newData.children);
                    }
                } else if (node.indeterminate) {
                    let newData = to.find(item => item.key === data.key);
                    if (!newData) {
                        newData = {...data, children: []};
                        to.push(newData);
                    }
                    loop(node.children, from[index - deleteCount].children, newData.children);
                }
            });
        };
    
        loop(tree.root.children, from, to);
    
        return {from, to};
    }
    
    deepClone(data) {
        if (data == null) return data;
    
        if (Array.isArray(data)) {
            return data.map(item => {
                return this.deepClone(item);
            });
        } 
    
        if (typeof data === 'object') {
            const ret = {};
            for (let key in data) {
                ret[key] = this.deepClone(data[key]);
            }           
            return ret;
        }
    
        return data;
    }
}