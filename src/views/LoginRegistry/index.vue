<script setup>
import { onActivated, ref } from 'vue'

import { GetVerifyCode } from '@/api/verifyCode'
import { Login } from '@/api/login'
import axios from 'axios'

let isShowPassword = ref(false)
let code = ref('')
let username = ref('')
let password = ref('')
let verify_code = ref('')

async function getVerifyCode() {
    const data = await GetVerifyCode()
    // axios.defaults.withCredentials = true
    // const data = await axios.post('/eleme/v1/captchas')
    // console.log(data)
    code.value = data.code
}

async function login() {
    const data = await Login({
        username: username.value,
        password: password.value,
        captcha_code: verify_code.value,
    })
    console.log(data)
}

onActivated(() => {
    getVerifyCode()
})

</script>

<template>
    <div id="login_registry">
        <Top>
            <template #left>
                <i class="iconfont icon-arrow-left-bold" @click="$router.back()"></i>
            </template>
            <template #title>
                <span>登录/注册</span>
            </template>
        </Top>
        <div class="form">
            <div class="account">
                <i class="iconfont icon-user"></i>
                <input type="text" placeholder="账号" v-model="username" />
            </div>
            <div class="password">
                <i class="iconfont icon-mima"></i>
                <input :type="isShowPassword ? 'text' : 'password'" placeholder="密码" v-model="password">
                <i class="iconfont" :class="isShowPassword ? 'icon-eye' : 'icon-eye1'"
                    @click="isShowPassword = !isShowPassword"></i>
            </div>
            <div class="verify_code">
                <i class="iconfont icon-yanzhengma"></i>
                <input type="text" placeholder="验证码" v-model="verify_code">
                <div class="code" @click="getVerifyCode">
                    <img :src="code" alt="">
                    <span>点我刷新</span>
                </div>
            </div>
        </div>
        <div class="tips">
            <span>温馨提示：未注册的账号将在登录时自动注册</span>
            <span>注册过的用户可凭账号密码登录</span>
        </div>
        <input class="submit flex_center" @click="login" @keyup.enter="login" value="登录" />
        <a class="reset_password">重置密码</a>
    </div>
</template>

<style lang="less" scoped>
#login_registry {
    width: 100%;

    .form {
        position: relative;
        width: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;

        >div {
            width: 100%;
            height: 50px;

            i {
                margin: 0 3px;
            }

            input {
                width: 80%;
                height: 100%;
                border: 0;
            }
        }

        .password {
            :nth-child(3) {
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
            }
        }

        .verify_code {
            position: relative;
            width: 100%;

            input {
                width: 60%;
            }

            .code {
                position: absolute;
                top: 0;
                right: 0;
                width: 40%;
                height: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-right: 10px;

                img {
                    width: 60px;
                }

                span {
                    font-size: 0.8rem;
                }
            }
        }
    }

    .tips {
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        color: red;
        margin: 10px;
    }

    .submit {
        width: calc(100% - 20px);
        height: 45px;
        color: #fff;
        border: 0;
        border-radius: 5px;
        background-color: #4cd964;
        margin: 0 10px;
        font-weight: bold;
        padding-left: 45%;
    }

    .reset_password {
        margin: 10px 10px 0;
        float: right;
        font-size: 0.8rem;
        text-decoration: underline;
        color: var(--pri_clr);
    }
}
</style>