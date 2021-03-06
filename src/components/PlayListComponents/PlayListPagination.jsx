import React, { Component } from 'react';
import '../../css/components/PlayListPagination.less'
import { createFromIconfontCN } from '@ant-design/icons';
import { Pagination } from 'antd';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1848476_bqe6zojrx9k.js',
  });

class PlayListPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderPersonalizeData() {
        const personalizeData = this.props.personalizeData
        if(personalizeData === 'undefined') {
            return (
                <li className="item">
                    <img src="https://s1.ax1x.com/2020/03/31/GMbWkR.gif" alt=""/>
                </li>
            )
        } else {
            return  personalizeData && personalizeData.map((item) => {
                return  <li key={item.userId} className="item">
                            <div className="itemImg" onClick={() => {this.props.goPlayListDetail(item.id)}}>
                                <div className="desc-wrap">
                                    <span className="desc">播放量：{item.playCount}</span>
                                </div>
                                <img src={item.coverImgUrl} alt={item.alg}/>
                                <IconFont className="iconfont" type="icon-bofang" />
                            </div>
                            <p className="itemName">{item.name}</p>
                        </li>
            })
        }
    }

    change(page) {
        this.props.changePage(page)
    }

    changePageSize(current, size) {
        this.props.changeSize(size)
    }

    render() { 
        return ( 
            <div className="container">
                <div className="disrecommend">
                    <ul>
                        {this.renderPersonalizeData()}
                    </ul>
                </div>

                <div className="pagination">
                    <Pagination 
                        pageSize={this.props.limit} 
                        current={this.props.defaultPage}
                        onChange={this.change.bind(this)}
                        onShowSizeChange={this.changePageSize.bind(this)}  
                        defaultCurrent={1} 
                        pageSizeOptions={['5', '10', '15']}
                        total={this.props.total}   
                    />
                </div>
            </div>    
        );
    }
}
 
export default PlayListPagination;