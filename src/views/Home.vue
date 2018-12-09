<template>
    <mt-header title="新时代文明实践中心">
        <router-link to="/" slot="left">
            <!--<mt-button icon="back">返回</mt-button>-->
        </router-link>
        <mt-button icon="more" slot="right">
            <icon name="person" scale="2.5" slot="icon"></icon>
        </mt-button>
    </mt-header>
</template>

<script>
    import { Header } from 'mint-ui';

    export default {
        name: "Home",
        components: {
            'mt-header': Header
        }
    }
</script>

<style>
    .mint-header {
        background-color: #c72626;
        font-size: .4rem;
        height: 1rem;
        padding: .1rem;
    }
</style>
