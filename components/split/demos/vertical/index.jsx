import React from 'react';
import Split from 'kpc/components/split';

export default class extends React.Component {
    render() {
        return (
            <Split mode="vertical" lastSize="80px"
                b-first={<><div className="panel">top</div></>}
                b-last={<><div className="panel">bottom</div></>}
            >
            </Split>
        )
    }
}