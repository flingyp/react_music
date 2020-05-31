import {SET_SWIPER_DATA, SET_PERSONALIZE_DATA, SET_NEWSONG_DATA, SET_NEWMV_DATA} from './actionTypes'

const defaultState = {}  // 用于设置 state 初始默认值

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type === SET_SWIPER_DATA) {
        newState[action.type] = action.DisSwiper
        return newState
    }

    if(action.type === SET_PERSONALIZE_DATA) {
        newState[action.type] =action.DisPersonalize
        return newState
    }

    if(action.type === SET_NEWSONG_DATA) {
        newState[action.type] = action.DisNewsong
        return newState
    }

    if(action.type === SET_NEWMV_DATA) {
        newState[action.type] = action.DisNewMv
        return newState
    }


    return state
}