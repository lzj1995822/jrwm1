<template>
    <section class="home">
        <mt-swipe :auto="4000" class="swipe-height">
            <mt-swipe-item>
                <svg-img name="H_BANNER"></svg-img>
            </mt-swipe-item>
        </mt-swipe>
        <div class="btn-list">
            <mt-button @click="push('/workPlan')">
                <svg-img name="H_JOB_PLAN"></svg-img>
                <p>工作计划</p>
            </mt-button>
            <mt-button @click="push('/optionalActivities')" style="flex: 3">
                <svg-img name="H_SELF_ACT"></svg-img>
                <p>自学活动</p>
            </mt-button>
            <mt-button @click="push('/featuredActivities')">
                <svg-img name="H_SPE_ACT"></svg-img>
                <p>特色活动</p>
            </mt-button>
        </div>

        <div class="notice">
            <div class="label">
                <span class="lean-left">通知公告</span>
                <span class="lean-right">更多</span>
            </div>
            <ul>
                <li v-for="item in list" :key="item" @click="$router.push(`/noticeDetail/${item}`)"><nobr>{{item}}</nobr></li>
            </ul>

        </div>

    </section>
</template>

<script>
    import { Swipe, SwipeItem, Popup } from 'mint-ui';

    export default {
        name: "Home",
        data() {
            return {
                menuVis: false,
                list: [
                    '关于什么什么的通知关于什么什么的通知关于什么什么的通知',
                    '关于什么什么的通知关于什么什么的通知',
                    '关于什么什么的通知关于什么什么的通知',
                    '关于什么什么的通知关于什么什么的通知'
                ]
            }
        },
        components: {
            'mt-swipe': Swipe,
            'mt-swipe-item': SwipeItem,
            'mt-popup': Popup
        },
        computed: {
            rem() {
                return window.rem;
            }
        },
        methods: {
            showMenu() {
                this.menuVis = !this.menuVis;
            },
            push(path) {
                this.$router.push(path);
            }
        }
    }
</script>

<style>
    .swipe-height {
        height: 3.45rem;
    }
    .home .mint-button-icon {
        display: block;
    }
    .home .mint-button--normal {
        padding: .07rem 0;
        background: none;
        border: none;
        box-shadow: none;
        font-size: .26rem;
        font-weight: 600;
        color: #3d3d3d;
        height: 1.65rem;
        flex: 5;
    }
    .home .btn-list {
        background-color: #fff;
        margin: .2rem 0;
        display: flex;
    }
    .home .btn-list .mint-button--normal svg{
        width: .9rem;
        height: 1rem;
    }
    ul {
        font-size: .3rem;
    }
    ul li {
        text-align: center;
        border-top: 1px solid #d9d9d9;
        padding: 10px 0;
        letter-spacing: .05rem;
    }
    .home .mint-button::after {
        opacity: 0;
    }
    .home .notice {
        background-color: #fff;
        padding: .2rem .3rem;
        height: 4rem;
    }
    .home .notice .label{
        width: 100%;
        height: .45rem;
        letter-spacing: .01rem;
    }
    .home .notice .label .lean-left{
        float: left;
        font-size: .28rem;
        font-weight: 600;
    }
    .home .notice .label .lean-right{
        float: right;
        font-size: .2rem;
        font-weight: 500;
        line-height: .45rem;
    }
    .notice ul>li {
        list-style: none;
        font-size: .24rem;
        text-align: left;
        padding: .1rem 0;
        text-overflow:ellipsis;
        overflow: hidden;
        letter-spacing: 0;
    }
    /*.h-popup {*/
        /*border-radius: 8px;*/
        /*padding: 10px;*/
        /*-webkit-transform: translate(-50%);*/
        /*transform: translate(-50%);*/
        /*top: 1rem;*/
        /*right: -1.3rem !important;*/
        /*left: unset;*/
        /*width: 2.2rem;*/
    /*}*/
    /*.h-popup::before {*/
        /*display: inline-block;*/
        /*width: 0;*/
        /*height: 0;*/
        /*border: 10px solid transparent;*/
        /*border-bottom-color: #fff;*/
        /*content: "";*/
        /*position: absolute;*/
        /*top: -0.31rem;*/
        /*right: 0.27rem;*/
    /*}*/
    /*.v-modal {*/
        /*display: none;*/
    /*}*/
</style>
