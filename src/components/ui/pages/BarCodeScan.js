import React, { Component } from 'react'
import { Modal, TouchableHighlight } from 'react-native'

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Left,
    Right,
    Body,
    Thumbnail
} from "native-base"
import { RNCamera } from 'react-native-camera'

import Images from '@assets/images'
import styles from '../common/CustomStyleSheet'
import ProductSummary from './ProductSummary'

export default class BarCodeScan extends Component {

    constructor(props) {
        super(props)
        this._onpressScan = this._onpressScan.bind(this)
        this._onBarCodeRead = this._onBarCodeRead.bind(this)
        this._navigateToReward = this._navigateToReward.bind(this)
        this._navigateToProductInfo = this._navigateToProductInfo.bind(this)
    }

    state = {
        modalVisible: false,
        CodeScanned: false
    }

    setModalVisible(visible) {
        this.setState({ 
            modalVisible: visible,
            CodeScanned: false
        })
    }
    _onpressScan() {
        this.setModalVisible(true)
    }
    _onBarCodeRead = function (e) {

        this.setModalVisible(false)
        this.props.searchProduct(e.data)
        this.setState({ CodeScanned: true })
    }
    _navigateToReward() {
        const { navigate } = this.props.navigation
        navigate('Reward')
    }
    _navigateToProductInfo() {
        const { navigate } = this.props.navigation
        const {selectedProduct} = this.props
        navigate('ProductInfo',selectedProduct)
    }
    render() {
        var {selectedProduct} = this.props
        return (
            <Content padder>
                <TouchableHighlight onPress={this._onpressScan}>
                    <Card style={styles.ScanCodeTopMargin}>
                        <CardItem>
                            <Left>
                                <Icon active name="barcode" style={{ color: "#DD5044" }} />
                                <Text>Start Scan</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                </TouchableHighlight>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setModalVisible(false) }}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref
                        }}
                        style={styles.ScanPreview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                        onBarCodeRead={this._onBarCodeRead}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                    />
                </Modal>
                {this.state.CodeScanned &&
                  <ProductSummary 
                        product={selectedProduct}
                        navigateToReward={this._navigateToReward}
                        navigateToProductInfo={this._navigateToProductInfo}
                    />  
                }
            </Content>
        )
    }
}