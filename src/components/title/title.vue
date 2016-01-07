
<style lang="sass">

    @import "../px2rem.scss";
    
    .btn {
        display: inline-block;
        padding: px2rem(10) px2rem(20);
        border: 2px solid #ccc;
        border-radius: 10px;
        color: #ccc;
        cursor: pointer;
    }

</style>

<template>

    <a class="btn" @click.prevent="show=true">alert</a>

    <alert :show.sync="show"
           :title="title"
           :content="content">
    </alert>

</template>

<script>

    import { alert } from 'vue-mui';

    export default {
        data () {
            return {
                show: false,
                title: "测试标题111111",
                content: '测试内容222222'
            };
        },

        components: {
            alert
        },

        methods: {
            alert(){
                this.show = true;
            }
        },

        events: {
            confirm(){
                alert('confirm');
            },
            cancel(){
                alert('cancel');
            }
        }
    }
</script>