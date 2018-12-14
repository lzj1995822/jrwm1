<template>
    <div class="common-detail">
        <h6>{{ detail.name }}</h6>
        <pre>{{ detail.content }}</pre>
    </div>
</template>

<script>
    export default {
        name: "CommonDetail",
        data() {
            return {
                detail: {}
            }
        },
        created() {
            this.$http('POST', `querySinglePlan?planId=${this.bId}`).then(
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
            }
        }
    }
</script>

<style scoped>
    .common-detail pre {
        font-size: .3rem;
    }
</style>
