import { combineReducers } from 'redux'
import C from "../constants"

export const username = (state="test@test.com", action) => {
    if(action.type = C.SET_USERNAME){
        return action.payload
    }
    else{
        return state
    }
}


export const password = (state="changeme", action) => {
    if(action.type = C.SET_PASSWORD){
        return action.payload
    }
    else{
        return state
    }
}

const singleReducer = combineReducers({
    username,
    password
})

export default singleReducer