<template>
    <div>
        <Tooltip content="确定删除？"
            confirm
            theme="light"
            trigger="click"
            @ok="ok"
            @cancel="cancel"
            ref="__test"
        >
            <Button>删除</Button>
        </Tooltip>
    </div>
</template>
<script>
import Tooltip from 'kpc/components/tooltip';
import Button from 'kpc/components/button';

import Message from 'kpc/components/message';

export default {
    components: {
        Tooltip, Button
    },
    methods: {
        ok() {
            Message.success('Clicked ok!');
        },
        cancel() {
            Message.info('Clicked cancel!');
        },
    },
}
</script>