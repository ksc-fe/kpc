import React from 'react';
import Tooltip from 'kpc/components/tooltip';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Tooltip content="hello">
                    hover the text
                </Tooltip>
                <br /> <br />
                <Tooltip>
                    don't show anything if content is empty 
                </Tooltip>
            </div>
        )
    }
}