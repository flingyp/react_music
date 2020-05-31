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
<<<<<<< HEAD
                    this.props.DiscoveryNemMusic? <div className="title">最新音九</div> : <div className="title"></div>
                }
                <div className="newmusic">

                    {
                        this.props.newSongData && this.props.newSongData.map(function(item) {
                            return (
                                <div key={item.id} className="item">
                                    <div className="img_wrap">
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
=======
                    this.props.DiscoveryNemMusic? <div className="title">最新音乐</div> : <div className="title"></div>
                }
                <div className="newmusic">
                    <div className="item">
                        <div className="img_wrap">
                            <img src="http://p1.music.126.net/nK0soVBcg2AqHgsYFS61HQ==/109951165017400818.jpg" alt=""/>
                        </div>
                        <div className="song_wrap">
                            <div className="song_name">想和你一起</div>
                            <div className="singer">李友廷</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img_wrap">
                            <img src="http://p1.music.126.net/nK0soVBcg2AqHgsYFS61HQ==/109951165017400818.jpg" alt=""/>
                        </div>
                        <div className="song_wrap">
                            <div className="song_name">想和你一起</div>
                            <div className="singer">李友廷</div>
                        </div>
                    </div>
>>>>>>> 56a1628fa97378e3460aa4a9e203c7315a6aa5f4
                </div>
            </div>
        );
    }
}
 
export default DiscoveryNemMusic;