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
                            type={value}
                        >{value}</Tag>
                    )
                })}
                <Tag disabled>disabled</Tag>
            </div>
        )
    }
}