import React from 'react';
import Progress from 'kpc-react/components/progress';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Progress percent="50" />
                <Progress percent="50" status="normal" />
                <Progress percent="50" status="warning" />
                <Progress percent="50" status="error" />
                <Progress percent="50" status="success" />
            </div>
        )
    }
}