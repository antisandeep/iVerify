import C from './constants'


// get present state through getState and use dispatch to invoke method later
export const dummyLogin = (username, password, callback = f => f) => (dispatch, getState) => {
    if (!getState().loginResult.fetching) {
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
            if (username !== 'test@test.com' && password !== 'changeme')
                callback(true)
            else
                callback(false, 'Invalid Username or Password')

        }, 1500)

    }
}

export const dummyProductSearch = (productCode) =>      
    ({
        type: C.FETCH_PRODUCT_DETAILS,
        payload: productCode
    })
