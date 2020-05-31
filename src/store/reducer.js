<<<<<<< HEAD
import {SET_SWIPER_DATA, SET_PERSONALIZE_DATA, SET_NEWSONG_DATA, SET_NEWMV_DATA} from './actionTypes'
=======
import {SET_SWIPER_DATA, SET_PERSONALIZE_DATA} from './actionTypes'
>>>>>>> 56a1628fa97378e3460aa4a9e203c7315a6aa5f4

const defaultState = {}  // 用于设置 state 初始默认值

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type === SET_SWIPER_DATA) {
<<<<<<< HEAD
        newState[action.type] = action.DisSwiper
=======
        newState[action.type] = action.swiper
>>>>>>> 56a1628fa97378e3460aa4a9e203c7315a6aa5f4
        return newState
    }

    if(action.type === SET_PERSONALIZE_DATA) {
<<<<<<< HEAD
        newState[action.type] =action.DisPersonalize
        return newState
    }

    if(action.type === SET_NEWSONG_DATA) {
        newState[action.type] = action.DisNewsong
        return newState
    }

    if(action.type === SET_NEWMV_DATA) {
        newState[action.type] = action.DisNewMv
=======
        newState[action.type] =action.personalize
>>>>>>> 56a1628fa97378e3460aa4a9e203c7315a6aa5f4
        return newState
    }


    return state
}