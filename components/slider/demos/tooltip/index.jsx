import React from 'react';
import Slider from 'kpc-react/components/slider';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value1": 277,
            "values": [
                50,
                76
            ],
            "value2": 6,
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
                <Slider value={this.state.value1} on$change-value={(c, value1) => this.setState({value1})} min={50} max={500} showTooltip />
                <Slider value={this.state.values} on$change-value={(c, values) => this.setState({values})} isRange showTooltip />
                <Slider value={this.state.value2} on$change-value={(c, value2) => this.setState({value2})} min={1} max={12}
                    b-tooltip={(value) => {
                        return <React.Fragment>
                            {value > 9 ?
                                <span>满{value - 9}年，优惠{(value - 9) * 2}个月</span> :
                                undefined
                            }
                        </React.Fragment>
                    }}
                    isShowInput={false}
                    marks={this.state.marks}
                    showTooltip
                    always
                >
                </Slider>
            </div>
        )
    }
}