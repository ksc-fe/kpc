import React from 'react';
import {Diagram, DTreeLayout, DCircle, DLine, DText} from 'kpc-react/components/diagram';

import Message from 'kpc-react/components/message';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": {
                "key": "Database",
                "children": [
                    {
                        "key": "Table1",
                        "children": [
                            {
                                "key": "Column1-1"
                            },
                            {
                                "key": "Column1-2"
                            }
                        ]
                    },
                    {
                        "key": "Table2",
                        "disabled": true,
                        "children": [
                            {
                                "key": "Column2-1"
                            },
                            {
                                "key": "Column2-2"
                            }
                        ]
                    }
                ]
            }
        };
        this._onSelect = this._onSelect.bind(this);
    }

    _onSelect(shapes) {
        if (!shapes.length) {
            Message.info('You selected nothing.');
        } else {
            const data = shapes[0].data;
            Message.info(`You selected ${data.key}.`);
        }
    }
    
    render() {
        const loop = (children, parent, disabled) => {
            const ret = [];
            for (let i = 0; i < children.length; i++) {
                const data = children[i];
        
                // if parent is disabled, disable all children
                if (!disabled && data.disabled) disabled = true; 
        
                ret.push(
                    <DCircle key={data.key} 
                        label={data.key} 
                        selectable={!disabled}
                        data={data}
                    />
                );
        
                // add line if it has parent
                if (parent) {
                    ret.push(<DLine from={parent.key} to={data.key} type="rounded" />);
                }
                if (data.children) {
                    ret.push(...loop(data.children, data, disabled));
                }
            }
            return ret;
        }
    
        return (
            <Diagram onSelectionChanged={this._onSelect}>
                <DTreeLayout type="vertical">
                    {loop([this.state.data])}
                </DTreeLayout>
            </Diagram>
        )
    }
}