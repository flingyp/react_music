import React, { Component } from 'react';
import { Player } from 'video-react';
import '../css/pages/MvDetail.less'
import {mvUrl, mvDetail, artistDesc,simiMv} from '../util/request'



class MvDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allMvInfo: {
                url: '', // mv 播放地址
                artistName: '', // 歌手名字
                desc: '',  // mv 描述
                name: '',   // mv name
                publishTime: '', // 公布时间
                playCount: 0,    // 播放次数
                avatarImg: ''  // 歌手头像
            },

            simiMvInfo: []
        }
    }

    async componentWillMount() {
        const id = this.props.match.params.id
        const url = await this.getMvUrl(id)
        const mvdetail = await this.getMvDetail(id)
        // 歌手id
        const artistId = mvdetail.artistId
        const avatarImg = await this.getArtisDesc(artistId)
        const mvs = await this.getSimiMv(id)
        this.getAllMvInfo(mvdetail, url, avatarImg, mvs)
    }
    
    // 对 数据进行处理
    getAllMvInfo(mvdetail , url, avatarImg, mvs) {
        let allMvInfo = this.state.allMvInfo
        allMvInfo.url = url
        allMvInfo.artistName = mvdetail.artistName
        allMvInfo.desc = mvdetail.desc
        allMvInfo.name = mvdetail.name
        allMvInfo.publishTime = mvdetail.publishTime
        allMvInfo.playCount = mvdetail.playCount
        allMvInfo.avatarImg = avatarImg
        this.setState({
            allMvInfo,
            simiMvInfo: mvs
        })
    }

    async getMvUrl(id) {
        const res = await mvUrl(id)
        return res.data.data.url
    }

    async getMvDetail(id) {
        const res = await mvDetail(id)
        return res.data.data
    }

    async getArtisDesc(id) {
        const res = await artistDesc(id)
        return res.data.artist.picUrl
    }

    async getSimiMv(id) {
        const res = await simiMv(id)
        return res.data.mvs
    }

    goPlayMv(id) {
        // 跳转到 MV 播放页面
        this.props.history.push(`/mv/${id}`);
    }

    render() { 
        return ( 
            <div className="mv">
                {/* mv 详情部分 */}
                <div className="mv_wrap">
                    <h3 className="title">MV详情</h3>
                    {/* 播放器 */}
                    <div className="video">
                        <Player class="video_player" src={this.state.allMvInfo.url}></Player>
                    </div>
                    {/* 相关信息 */}
                    <div className="info">
                        {/* 歌手信息 */}
                        <div className="info_singer">
                            <div className="avatar_wrap">
                                <img src={this.state.allMvInfo.avatarImg} alt=""/>
                            </div>
                            <span>{this.state.allMvInfo.artistName}</span>
                        </div>
                        {/* mv信息 */}
                        <div className="info_mv">
                            <h2 className="title">{this.state.allMvInfo.name}</h2>
                            <span className="date">发布：{this.state.allMvInfo.publishTime}</span>
                            <span className="number">播放：{this.state.allMvInfo.playCount}次</span>
                            <div className="desc">{this.state.allMvInfo.desc}</div>
                        </div>
                    </div>
                </div>


                {/* mv 推荐部分 */}
                <div className="mv_recommend">
                    <h3 className="title">相关推荐</h3>
                    <div className="mvs">
                        <div className="items">
                            {
                                this.state.simiMvInfo && this.state.simiMvInfo.map((item) => {
                                    return (
                                        <div key={item.id} className="item">
                                            <div className="img_wrap" onClick={this.goPlayMv.bind(this, item.id)}>
                                                <img src={item.cover} alt="" />
                                            </div>
                                            <div className="info_wrap">
                                                <div className="name">{item.name}</div>
                                                <div className="singer">
                                                    {item.artists[0].name}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default MvDetail;