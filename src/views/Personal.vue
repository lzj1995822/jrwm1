<template>
    <div class="personal">
        <div style="width: 100%;height:4.33rem;position: relative;">
            <svg-img name="PERSONAL" class="svg-bg"></svg-img>
            <mt-header class="per-header" title="个人中心">
                <mt-button icon="back" slot="left" @click="back"></mt-button>
            </mt-header>
            <div class="header_img">
                <img src="../assets/tou.jpg" alt="头像" width="100%"/>
            </div>
            <div class="per-info">
                <span>{{ person.village }}</span>
                <span>{{ person.phone }}</span>
            </div>
        </div>
        <div class="cell-bar">
            <mt-cell
                title="问题反馈"
                is-link>
                <icon name="question" :scale=".045 * $rem" slot="icon" style="margin-bottom: -0.13rem"></icon>
            </mt-cell>
            <mt-cell
                title="关于"
                is-link>
                <icon name="info" :scale=".045 * $rem" slot="icon" style="margin-bottom: -0.13rem"></icon>
            </mt-cell>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Personal",
        data() {
            return {
                person: {
                    village: '所属村庄',
                    phone: '13032535789'
                }
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .personal {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .header_img {
        position: relative;
        z-index: 3;
        width: 1.3rem;
        height: 1.3rem;
        overflow: hidden;
        top: 50%;
        left: 50%;
        margin-top: -1rem;
        margin-left: -0.65rem;
        border-radius: 1rem;
        border: #fff .03rem solid;
    }
    .svg-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        margin-top: 0.98rem;
    }
    .per-header {
        position: absolute;
        width: 100%;
        background-color: transparent;
        margin-top: 0.99rem;
        z-index: 6;
    }
    .per-info {
        position: relative;
        width: 2rem;
        height: .2rem;
        margin: 0 auto;
        top: 2.5rem;
        z-index: 6;
        font-size: .26rem;
        color: #fff;
    }
    .per-info span {
        line-height: .5rem;
    }
    .cell-bar {
        margin-top: 1.16rem;
        font-size: .26rem;
        text-align: left;
    }
</style>
<style>
    .cell-bar .mint-cell-text {
        padding-left: .15rem;
    }
</style>
