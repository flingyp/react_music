import React, { Component } from 'react';
import '../../css/components/PlayListTab.less'

class PlayListTab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentActivedIndex: 0
        }
        console.log(props)
    }
    render() { 
        return (  
            <div className="tab">
                <div className="tab_title">
                    <ul>
                        {
                            this.props.tabData && this.props.tabData.map((item, index) => {
                                return (
                                    <li 
                                        onClick={() => {this.changeTabActived(index)}} 
                                        key={index} 
                                        className={`title_item ${index===this.state.currentActivedIndex?'actived': null}`}  >
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }

    changeTabActived(index) {
        this.setState({
            currentActivedIndex: index
        })
        console.log(this.props.tabData[index])
    }
}
 
export default PlayListTab;