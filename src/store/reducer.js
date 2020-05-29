import {SET_SWIPER_DATA} from './actionTypes'

const defaultState = {}  // 用于设置 state 初始默认值

export default (state = defaultState, action) => {
    if(action.type === SET_SWIPER_DATA) {
        let newState = JSON.parse(JSON.stringify(state))
        newState[action.type] = action.swiper
        return newState
    }


    return state
}