
<style scoped lang="sass">

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

    import confirm from 'vue-mui';

    export default {
        data () {
            return {
                show: false,
                title: "This is title (optional)",
                content: 'This is content'
            };
        },
        components: {
            confirm
        },

        methods: {
            
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