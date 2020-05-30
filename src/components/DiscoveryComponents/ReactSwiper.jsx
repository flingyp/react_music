import React, { Component } from 'react';
import '../../css/components/ReactSwiper.less';
import { Carousel } from 'antd';


function Loading() {
    return <div className="swiper_item">
                <img src="https://s1.ax1x.com/2020/03/31/GMbWkR.gif" alt=""/>
            </div>
}

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




