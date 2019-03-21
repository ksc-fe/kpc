import React from 'react';
import {Switch} from 'kpc/components/switch';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Switch on="开启" off="关闭" width="62" />
                <Switch height="22" />
                <Switch on="开启" off="关闭" width="100" height="30" />
            </div>
        )
    }
}