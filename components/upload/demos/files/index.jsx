import React from 'react';
import Upload from 'kpc/components/upload';

export default class extends React.Component {
    render() {
        return (
            <Upload multiple
                action="//jsonplaceholder.typicode.com/posts/"
                defaultFiles={[
                    {name: 'test1.jpg', url: 'http://www.example.com/test1.jpg'},
                    {name: 'test2.png', url: 'http://www.example.com/test2.png'},
                ]}
            />
        )
    }
}