<template>
    <div class="common-detail">
        <!--<h6>{{ detail.title }}</h6>-->
        <!--<pre>{{ detail.content }}</pre>-->

        <table class="e-table" v-if="type === 'WorkPlanDetail'">
            <tr>
                <td>
                    <div class="td-label">工作标题：</div>
                </td>
                <td>
                    <div class="td-value">{{ detail.planName }}</div>
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <div class="td-label">活动要求：</div>
                </td>
                <td>
                    <div class="td-value">{{ detail.planContent }}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="td-label">截止时间：</div>
                </td>
                <td>
                    <div class="td-value">{{ detail.expireTime }}</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="td-label">附件：</div>
                </td>
                <td>
                    <div class="td-value" @click="download(detail.accessory)"><a href="javascript:void(0);">下载</a></div>
                </td>
            </tr>
        </table>
        <div class="e-table" v-if="type === 'featuredActivities'">
            <h5>{{detail.planName}}</h5>
            <img v-for="item in detail.pic" :src="item">
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonDetail",
        data() {
            return {
                detail: {},
                apiMap:{
                    Notice: 'querySingleInformation',
                    WorkPlanDetail: 'querySinglePlanForFront',
                    SelfDetail: 'querySinglePlanForFront',
                    featuredActivities: 'querySingleFeature'
                },
                idMap: {
                    Notice: 'id',
                    WorkPlanDetail: 'planId',
                    SelfDetail: 'planId',
                    featuredActivities: 'resultId'
                }
            }
        },
        created() {
            this.$http('POST', `${this.apiMap[this.type]}?${this.idMap[this.type]}=${this.bId}`).then(
                data => {
                    this.detail = data;
                }
            )
        },
        computed: {
            type() {
                return this.$route.meta.type;
            },
            bId() {
                return this.$route.params.id;
            },
        },
        methods: {
            download(path) {
                window.open(path)
            }
        }
    }
</script>

<style scoped>
    .common-detail pre {
        font-size: .3rem;
    }
    .e-table .td-label {
        width: 2rem;
        vertical-align: top;
        font-weight: bold;
        margin-top: .06rem;
        text-align: right;
    }
    .e-table .td-value {
        width: 3.5rem;
        word-break: break-all;
        margin-top: .06rem;
        max-height: .6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-align: left;
    }
    .e-table {
        width: 6.38rem;
        display: inline-block;
        position: relative;
        overflow: hidden;
        vertical-align: top;
        font-size: .3rem;
    }
</style>
