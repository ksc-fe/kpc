import React from 'react';
import Split from 'kpc/components/split';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Split
                    b-first={<><div className="panel">left</div></>}
                    b-last={<><div className="panel">right</div></>}
                >
                </Split>
                <Split firstSize="80px"
                    b-first={<><div className="panel">left</div></>}
                    b-last={<><div className="panel">right</div></>}
                >
                </Split>
                <Split lastSize="80px"
                    b-first={<><div className="panel">left</div></>}
                    b-last={<><div className="panel">right</div></>}
                >
                </Split>
            </div>
        )
    }
}