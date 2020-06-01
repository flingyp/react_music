import React, { Component } from 'react';
import ReactSwiper from '../components/DiscoveryComponents/ReactSwiper' 
import DiscoveryPlayList from '../components/DiscoveryComponents/DiscoveryPlayList'
import DiscoveryNemMusic from '../components/DiscoveryComponents/DiscoveryNemMusic'
import DiscoveryMv from '../components/DiscoveryComponents/DiscoveryMv'
import store from '../store/index';
import {swiperData, personalizedData, newSongData, newMvData, songUrl} from '../util/request'

import { connect } from 'react-redux'
import {SET_SWIPER_DATA, SET_PERSONALIZE_DATA, SET_NEWSONG_DATA, SET_NEWMV_DATA, GET_CURRENT_SONG_URL} from '../store/actionTypes'


class Discovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DiscoveryPlayList: '推荐歌单',
            DiscoveryNemMusic: '最新音乐',
            DiscoveryMv: '最新MV'
        }
    }

    async componentWillMount() {
        // 请求轮播图数据
        const swiperData = await this.props.getSwiperData()
        // 请求推荐歌单数据
        const personalizeData = await this.props.getPersonalizedData()
        // 请求最新音乐数据
        const newSongData = await this.props.getNewSongData()
        // 请求最新MV数据
        const newMvData = await this.props.getNewMvData()
        this.setState({
            swiperData,
            personalizeData,
            newSongData,
            newMvData
        })
    }

    render() { 
        return ( 
            <div>
                <ReactSwiper swiperData={this.state.swiperData}></ReactSwiper>
                <DiscoveryPlayList personalizeData={this.state.personalizeData} DiscoveryPlayList={this.state.DiscoveryPlayList} />
                <DiscoveryNemMusic newSongData={this.state.newSongData} DiscoveryNemMusic={this.state.DiscoveryNemMusic}  goPlayMusic={this.goPlayMusic.bind(this)} />
                <DiscoveryMv newMvData={this.state.newMvData} DiscoveryMv={this.state.DiscoveryMv} />
            </div>
        );
    }

    async goPlayMusic(id) {
        // 1. 获取 最新音乐 该item项的 歌曲id
        // console.log(id)
        // 2. 根据 歌曲 id 请求歌曲播放地址
        const res = await songUrl(id)
        const url = res.data.data[0].url
        // 3. 把 歌曲的url 地址 存储到 redux 中
        this.props.songUrl(url)
        // 4. 播放歌曲 在 Home页面实现
    }

}

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        /**
         * 请求轮播图数据
         */
        getSwiperData: async () => {
           const res = await swiperData()
           dispatch({
               type: SET_SWIPER_DATA,
               DisSwiper: res.data.banners
           })
           return res.data.banners
        },

        /**
         * 请求推荐歌单数据
         */
        getPersonalizedData: async () => {
            const limit = 10;
            const res = await personalizedData(limit)
            dispatch({
                type: SET_PERSONALIZE_DATA,
                DisPersonalize: res.data.result
            })
            return res.data.result
        },

        /**
         * 请求最新音乐数据
         */
        getNewSongData: async () => {
            const res = await newSongData()
            dispatch({
                type: SET_NEWSONG_DATA,
                DisNewsong: res.data.result
            })
            return res.data.result
        },
        
        /**
         * 请求最新MV数据
         */
        getNewMvData: async () => {
            const limit = 4;
            const res = await newMvData(limit);
            dispatch({
                type: SET_NEWMV_DATA,
                DisNewMv: res.data.data
            })
            return res.data.data;
        },

        /**
         * 存储 播放歌曲的 url 地址
         */
        songUrl: async(url) => {
            dispatch({
                type: GET_CURRENT_SONG_URL,
                currentUrl: url
            })
        }
    }
}

Discovery = connect(mapStateToProps,mapDispatchToProps)(Discovery)
 
export default Discovery;