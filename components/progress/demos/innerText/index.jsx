import React from 'react';
import Progress from 'kpc/components/progress';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Progress percent="0" isInnerText={true} isOuterText={false} />
                <Progress percent="50" isInnerText={true} isOuterText={false} />
                <Progress percent="60" status="error" isInnerText={true} isOuterText={false} />
                <Progress percent="70" status="success" isInnerText={true} isOuterText={false} />
            </div>
        )
    }
}