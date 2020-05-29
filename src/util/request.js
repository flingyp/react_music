import axios from 'axios'

axios.defaults.baseURL = 'http://120.25.163.140:3000';


/**
 * /banner  请求轮播图数据
 */
export const swiperData = async () => {
    return await axios.get('/banner')
}


