<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Upload",
        computed: {
            type() {
                return this.$route.params.type;
            },
            bId() {
                return this.$route.params.id;
            }
        }
    }
</script>

<style scoped>

</style>
