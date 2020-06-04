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

/**
 * 获取歌单详情 数据
 * 请求地址：  /playlist/detail 参数 id (歌单id)
 */

export const playlistDetail = async (id) => {
    return await axios.get('/playlist/detail', {
        params: {
            id
        }
    })
}

/**
 * 获取 MV 播放地址
 * 请求地址: /mv/url 参数 id (mv id)
 */
export const mvUrl = async (id) => {
    return await axios.get('/mv/url', {
        params: {
            id
        }
    })
}

/**
 * 获取 MV 相关信息
 * 请求地址： /mv/detail  参数 mvid (mv id)
 */
export const mvDetail = async (id) => {
    return await axios.get('/mv/detail', {
        params: {
            mvid: id
        }
    })
}

/**
 * 获取 歌手相关信息 
 * 请求地址： /artists 参数 id (歌手id)
 */
export const artistDesc = async (id) => {
    return await axios.get('/artists', {
        params: {
            id
        }
    })
}

/**
 * 获取 相似 MV  
 * 参数地址： /simi/mv 参数 id (mv id)
 */

export const simiMv = async (id) => {
    return await axios.get('/simi/mv', {
        params: {
            mvid: id
        }
    })
}
