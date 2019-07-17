import React from 'react';
import Split from 'kpc/components/split';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Split
                    b-first={<React.Fragment><div className="panel">left</div></React.Fragment>}
                    b-last={<React.Fragment><div className="panel">right</div></React.Fragment>}
                >
                </Split>
                <Split firstSize="80px"
                    b-first={<React.Fragment><div className="panel">left</div></React.Fragment>}
                    b-last={<React.Fragment><div className="panel">right</div></React.Fragment>}
                >
                </Split>
                <Split lastSize="80px"
                    b-first={<React.Fragment><div className="panel">left</div></React.Fragment>}
                    b-last={<React.Fragment><div className="panel">right</div></React.Fragment>}
                >
                </Split>
            </div>
        )
    }
}