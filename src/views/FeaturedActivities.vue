<template>
    <scroller lock-x @on-scroll-bottom="loadBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
        <div class="box2">
            <div v-for="item in list" class="table-d" @click="$router.push(`/featuredActivities/${item.resultId}`)">
                <img :src="item.pic[0]" alt="图片"/>
                <span>{{item.planName}}</span>
                <p>{{item.content}}</p>
            </div>
            <load-more v-if="!loadable" tip="loading"></load-more>
        </div>
    </scroller>
</template>

<script>
    export default {
        name: "FesturedActivities",
        data() {
            return {
                list: [],
                pageNum: 1,
                pageSize: 6,
                totalPage: 1,
                loadable: true
            }
        },
        created() {
            this.loadData().then(
                data => {
                    this.list = data.list;
                    this.totalPage = data.paginator.totalPage;
                }
            )
        },
        methods: {
            loadData() {
                return this.$http('POST', `queryFeatureForFront?pageNum=${this.pageNum}&pageSize=${this.pageSize}&townId=1&centerId=1&countryId=1`);
            },
            loadBottom() {
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
    .box2 {
        padding: .2rem;
    }
    .table-d {
        display: inline-block;
        width: 2.9rem;
        height: 4.5rem;
        overflow: hidden;
        float: left;
    }
    .table-d span {
        display: block;
        color: #111;
        font-size: .32rem;
    }
    .table-d p {
        font-size: .28rem;
        text-align: left;
    }
</style>
