import request from '@/utils/request'

export const GetCates = async () => {
    const { data } = await request({
        method: 'GET',
        url: '/v2/index_entry'
    })
    return data
}