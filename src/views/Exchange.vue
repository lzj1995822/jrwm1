<template>
    <div>
        <div v-if="!isRecord" class="exchange">
            <div class="hd">
            <div class="icon-l" @click="$router.go(-1)"><svg t="1545048674179" style="top: -.33rem;position: relative;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1571" xmlns:xlink="http://www.w3.org/1999/xlink" width=".56rem" height=".56rem"><path d="M442.5 512l273.1 273.1c25 25 25 65.5 0 90.5s-65.5 25-90.5 0L308.4 558.9c-12.9-12.9-19.2-30-18.7-47-0.4-16.9 5.8-33.9 18.7-46.8l316.8-316.8c25-25 65.5-25 90.5 0s25 65.5 0 90.5L442.5 512z" fill="#ffffff" p-id="1572"></path></svg></div>
            <div class="title"><p>我的积分&emsp;&emsp;&emsp;</p></div>
        </div>
            <div class="jf-info">
                <p style="font-size: .28rem">当前积分</p>
                <p style="font-size: .5rem;line-height: .68rem">2200</p>
                <p style="font-size: .218rem;">当前机顶盒号：02450102212512354</p>
            </div>
            <div class="ticket">
                <div class="dyp"></div>
                <p style="font-size: .26rem;font-weight: 600;color: #111111">电影院线观影券(一张)</p>
                <div class="jf-k">积分：2088分</div>
                <p style="font-size: .16rem; color: #444444">观影券有效期：为活动上线日期起，半年有效期</p>
            </div>
            <div class="submit-btn">

            </div>
        </div>
        <div v-if="isRecord" class="record">
            <div class="hd">
                <div class="icon-l" @click="$router.go(-1)"><svg t="1545048674179" style="top: -.33rem;position: relative;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1571" xmlns:xlink="http://www.w3.org/1999/xlink" width=".56rem" height=".56rem"><path d="M442.5 512l273.1 273.1c25 25 25 65.5 0 90.5s-65.5 25-90.5 0L308.4 558.9c-12.9-12.9-19.2-30-18.7-47-0.4-16.9 5.8-33.9 18.7-46.8l316.8-316.8c25-25 65.5-25 90.5 0s25 65.5 0 90.5L442.5 512z" fill="#ffffff" p-id="1572"></path></svg></div>
                <div class="title"><p>我的积分&emsp;&emsp;&emsp;</p></div>
            </div>
            <div class="jf-info">
                <p style="font-size: .28rem">当前积分</p>
                <p style="font-size: .5rem;line-height: .68rem">2200</p>
                <p style="font-size: .218rem;">当前机顶盒号：02450102212512354</p>
            </div>
            <div class="ticket t-record">
                <div class="dyp"></div>
                <p style="font-size: .26rem;font-weight: 600;color: #111111">电影院线观影券(一张)</p>
                <div class="jf-k">积分：2088分</div>
                <p style="font-size: .16rem; color: #444444">观影券有效期：为活动上线日期起，半年有效期</p>
            </div>
            <div class="submit-btn btn-record">
            </div>
            <p class="p-title">积分兑换记录</p>
            <div class="exchange-record">

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Exchage",
        props: {
            isRecord: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>
.record {
    width: 100%;
    height: 11.38rem;
    background: url("/static/svg/wdjf2.svg");
    background-size: 100% 100%;
}
.exchange {
    width: 100%;
    height: 11.38rem;
    background: url("/static/svg/wdjf.svg");
    background-size: 100% 100%;
}
.hd {
    width: 6.4rem;
    height: .8rem;
    background-color: #F39800;
    overflow: hidden;
    position: relative;
    vertical-align: top;
}
.icon-l {
    width: .8rem;
    height: .8rem;
    position: relative;
    overflow: hidden;
    display: inline-block;
    max-height: 100%;
    vertical-align: top;
}
.title {
    display: inline-block;
    width: 5.2rem;
    font-size: .38rem;
    position: relative;
    color: #fff;
    max-height: 100%;
    vertical-align: top;
    line-height: .8rem;
}
.jf-info {
    width: 3.7rem;
    height: 1.4rem;
    margin: 0 auto;
    padding-top: .18rem;
    padding-bottom: .05rem;
}
.jf-info p {
    color: #fff;
}
    .ticket {
        position: relative;
        top: 4.29rem;
        width: 6.36rem;
        height: 3.45rem;
    }
    .dyp {
        position: relative;
        top: .2rem;
        margin: 0 auto;
        width: 4rem;
        height: 1.7rem;
        background: url("/static/svg/dianyp.svg") no-repeat center;
        margin-bottom: .52rem;
    }
    .jf-k {
        width: 1.8rem;
        margin: 4px auto;
        /*background: url("/static/svg/kuang.svg") no-repeat;*/
        border: 1px black dashed;
        background-size: 100% 100%;
        height: .22rem;
        font-size: .25rem;
        padding: 5px;
        font-weight: 600;
        line-height: .27rem;
        color: #111111;
    }
    .submit-btn {
        height: .8rem;
        position: relative;
        top: 4.4rem;
        margin: 0 1rem;
        background: url("/static/svg/querenduihuan.svg") no-repeat;
        background-size: 100% 100%;
    }
    .t-record {
        top: 1.37rem;
    }
    .btn-record {
        top: 1.4rem;
    }
    .p-title {
        font-size: .3rem;
        color: #fff;
        position: relative;
        top: 1.5rem;
        border-bottom: 2px solid #fff;
        width: 6.1rem;
        margin: 0 auto;
        line-height: 0.4rem
    }
</style>
