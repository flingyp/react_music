import React, { Component } from 'react';
import '../../css/components/NewMvTab.less';

class NewMvTab extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            secitionTabs: 0,
            typeTabs: 0,
            orderTabs: 0,
        }
    }

    isActivedSecition(index) {
        this.setState({
            secitionTabs: index
        })
        const secition = this.props.secitionData[index]
        this.props.changeSecition(secition)
    }

    isActivedType(index) {
        this.setState({
            typeTabs: index
        })
        const type = this.props.typeData[index]
        this.props.changeType(type)
    }

    isActivedOrder(index) {
        this.setState({
            orderTabs: index
        })
        const order = this.props.orderData[index]
        this.props.changeOrder(order)
    }

    render() { 
        return ( 
            <div className="filter_bar">
                {/* <!-- 地区 --> */}
                <div className="secition_bar">
                    <span className="secition">地区：</span>
                    <ul className="secition_tabs">
                        {
                            this.props.secitionData && this.props.secitionData.map((item, index) => {
                                return <li 
                                            key={index} 
                                            className={`item ${index===this.state.secitionTabs?"actived": null}`}
                                            onClick={this.isActivedSecition.bind(this, index)}
                                        >
                                                {item}
                                        </li>
                            })
                        }
                    </ul>
                </div>
                {/* <!-- 类型 --> */}
                <div className="type_bar">
                    <span className="type">类型：</span>
                    <ul className="type_tabs">
                        {
                            this.props.typeData && this.props.typeData.map((item, index) => {
                                return <li 
                                            key={index} 
                                            className={`item ${index===this.state.typeTabs?"actived": null}`}
                                            onClick={this.isActivedType.bind(this, index)}
                                        >
                                                {item}
                                        </li>
                            })
                        }
                    </ul>
                </div>
                {/* <!-- 排序 --> */}
                <div className="order_bar">
                    <span className="order">排序：</span>
                    <ul className="order_tabs">
                        {
                            this.props.orderData && this.props.orderData.map((item, index) => {
                                return <li 
                                            key={index} 
                                            className={`item ${index===this.state.orderTabs?"actived": null}`}
                                            onClick={this.isActivedOrder.bind(this, index)}
                                        >
                                            {item}
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default NewMvTab;