<template>
    <div class="optional-act">
        <div class="act-item" v-for="item in list" :key="item.id">
            <img src="../assets/tou.jpg" alt="">
            <span>{{ item.resultContent }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OptionalActivities",
        data() {
            return {
                list: []
            }
        },
        created() {
            this.load();
        },
        methods: {
            load() {
                this.$http('POST', '/querySelfPlanList?pageNum=1&pageSize=10').then(
                data => {
                    console.log(data, "2121")
                    this.list = data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
