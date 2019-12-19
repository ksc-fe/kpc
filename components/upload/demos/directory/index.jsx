import React from 'react';
import Upload from 'kpc-react/components/upload';
import Button from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <Upload 
                directory
                action="//jsonplaceholder.typicode.com/posts/"
            />
        )
    }
}