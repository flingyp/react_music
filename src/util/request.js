import axios from 'axios'

axios.defaults.baseURL = 'http://120.25.163.140:3000';


/**
 * 请求轮播图数据   
 * 请求路径; /banner  
 */
export const swiperData = async () => {
    return await axios.get('/banner')
}


/**
 * 请求推荐跟单数据
 * 请求地址： /personalized       参数   limit=n 
 * 这里默认请求 10 条数据
 */
export const personalizedData = async (limit) => {
    return await axios.get('/personalized', {
        params: {
            limit
        }
    })
} 


