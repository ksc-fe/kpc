import React from 'react';
import Input from 'kpc/components/input';
import Button from 'kpc/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Input size="large" value="large" />
                <br />
                <Input value="default" />
                <br />
                <Input value="small" size="small" />
                <Input size="small" placeholder="please enter"
                    b-prepend={<React.Fragment>http://</React.Fragment>}
                    b-append={<React.Fragment>.com</React.Fragment>}
                >
                </Input>
                <Input size="small" placeholder="please enter"
                    b-prefix={<React.Fragment><i className="ion-earth"></i></React.Fragment>}
                    b-suffix={<React.Fragment><i className="ion-ios-search"></i></React.Fragment>}
                    b-append={<React.Fragment><Button size="small" icon type="primary"><i className="ion-ios-search"></i></Button></React.Fragment>}
                >
                </Input>
                <Input size="small" placeholder="please enter" clearable
                    b-append={<React.Fragment><Button type="primary" size="small">Search</Button></React.Fragment>}
                >
                </Input>
            
                <Input value="mini" size="mini" />
            </div>
        )
    }
}