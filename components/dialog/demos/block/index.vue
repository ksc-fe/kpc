<template>
    <div>
        <Button @click="show = true" type="primary">Show Dialog</Button>
        <Button @click="show1 = true" type="primary">Show No Footer Dialog</Button>
        <Dialog v-model="show">
            <div class="k-title" slot="header">
                <i class="ion-person"></i>
                Custom Header
            </div>
    
            Dialog Body 
    
            <template slot="footer">
                Custom Footer
                <!-- vue不支持parent()引用，我们需要重新定义按钮 -->
                <Button @click="show = false">取消</Button>
                <Button type="primary" @click="show = false">确认</Button>
            </template>
        </Dialog>
        <Dialog v-model="show1" title="No Footer">
            <template slot="body">body</template>
            <div slot="footer-wrapper"></div>
        </Dialog>
    </div>
</template>
<script>
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

export default {
    components: {
        Button, Dialog
    },
    data() {
        return {
            show: false,
            show1: false,
        }
    },
}
</script>