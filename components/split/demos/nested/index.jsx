import React from 'react';
import Split from 'kpc-react/components/split';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Split
                    b-first={<React.Fragment><div className="panel">left</div></React.Fragment>}
                    b-last={<React.Fragment>
                        <Split mode="vertical"
                            b-first={<React.Fragment><div className="panel">right top</div></React.Fragment>}
                            b-last={<React.Fragment><div className="panel">right bottom</div></React.Fragment>}
                        >
                        </Split>
                    </React.Fragment>}
                >
                </Split>
            </div>
        )
    }
}