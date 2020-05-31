import axios from 'axios'

axios.defaults.baseURL = 'http://120.25.163.140:3000';


/**
<<<<<<< HEAD
 * 请求推荐页面轮播图数据   
=======
 * 请求轮播图数据   
>>>>>>> 56a1628fa97378e3460aa4a9e203c7315a6aa5f4
 * 请求路径; /banner  
 */
export const swiperData = async () => {
    return await axios.get('/banner')
}


/**
<<<<<<< HEAD
 * 请求推荐页面推荐跟单数据
 * 请求地址： /personalized       参数   limit = n 
=======
 * 请求推荐跟单数据
 * 请求地址： /personalized       参数   limit=n 
>>>>>>> 56a1628fa97378e3460aa4a9e203c7315a6aa5f4
 * 这里默认请求 10 条数据
 */
export const personalizedData = async (limit) => {
    return await axios.get('/personalized', {
        params: {
            limit
        }
    })
} 

<<<<<<< HEAD
/**
 * 请求推荐页面的最新音乐数据
 * 请求地址: /personalized/newsong  
 */
export const newSongData = async () => {
    return await axios.get('/personalized/newsong')
}


/**
 * 请求推荐页面的最新MV
 * 请求地址： /mv/first   参数 limit = n
 */

export const newMvData = async (limit) => {
    return await axios.get('/mv/first', {
        params: {
            limit
        }
    })
}
=======

>>>>>>> 56a1628fa97378e3460aa4a9e203c7315a6aa5f4
