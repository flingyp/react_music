import React, { Component } from 'react';
import '../../css/components/ReactSwiper.less';
import { Carousel } from 'antd';
import Loading from '../../pages/Loading'


function Swiper(props) {
    return (
        <Carousel autoplay effect="fade">
            {
                props.swiperData && props.swiperData.map(function(item, index) {
                    return <div key={index} className="swiper_item">
                                <img src={item.imageUrl} alt=""/>
                            </div>           
                })
            }
        </Carousel>
    )
}



class ReactSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const swiperData = this.props.swiperData
        return (
            <div>   
                { 
                    swiperData ?  <Swiper swiperData={swiperData} /> : <Loading />
                }
            </div>
        );
    }
}

 
export default ReactSwiper;




