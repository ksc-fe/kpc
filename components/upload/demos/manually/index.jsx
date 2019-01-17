import React from 'react';
import Upload from 'kpc/components/upload';
import Button from 'kpc/components/button';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.upload = this.upload.bind(this);
    }

    upload(e) {
        this.upload.submit();
    }
    
    render() {
        return (
            <Upload
                b-tip={<><Button onClick={this.upload}>开始上传</Button></>}
                ref={i => this.upload = i}
                multiple 
                action="//jsonplaceholder.typicode.com/posts/"
                autoUpload={false}
            >
                <Button type="primary">选择文件</Button>
            </Upload>
        )
    }
}