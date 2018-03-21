import C from './constants'

// get present state through getState and use dispatch to invoke method later
export const doLogin = (username, password) => (dispatch, getState) => {
    if(!getState().loginInformationRemote.fetching){
        dispatch({
            type: C.LOGIN_USER
        })
        setTimeout(() => {
            dispatch({
                type: C.CANCEL_LOGIN_USER
            })
        }, 1500)

    }
}