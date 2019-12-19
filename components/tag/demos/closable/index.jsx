import React from 'react';
import Tag from 'kpc-react/components/tag';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                {['default', 'primary', 'success', 'warning', 'danger'].map((value, key) => {
                    return (
                        <Tag
                            key={value}
                            type={value}
                            closable
                        >{value}</Tag>
                    )
                })}
                <Tag disabled closable>disabled</Tag>
            </div>
        )
    }
}