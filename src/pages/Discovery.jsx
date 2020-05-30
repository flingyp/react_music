import React, { Component } from 'react';
import ReactSwiper from '../components/DiscoveryComponents/ReactSwiper' 
import DiscoveryPlayList from '../components/DiscoveryComponents/DiscoveryPlayList'
import store from '../store/index';
import {swiperData, personalizedData} from '../util/request'

import { connect } from 'react-redux'
import {SET_SWIPER_DATA, SET_PERSONALIZE_DATA} from '../store/actionTypes'



class Discovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async componentWillMount() {
        // 请求轮播图数据
        const swiperData = await this.props.getSwiperData()
        // 请求推荐歌单数据
        const personalizeData = await this.props.getPersonalizedData()
        this.setState({
            swiperData,
            personalizeData
        })
    }

    render() { 
        return ( 
            <div>
                <ReactSwiper swiperData={this.state.swiperData}></ReactSwiper>
                <DiscoveryPlayList personalizeData={this.state.personalizeData} />
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
        },

        /**
         * 请求推荐歌单数据
         */
        getPersonalizedData: async () => {
            const limit = 10;
            const res = await personalizedData(limit)
            dispatch({
                type: SET_PERSONALIZE_DATA,
                personalize: res.data.result
            })
            return res.data.result
        }
    }
}

Discovery = connect(mapStateToProps,mapDispatchToProps)(Discovery)
 
export default Discovery;