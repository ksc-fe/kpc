import React from 'react';
import Input from 'kpc-react/components/input';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Input type="textarea" placeholder="please enter" />
                <br />
                <Input type="textarea" rows="5" placeholder="please enter" />
            </div>
        )
    }
}