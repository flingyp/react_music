import React, { Component } from 'react';
import '../../css/components/NewMusicMusics.less'
import Loading from '../../pages/Loading'

class NewMusicMusics extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="muscis">
                <div className="musics_title">
                    <div></div>
                    <div></div>
                    <div>音乐标题</div>
                    <div>歌手</div>
                    <div>专辑</div>
                    <div>时长</div>
                </div>

                <div className="musics_items">
                    {
                        this.props.topSongData && this.props.topSongData.map((item,index) => {
                            return (
                                <div key={index} className="musics_item">
                                    <div className="item_index">{index+1}</div>
                                    <div className="item_img">
                                        {
                                            this.props.topSongData ? <img onDoubleClick={() => {this.props.goPlayMusic(item.id)}} src={item.album.blurPicUrl} alt=""/> : <Loading />
                                        }
                                    </div>
                                    <div className="item_title">{item.name}</div>
                                    <div className="item_singer">{item.artists[0].name}</div>
                                    <div className="item_album">{item.album.name}</div>
                                    <div className="item_time">{item.duration}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
 
export default NewMusicMusics;