<template>
    <Upload multiple
        type="drag"
        :beforeRemove="_beforeRemove"
        action="//jsonplaceholder.typicode.com/posts/"
    />
</template>
<script>
import Upload from 'kpc/components/upload';

import Dialog from 'kpc/components/dialog';

export default {
    components: {
        Upload
    },
    methods: {
        _beforeRemove(file) {
            return new Promise((resolve, reject) => {
                const dialog = new Dialog({
                    size: 'mini',
                    title: '确认删除',
                    children: `确认删除文件：${file.name}`, 
                });
                dialog.show();
                dialog.on('ok', resolve);
                dialog.on('cancel', reject);
            });
        },
    },
}
</script>