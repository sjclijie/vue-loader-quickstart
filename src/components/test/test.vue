
<style scoped lang="sass">

    @import "../px2rem.scss";

    h3 {}

</style>

<template>

    <a class="btn" @click.prevent="show=true">confirm</a>

<!--
    <confirm :show.sync="show"
             :title="title",
             :content="content">
    </confirm>
-->

</template>

<script>

    import { confirm } from 'vue-mui'

    export default {
        data () {
            return {
                sync: false,
                title: '测试title .... ',
                content: '测试content ... '
            };
        },
        component: {
//            confirm
        }
    }
</script>