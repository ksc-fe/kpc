import React from 'react';
import Button from 'kpc-react/components/button';
import Icon from 'kpc-react/components/icon';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    onClick(name) {
        this.setState({[name]: true});
    }
    
    render() {
        return (
            <div>
                <Button type="primary" loading>确认</Button>
                <Button icon circle loading><i className="k-icon ion-ios-search"></i></Button>
                <br /> <br />
                <Button type="primary" 
                    loading={this.state.loading1}
                    onClick={this.onClick.bind(this, 'loading1')}
                >点击加载</Button>
                <Button type="primary" 
                    loading={this.state.loading2}
                    onClick={this.onClick.bind(this, 'loading2')}
                ><Icon className="ion-ios-search" />点击加载</Button>
                <Button icon circle
                    loading={this.state.loading3}
                    onClick={this.onClick.bind(this, 'loading3')}
                ><Icon className="ion-ios-search" /></Button>
                <Button type="primary" 
                    loading={this.state.loading4}
                    onClick={this.onClick.bind(this, 'loading4')}
                >图标在右侧<Icon className="ion-ios-search" /></Button>
            </div>
        )
    }
}