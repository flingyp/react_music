import React, { Component } from 'react';
import PlayListTop from '../components/PlayListComponents/PlayListTop'
import PlayListTab from '../components/PlayListComponents/PlayListTab'
import PlayListPagination from '../components/PlayListComponents/PlayListPagination'

import {boutiquePlaylist, topPlaylist} from '../util/request'

import { message } from 'antd';

class PlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            tabData: ['全部', '欧美', '华语', '流行', '说唱', '摇滚', '民谣', '电子', '轻音乐', '影视原声', 'ACG'],
            personalizeData: [],
            boutiquePlaylistData: {
                coverImgUrl: '',
                description: '',
                name: ''
            },
            total: 0,
            cat: '全部',
            limit: 5,
            defaultPage: 1,  // 当前页数,
        }
    }

    componentWillMount() {
        // 页面 挂载前 去获取一次 精品歌单数据
        const cat = this.state.cat
        const limit = this.state.limit
        const page = this.state.defaultPage
        this.changeBoutiquePlaylistData(cat)
        this.changePersonalizeData(cat, limit, page)
    }

    goPlayListDetail(id) {
        // 跳转到 歌单详情页面
        this.props.history.push(`/playlist/${id}`) 
        // console.log(id)
    }

    // 获取 top 部分 精品歌单数据
    async changeBoutiquePlaylistData(cat) {
        const res = await boutiquePlaylist(cat)
        const boutiquePlaylistData = this.state.boutiquePlaylistData
        boutiquePlaylistData.coverImgUrl = res.data.playlists[0].coverImgUrl
        boutiquePlaylistData.description = res.data.playlists[0].description
        boutiquePlaylistData.name = res.data.playlists[0].name
        this.setState({
            boutiquePlaylistData
        })
    }

    // 获取 分页部分 歌单数据
    async changePersonalizeData(cat=this.state.cat, limit = this.state.limit, defaultPage=this.state.defaultPage ) {
        this.setState({
            personalizeData: []
        })
        let offset = (defaultPage -1)*(limit) 
        const res = await topPlaylist(cat, limit, offset)
        this.setState({
            cat,
            personalizeData: res.data.playlists,
            total: res.data.total
        })
    }

    // 点击 分页按钮 时 获取歌单数据
    changePage(page) {
        this.setState({
            defaultPage: page
        })
        const cat = this.state.cat
        const limit = this.state.limit
        this.changePersonalizeData(cat, limit, page)
    }

    changeSize(limit) {
        this.setState({
            limit
        })
        const cat = this.state.cat
        const page = this.state.page
        this.changePersonalizeData(cat, limit, page)
        message.success('歌单数量改变成功!');
    }

    render() { 
        return ( 
            <div>
                {/* 顶部-精品歌单部分 */}
                <PlayListTop boutiquePlaylistData={this.state.boutiquePlaylistData} />
                {/* 中间-tab导航部分 */}
                <PlayListTab tabData={this.state.tabData} changeBoutiquePlaylistData={this.changeBoutiquePlaylistData.bind(this)} changePersonalizeData={this.changePersonalizeData.bind(this)} />
                {/* 底部-分页部分 */}
                <PlayListPagination 
                    limit={this.state.limit} 
                    total={this.state.total} 
                    personalizeData={this.state.personalizeData} 
                    goPlayListDetail={this.goPlayListDetail.bind(this)} 
                    changePage={this.changePage.bind(this)} 
                    changeSize={this.changeSize.bind(this)}
                    defaultPage={this.state.defaultPage}
                />
            </div>
        );
    }
}
 
export default PlayList;