import {Component} from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
        <div>
            <k-dropdown>
                <k-button>DropdownItem with Tooltip</k-button>
                <k-dropdown-menu>
                    <k-tooltip content="item 1">
                        <k-dropdown-item>item 1</k-dropdown-item>
                    </k-tooltip>
                    <k-dropdown-item>item 2</k-dropdown-item>
                    <k-tooltip content="disabled">
                        <k-dropdown-item [disabled]="true">item 3</k-dropdown-item>
                    </k-tooltip>
                    <k-dropdown [position]="{my: 'left top', at: 'right top'}">
                        <div>
                            <k-tooltip content="This is a nested Dropdown.">
                                <k-dropdown-item>item 4</k-dropdown-item>
                            </k-tooltip>
                        </div>
                        <k-dropdown-menu>
                            <k-dropdown-item>item 1</k-dropdown-item>
                            <k-tooltip content="nested DropdownItem">
                                <k-dropdown-item>item 2</k-dropdown-item>
                            </k-tooltip>
                        </k-dropdown-menu>
                    </k-dropdown>
                </k-dropdown-menu>
            </k-dropdown>
        </div>
    `,
})
export class AppDemoComponent { }