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
                </div>
            </div>
        );
    }
}
 
export default DiscoveryNemMusic;