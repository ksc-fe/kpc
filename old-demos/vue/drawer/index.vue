<template>
    <div class="wrapper">
        <Button @click="show">show</Button>
        <Drawer ref="a">
            <div>
                <Select>
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                </Select>
            </div>
        </Drawer>
    </div>
</template>

<script>
import Drawer from 'components/drawer';
import Button from 'components/button';
import {Select, Option} from 'components/select';
import Intact from 'intact';

export default {
    components: {
        Drawer, Button, Select, Option
    },

    data() {
        return {
            isShow: false,
        }
    },

    methods: {
        show() {
            // this.isShow = true;
            this.$refs.a.show();
        }
    }
}
</script>
