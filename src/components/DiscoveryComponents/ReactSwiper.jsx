import React, { Component } from 'react';
import '../../css/components/ReactSwiper.less';
import { Carousel } from 'antd';




class ReactSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log(props)
    }
    render() { 
        console.log(this.props)
        return ( 
            <div>   
                <Carousel autoplay effect="fade">
                    {
                        this.props.swiperData && this.props.swiperData.map(function(item, index) {
                            return <div key={index} className="swiper_item">
                                        <img src={item.imageUrl} alt=""/>
                                    </div>           
                        })
                    }
                </Carousel>
            </div>
        );
    }
}
 
export default ReactSwiper;




