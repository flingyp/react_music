import React, { Component } from 'react';
import '../../css/components/DiscoveryNemMusic.less'

class DiscoveryNemMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div className="container">
                {
                    this.props.DiscoveryNemMusic? <div className="title">{this.props.DiscoveryNemMusic}</div> : <div className="title"></div>
                }
                <div className="newmusic">

                    {
                        this.props.newSongData && this.props.newSongData.map((item) => {
                            return (
                                <div key={item.id} className="item">
                                    <div className="img_wrap" onDoubleClick={() => {this.props.goPlayMusic(item.id)}}>
                                        <img src={item.picUrl} alt=""/>
                                    </div>
                                    <div className="song_wrap">
                                        <div className="song_name">{item.name}</div>
                                        <div className="singer">
                                            {
                                                item.song.artists.map(function(singer) {
                                                    return (
                                                        <span key={singer.id}>{singer.name}&nbsp;</span>
                                                    ) 
                                                })
                                            }
                                        </div>
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
 
export default DiscoveryNemMusic;