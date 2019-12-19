import React from 'react';
import Upload from 'kpc-react/components/upload';
import Button from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.upload = this.upload.bind(this);
    }

    upload(e) {
        this.instance.submit();
    }
    
    render() {
        return (
            <Upload
                b-tip={<React.Fragment><Button onClick={this.upload}>开始上传</Button></React.Fragment>}
                ref={i => this.instance = i}
                multiple 
                action="//jsonplaceholder.typicode.com/posts/"
                autoUpload={false}
            >
                <Button type="primary">选择文件</Button>
            </Upload>
        )
    }
}