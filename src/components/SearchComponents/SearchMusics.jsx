import React, { Component } from 'react';
import '../../css/components/SearchMusics.less'



class SearchMusics extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="muscis">
                <div className="musics_title">
                    <div></div>
                    <div>音乐标题</div>
                    <div>歌手</div>
                    <div>专辑</div>
                </div>

                <div className="musics_items">
                    {
                        this.props.topSongData && this.props.topSongData.map((item,index) => {
                            return (
                                <div key={index} className="musics_item">
                                    <div className="item_index">{index+1}</div>
                                    <div 
                                        className="item_title"
                                        onDoubleClick={() => this.props.goPlayMusic(item.id)}
                                    >{item.name}</div>
                                    <div className="item_singer">{item.artists[0].name}</div>
                                    <div className="item_album">{item.album.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
 
export default SearchMusics;