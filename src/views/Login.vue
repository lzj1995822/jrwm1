<template>
    <div class="login">
        <svg-img name="LOGIN" class="svg-c"></svg-img>
        <div class="loginForm">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="loginForm.userName"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginForm.password"></mt-field>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    userName: '',
                    password: ''
                }
            }
        }
    }
</script>

<style>
    .login {
        /*position: fixed;*/
        position: relative;
        z-index: 1;
        margin:0;
        padding:0;
        width:100%;
        height:100%;

    }
    .svg-c {
        /*position: relative;*/
        z-index: 10;
    }
    .loginForm{
        position: absolute;
        top:50%;
        left:50%;
        margin-top: -0.83rem;
        margin-left: -2.5rem;
        /*此时宽和高都要固定*/
        width: 5rem;
        height: 1.66rem;
        z-index: 11;
        background-color: transparent;


    }
    .login .mint-cell-wrapper {
        background-color: transparent;
        background-image: none;
    }
</style>
