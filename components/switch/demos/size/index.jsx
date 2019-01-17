import React from 'react';
import {Switch} from 'kpc/components/switch';

export default class extends React.Component {
    render() {
        return (
            <div>
                large: <Switch size="large" />
                default: <Switch />
                small: <Switch size='small' />
                mini: <Switch size='mini' />
            </div>
        )
    }
}