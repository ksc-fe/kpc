import React from 'react';
import Upload from 'kpc-react/components/upload';
import './index.styl';
import Dialog from 'kpc-react/components/dialog';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this._beforeRemove = this._beforeRemove.bind(this);
    }

    _beforeRemove(file) {
        return new Promise((resolve, reject) => {
            const dialog = new Dialog({
                size: 'mini',
                title: '确认删除',
                children: `确认删除文件：${file.name}`, 
            });
            dialog.show();
            dialog.on('ok', resolve);
            dialog.on('cancel', reject);
        });
    }
    
    render() {
        return (
            <Upload multiple
                type="drag"
                beforeRemove={this._beforeRemove}
                action="//jsonplaceholder.typicode.com/posts/"
            />
        )
    }
}