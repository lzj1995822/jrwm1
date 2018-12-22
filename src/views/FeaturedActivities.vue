<template>

</template>

<script>
    export default {
        name: "FesturedActivities",
        data() {
            return {

            }
        },
        created() {
            this.$http('POST', 'queryFeatureForFront?pageNum=1&pageSize=10&townId=1&centerId=1&countryId=1')
        }
    }
</script>

<style scoped>

</style>
