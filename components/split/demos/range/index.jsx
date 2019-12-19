import React from 'react';
import Split from 'kpc-react/components/split';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <Split min="40" max="50%+10" firstSize="80px"
                b-first={<React.Fragment><div className="panel">left</div></React.Fragment>}
                b-last={<React.Fragment><div className="panel">right</div></React.Fragment>}
            >
            </Split>
        )
    }
}