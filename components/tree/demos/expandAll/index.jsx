import React from 'react';
import Tree from 'kpc-react/components/tree';

export default class Demo extends React.Component {
    render() {
        return (
            <Tree
                defaultExpandAll
                data={[
                    {
                        label: 'First floor-1',
                        children: [
                            {
                                label: 'Second floor-1.1',
                                children: [
                                    {
                                        label: 'Third floor-1.1.1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'First floor-2',
                        key: '2',
                        children: [
                            {
                                label: 'Second floor-2.1',
                                children: [
                                    {
                                        label: 'Third floor-2.1.1',
                                        key: '2-1' 
                                    },
                                    {
                                        label: 'Third floor-2.1.2'
                                    }
                                ]
                            },
                            {
                                label: 'Second floor-2.2',
                                disabled: true,
                                children: [
                                    {
                                        label: 'Third floor-2.2.1'
                                    }
                                ]
                            }
                        ]
                    }
                ]}
            />
        )
    }
}