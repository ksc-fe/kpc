import React from 'react';
import Affix from 'kpc-react/components/affix';
import Button from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Affix top={87}>
                    <Button>fix at 87px from the top</Button>
                </Affix>
                <Affix bottom={0} ref={i => this.__test = i}>
                    <Button>fix at the bottom</Button>
                </Affix>
            </div>
        )
    }
}