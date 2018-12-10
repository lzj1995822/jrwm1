<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    * {
        margin: 0;
        padding: 0;
    }
    .icon-ver-alg {
        vertical-align: middle;
    }
    body {
        background-color: #f0f0f0d1;
    }
</style>
