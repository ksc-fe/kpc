import React from 'react';
import Upload from 'kpc/components/upload';
import Button from 'kpc/components/button';

export default class extends React.Component {
    render() {
        return (
            <Upload 
                directory
                action="//jsonplaceholder.typicode.com/posts/"
            />
        )
    }
}