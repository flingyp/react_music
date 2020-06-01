import axios from 'axios'

axios.defaults.baseURL = 'http://120.25.163.140:3000';


/**
 * 请求推荐页面轮播图数据   
 * 请求路径; /banner  
 */
export const swiperData = async () => {
    return await axios.get('/banner')
}


/**
 * 请求推荐页面推荐跟单数据
 * 请求地址： /personalized       参数   limit = n 
 * 这里默认请求 10 条数据
 */
export const personalizedData = async (limit) => {
    return await axios.get('/personalized', {
        params: {
            limit
        }
    })
} 

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


/**
 * 获取歌曲的URL播放地址
 * 请求地址：/song/url     参数  id = xxx
 */

export const songUrl = async (id) => {
    return await axios.get('/song/url', {
        params: {
            id
        }
    })
}