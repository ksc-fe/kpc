<template>
    <div>
        <Spinner :max="5" :min="-5" vertical size="large" />
        <Spinner :max="5" :min="-5" vertical />
        <Spinner :max="5" :min="-5" vertical size="small" />
        <Spinner :max="5" :min="-5" vertical size="mini" />
    </div>
</template>
<script>
import Spinner from 'kpc/components/spinner';

export default {
    components: {
        Spinner
    },
}
</script>