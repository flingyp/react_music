import React, { Component } from 'react';
import '../../css/components/PlayListTop.less'
class PlayListTop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="top_card">
                <div className="icon_warp">
                    <img className="icon" src={this.props.boutiquePlaylistData.coverImgUrl} alt="精品歌单"/>
                </div>
                <div className="content">
                    <div className="tag">精品歌单</div>
                    <div className="title">{this.props.boutiquePlaylistData.name}</div>
                    <div className="info">{this.props.boutiquePlaylistData.description}</div>
                </div>
                <img src={this.props.boutiquePlaylistData.coverImgUrl} alt="" className="bg"/>
                {/* 背景遮罩层 */}
                <div className="bg_mask"></div> 
            </div>    
        );
    }
}
 
export default PlayListTop;