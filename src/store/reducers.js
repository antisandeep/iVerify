import { combineReducers } from 'redux'
import C from "../constants"

export const loginResult = (state={}, action) => {
    if(action.type == C.LOGIN_USER){
        return {
            ...state,
            fetching: true
        }
    }
    else if(action.type == C.LOGIN_USER_RESULT){
        return {            
            fetching: false,
            sessionToken: action.payload
        }
    }
    else{
        return state
    }
}

const singleReducer = combineReducers({
    loginResult
})

export default singleReducer