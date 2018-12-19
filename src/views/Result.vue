<template>
    <div>
        <div class="result" v-if="success">
            <div class="r-contain" >
                <div>观影券号：555555</div>
                <div>观影密码：555555</div>
                <div style="font-size: .24rem; color: #6b6b6b">有效期：半年有效期</div>
            </div>
        </div>
        <div class="r-done">
            <div class="back" @click="$router.go(-1)">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Result",
        props: {
            success: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
.result {
    width: 6.38rem;
    height: 9.3rem;
    background: url("/static/svg/guany.svg") no-repeat;
}
.r-contain {
    position: relative;
    width: 4rem;
    height: 1.4rem;
    top: 1.4rem;
    padding: .2rem 0;
    margin: 0 auto;
    font-size: .36rem;
    font-weight: 600;
    line-height: .528rem;
}
    .r-done {
        width: 6.38rem;
        height: 9.3rem;
        position: relative;
        top: .5rem;
        background: url("/static/svg/quanbuqiangwan.svg") no-repeat;
    }
    .back {
        width: 3rem;
        height: .8rem;
        position: relative;
        top: 5.6rem;
        margin: 0 auto;
        background: url("/static/svg/fanhui_n.svg") no-repeat;
    }
</style>
