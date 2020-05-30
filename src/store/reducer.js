import {SET_SWIPER_DATA, SET_PERSONALIZE_DATA} from './actionTypes'

const defaultState = {}  // 用于设置 state 初始默认值

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type === SET_SWIPER_DATA) {
        newState[action.type] = action.swiper
        return newState
    }

    if(action.type === SET_PERSONALIZE_DATA) {
        newState[action.type] =action.personalize
        return newState
    }


    return state
}