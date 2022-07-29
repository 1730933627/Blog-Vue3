import {createStore} from 'vuex'
import heardStatus from './heardStatus'
import videoInfo from './videoInfo'
import windowSize from './windowSize'

export default createStore({
    modules:{
        heardStatus,
        videoInfo,
        windowSize
    }
})
