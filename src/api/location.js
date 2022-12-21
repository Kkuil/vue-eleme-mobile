import request from '@/utils/request'

export const GetCities = async type => {
    const { data } = await request({
        method: 'GET',
        url: '/v1/cities',
        params: {
            type
        }
    })
    return data
}

export const GetSearch = async (city_id, keyword) => {
    const { data } = await request({
        method: 'GET',
        url: '/v1/pois',
        params: {
            city_id,
            keyword
        }
    })
    return data
}