
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

    .wrapper {
        width: 100%;
        height: 300px;
        background: #ff0000;

        display: flex;
        justify-content: center; //水平居中
        align-items: center;     //垂直居中

        .content {
            height: 100px;
            width: 50%;
            border: 1px solid #0000cc;
        }
    }

    .test-padding {
        width: 100%;
        height: 500px;
        border:1px solid red;

        .test-padding-aaa {
            width: 50%;
            border:1px solid blue;
            background: #000;
            padding-top: 25%;
            padding-bottom: 25%;
        }
    }

</style>

<template>

    <a class="btn" @click.prevent="show=true">alert</a>

    <alert :show.sync="show"
           :title="title"
           :content="content">
    </alert>

    <div class="wrapper">

        <div class="content">

        </div>

    </div>

    <div class="test-padding">
        <div class="test-padding-aaa">

        </div>
    </div>

</template>

<script>

    import { alert } from 'vue-mui';

    require.ensure([], function() {

        //var $ = require("webpack-zepto");

        var $ = require('../../../static/js/zepto.js');

        console.log( $ );
    });


    /*
    var a = require("a");

    require.ensure(["b"], function(require) {
        var c = require("c"); }
    );

    require.ensure(["d"], function() {
        var e = require("e");
    }, "my chunk");

    require.ensure([], function() {
        var f = require("f");
    }, "my chunk");
    */

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