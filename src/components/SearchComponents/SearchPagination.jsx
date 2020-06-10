import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {GET_CURRENT_SONG_URL} from '../../store/actionTypes';
import {songUrl} from '../../util/request'
import SearchMusics from './SearchMusics';
import SearchPlayList from './SearchPlayList'
import SearchMv from './SearchMv'
import '../../css/components/SearchPagination.less'
import { Tabs,Pagination,message  } from 'antd';
const { TabPane } = Tabs;


class SearchPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    callback(key) {
        if(key==='1') {
            const type = 1
            this.props.changeType(type)
        }
        else if(key === '2') {
            const type = 1000
            this.props.changeType(type)
        }else if(key==='3') {
            const type = 1004
            this.props.changeType(type)
        }
    }

    page(page) {
        this.props.changePage(page)
    }

    limit(current, size) {
        this.props.changeLimit(size)
    }

    async goPlayMusic(id) {
        const res = await songUrl(id)
        const url = res.data.data[0].url
        if(!url) {
            message.warning('抱歉，歌曲没有音源');
        }
        this.props.songUrl(url)
    }

    render() { 
        return (  
            <div className="searchpagination">
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                    <TabPane tab="歌曲" key="1">
                        <SearchMusics goPlayMusic={this.goPlayMusic.bind(this)} topSongData={this.props.searchSongResult} />
                    </TabPane>
                    <TabPane tab="歌单" key="2">
                        <SearchPlayList goPlayListDetail={this.goPlayListDetail.bind(this)} personalizeData={this.props.searchPlayListResult} />
                    </TabPane>
                    <TabPane tab="MV" key="3">
                        <SearchMv goPlayMv={this.goPlayMv.bind(this)} newMvData={this.props.searchMvsResult} />
                    </TabPane>
                </Tabs>
                <Pagination 
                    className="pagination" 
                    defaultCurrent={1} 
                    total={this.props.count} 
                    current={this.props.currentPage}
                    pageSize={this.props.limit}
                    pageSizeOptions={['8', '12']}
                    onChange={this.page.bind(this)}
                    onShowSizeChange={this.limit.bind(this)}
                />
            </div>
        );
    }

    goPlayListDetail(id) {
        // 跳转到 歌单详情页面
        this.props.history.push(`/playlist/${id}`) 
    }

    goPlayMv(id) {
        // 跳转到 MV 播放页面
        this.props.history.push(`/mv/${id}`)
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
 

SearchPagination = connect(mapStateToProps,mapDispatchToProps)(SearchPagination)

export default withRouter(SearchPagination);