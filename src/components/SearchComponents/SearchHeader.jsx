import React, { Component } from 'react';
import '../../css/components/SearchHeader.less'

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="header">
                <div className="searchTitle">{this.props.value}</div>
                <div className="searchCount">查询到{this.props.count}条结果</div>
            </div>
        );
    }
}
 
export default SearchHeader;