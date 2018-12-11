<template>
    <section>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="loginForm.userName"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginForm.password"></mt-field>
    </section>
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

<style scoped>

</style>
