import React, { Component } from 'react';
import '../../css/components/DiscoveryPlayList.less'
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1848476_bqe6zojrx9k.js',
  });

class DiscoveryPlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log(props)
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
            return  personalizeData && personalizeData.map(function(item) {
                return  <li key={item.id} className="item">
                            <div className="itemImg">
                                <div className="desc-wrap">
                                    <span className="desc">{item.copywriter}</span>
                                </div>
                                <img src={item.picUrl} alt={item.alg}/>
                                <IconFont className="iconfont" type="icon-bofang" />
                            </div>
                            <p className="itemName">{item.name}</p>
                        </li>
            })
        }
    }

    render() { 
        const personalizeData = this.props.personalizeData
        console.log(personalizeData)
 
        return ( 
            <div className="container">
                {
                    this.props.DiscoveryPlayList ? <div className="title">{this.props.DiscoveryPlayList}</div> : <div className="title"></div>
                }
                <div className="disrecommend">
                    <ul>
                        {this.renderPersonalizeData()}
                    </ul>
                </div>
            </div>    
        );
    }
}
 
export default DiscoveryPlayList;