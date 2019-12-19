import React from 'react';
import Slider from 'kpc-react/components/slider';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "marks": {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6月",
                "7": "7",
                "8": "8",
                "9": "9",
                "10": "1年",
                "11": "2年",
                "12": "3年"
            }
        };
    }

    render() {
        return (
            <div>
                <Slider min={1} max={12} value={6} 
                    isShowInput={false}
                    marks={this.state.marks}
                />
                <Slider min={1} max={12} value={[2, 6]} 
                    isShowInput={false}
                    isRange
                    marks={this.state.marks}
                />
            </div>
        )
    }
}