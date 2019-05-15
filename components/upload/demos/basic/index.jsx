import React from 'react';
import Upload from 'kpc/components/upload';

import Dialog from 'kpc/components/dialog';
import Message from 'kpc/components/message';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this._beforeRemove = this._beforeRemove.bind(this);
        this._showError = this._showError.bind(this);
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
    
    _showError(e) {
        Message.error(e.message);
    }
    
    render() {
        return (
            <Upload multiple
                b-tip={<>只能上传JPG/PNG格式文件，且不超过500kb</>}
                beforeRemove={this._beforeRemove}
                action="//jsonplaceholder.typicode.com/posts/"
                accept=".jpg, .png"
                maxSize={500}
                onError={this._showError}
            >
            </Upload>
        )
    }
}