import React, { Component } from 'react';
import '../css/pages/Audio.less';

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="audio_box">
                <audio className="audio" autoPlay controls loop src={this.props.src}></audio>
            </div>
        );
    }
}
 
export default Audio;