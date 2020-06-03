import React, { Component } from 'react';
import '../css/pages/PlayListDetail.less'
import { List } from 'antd';

import {playlistDetail} from '../util/request'





class PlayListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            topInfo: {
                topImg: '',
                topTitle: '',
                topAuthorHead: '',
                topAuthorName: '',
                topTags: [],
                topDesc: ''
            },
            detail:[]
        }
    }

    async componentWillMount() {
        // 获取当前歌单的id
        const id = this.props.match.params.id
        const res = await playlistDetail(id)
        const playlist = res.data.playlist
        let topInfo = this.state.topInfo
        topInfo = this.getTopInfo(topInfo, playlist)
        let detail = this.state.detail
        detail = this.getDetailInfo(playlist.tracks)
        this.setState({
            topInfo: topInfo,
            detail : detail
        })
        
    }
    // 对 歌单 top 部分 数据的处理
    getTopInfo(info, playlist) {
        info.topImg = playlist.coverImgUrl
        info.topTitle = playlist.name
        info.topAuthorHead = playlist.creator.avatarUrl
        info.topAuthorName = playlist.creator.nickname 
        info.topTags = playlist.tags
        info.topDesc = playlist.description

        return info
    }

    // 对 歌单 歌曲 信息 detail 部分数据处理
    getDetailInfo(tracks) {
        // 对歌曲的时长进行处理
        tracks.map((item) => {
            let duration = item.dt
            const miao = duration / 1000
            let min = Math.ceil(miao / 60) // 分钟
            let second = Math.floor(miao % 60) // 秒
            if(min<10) {
                min = '0' + min
            }
            if(second<10) {
                second = '0' + second
            }
            let time = `${min}:${second}`
            item.dt = time
        })

        return tracks
    }

    render() { 
        return ( 
            <div className="detail">
                <div className="top">
                    <div className="img_wrap">
                        <img src={this.state.topInfo.topImg} alt=""/>
                    </div>

                    <div className="info_wrap">
                        <p className="title">{this.state.topInfo.topTitle}</p>
                        <div className="author">
                            <img src={this.state.topInfo.topAuthorHead} alt=""/>
                            <span className="author_name">{this.state.topInfo.topAuthorName}</span>
                        </div>
                        <div className="tag">
                            <span className="tag_title">标签:</span>
                            <ul>
                                {
                                    this.state.topInfo && this.state.topInfo.topTags.map((item, index) => <li key={index}>{item}</li> )
                                }
                            </ul>
                        </div>
                        <div className="desc">
                            <div className="desc_title">简介:</div>
                            <span className="desc_content">{this.state.topInfo.topDesc}</span>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.detail}
                        renderItem={(item,index) => (
                        <List.Item>
                            <div className="list">
                                <div className="list_index">{index+1}</div>
                                <div className="list_item">
                                    <img src={item.al.picUrl} alt=""/>
                                </div>
                                <div className="list_title">{item.name}</div>
                                <div className="list_singer">
                                    {
                                        item && item.ar.map((singer, index) => <span key={index}>{singer.name}</span>)
                                    }
                                </div>
                                <div className="list_cell">{item.al.name}</div>
                                <div className="list_time">{item.dt}</div>
                            </div>
                        </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}
 
export default PlayListDetail;