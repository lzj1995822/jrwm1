<template>
    <div class="work-plan">
        <div v-for="item in list" class="table-d">
            <div style="border-bottom: 1px dashed #b7b7b7">
                <table class="e-table">
                    <tr  @click="$router.push('/workPlanDetail/123')">
                        <td>
                            <div class="td-label">工作标题：</div>
                        </td>
                        <td>
                            <div class="td-value">{{ item.title }}</div>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <div class="td-label">活动要求：</div>
                        </td>
                        <td>
                            <div class="td-value">{{ item.content }}</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="td-label">截止时间：</div>
                        </td>
                        <td>
                            <div class="td-value">{{ item.date }}</div>
                        </td>
                    </tr>
                </table>
                <div class="up-load-icon">
                        <icon name="ph" :scale=".08 * $rem" slot="icon" class="icon-ver-alg" @click.native="toUpload(item)"></icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkPlan",
        data() {
            return {
                list: [
                    {
                        title: '关于xx的标题',
                        content: '内容XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                        date: '2018-01-01'
                    },
                    {
                        title: '关于xx的标题',
                        content: '内容XXXXXXXXXXXXXXXXXXXXXXXXXXX1233333333333333333333333331233333333X',
                        date: '2018-01-01'
                    },
                    {
                        title: '关于xx的标题',
                        content: '内容XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                        date: '2018-01-01'
                    },
                    {
                        title: '关于xx的标题',
                        content: '内容XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                        date: '2018-01-01'
                    }
                ]
            }
        },
        methods: {
            toUpload(item) {
                let type = this.$route.name;
                this.$router.push(`/upload/${type}/${item}`);
            }
        }
    }
</script>

<style scoped>
    .work-plan {
        width: 100%;
        height: 100%;
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
