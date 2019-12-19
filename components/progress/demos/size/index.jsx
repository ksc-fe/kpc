import React from 'react';
import Progress from 'kpc-react/components/progress';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Progress percent="50" />
                <Progress percent="50" size="small" />
                <Progress percent="50" size="mini" />
            </div>
        )
    }
}