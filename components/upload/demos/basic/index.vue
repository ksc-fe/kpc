<template>
    <Upload multiple
        :beforeRemove="_beforeRemove"
        action="//jsonplaceholder.typicode.com/posts/"
        accept=".jpg, .png"
        :maxSize="500"
        @error="_showError"
    >
        <template slot="tip">只能上传JPG/PNG格式文件，且不超过500kb</template>
    </Upload>
</template>
<script>
import Upload from 'kpc/components/upload';

import Dialog from 'kpc/components/dialog';
import Message from 'kpc/components/message';

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
        _showError(e) {
            Message.error(e.message);
        },
    },
}
</script>