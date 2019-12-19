import React from 'react';
import Progress from 'kpc-react/components/progress';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Progress type="circle" percent="50" />
            </div>
        )
    }
}