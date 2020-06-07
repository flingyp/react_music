import React, { Component } from 'react';
import NewMusicTab from '../components/NewMusicComponents/NewMusicTab'
import NewMusicMusics from '../components/NewMusicComponents/NewMusicMusics'
import { message } from 'antd';
import { connect } from 'react-redux'

import {topSong, songUrl} from '../util/request'

import {GET_CURRENT_SONG_URL} from '../store/actionTypes'

class NewMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            tabBar: [
                {
                  name: '全部',
                  type: 0
                },
                {
                  name: '华语',
                  type: 7
                },
                {
                  name: '欧美',
                  type: 96
                },
                {
                  name: '日本',
                  type: 8
                },
                {
                  name: '韩国',
                  type: 16
                }
            ],
            topSongData: [],
            type: '0'  // 全部
        }
    }

    componentWillMount() {
        const type = this.state.type
        this.typeTopSong(type)
    }

    async typeTopSong(type) {
        this.setState({
            topSongData: []
        })
        const res = await topSong(type)
        message.loading('数据拉取中...', 3);
        let topSongData = res.data.data
        topSongData.splice(50, topSongData.length)
        topSongData.map((item) => {
            let duration = item.duration
            let miao = duration / 1000
            // 分钟
            let min = Math.floor(miao / 60)
            // 秒
            let second = Math.floor(miao % 60)
            if (min < 10) {
              min = '0' + min
            }
            if (second < 10) {
              second = '0' + second
            }
            let time = `${min}:${second}`
            // 把修改的时间 重新赋给 duration
            item.duration = time
        })
        console.log(topSongData)
        if(topSongData) {
            this.setState({
                topSongData,
                type
            })
        }
    }

    async goPlayMusic(id) {
        const res = await songUrl(id)
        const url = res.data.data[0].url
        this.props.songUrl(url)
    }

    render() { 
        return ( 
            <div>
                <NewMusicTab tabBar={this.state.tabBar} typeTopSong={this.typeTopSong.bind(this)} />
                <NewMusicMusics topSongData={this.state.topSongData} goPlayMusic={this.goPlayMusic.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
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

NewMusic = connect(mapStateToProps,mapDispatchToProps)(NewMusic)
 
export default NewMusic;