import React from 'react';
import Input from 'kpc/components/input';
import Button from 'kpc/components/button';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Input placeholder="please enter"
                    b-prepend={<>http://</>}
                    b-append={<>.com</>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-append={<><Button icon type="none"><i className="ion-ios-search"></i></Button></>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-append={<><Button icon type="primary"><i className="ion-ios-search"></i></Button></>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-append={<><Button type="primary">搜索</Button></>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-prefix={<><i className="ion-earth"></i></>}
                    b-suffix={<><i className="ion-ios-search"></i></>}
                >
                </Input>
                <Input placeholder="please enter"
                    b-prepend={<>http://</>}
                    b-append={<>.com</>}
                    b-prefix={<><i className="ion-earth"></i></>}
                    b-suffix={<><i className="ion-ios-search"></i></>}
                >
                </Input>
            </div>
        )
    }
}