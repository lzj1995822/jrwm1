<template>
    <section class="home">
        <div class="convert-btn" @click="$router.push('/exchange')">
        </div>
    </section>
</template>

<script>
    export default {
        name: "Home",
    }
</script>

<style>
    .home {
        width: 100%;
        height: 8rem;
        background: url("/static/svg/rukou.svg");
        background-size: 100% 100%;
        margin-top: .8rem;
    }
    .convert-btn {
        width: 44%;
        height: 2rem;
        margin: 0 auto;
        top: 5rem;
        background: url("/static/svg/lijiduih.svg") no-repeat;
        background-size: 100% 100%;
        position: relative;
    }
</style>
