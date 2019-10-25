import React from 'react';
import Tooltip from 'kpc/components/tooltip';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Tooltip content="hello" always value={true}>
                    always show this tootip 
                </Tooltip>
                <br /><br />
                <Tooltip content="" always value={true}>
                    don't show if content is empty
                </Tooltip>
            </div>
        )
    }
}