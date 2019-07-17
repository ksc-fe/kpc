import React from 'react';
import Button from 'kpc/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button tagName="div" type="primary">div元素按钮</Button>
                <Button tagName="div" disabled>disabled div button</Button>
                <Button href="https://www.ksyun.com" target="_blank">超链接按钮</Button>
            </div>
        )
    }
}