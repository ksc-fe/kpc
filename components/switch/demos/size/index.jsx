import React from 'react';
import {Switch} from 'kpc/components/switch';
import './index.styl';

export default class Demo extends React.Component {
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