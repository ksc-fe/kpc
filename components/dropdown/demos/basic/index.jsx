import React from 'react';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';
import Button from 'kpc/components/button';
import Icon from 'kpc/components/icon';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Button type="primary">
                        hover <Icon className="ion-ios-arrow-down" />
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