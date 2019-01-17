import React from 'react';
import Tag from 'kpc/components/tag';

export default class extends React.Component {
    render() {
        return (
            <div>
                {['large', 'default', 'small', 'mini'].map((value, key) => {
                    return (
                        <Tag
                            size={value}
                        >{value}</Tag>
                    )
                })}
                <br /><br />
                {[['large', 'primary'], ['default', 'warning'], ['small', 'success'], ['mini', 'danger']].map((value, key) => {
                    return (
                        <Tag
                            size={value[0]}
                            type={value[1]}
                        >{value[0]}</Tag>
                    )
                })}
                <br /><br />
                {['large', 'default', 'small', 'mini'].map((value, key) => {
                    return (
                        <Tag
                            type="primary"
                            size={value}
                            closable
                        >{value}</Tag>
                    )
                })}
            </div>
        )
    }
}