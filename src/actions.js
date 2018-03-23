import C from './constants'


// get present state through getState and use dispatch to invoke method later
export const doLogin = (username, password) => (dispatch, getState) => {
    if(!getState().loginResult.fetching){
        dispatch({
            type: C.LOGIN_USER,            
        })
        setTimeout(() => {
            dispatch({
                type: C.LOGIN_USER_RESULT,
                payload: {
                    sessionToken: "abcdef12345"
                }
            })

        }, 1500)

    }
}