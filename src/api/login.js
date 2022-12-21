import request from '@/utils/request'

export const Login = async ({ username, password, captcha_code }) => {
    const { data } = await request({
        method: 'POST',
        url: '/v2/login',
        data: {
            username,
            password,
            captcha_code
        }
    })
    return data
}