<template>
    <div class="login">
        <svg-img name="LOGIN" class="svg-c"></svg-img>
        <div class="loginForm">
            <group>
                <x-input v-model="loginForm.userName" placeholder="请输入用户名" class="mint-cell">
                    <icon name="yh" :scale="0.05 * $rem" slot="label"></icon>
                </x-input>
                <x-input label-width="23" v-model="loginForm.password" type="password" placeholder="请输入密码" class="mint-cell">
                    <icon name="psw" :scale="0.051 * $rem" slot="label"></icon>
                </x-input>
            </group>
            <x-button class="mint-cell login-btn" @click.native="login">登&emsp;&emsp;录</x-button>
        </div>
    </div>
</template>

<script>
    import { XInput, Group, XButton  } from 'vux';
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    userName: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                this.$http('POST', 'userLogin?userId=jr&userPwd=123456').then(
                    data => {
                        console.log(data, 111)
                        localStorage.setItem('token', data.token);
                        this.$router.push('/home');

                    }
                )
            }
        },
        components: {
            XInput,
            Group,
            XButton
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
        width: 6.5rem;
        z-index: 10;
    }
    .loginForm{
        position: absolute;
        top:50%;
        left:50%;
        margin-top: -2.7rem;
        margin-left: -2.5rem;
        /*此时宽和高都要固定*/
        width: 5rem;
        height: 1.64rem;
        z-index: 11;
        padding: .5rem 0;
    }
    .login .mint-cell-wrapper {
        background-color: transparent;
        background-image: none;
    }
    .login .mint-cell {
        background-color: rgba(8, 8, 8, 0.1);
        color: #fff;
        width: 5rem;
        height: 1rem;
        margin: .5rem 0;
        padding: 0 .4rem;
        border: 0;
        border-radius: .5rem;
    }
    .login input, .login input::placeholder{
        color: #fff;
        background: transparent;
        border: none;
        margin-top: -1rem;
        font-size: .28rem;
    }
    .login .svg-el {
        position: relative;
        top: -0.3rem;
        left: -1.5rem;
        display: inline-block;
    }
    .login .weui-cells:before, .login .weui-cell:before, .login .weui-cells:after, .login .weui-cell:after {
        display: none;
    }
    .login .weui-cells {
        background-color: transparent !important;
        margin: 0;
        width: 5rem !important;
    }
    .login .weui-cell__hd {
        width: .7rem;
    }
    .login-btn {
        background-color: #EBBD29 !important;
    }
</style>
