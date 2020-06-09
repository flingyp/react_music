import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {Input} from 'antd'

const { Search } = Input;


class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="Home-Header">
                <div>
                    <Search
                        style={{borderRadius: '.625rem'}}
                        placeholder="搜索歌曲、歌手或MV"
                        size="large"
                        onSearch={this.searchResult.bind(this)}
                    />
                </div>
                <div>
                    <h1 onClick={this.goHomePage.bind(this)}>React-Music</h1>
                </div>
                <div>等待开发</div>    
            </div>
        );
    }
    /**
     * 点击 React-OneMusic 回到首页面
     */
    goHomePage() {
        this.props.history.push('/discovery');
    }

    /**
     * 搜索框 回车时执行的方法
     */
    searchResult(value) {
        this.props.goSearchResult(value)
    }
}
 
export default withRouter(HomeHeader);