import React from 'react';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Dropdown position={{my: 'left top', at: 'left bottom+5'}}>
                    <Button type="primary">
                        left <Icon className="ion-arrow-down-b" size="small" />
                    </Button>
                    <DropdownMenu>
                        <DropdownItem>item 1</DropdownItem>
                        <DropdownItem>item 2</DropdownItem>
                        <DropdownItem>item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            
                <Dropdown position={{my: 'right top', at: 'right bottom+5'}}>
                    <Button type="primary">
                        right <Icon className="ion-arrow-down-b" size="small" />
                    </Button>
                    <DropdownMenu>
                        <DropdownItem>item 1</DropdownItem>
                        <DropdownItem>item 2</DropdownItem>
                        <DropdownItem>item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            
                <Dropdown position={{my: 'center bottom-5', at: 'center top'}}>
                    <Button type="primary">
                        top center <Icon className="ion-arrow-down-b" size="small" />
                    </Button>
                    <DropdownMenu>
                        <DropdownItem>item 1</DropdownItem>
                        <DropdownItem>item 2</DropdownItem>
                        <DropdownItem>item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}