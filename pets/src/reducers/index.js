import { combineReducers } from 'redux'
import pet from './petReducers'

const rootReducer = combineReducers({
    pet
})

export default rootReducer