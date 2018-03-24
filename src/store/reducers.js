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

export const products = (state=[], action) => {
    
    return state    
    
}

export const searchedProduct = (state=null, action) => {
    switch(action.type){
        case C.FETCH_PRODUCT_DETAILS:            
            return action.payload
        case C.CLEAR_FETCH_PRODUCT_DETAILS:
            return null                
        default:
            return state
    }
}

export const errors = (state=[], action) => {
    return state
}

const singleReducer = combineReducers({
    loginResult,
    errors,
    products,
    searchedProduct
})

export default singleReducer