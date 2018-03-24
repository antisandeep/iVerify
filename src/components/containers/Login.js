import { connect } from 'react-redux'
import Login from '../ui/pages/Login'
import { dummyLogin } from '../../actions'

const mapStateToProps = state => ({
    loading: state.loginResult.fetching
})

const mapDispatchToProps = dispatch => ({
    doLogin(username, password, callback){
        dispatch(
            dummyLogin(username, password, callback)
        )
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)