
<style scoped lang="sass">

    @import "../px2rem.scss";

    h3 {
        display: block;
        height: px2rem(100);
        line-height: px2rem(100);
        text-align: center;
        background: #ff0000;
        border-radius: 10px;
        color: yellow;
    }

</style>

<template>
    <h3>
        {{ msg }}
    </h3>
</template>

<script>

    //import $ from 'zepto'

//    import $ from 'webpack-zepto'
//    import { map } from 'lodash'

    console.log($);

    console.log(_);

    export default {
        data () {
            return { msg : 'jaylee jaylee' };
        }
    }
</script>