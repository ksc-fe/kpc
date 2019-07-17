import React from 'react';
import Tooltip from 'kpc/components/tooltip';
import {Slider} from 'kpc/components/slider';
import {Button} from 'kpc/components/button';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Tooltip trigger="click"
                    b-content={<React.Fragment>
                        <Slider value={this.state.volume}
                            on$change-value={(c, volume) => this.setState({volume})} 
                            style={{"width":"200px"}}
                            isShowInput={false} 
                            isShowEnd={false}
                        />
                    </React.Fragment>}
                >
                    <Button>Adjust Volume</Button>
                </Tooltip>
            </div>
        )
    }
}