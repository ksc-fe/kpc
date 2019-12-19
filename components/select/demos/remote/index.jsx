import React from 'react';
import {Select, Option} from 'kpc-react/components/select';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
        this.search = this.search.bind(this);
        this.lastFetchId = 0;
    }
    
    search(select, keywords) {
        console.log(keywords);
    
        if (!keywords) return;
    
        const fetchId = ++this.lastFetchId
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(body => {
                if (fetchId !== this.lastFetchId) return;
                this.setState({users: body.results});
            });
    }
    
    render() {
        return (
            <Select filterable filter={() => true} on$change-keywords={this.search}>
                {this.state.users.map((value, key) => {
                    return (
                        <Option 
                            value={value.login.username}
                        >{value.name.first} {value.name.last}</Option>
                    )
                })}
            </Select>
        )
    }
}