<template>
    <div class="input-page">
        <Input v-model="basic" placeholder="please enter"/> {{ basic }}
        <br />
        <Input disabled placeholder="disabled" />
        <br />
        <Input placeholder="please enter">
            <template slot="prepend">http://</template>
            <template slot=""append>.com</template>
        </Input>
        <Input placeholder="please enter">
            <template slot="append"><Button icon type="none"><i class="ion-ios-search"></i></Button></template>
        </Input>
        <Input placeholder="please enter">
            <template slot="append"><Button icon type="primary"><i class="ion-ios-search"></i></Button></template>
        </Input>
        <Input placeholder="please enter">
            <template slot="append"><Button type="primary">Search</Button></template>
        </Input>

        <Input value="small" size="small" />
        <Input size="small" placeholder="please enter">
            <template slot="prepend">http://</template>
            <template slot="append">.com</template>
        </Input>
        <Input size="small" placeholder="please enter">
            <template slot="append"><Button size="small" icon type="primary"><i class="ion-ios-search"></i></Button></template>
        </Input>
        <Input size="small" placeholder="please enter">
            <template slot="append"><Button type="primary" size="small">Search</Button></template>
        </Input>

        <Input placeholder="please enter">
            <template slot="prefix"><i class="ion-ios-search"></i></template>
            <template slot="suffix"><i class="ion-ios-search"></i></template>
        </Input>
        <Input placeholder="please enter">
            <template slot="prepend">http://</template>
            <template slot="append">.com</template>
            <template slot="prefix"><i class="ion-ios-search"></i></template>
            <template slot="suffix"><i class="ion-ios-search"></i></template>
        </Input>

        <Input clearable placeholder="please enter" />
        <br />
        <Input clearable placeholder="please enter">
            <template slot="suffix"><i class="ion-ios-search"></i></template>
        </Input>
        <br />
        <Input size="small" clearable placeholder="please enter" />

        <br />
        <Input type="textarea" placeholder="please enter"/>
    </div>
</template>

<script>
import Input from 'components/input';
import Button from 'components/button';

export default {
    components: {
        Input, Button
    },

    data() {
        return {
            basic: ''
        }
    }
}
</script>
