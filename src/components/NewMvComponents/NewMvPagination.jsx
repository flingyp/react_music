import React, { Component } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Pagination } from 'antd';
import '../../css/components/NewMvPagination.less';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1848476_bqe6zojrx9k.js',
});


class NewMvPagination extends Component {
    constructor(props) {
        super(props)
        this.state={
            currentPage: 1
        }
    }

    change(page, pageSize) {
        this.setState({
            currentPage: page
        })
        this.props.changeCurrentPage(page)
    }

    changePageSize(current, size) {
        this.props.changePageSize(size)
    }


    render() { 
        return ( 
            <div className="container">
                <div className="newmv">
                    {
                        this.props.newMvData && this.props.newMvData.map((item) => {
                            return (
                                <div key={item.id} className="item">
                                    <div className="img_wrap" onClick={() => {this.props.goPlayMv(item.id)}}>
                                        <img src={item.cover} alt=""/>
                                        <div className="num_wrap">
                                            <IconFont className="iconfont" type="icon-bofang" />
                                            <div className="num">{item.playCount}</div>
                                        </div>
                                    </div>
                                    <div className="info_wrap">
                                        <div className="name">{item.name}</div>
                                        <div className="singer">{item.artistName}</div>
                                    </div>
                                </div>
                            )
                        })
                    }  
                </div>
                <div className="pagination">
                    <Pagination 
                        pageSize={this.props.limit} 
                        current={this.state.currentPage}
                        onChange={this.change.bind(this)}
                        onShowSizeChange={this.changePageSize.bind(this)}  
                        defaultCurrent={1} 
                        pageSizeOptions={['4','8', '12', '16']}
                        total={this.props.total}   
                    />
                </div>
            </div>
        );
    }
}
 
export default NewMvPagination;