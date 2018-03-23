import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {
    let result
    console.groupCollapsed(`dispatching ${action.type}`)
    result = next(action)
    console.log(`result => `)
    console.groupEnd()
    return result
}

export default (initialState = {}) => {
    console.log(JSON.stringify(initialState))
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}