import * as Constants from '../constants'

const INIT_STATE = {
    petData: { maleCat: [], femaleCat: [] },
    petError: null
}

export default (state = INIT_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case Constants.PET_DATA:
            return Object.assign({}, state, {
                petData: action.data
            })
        case Constants.PET_ERROR:
            return Object.assign({}, state, {
                petError: action.data
            })
        default:
            return state;
    }
}