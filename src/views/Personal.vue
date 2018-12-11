<template>
    <div class="personal">
        <div style="width: 100%;height:4.33rem;position: relative;">
            <svg-img name="PERSONAL" class="svg-bg"></svg-img>
            <mt-header class="per-header" title="个人中心">
                <mt-button icon="back" slot="left" @click="$router.go(-1)"></mt-button>
            </mt-header>
            <div class="header_img">
                <img src="../assets/tou.jpg" alt="头像" width="100%"/>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Personal"
    }
</script>

<style scoped>
    .personal {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .header_img {
        position: relative;
        z-index: 3;
        width: 1.3rem;
        height: 1.3rem;
        overflow: hidden;
        top: 50%;
        left: 50%;
        margin-top: -0.65rem;
        margin-left: -0.65rem;
        border-radius: 1rem;
        border: #fff .03rem solid;
    }
    .svg-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        margin-top: 0.64rem;
    }
    .per-header {
        position: absolute;
        width: 100%;
        background-color: transparent;
        margin-top: .64rem;
        z-index: 6;
    }
</style>
