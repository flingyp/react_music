import React, { Component } from 'react';
import PlayListTop from '../components/PlayListComponents/PlayListTop'
import PlayListTab from '../components/PlayListComponents/PlayListTab'
import PlayListPagination from '../components/PlayListComponents/PlayListPagination'

class PlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            tabData: ['全部', '欧美', '华语', '流行', '说唱', '摇滚', '民谣', '电子', '轻音乐', '影视原声', 'ACG'],
            personalizeData: [
                {
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145687
                },
                {
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145688
                },
                {
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145689
                },
                {
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145680
                },{
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145681
                },
                {
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145682
                },
                {
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145683
                },
                {
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145684
                },
                {
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145685
                },{
                    copywriter: '7777',
                    picUrl: 'http://p2.music.126.net/oiEap5eiS_1jhdIcx1DcgQ==/109951164886489719.jpg',
                    name: '夏入夜，渐微凉，微风掠花塘。月上树枝头，琴瑟悠长。林满叶，浮清幽，花随溪水流。蝉鸣竹深处，心却无忧。',
                    id: 145686
                }
            ]
        }
    }

    goPlayListDetail(id) {
        // 跳转到 歌单详情页面
        // this.props.history.push(`/playlist/${id}`) 
        console.log(id)
    }

    render() { 
        return ( 
            <div>
                {/* 顶部-精品歌单部分 */}
                <PlayListTop />
                {/* 中间-tab导航部分 */}
                <PlayListTab tabData={this.state.tabData} />
                {/* 底部-分页部分 */}
                <PlayListPagination personalizeData={this.state.personalizeData} goPlayListDetail={this.goPlayListDetail.bind(this)} />
            </div>
        );
    }
}
 
export default PlayList;