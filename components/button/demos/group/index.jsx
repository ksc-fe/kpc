import React from 'react';
import {Button, ButtonGroup} from 'kpc/components/button';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: 'beijing'}
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button>开机</Button>
                    <Button>关机</Button>
                    <Button>重启</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="primary">开机</Button>
                    <Button type="primary">关机</Button>
                    <Button type="primary">重启</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="primary">
                        <i className="k-icon ion-ios-arrow-left"></i>上一页
                    </Button>
                    <Button type="primary">
                        下一页<i className="k-icon ion-ios-arrow-right"></i>
                    </Button>
                </ButtonGroup>
                <br /><br />
                <p>纵向按钮组</p>
                <ButtonGroup vertical>
                    <Button type="primary">开机</Button>
                    <Button type="primary">关机</Button>
                    <Button type="primary">重启</Button>
                </ButtonGroup>
                <br /><br />
                <p>radio按钮组</p>
                <ButtonGroup checkType="radio"
                    value={this.state.city}
                    on$change-value={(c, city) => this.setState({city})}
                >
                    <Button value="beijing">北京</Button>
                    <Button value="shanghai">上海</Button>
                    <Button value="guangzhou">广州</Button>
                    <Button value="shenzhen">深圳</Button>
                </ButtonGroup>
                <p>checkbox按钮组</p>
                <ButtonGroup checkType="checkbox"
                    value={this.state.cities}
                    on$change-value={(c, cities) => this.setState({cities})}
                >
                    <Button value="beijing" size="small">北京</Button>
                    <Button value="shanghai" size="small">上海</Button>
                    <Button value="guangzhou" size="small">广州</Button>
                    <Button value="shenzhen" size="small">深圳</Button>
                </ButtonGroup>
            </div>
        )
    }
}