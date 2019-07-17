import React from 'react';
import Progress from 'kpc/components/progress';
import {ButtonGroup, Button} from 'kpc/components/button';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "percent": 40
        };
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
    }

    add() {
        if (this.state.percent >= 100) return;
    
        this.setState({percent: this.state.percent + 10});
    }
    
    minus() {
        if (this.state.percent <= 0) return;
    
        this.setState({percent: this.state.percent - 10});
    }
    
    render() {
        return (
            <div>
                <Progress percent={this.state.percent} type="circle">
                    {this.state.percent !== 100 ?
                        <div style={{"fontSize":"14px","lineHeight":"20px"}}>
                            正在上传<br />
                            {this.state.percent}%
                        </div> :
                        <div style={{"fontSize":"14px","lineHeight":"20px","color":"#4db500"}}>
                            上传完成
                        </div>
                    }
                </Progress>
                <ButtonGroup>
                    <Button size="mini" icon onClick={this.add}>+</Button>
                    <Button size="mini" icon onClick={this.minus}>-</Button>
                </ButtonGroup>
            </div>
        )
    }
}