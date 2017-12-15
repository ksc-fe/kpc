<template>
    <div class="wrapper">
        <div v-if="test">test</div>
        <Button @click="isShow = true">Show</Button>
        <Button @click="isShowSmall = true">Show small</Button>
        <Button tagName="div" @click="showDialogInstance">Show Dialog Instance</Button>
        <Dialog v-model="isShow" title="Dialog Demo" key="a">
            test {{ JSON.stringify(test) }}
        </Dialog>
        <Dialog v-model="isShowSmall" type="small" key="b">
            <span class="k-title" slot="header">Custom Title</span>
            
            small dialog content

            <template slot="footer">
                small dialog footer
                <Button @click="isShowSmall = false">取消</Button>
                <Button type="primary" @click="isShowSmall = false">确定</Button>
            </template>
        </Dialog>
    </div>
</template>

<script>
import Dialog from 'components/dialog';
import Button from 'components/button';
import Intact from 'intact';

export default {
    components: {
        Dialog, Button
    },

    data() {
        return {
            test: false,
            isShow: false,
            isShowSmall: false,
        }
    },

    methods: {
        showDialogInstance() {
            class MyDialog extends Dialog {
                @Intact.template()
                get template() {
                    return `<t:parent><b:body>Dialog Instance</b:body></t:parent>`
                }

                ok() {
                    console.log('You clicked OK!');
                    this.close();
                }
            }

            const dialog = new MyDialog({
                title: 'Dialog Instance'
            });
            dialog.show();
        }
    }
}
</script>
