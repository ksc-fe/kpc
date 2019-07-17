import React from 'react';
import Split from 'kpc/components/split';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <Split mode="vertical" lastSize="80px"
                b-first={<React.Fragment><div className="panel">top</div></React.Fragment>}
                b-last={<React.Fragment><div className="panel">bottom</div></React.Fragment>}
            >
            </Split>
        )
    }
}