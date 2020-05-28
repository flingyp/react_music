import React, { Component } from 'react';
import '../css/pages/Home.less'
import {Layout, Menu, Button, Input} from 'antd'
import { createFromIconfontCN, CaretLeftOutlined, CaretRightOutlined, SearchOutlined  } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;


const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1848476_3va0w96agqg.js'
});


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                <span className="menus">发现音乐</span>
                            </Menu.Item>
                            <Menu.Item className="Menu-Item" key="2">
                                <IconFont type="icon-yinlegedan-" className="iconf" />
                                <span className="menus">推荐歌单</span>
                            </Menu.Item>
                            <Menu.Item className="Menu-Item" key="3">
                                <IconFont type="icon-xinpin" className="iconf" />
                                <span className="menus">最新音乐</span>
                            </Menu.Item>
                            <Menu.Item className="Menu-Item" key="4">
                                <IconFont type="icon-shexiangji" className="iconf" />
                                <span className="menus">发现MV</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <Header className="site-layout-background Header" style={{ padding: 0 }}>
                            <div>
                                <Input
                                    style={{borderRadius: '.625rem'}}
                                    placeholder="搜索歌曲、歌手或MV"
                                    prefix={<SearchOutlined />}
                                    size="large"
                                />
                            </div>
                            <div>
                                <h1>React-Music</h1>
                            </div>
                            <div>等待开发</div>
                        </Header>
                        <Content style={{ margin: '1.5rem 1rem 0', overflow: 'initial' }}>
                            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                                    内容部分
                            </div>
                            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                                    内容部分
                            </div>
                            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                                    内容部分
                            </div>
                        </Content>
                    </Layout>
                </Layout>,
            </div>    
        );
    }
}
 
export default Home;