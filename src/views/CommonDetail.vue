<template>
    <div class="common-detail">
        <h6>asdas</h6>
        <pre>sad</pre>
    </div>
</template>

<script>
    export default {
        name: "CommonDetail",
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
