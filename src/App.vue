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
        font-family: 'SourceHanSans', 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        width: 100%;
        height: 100%;
    }
    @font-face {font-family: 'SourceHanSans';
        src: url('//at.alicdn.com/t/webfont_vsc56s5sc6e.eot'); /* IE9*/
        src: url('//at.alicdn.com/t/webfont_vsc56s5sc6e.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('//at.alicdn.com/t/webfont_vsc56s5sc6e.woff') format('woff'), /* chrome、firefox */
        url('//at.alicdn.com/t/webfont_vsc56s5sc6e.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/webfont_vsc56s5sc6e.svg#NotoSansHans-DemiLight') format('svg'); /* iOS 4.1- */
    }
</style>
