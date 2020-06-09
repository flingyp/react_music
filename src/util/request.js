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

/**
 * 获取 精品歌单 数据
 * 参数地址: /top/playlist/highquality 
 * 参数: cat( 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",)  limit  取出数量 （这里我们只需要1条数据就可以）
 */
export const boutiquePlaylist = async (cat) => {
    return await axios.get('/top/playlist/highquality', {
        params: {
            cat,
            limit: 1
        }
    })
}


/**
 * 获取 歌单 ( 网友精选碟 ) 数据
 * 参数地址: /top/playlist   
 * 参数: cat( 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",) limit 取出数量  offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
 */

export const topPlaylist = async (cat, limit, offset) => {
    return await axios.get('/top/playlist', {
        params: {
            cat,
            limit, 
            offset
        }
    })
}

/**
 * 获取 新歌速递 数据
 * 参数地址: /top/song
 * 参数: type  全部:0  华语:7 欧美:96 日本:8  韩国:16
 */

export const topSong = async (type) => {
    return await axios.get('/top/song', {
        params: {
            type
        }
    })
}

/**
 * 获取 全部 MV
 * 请求地址： /mv/all 
 * 参数 ： area 地区  type 类型   order 排序  limit 取出数量 offset 用于分页
 */
export const mvAll = async (area, type, order, limit, offset) => {
    return await axios.get('/mv/all', {
        params: {
            area, 
            type,
            order,
            limit, 
            offset
        }
    })
}

/**
 * 搜索内容
 * 请求地址： /search
 * 参数： keywords 关键词 limit 数量  offset 用于分页 type 类型  (100 歌手 1000 歌单  1006 MV)
 */

export const search = async (keywords, type, limit, offset,) => {
    return await axios.get('/search', {
        params: {
            keywords,
            type,
            limit,
            offset
        }
    })
}
