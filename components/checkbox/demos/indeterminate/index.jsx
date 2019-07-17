import React from 'react';
import Checkbox from 'kpc/components/checkbox';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "languages": [],
            "options": [
                "Javascript",
                "C++",
                "PHP"
            ]
        };
        this._toggleSelectAll = this._toggleSelectAll.bind(this);
    }

    _toggleSelectAll(c, checked) {
        if (checked) {
            this.setState({languages: ['Javascript', 'C++', 'PHP']});
        } else {
            this.setState({languages: []});
        }
    }
    
    render() {
        const length = this.state.languages.length;
    
        return (
            <div>
                <Checkbox indeterminate={length > 0 && length < 3}
                    value={length === 3}
                    on$change-value={this._toggleSelectAll}
                >全选</Checkbox>
                <hr />
                {this.state.options.map((value, key) => {
                    return (
                        <Checkbox
                            name="languages" 
                            trueValue={value}
                            value={this.state.languages}
                            on$change-value={(c, languages) => this.setState({languages})}
                        >{value}</Checkbox>
                    )
                })}
                Your selected: {JSON.stringify(this.state.languages)}
            </div>
        )
    }
}