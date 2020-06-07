import React, { Component } from 'react';
import '../../css/components/NewMusicTab.less'

class NewMusicTab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentActivedIndex: 0
        }
    }

    changeCurrentActivedIndex(type, index) {
        this.setState({
            currentActivedIndex: index
        })
        this.props.typeTopSong(type)
    }



    render() { 
        return (  
            <div className="tab_bar">
                {
                    this.props.tabBar && this.props.tabBar.map((item, index) => {
                        return <span 
                                    key={item.type} 
                                    onClick={this.changeCurrentActivedIndex.bind(this, item.type, index)}
                                    className={`bar_item ${index===this.state.currentActivedIndex?'actived': null}`}>
                                    {item.name}
                                </span>
                    })
                }
            </div>
        );
    }
}
 
export default NewMusicTab;