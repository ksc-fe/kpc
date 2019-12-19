import React from 'react';
import {Diagram, DFlowLayout, DTreeLayout, DRectangle, DCircle, DDiamond, DLine} from 'kpc-react/components/diagram';

export default class Demo extends React.Component {
    render() {
        return (
            <Diagram>
                <DTreeLayout type="vertical">
                    <DRectangle label="<h1>hello</h1>" key="1"></DRectangle>
                    <DDiamond key="2" label="world" />
                    <DCircle key="3" label="kpc" />
                    <DLine from="1" to="2" type="rounded" />
                    <DLine from="1" to="3" type="rounded" />
                </DTreeLayout>
            </Diagram>
        )
    }
}