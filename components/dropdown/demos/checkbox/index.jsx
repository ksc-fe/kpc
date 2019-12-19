import React from 'react';
import {Dropdown, DropdownMenu, DropdownItem} from 'kpc-react/components/dropdown';
import Checkbox from 'kpc-react/components/checkbox';
import Button from 'kpc-react/components/button';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "checked": []
        };
        this._onSelect = this._onSelect.bind(this);
        this._onSelectAndPreventDefault = this._onSelectAndPreventDefault.bind(this);
    }

    _onSelect(c, e) {
        console.log('allowDefault', e);
    }
    
    _onSelectAndPreventDefault(c, e) {
        e.preventDefault();
        console.log('preventDefault', e);
    
        const checked = this.state.checked.slice(0);
        const index = checked.indexOf('2');
        if (index > -1) {
            checked.splice(index, 1);
        } else {
            checked.push('2');
        }
        this.setState({checked: checked});
    }
    
    render() {
        return (
            <div>
                <Dropdown>
                    <Button>More ></Button>
                    <DropdownMenu className="checkbox-menu">
                        <DropdownItem hideOnSelect={false} onSelect={this._onSelect}>
                            <Checkbox value={this.state.checked} on$change-value={(c, checked) => this.setState({checked})} trueValue="1">item 1</Checkbox>
                        </DropdownItem>
                        <DropdownItem hideOnSelect={false} onSelect={this._onSelectAndPreventDefault}>
                            <Checkbox value={this.state.checked} on$change-value={(c, checked) => this.setState({checked})} trueValue="2">item 2</Checkbox>
                        </DropdownItem>
                        <DropdownItem hideOnSelect={false}>
                            <Checkbox value={this.state.checked} on$change-value={(c, checked) => this.setState({checked})} trueValue="3">item 3</Checkbox>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}