import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {Input} from 'antd'
import {SearchOutlined} from '@ant-design/icons';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="Home-Header">
                <div>
                    <Input
                        style={{borderRadius: '.625rem'}}
                        placeholder="搜索歌曲、歌手或MV"
                        prefix={<SearchOutlined />}
                        size="large"
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
        this.props.history.push('/');
    }
}
 
export default withRouter(HomeHeader);