import {Route, Link} from 'react-router-dom'
import React, { Component } from 'react';
import '../css/pages/Home.less'
import {Layout, Menu, Button} from 'antd'
import { createFromIconfontCN, CaretLeftOutlined, CaretRightOutlined  } from '@ant-design/icons';
import HomeHeader from '../components/HomeComponents/HomeHeader'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


import Discovery from './Discovery'
import PlayList from './PlayList'
import NewMusic from './NewMusic'
import Mv from './Mv'
import Audio from './Audio'
import PlayListDetail from './PlayListDetail'
import MvDetail from './MvDetail'
// import Search from 'antd/lib/transfer/search';
import Search from './Search'

const { Header, Content, Sider, Footer } = Layout;




const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1848476_bqe6zojrx9k.js'
});


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelectedKeys: '1'
        }
        if(props.location.pathname != '/discovery' && props.location.pathname != '/playlist' && props.location.pathname != '/newmusic' && props.location.pathname != '/mv') { //eslint-disable-line
            props.history.push('/discovery') 
        }
    }
    componentWillMount() {
        if(this.props.location.pathname === '/discovery') {
            console.log('discovery')
            this.setState({
                defaultSelectedKeys: '1'
            })
        }else if(this.props.location.pathname === '/playlist') {
            console.log('playlist')
            this.setState({
                defaultSelectedKeys: '2'
            })
        }else if(this.props.location.pathname === '/newmusic') {
            console.log('newmusic')
            this.setState({
                defaultSelectedKeys: '3'
            })
        }else if(this.props.location.pathname=== '/mv'){
            console.log('mv')
            this.setState({
                defaultSelectedKeys: '4'
            })
        }
    }

    render() { 
        return ( 
            <div>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                        >
                        <div className="buttons">
                            <Button className="button_item" size="large"  shape="circle" icon={<CaretLeftOutlined />} />
                            <Button className="button_item" size="large"  shape="circle" icon={<CaretRightOutlined />} />
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.defaultSelectedKeys]}>
                            <Menu.Item className="Menu-Item" key="1">
                                <IconFont type="icon-kefu" className="iconf" />
                                <Link to="/discovery" className="menus">发现音乐</Link>
                            </Menu.Item>
                            <Menu.Item className="Menu-Item" key="2">
                                <IconFont type="icon-yinlegedan-" className="iconf" />
                                <Link to="/playlist" className="menus">推荐歌单</Link>
                            </Menu.Item>
                            <Menu.Item className="Menu-Item" key="3">
                                <IconFont type="icon-xinpin" className="iconf" />
                                <Link to="/newmusic" className="menus">最新音乐</Link>
                            </Menu.Item>
                            <Menu.Item className="Menu-Item" key="4">
                                <IconFont type="icon-shexiangji" className="iconf" />
                                <Link to="/mv" className="menus">发现MV</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <Header className="site-layout-background Header" style={{ padding: 0 }}>
                            <HomeHeader goSearchResult={this.goSearchResult.bind(this)}></HomeHeader>
                        </Header>
                        <Content key={this.props.location.key} style={{ margin: '1.5rem 1rem 0', overflow: 'initial' }}>
                            <Route exact path="/discovery" component={Discovery}></Route>
                            <Route exact path="/playlist" component={PlayList}></Route>
                            <Route path="/playlist/:id" component={PlayListDetail}></Route>
                            <Route exact path="/newmusic" component={NewMusic}></Route>
                            <Route exact path="/mv" component={Mv}></Route>
                            <Route path="/mv/:id" component={MvDetail}></Route>
                            <Route path="/search" component={Search}></Route>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    <Audio src={this.props.url} />
                </Footer>
            </div>    
        );
    }

    goSearchResult(value) {
        // 跳转到搜索页面 并且 携带参数 value 值
        this.props.history.push({
            pathname: "/search",
            value
        }) 
    }
}

const mapStateToProps = (state) => {
    return {
        url: state.getCurrentSongUrl
    }
}

Home = connect(mapStateToProps)(Home)
 
export default withRouter(Home);