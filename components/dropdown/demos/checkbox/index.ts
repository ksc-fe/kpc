import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-dropdown>
                <k-button>More ></k-button>
                <k-dropdown-menu class="checkbox-menu">
                    <k-dropdown-item [hideOnSelect]="false" (select)="_onSelect($event)">
                        <k-checkbox [(value)]="checked" trueValue="1">item 1</k-checkbox>
                    </k-dropdown-item>
                    <k-dropdown-item [hideOnSelect]="false" (select)="_onSelectAndPreventDefault($event)">
                        <k-checkbox [(value)]="checked" trueValue="2">item 2</k-checkbox>
                    </k-dropdown-item>
                    <k-dropdown-item [hideOnSelect]="false">
                        <k-checkbox [(value)]="checked" trueValue="3">item 3</k-checkbox>
                    </k-dropdown-item>
                </k-dropdown-menu>
            </k-dropdown>
        </div>
    `,
})
export class AppDemoComponent {
    private checked = [];

    _onSelect([c, e]) {
        console.log('allowDefault', e);
    }
    
    _onSelectAndPreventDefault([c, e]) {
        e.preventDefault();
        console.log('preventDefault', e);
    
        const checked = this.checked.slice(0);
        const index = checked.indexOf('2');
        if (index > -1) {
            checked.splice(index, 1);
        } else {
            checked.push('2');
        }
        this.checked = checked;
    }
}