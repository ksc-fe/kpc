<template>
    <Table :data="data" :rowKey="data => data.name">
        <TableColumn key="name" title="Name" />
        <TableColumn key="size" title="Size">
            <template slot="template" slot-scope="data">
                {{ data.size }}MB
            </template>
        </TableColumn>
    </Table>
</template>
<script>
import {Table, TableColumn} from 'kpc/components/table';

export default {
    components: {
        Table, TableColumn
    },
    data() {
        return {
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
        }
    },
}
</script>