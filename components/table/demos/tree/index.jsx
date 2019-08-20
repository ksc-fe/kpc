import React from 'react';
import {Table, TableColumn} from 'kpc/components/table';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "data": [
                {
                    "name": "Audios",
                    "size": 12,
                    "children": [
                        {
                            "name": "Fly.mp3",
                            "size": 7
                        },
                        {
                            "name": "Fade.aac",
                            "size": 5
                        }
                    ]
                },
                {
                    "name": "Images",
                    "size": 14,
                    "children": [
                        {
                            "name": "Photos",
                            "size": 8,
                            "children": [
                                {
                                    "name": "file.png",
                                    "size": 8
                                }
                            ]
                        },
                        {
                            "name": "image.png",
                            "size": 6
                        }
                    ]
                },
                {
                    "name": "doc.pdf",
                    "size": 18
                }
            ]
        };
    }

    render() {
        return (
            <Table data={this.state.data} rowKey={data => data.name}>
                <TableColumn key="name" title="Name" />
                <TableColumn key="size" title="Size"
                    b-template={(data) => {
                        return <React.Fragment>
                            {data.size}MB
                        </React.Fragment>
                    }}
                >
                </TableColumn>
            </Table>
        )
    }
}