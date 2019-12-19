import React from 'react';
import {DropdownMenu, DropdownItem} from 'kpc-react/components/dropdown';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "show": false,
            "event": null
        };
        this._showMenu = this._showMenu.bind(this);
    }

    _showMenu(event) {
        // https://reactjs.org/docs/events.html#event-pooling
        event.persist();
        event.preventDefault();
        this.setState({
            show: true,
            event: event,
        });
    }
    
    render() {
        return (
            <div>
                <div className="contextmenu-area" onContextMenu={this._showMenu}>
                    right click this area to show context menu
                </div>
                <DropdownMenu value={this.state.show}
                    on$change-value={(c, show) => this.setState({show})} 
                    of={this.state.event}
                    position={{my: 'left+1 top', at: 'right bottom'}}
                >
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem>Option 3</DropdownItem>
                </DropdownMenu>
            </div>
        )
    }
}