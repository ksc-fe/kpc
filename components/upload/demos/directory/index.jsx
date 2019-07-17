import React from 'react';
import Upload from 'kpc/components/upload';
import Button from 'kpc/components/button';
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