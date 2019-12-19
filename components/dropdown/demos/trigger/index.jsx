import React from 'react';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc-react/components/dropdown';
import Button from 'kpc-react/components/button';
import Icon from 'kpc-react/components/icon';
import './index.styl';

export default class Demo extends React.Component {
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
            
                <Dropdown trigger="click">
                    <Button type="primary">
                        click <Icon className="ion-ios-arrow-down" />
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