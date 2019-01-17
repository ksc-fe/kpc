import React from 'react';
import Tag from 'kpc/components/tag';

export default class extends React.Component {
    render() {
        return (
            <div>
                {['default', 'primary', 'success', 'warning', 'danger'].map((value, key) => {
                    return (
                        <Tag
                            type={value}
                        >{value}</Tag>
                    )
                })}
                <Tag disabled>disabled</Tag>
            </div>
        )
    }
}