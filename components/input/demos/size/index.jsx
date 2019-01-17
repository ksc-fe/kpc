import React from 'react';
import Input from 'kpc/components/input';
import Button from 'kpc/components/button';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Input size="large" value="large" />
                <br />
                <Input value="default" />
                <br />
                <Input value="small" size="small" />
                <Input size="small" placeholder="please enter"
                    b-prepend={<>http://</>}
                    b-append={<>.com</>}
                >
                </Input>
                <Input size="small" placeholder="please enter"
                    b-prefix={<><i className="ion-earth"></i></>}
                    b-suffix={<><i className="ion-ios-search"></i></>}
                    b-append={<><Button size="small" icon type="primary"><i className="ion-ios-search"></i></Button></>}
                >
                </Input>
                <Input size="small" placeholder="please enter" clearable
                    b-append={<><Button type="primary" size="small">Search</Button></>}
                >
                </Input>
            
                <Input value="mini" size="mini" />
            </div>
        )
    }
}