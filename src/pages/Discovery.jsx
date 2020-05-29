import React, { Component } from 'react';
import ReactSwiper from '../components/DiscoveryComponents/ReactSwiper' 
import store from '../store/index';
import {swiperData} from '../util/request'

import { connect } from 'react-redux'
import {SET_SWIPER_DATA} from '../store/actionTypes'



class Discovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async componentWillMount() {
        // 请求轮播图数据
        const data = await this.props.getSwiperData()
        this.setState({
            swiperData: data
        })
    }

    render() { 
        return ( 
            <div>
                <ReactSwiper swiperData={this.state.swiperData}></ReactSwiper>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        /**
         * 请求轮播图数据
         */
        getSwiperData: async () => {
           const res = await swiperData()
           dispatch({
               type: SET_SWIPER_DATA,
               swiper: res.data.banners
           })
           return res.data.banners
        }
    }
}

Discovery = connect(mapStateToProps,mapDispatchToProps)(Discovery)
 
export default Discovery;