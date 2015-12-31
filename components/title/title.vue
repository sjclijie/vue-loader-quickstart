
<style scoped>
    h3 {
        display: block;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: green;
        color: #fff;
    }
</style>

<template>
    <h3>
        {{ msg }}
    </h3>
</template>

<script>
    export default {
        data () {
            return { msg : 'title components' };
        }
    }
</script>