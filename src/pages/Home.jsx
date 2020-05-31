import {Route, Link} from 'react-router-dom'
import React, { Component } from 'react';
import '../css/pages/Home.less'
import {Layout, Menu, Button} from 'antd'
import { createFromIconfontCN, CaretLeftOutlined, CaretRightOutlined  } from '@ant-design/icons';
import HomeHeader from '../components/HomeComponents/HomeHeader'
import { withRouter } from 'react-router-dom'


import Discovery from './Discovery'
import PlayList from './PlayList'
import NewMusic from './NewMusic'
import Mv from './Mv'
import Audio from './Audio'

const { Header, Content, Sider, Footer } = Layout;




const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1848476_bqe6zojrx9k.js'
});


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        // 重定向到 /discovery 页面
        this.props.history.push('/discovery'); 
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
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
                            <HomeHeader></HomeHeader>
                        </Header>
                        <Content style={{ margin: '1.5rem 1rem 0', overflow: 'initial' }}>
                            <Route exact path="/discovery" component={Discovery}></Route>
                            <Route exact path="/playlist" component={PlayList}></Route>
                            <Route exact path="/newmusic" component={NewMusic}></Route>
                            <Route exact path="/mv" component={Mv}></Route>
                        </Content>
                    </Layout>
                </Layout>
                <Audio src="http://m8.music.126.net/20200531165722/b80a07bf67e862ab7c8de84b0d05d74d/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2686128901/8dea/86fa/31d5/1282a0e349767a79a89346eb419ba1bb.mp3" />
            </div>    
        );
    }
}
 
export default withRouter(Home);