import React from 'react';
import Upload from 'kpc/components/upload';

import Dialog from 'kpc/components/dialog';
import Message from 'kpc/components/message';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this._onError = this._onError.bind(this);
    }

    _onError(err) {
        Message.error(err.message);
    }
    
    render() {
        return (
            <Upload multiple
                action="//jsonplaceholder.typicode.com/posts/"
                type="gallery"
                limit={3}
                accept=".jpg, .png"
                onError={this._onError}
            />
        )
    }
}