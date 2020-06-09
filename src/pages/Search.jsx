import React, { Component } from 'react';
import SearchPagination from '../components/SearchComponents/SearchPagination'
import SearchHeader from '../components/SearchComponents/SearchHeader'
import {search} from '../util/request'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            value: '',
            count: 0,
            searchSongResult: [],
            searchPlayListResult: [],
            searchMvsResult: [],
            type: 1, // 类型 (1 歌曲 1000 歌单  1006 MV)
            limit: 12,
            currentPage: 1,
        }
    }

    async componentWillMount() {
        await this.setState({
            value: this.props.location.value
        })
        const res = await this.getSearchResult()
        await this.setState({
            count: res.data.result.songCount,
            searchSongResult: res.data.result.songs
        })
    }

    async getSearchResult() {
        const value = this.state.value
        const type = this.state.type
        const limit = this.state.limit
        const offset = (this.state.currentPage-1)*limit
        const res = await search(value, type, limit, offset)
        return res
    }

    async changeType(type) {
        await this.setState({
            type: type
        })
        const res = await this.getSearchResult()
        if(type===1) {
            await this.setState({
                count: res.data.result.songCount,
                searchSongResult: res.data.result.songs
            })
        } else if(type===1000) {
            await this.setState({
                count: res.data.result.playlistCount,
                searchPlayListResult: res.data.result.playlists
            })
        } else if(type===1004) {
            await this.setState({
                count: res.data.result.mvCount,
                searchMvsResult: res.data.result.mvs
            })
        }
    }

    async changePage(page) {
        await this.setState({
            currentPage: page,
        })
        const res = await this.getSearchResult()
        if(this.state.type===1) {
            await this.setState({
                count: res.data.result.songCount,
                searchSongResult: res.data.result.songs
            })
        } else if(this.state.type===1000) {
            await this.setState({
                count: res.data.result.playlistCount,
                searchPlayListResult: res.data.result.playlists
            })
        } else if(this.state.type===1004) {
            await this.setState({
                count: res.data.result.mvCount,
                searchMvsResult: res.data.result.mvs
            })
        }
    }

    async changeLimit(limit) {
        await this.setState({
            limit: limit
        })
        const res = await this.getSearchResult()
        if(this.state.type===1) {
            await this.setState({
                count: res.data.result.songCount,
                searchSongResult: res.data.result.songs
            })
        } else if(this.state.type===1000) {
            await this.setState({
                count: res.data.result.playlistCount,
                searchPlayListResult: res.data.result.playlists
            })
        } else if(this.state.type===1004) {
            await this.setState({
                count: res.data.result.mvCount,
                searchMvsResult: res.data.result.mvs
            })
        }
    }


    render() { 
        return (  
            <div className="search">
                <SearchHeader 
                    value={this.state.value}
                    count={this.state.count}
                />

                <SearchPagination 
                    count={this.state.count}
                    currentPage={this.state.currentPage}
                    limit={this.state.limit}
                    searchSongResult={this.state.searchSongResult}
                    searchPlayListResult={this.state.searchPlayListResult}
                    searchMvsResult={this.state.searchMvsResult}
                    changeType={this.changeType.bind(this)}
                    changePage={this.changePage.bind(this)}
                    changeLimit={this.changeLimit.bind(this)}
                />
            </div>
        );
    }
}
 
export default Search;