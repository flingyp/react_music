import React, { Component } from 'react';
import '../css/pages/PlayListDetail.less'
import { List, Avatar } from 'antd';

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
];



class PlayListDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="detail">
                <div className="top">
                    <div className="img_wrap">
                        <img src="http://p1.music.126.net/tJ4oSmNVPZS3jZpsUYnOzA==/109951165032380705.jpg" alt=""/>
                    </div>

                    <div className="info_wrap">
                        <p className="title">[华语速爆新歌] 最新华语音乐推荐</p>
                        <div className="author">
                            <img src="http://p1.music.126.net/LzIA_BYxqJj9mrj1NfCWDQ==/109951164873881480.jpg" alt=""/>
                            <span className="author_name">网易云音乐</span>
                        </div>
                        <div className="tag">
                            <span className="tag_title">标签:</span>
                            <ul>
                                <li>华语</li>
                            </ul>
                        </div>
                        <div className="desc">
                            <div className="desc_title">简介:</div>
                            <span className="desc_content">网易云音乐是8亿人都在使用的音网易云音乐是8亿人都在使用的音乐平台网易云音乐是8亿人都在使用的音乐平台乐平台，致力于帮助音乐爱好者发现音乐惊喜，帮助音乐人实现梦想。 
2019年8月31日起，将不再提供实时在线人工服务。您可以优先通过自助方式解决问题，如仍需求助，可在相关页面留下您的问题，后续会有人工为您解答，辛苦您耐心等待，给您带来的不便敬请谅解。 如果仍然不能解决您的问题，可以邮件我们： 用户：ncm5990@163.com 音乐人：yyr599@163.com</span>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item,index) => (
                        <List.Item>
                            <div className="list">
                                <div className="list_index">{index+1}</div>
                                <div className="list_item">
                                    <img src="http://p2.music.126.net/Po3E-A9OsBq2sLZBbobr2A==/109951165016320232.jpg" alt=""/>
                                </div>
                                <div className="list_title">节奏病</div>
                                <div className="list_singer">刘雨昕XIN</div>
                                <div className="list_cell">Hello (录音室版)</div>
                                <div className="list_time">04:15</div>
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