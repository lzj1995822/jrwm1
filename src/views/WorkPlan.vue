<template>
    <div class="work-plan" :style="{'-webkit-overflow-scrolling': scrollMode}">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
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
        </mt-loadmore>
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
                allLoaded: false,
                scrollMode: 'auto'
            }
        },
        created() {
            this.loadData().then( data => {
                this.list = data.myExecutePlanDTOS;
                // this.list.push(data.myExecutePlanDTOS)
                // this.list.push(data.myExecutePlanDTOS)
                // this.list.push(data.myExecutePlanDTOS)
                // this.list.push(data.myExecutePlanDTOS)
                // this.list.push(data.myExecutePlanDTOS)
                // this.list.push(data.myExecutePlanDTOS)
                // this.list.push(data.myExecutePlanDTOS)
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
                return this.$http('POST',`myExecutePlan?pageNum=${this.pageNum}&pageSize=${this.pageSize}&selectType=1`);
            },
            loadTop(){

            },
            loadBottom() {
                // this.loadData().then(data => {
                //     this.list.push(data.myExecutePlanDTOS);
                //     this.allLoaded = true;// 若数据已全部获取完毕
                // });
                this.$refs.loadmore.onBottomLoaded();
            }
        }
    }
</script>

<style scoped>
    .work-plan {
        width: 100%;
        height: 70%;
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
</style>
