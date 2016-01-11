
<style scoped lang="sass">

    @import "../px2rem.scss";

    h3 {}

</style>

<template>

    <a class="btn" @click.prevent="show=true">confirm</a>

    <confirm :show.sync="show"
             :title="title"
             :content="content"
             :buttons="buttons"></confirm>

</template>

<script>

    //import { confirm } from 'vue-mui'

    //import { confirm } from '../../ui-components/vue-mui/dist/mui.js';

    import confirm from '../../ui-components/vue-mui/src/components/confirm.vue'

    export default {
        data () {
            return {
                show: false,
                title: '测试title .... ',
                content: '测试content ... ',
                buttons:[
                    { name: 'test', text: '测试' },
                    { name: 'cancel', text: '取消' },
                    { name: 'confirm', text: '确定' }
                ]
            };
        },
        events: {
            test(){
                alert('test');
            },
            cancel(){
                alert('cancel');
            },
            confirm(){
                alert('confirm');
            }
        },
        components: {
            confirm
        }
    }
</script>