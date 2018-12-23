<template>
    <div class="work-plan" :style="{'-webkit-overflow-scrolling': scrollMode}">
        <scroller lock-x @on-scroll-bottom="loadBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
            <div class="box2">
                <div v-for="item in list" class="table-d">
                    <div style="border-bottom: 1px dashed #b7b7b7">
                        <table class="e-table" @click="$router.push(`/workPlanDetail/${item.planId}`)">
                            <tr>
                                <td>
                                    <div class="td-label">工作标题：</div>
                                </td>
                                <td>
                                    <div class="td-value">{{ item.planName }}</div>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <div class="td-label">活动要求：</div>
                                </td>
                                <td>
                                    <div class="td-value">{{ item.planContent }}</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="td-label">截止时间：</div>
                                </td>
                                <td>
                                    <div class="td-value">{{ item.expireTime }}</div>
                                </td>
                            </tr>
                        </table>
                        <div class="up-load-icon">
                            <icon name="ph" :scale=".08 * $rem" slot="icon" class="icon-ver-alg" @click.native="toUpload(item)"></icon>
                        </div>
                    </div>
                </div>
                <load-more v-if="!loadable" tip="loading"></load-more>
            </div>
        </scroller>
    </div>
</template>

<script>
    export default {
        name: "WorkPlan",
        data() {
            return {
                list: [],
                pageNum: 1,
                pageSize: 6,
                totalPage: 1,
                scrollMode: 'auto',
                loadable: true
            }
        },
        created() {
            this.loadData().then( data => {
                this.list = data.myExecutePlanDTOS;
                this.totalPage = data.paginator.totalPage;
            })
        },
        methods: {
            toUpload(item) {
                let type = this.$route.name;
                this.$router.push(`/upload/${type}/${item.planId}`);
            },
            d() {
                let data = [];
                data.filter(item => item.name.search("村") === -1).filter()
            },
            loadData() {
                return this.$http('POST',`myExecutePlan?pageNum=${this.pageNum}&pageSize=${this.pageSize}&selectType=2`);
            },
            loadBottom() {
                this.totalPage = 2;
                if (this.loadable && this.pageNum < this.totalPage) {
                    this.loadable = false;
                    this.pageNum++;
                    this.loadData().then(data => {
                        this.totalPage = data.paginator.totalPage;
                        this.list = this.list.concat([{planName: 'xxxxx'+ this.pageNum, planContent: '213', expireTime: '123'},{planName: 'xxxxx'+ this.pageNum, planContent: '213', expireTime: '123'},{planName: 'xxxxx'+ this.pageNum, planContent: '213', expireTime: '123'},{planName: 'xxxxx'+ this.pageNum, planContent: '213', expireTime: '123'},{planName: 'xxxxx'+ this.pageNum, planContent: '213', expireTime: '123'},{planName: 'xxxxx'+ this.pageNum, planContent: '213', expireTime: '123'}])
                        this.loadable = true;
                    });
                }

            }
        }
    }
</script>

<style scoped>
    .work-plan {
        width: 100%;
        height: auto;
    }
    .work-plan table {
        font-size: .23rem;
        text-align: left;
    }
    .work-plan table tr:first-child td div {
        margin-top: .18rem;
    }
    .work-plan table tr:last-child td div {
        margin-bottom: .1rem;
    }
    .table-d {
        background-color: #fff;
        padding: 0 .2rem;
        overflow: hidden;
    }
    .work-plan .td-label {
        width: 1.2rem;
        vertical-align: top;
        font-weight: bold;
        margin-top: .06rem;
    }
    .work-plan .td-value {
        width: 3.5rem;
        word-break: break-all;
        margin-top: .06rem;
        max-height: .6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .up-load-icon {
        width: 1rem;
        display: inline-block;
        height: auto;
        position: relative;
        overflow: hidden;
        vertical-align: top;
    }
    .e-table {
        width: 4.6rem;
        display: inline-block;
        position: relative;
        overflow: hidden;
        vertical-align: top;
    }
    .mint-loadmore {
        overflow: scroll !important;
    }
</style>
