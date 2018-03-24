import { connect } from 'react-redux'
import { dummyProductSearch } from '../../actions'
import BarCodeScan from '../ui/pages/BarCodeScan'

const mapStateToProps = (state, props) => ({
    selectedProduct: state.searchedProduct,
    navigation: props.navigation
})

const mapDispatchToProps = dispatch => ({
    searchProduct(code){
        dispatch(
            dummyProductSearch(code)
        )
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(BarCodeScan)