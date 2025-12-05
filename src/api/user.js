import { axios } from '@/libs/request'
import { getToken } from '../libs/util'

const getUserInfo = () => {
    return axios.get('/v1/public/info', {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
}

export { getUserInfo }
