import request from '@/utils/request'

export const GetStores = async ({ latitude, longitude }) => {
    const { data } = await request({
        method: 'GET',
        url: '/shopping/restaurants',
        params: {
            latitude,
            longitude
        }
    })
    return data
}