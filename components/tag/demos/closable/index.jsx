import React from 'react';
import Tag from 'kpc/components/tag';

export default class extends React.Component {
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