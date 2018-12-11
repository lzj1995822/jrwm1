<template>
    <div id="app">
        <mt-header :title="currentPath[0] ? currentPath[0].meta.title : ''" v-if="headerVis">
            <mt-button icon="back" slot="left" @click="$router.go(-1)" v-if="!personVis"></mt-button>
            <mt-button icon="more" slot="right" @click.native="showMenu" v-if="personVis">
                <icon name="person" :scale="0.05 * rem" slot="icon" class="icon-ver-alg"></icon>
            </mt-button>
        </mt-header>
        <mt-popup
            v-model="menuVis"
            position="bottom"
            style="width: 100%">
            <ul>
                <li @click="push('/personal')">个人中心</li>
                <li @click="push('/login')">退出登录</li>
            </ul>
        </mt-popup>
        <router-view @headerShow="handleHeader"></router-view>
    </div>
</template>

<script>
    import { Popup } from 'mint-ui';
    export default {
        name: 'App',
        data() {
            return {
                menuVis: false,
                headerVis: true,
            }
        },
        computed: {
            rem() {
                let html = document.documentElement;
                return html.getBoundingClientRect().width / 6.4;
            },
            currentPath() {
                return this.$route.matched;
            },
            personVis() {
                return this.currentPath[0] ? this.currentPath[0].name === 'Home' : true
            }
        },
        methods: {
            showMenu() {
                this.menuVis = !this.menuVis;
            },
            push(path) {
                this.$router.push(path);
                this.menuVis = false;
                if (path === '/personal' || path === '/login') {
                    this.headerVis = false
                }
            },
            handleHeader(data) {
                this.headerVis = data;
            }
        },
        components: {
            'mt-popup': Popup
        }
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
    html,body,#app {
        height: 100%;
    }
    .mint-header {
        background-color: #c72626;
        font-size: .3rem !important;
        height: 1rem;
        padding: .25rem;
        overflow: hidden;
    }
</style>
