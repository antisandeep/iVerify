import { connect } from 'react-redux'
import { dummyProductSearch } from '../../actions'
import BarCodeScan from '../ui/pages/BarCodeScan'

const mapStateToProps = ({products, searchedProduct}, props) => {
    
    const product = products.find( product => product.GUID__c === searchedProduct)
    return {
        selectedProduct: product,
        navigation: props.navigation
    }
}

const mapDispatchToProps = dispatch => ({
    searchProduct(code){
        dispatch(
            dummyProductSearch(code)
        )
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(BarCodeScan)