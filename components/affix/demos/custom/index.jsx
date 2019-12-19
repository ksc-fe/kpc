import React from 'react';
import Affix from 'kpc-react/components/affix';
import Button from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this._shouldFix = this._shouldFix.bind(this);
        this._exclude = this._exclude.bind(this);
    }

    _shouldFix() {
        // when scroll top greater than or equal to 100
        // fix it at 150px from top
        return window.pageYOffset >= 100;
    }
    
    _exclude() {
        // when this demo is not in the viewport
        // don't fix it
        const {top} = this.node.getBoundingClientRect();
        const viewport = document.documentElement.clientHeight;
    
        return top > viewport; 
    }
    
    render() {
        return (
            <div ref={i => this.node = i}>
                <Affix top={150} shouldFix={this._shouldFix}>
                    <Button type="primary">fix at 150px from the top while scroll top 100px</Button>
                </Affix>
                <Affix bottom={0} exclude={this._exclude} ref={i => this.__test = i}>
                    <Button type="primary">fix at the bottom only while this demo is in viewport</Button>
                </Affix>
            </div>
        )
    }
}