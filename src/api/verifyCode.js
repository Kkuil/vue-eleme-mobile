import request from '@/utils/request'

export const GetVerifyCode = async () => {
    const { data } = await request({
        method: 'POST',
        url: '/v1/captchas'
    })
    return data
}