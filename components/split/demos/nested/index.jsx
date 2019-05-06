import React from 'react';
import Split from 'kpc/components/split';

export default class extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Split
                    b-first={<><div className="panel">left</div></>}
                    b-last={<>
                        <Split mode="vertical"
                            b-first={<><div className="panel">right top</div></>}
                            b-last={<><div className="panel">right bottom</div></>}
                        >
                        </Split>
                    </>}
                >
                </Split>
            </div>
        )
    }
}