<template>
    <div>
        <Form>
            <FormItem label="aaa" model="a">
                <ButtonGroup radio v-if="true">
                    <Button value="1">test</Button>
                    <Button value="2">test</Button>
                </ButtonGroup>
                <div v-else>aaa</div>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import Form, {FormItem} from 'components/form';
import {Button, ButtonGroup} from 'components/button';

export default {
    components: {
        Form, FormItem,
        Button, ButtonGroup,
    },
}
</script>
