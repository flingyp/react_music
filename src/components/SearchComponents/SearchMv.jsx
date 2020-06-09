import React, { Component } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import '../../css/components/NewMvPagination.less';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1848476_bqe6zojrx9k.js',
});


class SearchMv extends Component {
    constructor(props) {
        super(props)
        this.state={
           
        }
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
            </div>
        );
    }
}
 
export default SearchMv;