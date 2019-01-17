import React from 'react';
import Progress from 'kpc/components/progress';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Progress percent="50" />
                <Progress percent="100" />
            </div>
        )
    }
}