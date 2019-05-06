import React from 'react';
import Split from 'kpc/components/split';

export default class extends React.Component {
    render() {
        return (
            <Split min="40" max="50%+10" firstSize="80px"
                b-first={<><div className="panel">left</div></>}
                b-last={<><div className="panel">right</div></>}
            >
            </Split>
        )
    }
}