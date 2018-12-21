<template>
    <div>
        <input type="button" @click="isRecord = !isRecord" value="切换记录" style="float: right;position: fixed;top:1rem;right: .2rem"/>
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
            <div class="submit-btn" @click="$router.push('/result')">

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
            <div class="submit-btn btn-record" @click="$router.push('/result')">
            </div>
            <p class="p-title">积分兑换记录</p>
            <div class="exchange-record">
                <div v-for="(item,index) in recordList">
                    <span style="float: left;text-align: left;">{{++index}}.{{item.title}}</span>
                    <span style="float: right;width: 2rem;vertical-align: middle">-{{item.score}}分&emsp;
                        <svg id="wc" style="width: .31rem;height: .3rem;margin-bottom: -.05rem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><image width="100%" height="100%" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU3OTY5RjI2M0JEQjExRTg5MTg3RkY2MDJCQ0FCNTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU3OTY5RjI3M0JEQjExRTg5MTg3RkY2MDJCQ0FCNTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTc5NjlGMjQzQkRCMTFFODkxODdGRjYwMkJDQUI1MjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTc5NjlGMjUzQkRCMTFFODkxODdGRjYwMkJDQUI1MjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4+MzDyAAADdUlEQVR42rRXfUhTURQ/+8p9OQ00KywoV/9IJf1hJUKFiaFCFmQaUUFfhmBOqll/SPQBZviRJWSkBBWVaAll+Y9moBmRYgMralZEUJKFvm06t7l17rzb2/fe1nbgB/e9e+85v/fuOeeew5s4vhU4ihyRhyAb0hArEHF0bgrxFTGCeIHoQui5KBVyWKNEqBHFCJmfNYsoNiCOIQyI+4jLCG0g5fwAc2JENWIUcTiAcV8io3tGKQlxqARSEIP0yxdA+EL2nqa6lFwJrEcM0HOOlBBd/VR3QAKEZTciCSIvSVS30h8BCaIdkQjRE6K7g9ryInAOsQ6iL2upLTcCxOlUkbbEE4og7uxNiK+67TmlchyFg0AlQhRpAoryOhAmK0GweLnnlIjatBOIpUkmoiLbWwHClan2sZX562tJEbFNCOSGmGSCinhzAYgz853Puutqf8kqlxDIiqRx0eo0kO0pY423nAfLjzF/y7P41CsjIvz4BFCUXXE+zzy/C6ahvoARwacREBmnq7iKLAT2seldP0w/aQ22JYUQUHiFz4KY0I2XVoMgYYl9PPfrO+iaqzht87oL5PvVsPBSG0i2FXI2Lt15FESp6faxzWIGpq6c+7EhGNcXMRtzgCeLBemuEpDmHQiqICY9GyTZRc5npkEFVv0kV/sMIeDmoob2JvZyQALSHUf8VzPLVoH84Bl2771asHx5H8rJjRECGtc3xt4OMDxsZEnkFIOssMw7zUpkoFDVs/v6OsE40BWq62gIgR7Pt8aXnaC/U8Mmli0FIN930t17VA3AE0vtY/OnETC0NYYTOD2EwDNaw7nJ7GA36FsvsmedkWt3UODx5tNs8nz0WicngGk8FY7xaWKbFKU6xAPEIS8Sb3vBZpqF2JILTgcVpqwBQeJS55qp2hPIYi4cAqRo1TnCkBSfZl+rTJoBYK6xX+hqnGmqBOufn+EYN9Ni1Xkdk9K53u/qD0PA1OMVbrOx/+9xM5hH34SbNBsQn+3O7NKYkDLpdaC7gYSddHcpWL59hOlHN8I1TqJuE/UBNwKOovRVFOvC34gM12bFMxWTie2I8SgYH6e6tcH6gmFEpmeC+k/RUJ3DXDsjLe3zavxFRwjeXkN1aUPtDY20NSOF3S2H03CUGUQL3aumunxXziG25/ke7Xk8nZv0aM+fcm3P/wkwAAc63pUPPGuaAAAAAElFTkSuQmCC"/></svg>
                    </span>
                    <p>{{item.date}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Exchage",
        props: {
            // 是否为兑换记录页 落传参
            isRecord: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                recordList: [{
                    title: '电影院线观影码(一张)',
                    date: '2018.06.09',
                    score: 600
                },
                {
                    title: '电影院线观影码(一张)',
                    date: '2018.06.09',
                    score: 600
                },
                {
                    title: '电影院线观影码(一张)',
                    date: '2018.06.09',
                    score: 600
                },
                {
                    title: '电影院线观影码(一张)',
                    date: '2018.06.09',
                    score: 600
                },
                {
                    title: '电影院线观影码(一张)',
                    date: '2018.06.09',
                    score: 600
                },]
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
    .exchange-record {
        padding: 0 .15rem;
        position: relative;
        top: 1.6rem;
        font-size: .28rem;
        height: 2.5rem;
        overflow: scroll;
    }
    .exchange-record span {
        line-height: .45rem;
    }
.exchange-record p {
    clear: both;
    text-align: left;
    padding-left: .25rem;
    font-size: .23rem;
    margin-top: -.1rem;
}
</style>
