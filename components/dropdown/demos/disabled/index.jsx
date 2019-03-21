import React from 'react';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Dropdown disabled>
                    <Button type="primary">
                        disabled <Icon className="ion-ios-arrow-down" />
                    </Button>
                    <DropdownMenu>
                        <DropdownItem>item 1</DropdownItem>
                        <DropdownItem>item 2</DropdownItem>
                        <DropdownItem>item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            
                <Dropdown>
                    <Button type="primary">
                        disabled item <Icon className="ion-ios-arrow-down" />
                    </Button>
                    <DropdownMenu>
                        <DropdownItem>item 1</DropdownItem>
                        <DropdownItem disabled>item 2</DropdownItem>
                        <DropdownItem>item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}