import React from 'react';
import Input from 'kpc-react/components/input';
import Button from 'kpc-react/components/button';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Input placeholder="please enter"
                    b-prepend={<React.Fragment>http://</React.Fragment>}
                    b-append={<React.Fragment>.com</React.Fragment>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-append={<React.Fragment><Button icon type="none"><i className="ion-ios-search"></i></Button></React.Fragment>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-append={<React.Fragment><Button icon type="primary"><i className="ion-ios-search"></i></Button></React.Fragment>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-append={<React.Fragment><Button type="primary">搜索</Button></React.Fragment>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-prefix={<React.Fragment><i className="ion-earth"></i></React.Fragment>}
                    b-suffix={<React.Fragment><i className="ion-ios-search"></i></React.Fragment>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-prepend={<React.Fragment>http://</React.Fragment>}
                    b-append={<React.Fragment>.com</React.Fragment>}
                    b-prefix={<React.Fragment><i className="ion-earth"></i></React.Fragment>}
                    b-suffix={<React.Fragment><i className="ion-ios-search"></i></React.Fragment>}
                >
                </Input>
            </div>
        )
    }
}